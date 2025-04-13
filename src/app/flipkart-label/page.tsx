"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import * as PDFLib from "pdf-lib";
import Loading from "@/components/Loading";
import PDFUpload from "@/components/PDFUpload";
import { flipkartLabelCropDimensions, defaultCropDimension } from "@/config/staticData";

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

const ActionButton = styled(Button)`
  background: #10b981;
  font-weight: 600;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  
  &:hover {
    background: #059669;
  }
`;

export default function FlipkartLabel() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onFileSelect = (file: File) => {
    setFile(file);
    setCurrentPage(1);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading document:", error);
  };

  const handlePageChange = (delta: number) => {
    setCurrentPage(prevPage => Math.max(1, Math.min(prevPage + delta, numPages)));
  };

  const handleCropCurrentPage = async () => {
    if (!file) return;
    await cropPage(currentPage);
  };

  const handleCropAllPages = async () => {
    if (!file) return;
    
    setLoading(true);
    
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
        const cropBox = flipkartLabelCropDimensions[pageNum] || defaultCropDimension;
        
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
      a.href = url;
      a.download = `flipkart_label_all_pages.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error cropping all pages:", error);
    } finally {
      setLoading(false);
    }
  };

  const cropPage = async (pageNum: number) => {
    if (!file) return;

    setLoading(true);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
      const page = pdfDoc.getPages()[pageNum - 1];
      const { width, height } = page.getSize();

      // Get crop dimensions for current page
      const cropBox = flipkartLabelCropDimensions[pageNum] || defaultCropDimension;

      // Create a new PDF document
      const newPdfDoc = await PDFLib.PDFDocument.create();
      const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNum - 1]);
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

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `flipkart_label_page_${pageNum}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error cropping document:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get current crop dimensions
  const currentCropBox = flipkartLabelCropDimensions[currentPage] || defaultCropDimension;

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
            {file && (
              <>
                <PageInfo>
                  Page {currentPage} of {numPages}
                </PageInfo>
                <CropInfo>
                  <CropInfoTitle>Auto-Crop Settings</CropInfoTitle>
                  <CropInfoText>Position: X: {currentCropBox.x}, Y: {currentCropBox.y}</CropInfoText>
                  <CropInfoText>Size: Width: {currentCropBox.width}, Height: {currentCropBox.height}</CropInfoText>
                  <CropInfoText>Note: These settings apply to all pages</CropInfoText>
                </CropInfo>
                <ButtonGroup>
                  <Button onClick={() => handlePageChange(-1)} disabled={currentPage <= 1}>
                    Previous Page
                  </Button>
                  <Button onClick={() => handlePageChange(1)} disabled={currentPage >= numPages}>
                    Next Page
                  </Button>
                </ButtonGroup>
                <Button onClick={handleCropCurrentPage} disabled={loading}>
                  {loading ? "Processing..." : "Crop Current Page"}
                </Button>
                <ActionButton onClick={handleCropAllPages} disabled={loading}>
                  {loading ? "Processing..." : "Crop All Pages"}
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