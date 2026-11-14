"use client";

import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import * as PDFLib from "pdf-lib";
import Loading from "@/components/Loading";
import PDFUpload from "@/components/PDFUpload";
import { CropDimension, PlatformConfig } from "@/config/staticData";

// Initialize PDF.js worker only on client side
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2f4f4;
  padding-top: 10px;
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
  margin-top: 0rem;
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

const PrintCroppedButton = styled(Button)`
  background: #29b44b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #41c33d;
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

const downloadAnimation = keyframes`
  0% {
    transform: translateY(-2px);
    opacity: 0;
  }
  50% {
    transform: translateY(2px);
    opacity: 1;
  }
  100% {
    transform: translateY(-2px);
    opacity: 0;
  }
`;

const DownloadIcon = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  svg {
    width: 20px;
    height: 20px;
    animation: ${downloadAnimation} 1.5s infinite;
    stroke: rgb(245, 245, 245); /* Red color for the icon */
  }
`;

const ActionButtonContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1000;
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled(Button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PrintButton = styled(Button)`
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

  &:hover {
    background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
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

const PresetButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  justify-content: center;
`;

const PresetPill = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? "#4f46e5" : "#f1f5f9"};
  color: ${props => props.$active ? "white" : "#334155"};
  border: 1px solid ${props => props.$active ? "#4338ca" : "#cbd5e1"};
  border-radius: 9999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? "#4338ca" : "#e2e8f0"};
  }
`;

const DimensionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;
  margin: 0.75rem 0;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DimensionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;

  label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 0.4rem 0.6rem;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: white;
    color: #0f172a;

    &:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    }
  }
`;

const RotationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
  flex-wrap: wrap;
  justify-content: center;
`;

const RotateBtn = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? "#10b981" : "#f1f5f9"};
  color: ${props => props.$active ? "white" : "#334155"};
  border: 1px solid ${props => props.$active ? "#059669" : "#cbd5e1"};
  border-radius: 6px;
  padding: 0.3rem 0.65rem;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? "#059669" : "#e2e8f0"};
  }
`;

interface PDFCropperProps {
  platformConfig: PlatformConfig;
  cropDimensions: Record<number, CropDimension>;
  onNumPagesChange?: (numPages: number) => void;
}

