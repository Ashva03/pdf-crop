"use client";

import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import * as PDFLib from "pdf-lib";
import Loading from "@/components/Loading";
import PDFUpload from "@/components/PDFUpload";
import {
  flipkartLabelCropDimensions,
  defaultCropDimension,
} from "@/config/staticData";

// Initialize PDF.js worker only on client side
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2f4f4;
  padding-top: 64px;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const PDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const PDFViewer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const UploadButton = styled(Button)`
  background: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #2563eb;
  }
`;

const PageInfo = styled.div`
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

const CropInfo = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
`;

const CropInfoTitle = styled.h3`
  color: #4f46e5;
  margin-bottom: 0.5rem;
`;

const CropInfoText = styled.p`
  color: #4b5563;
  margin: 0.25rem 0;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3), 0 0 15px rgba(16, 185, 129, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.5), 0 0 30px rgba(16, 185, 129, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3), 0 0 15px rgba(16, 185, 129, 0.2);
  }
`;

const ActionButton = styled(Button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  font-weight: 600;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  animation: ${pulseAnimation} 2s infinite, ${glowAnimation} 3s infinite;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px);
    animation: none;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  background: #fee2e2;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const SuccessMessage = styled.div`
  color: #10b981;
  background: #d1fae5;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export default function FlipkartLabel() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onFileSelect = (file: File) => {
    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit");
      return;
    }

    // Validate filename contains "flipkart"
    const fileName = file.name.toLowerCase();
    if (!fileName.includes("flipkart")) {
      setError(
        'This page is for Flipkart labels only. Please upload a file with "flipkart" in the filename.'
      );
      return;
    }

    setFile(file);
    setCurrentPage(1);
    setError(null);
    setSuccess(null);
  };

  const handleUploadNewFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      if (selectedFile.type !== "application/pdf") {
        setError("Please upload a PDF file");
        return;
      }

      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB limit");
        return;
      }

      // Validate filename contains "flipkart"
      const fileName = selectedFile.name.toLowerCase();
      if (!fileName.includes("flipkart")) {
        setError(
          'This page is for Flipkart labels only. Please upload a file with "flipkart" in the filename.'
        );
        return;
      }

      setFile(selectedFile);
      setCurrentPage(1);
      setError(null);
      setSuccess(null);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading document:", error);
    setError("Failed to load PDF. Please try another file.");
  };

  const handlePageChange = (delta: number) => {
    setCurrentPage((prevPage) =>
      Math.max(1, Math.min(prevPage + delta, numPages))
    );
  };

  const handleCropAllPages = async () => {
    if (!file) {
      setError("Please upload a PDF file first");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
      const newPdfDoc = await PDFLib.PDFDocument.create();

      // Process each page
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const pageIndex = pageNum - 1;
        const page = pdfDoc.getPages()[pageIndex];
        const { width, height } = page.getSize();

        // Get crop dimensions for current page
        const cropBox =
          flipkartLabelCropDimensions[pageNum] || defaultCropDimension;

        // Copy and crop the page
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
        const newPage = newPdfDoc.addPage([cropBox.width, cropBox.height]);

        // Create a form XObject from the copied page
        const formXObject = await newPdfDoc.embedPage(copiedPage);

        // Draw the cropped portion
        newPage.drawPage(formXObject, {
          x: -cropBox.x,
          y: -cropBox.y,
          width: width,
          height: height,
        });
      }

      // Save and download the cropped PDF
      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      // Format the output filename
      const originalFileName = file.name.replace(".pdf", "");
      a.download = `${originalFileName}_pdfCropAshvainfo.pdf`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);

      setSuccess(`Successfully cropped all ${numPages} pages!`);
    } catch (error) {
      console.error("Error cropping all pages:", error);
      setError("An error occurred while cropping the PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get current crop dimensions
  const currentCropBox =
    flipkartLabelCropDimensions[currentPage] || defaultCropDimension;

  return (
    <Container>
      <MainContent>
        <PDFContainer>
          <PDFViewer>
            {file ? (
              mounted && (
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                >
                  <Page
                    pageNumber={currentPage}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              )
            ) : (
              <PDFUpload onFileSelect={onFileSelect} />
            )}
          </PDFViewer>
          <Controls>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            {file && (
              <>
                <PageInfo>
                  Page {currentPage} of {numPages}
                </PageInfo>
                <CropInfo>
                  <CropInfoTitle>Auto-Crop Settings</CropInfoTitle>
                  <CropInfoText>
                    Position: X: {currentCropBox.x}, Y: {currentCropBox.y}
                  </CropInfoText>
                  <CropInfoText>
                    Size: Width: {currentCropBox.width}, Height:{" "}
                    {currentCropBox.height}
                  </CropInfoText>
                  <CropInfoText>
                    Note: These settings apply to all pages
                  </CropInfoText>
                </CropInfo>
                <ButtonGroup>
                  <Button
                    onClick={() => handlePageChange(-1)}
                    disabled={currentPage <= 1}
                  >
                    Previous Page
                  </Button>
                  <Button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage >= numPages}
                  >
                    Next Page
                  </Button>
                </ButtonGroup>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  accept="application/pdf"
                  style={{ display: "none" }}
                />
                <UploadButton onClick={handleUploadNewFile}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Upload New File
                </UploadButton>
                <ActionButton onClick={handleCropAllPages} disabled={loading}>
                  {loading ? "Processing..." : "Crop Auto All Pages"}
                </ActionButton>
              </>
            )}
          </Controls>
        </PDFContainer>
      </MainContent>
      {loading && <Loading />}
    </Container>
  );
}
