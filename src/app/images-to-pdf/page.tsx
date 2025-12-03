/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import {
  Upload,
  X,
  FileText,
  Loader2,
  Download,
  Printer,
  RotateCcw,
} from "lucide-react";
import styled from "styled-components";

interface ImageFile extends File {
  preview: string;
}

// Styled Components
const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/pattern%3E%3Cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1.5' fill='white' fill-opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E");
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const CardContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

const DropZone = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f9fafb;
  margin-bottom: 1.5rem;

  &:hover {
    border-color: #4f46e5;
    background: #f5f5ff;
  }

  .upload-icon {
    color: #4f46e5;
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  p.main-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4f46e5;
    margin-bottom: 0.5rem;
  }

  p.sub-text {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const ImagePreview = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1/1;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .remove-button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    padding: 0.25rem;
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    z-index: 10;
  }

  &:hover .remove-button {
    opacity: 1;
  }

  .image-name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
    padding: 0.5rem;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .image-name {
    opacity: 1;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border: none;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #4f46e5;
  border: 1px solid #4f46e5;

  &:hover:not(:disabled) {
    background: #f5f5ff;
  }
`;

const TertiaryButton = styled(Button)`
  background: white;
  color: #6b7280;
  border: 1px solid #d1d5db;

  &:hover:not(:disabled) {
    background: #f9fafb;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorAlert = styled.div`
  background: #fee2e2;
  color: #b91c1c;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ef4444;
  margin-bottom: 1rem;

  p:first-child {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
`;

const PDFPreviewContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  height: 70vh;
  margin-bottom: 2rem;

  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Images to PDF Converter",
  description:
    "Convert multiple images to a single PDF file online. Supports JPG, PNG, WebP, and more.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert multiple images to a single PDF",
    "Supports JPG, PNG, WebP, and more",
    "Drag and drop interface",
    "No file size limits",
    "Secure processing (files never leave your browser)",
    "100% free to use",
  ],
});

export default function ImagesToPdfPage() {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleDrop = useCallback((acceptedFiles: FileList | null) => {
    if (!acceptedFiles) return;
    setError(null); // Clear previous errors
    const newFiles = Array.from(acceptedFiles)
      .filter((file) => file.type.startsWith("image/")) // Ensure only images are processed
      .map(
        (file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }) as ImageFile
      );

    // Revoke previous previews before setting new ones
    setFiles((prevFiles) => {
      prevFiles.forEach((pf) => URL.revokeObjectURL(pf.preview));
      return [...prevFiles, ...newFiles];
    });
  }, []);

  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => {
      const removedFile = prevFiles.find((file) => file.name === fileName);
      if (removedFile) {
        URL.revokeObjectURL(removedFile.preview);
      }
      return prevFiles.filter((file) => file.name !== fileName);
    });
  };

  const handleGeneratePdf = async () => {
    if (files.length === 0) {
      setError("Please select at least one image file.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("/api/images-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({
            error:
              "An unknown error occurred while parsing the error response.",
          }));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "images-to-pdf.pdf"; // Set the download filename
      document.body.appendChild(a);

      // Instead of downloading, set the preview URL
      setPdfPreviewUrl(url);

      // Clear the input files state and revoke their object URLs *after* setting preview
      setFiles((prevFiles) => {
        prevFiles.forEach((pf) => URL.revokeObjectURL(pf.preview));
        return [];
      });

      a.remove(); // Remove the temporary link
    } catch (err: unknown) {
      let message = "Failed to generate PDF. Please try again.";
      if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      console.error("PDF Generation Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup object URLs on component unmount
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]); // Dependency array ensures this runs only if files change

  const handleDownload = () => {
    if (!pdfPreviewUrl) return;
    const a = document.createElement("a");
    a.href = pdfPreviewUrl;
    a.download = "images-to-pdf.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handlePrint = () => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.focus(); // Focus on the iframe is necessary for print
    iframeRef.current.contentWindow.print();
  };

  const handleReset = () => {
    if (pdfPreviewUrl) {
      URL.revokeObjectURL(pdfPreviewUrl); // Clean up the old preview URL
    }
    setPdfPreviewUrl(null);
    setError(null);
    // Files state is already cleared after generation
  };

  // Cleanup PDF preview URL on unmount
  useEffect(() => {
    return () => {
      if (pdfPreviewUrl) {
        URL.revokeObjectURL(pdfPreviewUrl);
      }
    };
  }, [pdfPreviewUrl]);

  const structuredData = generateStructuredData();

  return (
    <Container itemScope itemType="https://schema.org/WebApplication">
      {structuredData && (
        <Script
          id="images-to-pdf-structured-data"
          type="application/ld+json"
          strategy="worker"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <ContentWrapper>
        <PageHeader itemScope itemProp="name">
          <h1 itemProp="headline">Convert Images to PDF</h1>
          <p itemProp="description">
            Easily convert multiple images to a single PDF file. Drag & drop
            your images below to get started.
          </p>
        </PageHeader>

        <Card>
          <CardContent>
            <h2>Upload Images</h2>

            <DropZone
              itemScope
              itemProp="featureList"
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "#4f46e5";
                e.currentTarget.style.background = "#f5f5ff";
              }}
              onDragLeave={(e) => {
                e.currentTarget.style.borderColor = "#d1d5db";
                e.currentTarget.style.background = "#f9fafb";
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = "#d1d5db";
                e.currentTarget.style.background = "#f9fafb";
                handleDrop(e.dataTransfer.files);
              }}
            >
              <input
                type="file"
                id="fileInput"
                multiple
                accept="image/png, image/jpeg, image/jpg"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleDrop(e.target.files)}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                }}
              />
              <Upload className="upload-icon" />
              <p className="main-text">Drag & drop images here</p>
              <p className="sub-text">or click to select files (PNG, JPG)</p>
            </DropZone>

            {error && !pdfPreviewUrl && (
              <ErrorAlert>
                <p>Error</p>
                <p>{error}</p>
              </ErrorAlert>
            )}

            {files.length > 0 && (
              <>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    color: "#374151",
                  }}
                >
                  Selected Images ({files.length})
                </h3>
                <ImageGrid>
                  {files.map((file) => (
                    <ImagePreview key={file.preview}>
                      <img src={file.preview} alt={file.name} />
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveFile(file.name)}
                        aria-label="Remove image"
                      >
                        <X size={16} />
                      </button>
                      <div className="image-name" title={file.name}>
                        {file.name}
                      </div>
                    </ImagePreview>
                  ))}
                </ImageGrid>

                <ButtonGroup>
                  <PrimaryButton
                    onClick={handleGeneratePdf}
                    disabled={isLoading || files.length === 0}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Generating PDF...
                      </>
                    ) : (
                      <>
                        <FileText size={18} />
                        Generate PDF
                      </>
                    )}
                  </PrimaryButton>
                </ButtonGroup>
              </>
            )}
          </CardContent>
        </Card>

        {pdfPreviewUrl && (
          <Card>
            <CardContent>
              <h2>PDF Preview</h2>

              {error && pdfPreviewUrl && (
                <ErrorAlert>
                  <p>Preview Error</p>
                  <p>{error}</p>
                </ErrorAlert>
              )}

              <PDFPreviewContainer>
                <iframe
                  ref={iframeRef}
                  src={pdfPreviewUrl}
                  title="PDF Preview"
                  width="100%"
                  height="100%"
                />
              </PDFPreviewContainer>

              <ButtonGroup>
                <PrimaryButton onClick={handleDownload}>
                  <Download size={18} />
                  Download PDF
                </PrimaryButton>
                <SecondaryButton onClick={handlePrint}>
                  <Printer size={18} />
                  Print PDF
                </SecondaryButton>
                <TertiaryButton onClick={handleReset}>
                  <RotateCcw size={18} />
                  Clear Preview
                </TertiaryButton>
              </ButtonGroup>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent>
            <h2>How to Convert Images to PDF</h2>
            <div style={{ color: "#4b5563", lineHeight: 1.6 }}>
              <p style={{ marginBottom: "1rem" }}>
                Converting your image files to PDF is quick and easy with our
                tool. Follow these simple steps:
              </p>
              <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Upload Images</strong> - Drag and drop your JPG or PNG
                  images into the upload area, or click to select files from
                  your device.
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Arrange Order</strong> - Your images will appear in
                  the order they were selected. To change the order, you can
                  remove and re-add images.
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Generate PDF</strong> - Click the "Generate PDF"
                  button to convert your images into a single PDF document.
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Download or Print</strong> - After preview, you can
                  download the PDF to your device or print it directly.
                </li>
              </ol>
              <p>
                This tool processes your images securely in your browser - your
                files are never uploaded to our servers.
              </p>
            </div>
          </CardContent>
        </Card>
      </ContentWrapper>
    </Container>
  );
}