export default function PDFCropper({
  platformConfig,
  cropDimensions,
  onNumPagesChange,
}: PDFCropperProps) {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [customCrop, setCustomCrop] = useState<CropDimension>(platformConfig.defaultCropDimension);
  const [rotation, setRotation] = useState<number>(0);
  const [pageSize, setPageSize] = useState<{ width: number; height: number }>({ width: 595, height: 842 });
  const [renderScale, setRenderScale] = useState<number>(1);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    setCustomCrop(platformConfig.defaultCropDimension);
  }, [platformConfig]);

  const onFileSelect = (file: File) => {
    if (file.type !== "application/pdf") {
      setError(platformConfig.errorMessages.invalidFileType);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError(platformConfig.errorMessages.fileSizeExceeded);
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
      if (selectedFile.type !== "application/pdf") {
        setError(platformConfig.errorMessages.invalidFileType);
        return;
      }

      if (selectedFile.size > 10 * 1024 * 1024) {
        setError(platformConfig.errorMessages.fileSizeExceeded);
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
    onNumPagesChange?.(numPages);
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
      setError(platformConfig.errorMessages.uploadFirst);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const bufferCopy = arrayBuffer.slice(0);
      const pdfDoc = await PDFLib.PDFDocument.load(bufferCopy);
      const newPdfDoc = await PDFLib.PDFDocument.create();
      let processedPages = 0;
      let skippedPages = 0;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const pageIndex = pageNum - 1;
        const page = pdfDoc.getPages()[pageIndex];
        const { width, height } = page.getSize();

        const cropBox =
          customCrop || cropDimensions[pageNum] || platformConfig.defaultCropDimension;

        const cropArea = cropBox.width * cropBox.height;
        const pageArea = width * height;
        const contentRatio = cropArea / pageArea;

        const isSnapdeal = platformConfig.name === "Snapdeal";
        const isOddPageNumber = (pageIndex + 1) % 2 !== 0; // Check for odd page number (even index)

        // Skip pages with insufficient content regardless of platform
        if (contentRatio < 0.15) {
          skippedPages++;
          continue;
        }

        // For Snapdeal, skip adding even pages to the final doc, but count them as skipped
        if (isSnapdeal && !isOddPageNumber) {
          skippedPages++;
          continue; // Move to the next page without adding this one
        }

        // If it's not Snapdeal, or if it is Snapdeal and an odd page, proceed to add it
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
        const newPage = newPdfDoc.addPage([cropBox.width, cropBox.height]);

        const formXObject = await newPdfDoc.embedPage(copiedPage);

        newPage.drawPage(formXObject, {
          x: -cropBox.x,
          y: -cropBox.y,
          width: width,
          height: height,
        });

        if (rotation !== 0) {
          newPage.setRotation(PDFLib.degrees(rotation));
        }

        processedPages++; // Only increment if the page was actually added
      }

      if (processedPages === 0) {
        setError(
          "No valid pages found with sufficient content area to process."
        );
        return;
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const originalFileName = file.name.replace(".pdf", "");
      a.download = `${originalFileName}_pdfCropAshvainfo.pdf`;
      a.href = url;
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 60000);

      setSuccess(
        `Successfully processed ${processedPages} pages! ${
          skippedPages > 0
            ? `(${skippedPages} pages skipped due to insufficient content)`
            : ""
        }`
      );
    } catch (error) {
      console.error("Error cropping all pages:", error);
      setError(platformConfig.errorMessages.processingError);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPDF = async () => {
    if (!file) {
      setError("Please upload a PDF file before printing.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const bufferCopy = arrayBuffer.slice(0);
      const pdfDoc = await PDFLib.PDFDocument.load(bufferCopy);
      const newPdfDoc = await PDFLib.PDFDocument.create();

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const pageIndex = pageNum - 1;
        const page = pdfDoc.getPages()[pageIndex];
        const { width, height } = page.getSize();

        const cropBox =
          customCrop || cropDimensions[pageNum] || platformConfig.defaultCropDimension;

        const isSnapdeal = platformConfig.name === "Snapdeal";
        const isOddPageNumber = (pageIndex + 1) % 2 !== 0; // Check for odd page number (even index)

        // For Snapdeal, skip processing even pages
        if (isSnapdeal && !isOddPageNumber) {
          continue; // Move to the next page without processing this one
        }

        // If it's not Snapdeal, or if it is Snapdeal and an odd page, proceed
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
        const newPage = newPdfDoc.addPage([cropBox.width, cropBox.height]);

        const formXObject = await newPdfDoc.embedPage(copiedPage);

        newPage.drawPage(formXObject, {
          x: -cropBox.x,
          y: -cropBox.y,
          width: width,
          height: height,
        });

        if (rotation !== 0) {
          newPage.setRotation(PDFLib.degrees(rotation));
        }
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const printWindow = window.open(url, "_blank");
      if (printWindow) {
        printWindow.focus();
        printWindow.print();
      }

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 60000);
    } catch (error) {
      console.error("Error printing cropped PDF:", error);
      setError("Failed to print cropped PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentCropBox =
    customCrop || cropDimensions[currentPage] || platformConfig.defaultCropDimension;

  return (
    <Container>
      <MainContent>

        <PDFContainer>
          <PDFViewer>
            {file ? (
              mounted && (
                <div style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
                  <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                  >
                    <Page
                      pageNumber={currentPage}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      onLoadSuccess={(page) => {
                        const origW = page.originalWidth || 595;
                        const origH = page.originalHeight || 842;
                        setPageSize({ width: origW, height: origH });
                        if (page.width) {
                          setRenderScale(page.width / origW);
                        }
                      }}
                    />
                  </Document>

                  {/* Visual Crop Box Overlay with Spotlight Mask */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${Math.max(0, currentCropBox.x * renderScale)}px`,
                      top: `${Math.max(0, (pageSize.height - currentCropBox.y - currentCropBox.height) * renderScale)}px`,
                      width: `${Math.max(20, currentCropBox.width * renderScale)}px`,
                      height: `${Math.max(20, currentCropBox.height * renderScale)}px`,
                      border: "2px solid #ef4444",
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      pointerEvents: "none",
                      boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.35)",
                      borderRadius: "4px",
                      zIndex: 10,
                      transition: "all 0.1s ease",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "-24px",
                        left: "0",
                        backgroundColor: "#ef4444",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                        padding: "2px 6px",
                        borderRadius: "3px",
                        whiteSpace: "nowrap",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      Crop Box: {currentCropBox.width} × {currentCropBox.height} pt
                    </span>
                  </div>
                </div>
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
                  <CropInfoTitle>Auto-Crop & Print Calibration</CropInfoTitle>
                  <CropInfoText>
                    Active Crop: ({currentCropBox.width} × {currentCropBox.height} pt) at X: {currentCropBox.x}, Y: {currentCropBox.y}
                  </CropInfoText>

                  {/* Platform Quick Presets */}
                  <PresetButtonGroup>
                    {platformConfig.name === "Meesho" && (
                      <>
                        <PresetPill
                          $active={currentCropBox.y === 410 && rotation === 0}
                          onClick={() => {
                            setCustomCrop({ x: 10, y: 410, width: 575, height: 425 });
                            setRotation(0);
                          }}
                        >
                          Meesho 4×6 (Default)
                        </PresetPill>
                        <PresetPill
                          $active={rotation === 90}
                          onClick={() => {
                            setCustomCrop({ x: 10, y: 410, width: 575, height: 425 });
                            setRotation(90);
                          }}
                        >
                          Rotate 90° (Thermal Roll)
                        </PresetPill>
                        <PresetPill
                          $active={currentCropBox.width === 555}
                          onClick={() => {
                            setCustomCrop({ x: 20, y: 425, width: 555, height: 405 });
                            setRotation(0);
                          }}
                        >
                          Compact Box
                        </PresetPill>
                      </>
                    )}

                    {platformConfig.name === "Flipkart" && (
                      <>
                        <PresetPill
                          $active={currentCropBox.x === 185}
                          onClick={() => {
                            setCustomCrop({ x: 185, y: 456, width: 225, height: 365 });
                            setRotation(0);
                          }}
                        >
                          Ekart A6 Standard
                        </PresetPill>
                        <PresetPill
                          $active={currentCropBox.width === 595}
                          onClick={() => {
                            setCustomCrop({ x: 0, y: 0, width: 595, height: 842 });
                            setRotation(0);
                          }}
                        >
                          Full Page
                        </PresetPill>
                      </>
                    )}

                    {platformConfig.name === "Snapdeal" && (
                      <PresetPill
                        $active={currentCropBox.x === 2}
                        onClick={() => {
                          setCustomCrop({ x: 2, y: 122, width: 270, height: 295 });
                          setRotation(0);
                        }}
                      >
                        Snapdeal A6 Standard
                      </PresetPill>
                    )}

                    <PresetPill
                      onClick={() => {
                        setCustomCrop(platformConfig.defaultCropDimension);
                        setRotation(0);
                      }}
                    >
                      ↺ Reset
                    </PresetPill>
                  </PresetButtonGroup>

                  {/* Rotation Selector */}
                  <RotationRow>
                    <span style={{ fontWeight: 600 }}>Print Orientation:</span>
                    <RotateBtn $active={rotation === 0} onClick={() => setRotation(0)}>
                      0° Portrait
                    </RotateBtn>
                    <RotateBtn $active={rotation === 90} onClick={() => setRotation(90)}>
                      90° Clockwise
                    </RotateBtn>
                    <RotateBtn $active={rotation === 180} onClick={() => setRotation(180)}>
                      180°
                    </RotateBtn>
                    <RotateBtn $active={rotation === 270} onClick={() => setRotation(270)}>
                      270°
                    </RotateBtn>
                  </RotationRow>

                  {/* Manual Coordinate Inputs */}
                  <DimensionsGrid>
                    <DimensionInputWrapper>
                      <label>X (Left)</label>
                      <input
                        type="number"
                        value={currentCropBox.x}
                        onChange={(e) =>
                          setCustomCrop({ ...currentCropBox, x: parseInt(e.target.value) || 0 })
                        }
                      />
                    </DimensionInputWrapper>
                    <DimensionInputWrapper>
                      <label>Y (Bottom)</label>
                      <input
                        type="number"
                        value={currentCropBox.y}
                        onChange={(e) =>
                          setCustomCrop({ ...currentCropBox, y: parseInt(e.target.value) || 0 })
                        }
                      />
                    </DimensionInputWrapper>
                    <DimensionInputWrapper>
                      <label>Width</label>
                      <input
                        type="number"
                        value={currentCropBox.width}
                        onChange={(e) =>
                          setCustomCrop({ ...currentCropBox, width: parseInt(e.target.value) || 20 })
                        }
                      />
                    </DimensionInputWrapper>
                    <DimensionInputWrapper>
                      <label>Height</label>
                      <input
                        type="number"
                        value={currentCropBox.height}
                        onChange={(e) =>
                          setCustomCrop({ ...currentCropBox, height: parseInt(e.target.value) || 20 })
                        }
                      />
                    </DimensionInputWrapper>
                  </DimensionsGrid>
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
                <PrintCroppedButton onClick={handlePrintPDF}>
                  Print Cropped PDF
                </PrintCroppedButton>
                <UploadButton onClick={handleCropAllPages}>
                  Download Auto Cropped PDF
                </UploadButton>
              </>
            )}
          </Controls>
        </PDFContainer>
      </MainContent>
      {loading && <Loading />}
      {file && (
        <ActionButtonContainer>
          <PrintButton onClick={handlePrintPDF}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <path d="M6 9v6h12V9" />
              <path d="M6 15v4h12v-4" />
              <path d="M8 3h8v4H8z" />
            </svg>
            Print PDF
          </PrintButton>
          <ActionButton onClick={handleCropAllPages} disabled={loading}>
            {loading ? (
              "Processing..."
            ) : (
              <>
                <DownloadIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </DownloadIcon>
                Download PDF
              </>
            )}
          </ActionButton>
        </ActionButtonContainer>
      )}
    </Container>
  );
}
