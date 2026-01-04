/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
// We need to load PDF.js in the client component
import * as pdfjsLib from "pdfjs-dist";
import {
  Upload,
  FileText,
  Download,
  Loader,
  Archive as ZipIcon,
  ImageIcon,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import styled from "styled-components";

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

const DropZone = styled.label<{ $hasFile?: boolean }>`
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f9fafb;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:hover {
    border-color: #4f46e5;
    background: #f5f5ff;
  }

  ${(props) =>
    props.$hasFile &&
    `
    border-color: #10b981;
    background: #ecfdf5;
  `}

  .upload-icon {
    color: #4f46e5;
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;

    ${(props) =>
      props.$hasFile &&
      `
      color: #10b981;
    `}
  }

  p.main-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4f46e5;
    margin-bottom: 0.5rem;

    ${(props) =>
      props.$hasFile &&
      `
      color: #10b981;
    `}
  }

  p.file-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #10b981;
    margin-bottom: 0.5rem;
  }

  p.sub-text {
    font-size: 0.875rem;
    color: #6b7280;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 1rem;

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    border-radius: 9999px;
    transition: width 0.3s ease;
  }
`;

const ProgressText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;

  span {
    font-weight: 600;
    color: #4f46e5;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;

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
  border: 1px solid #e5e7eb;

  &:hover:not(:disabled) {
    border-color: #4f46e5;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
`;

const ImageCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  background: white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .image-wrapper {
    width: 100%;
    padding-top: 75%; /* 4:3 aspect ratio */
    position: relative;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 0.5rem;
    }
  }

  .image-info {
    padding: 0.75rem;

    .page-number {
      font-size: 0.875rem;
      font-weight: 600;
      color: #4b5563;
      margin-bottom: 0.25rem;
    }

    .download-link {
      display: inline-flex;
      align-items: center;
      font-size: 0.75rem;
      color: #4f46e5;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      svg {
        width: 14px;
        height: 14px;
        margin-right: 0.25rem;
      }
    }
  }
`;

const InfoAlert = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  margin-bottom: 1.5rem;

  .info-icon {
    color: #0ea5e9;
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .info-content {
    flex: 1;

    p:first-child {
      font-weight: 600;
      color: #0369a1;
      margin-bottom: 0.25rem;
    }

    p:last-child {
      color: #0c4a6e;
      font-size: 0.875rem;
    }
  }
`;

const ErrorAlert = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  margin-bottom: 1.5rem;

  .error-icon {
    color: #ef4444;
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .error-content {
    flex: 1;

    p:first-child {
      font-weight: 600;
      color: #b91c1c;
      margin-bottom: 0.25rem;
    }

    p:last-child {
      color: #7f1d1d;
      font-size: 0.875rem;
    }
  }
`;

const SuccessAlert = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  margin-bottom: 1.5rem;

  .success-icon {
    color: #10b981;
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .success-content {
    flex: 1;

    p:first-child {
      font-weight: 600;
      color: #047857;
      margin-bottom: 0.25rem;
    }

    p:last-child {
      color: #065f46;
      font-size: 0.875rem;
    }
  }
`;

export default function PdfToJpgPage() {
  // Set worker path for pdf.js
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [zipUrl, setZipUrl] = useState<string | null>(null);

  // Cleanup URLs when component unmounts
  useEffect(() => {
    return () => {
      // Revoke URLs to prevent memory leaks
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
      if (zipUrl) URL.revokeObjectURL(zipUrl);
    };
  }, [imageUrls, zipUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setErrorMessage(null);

    if (files && files.length > 0) {
      const selectedFile = files[0];

      if (selectedFile.type !== "application/pdf") {
        setErrorMessage("Please select a valid PDF file.");
        return;
      }

      // Clear previous results
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
      if (zipUrl) URL.revokeObjectURL(zipUrl);

      setFile(selectedFile);
      setImageUrls([]);
      setZipUrl(null);
    }
  };

  const convertPdfToJpg = async (file: File): Promise<string[]> => {
    try {
      const fileArrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: fileArrayBuffer }).promise;

      setPageCount(pdf.numPages);
      const urls: string[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        setCurrentPage(i);

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        // Convert to jpg
        const imageUrl = canvas.toDataURL("image/jpeg", 0.8);

        // Convert data URL to blob for better memory management
        const blob = await (await fetch(imageUrl)).blob();
        const objectUrl = URL.createObjectURL(blob);
        urls.push(objectUrl);
      }

      return urls;
    } catch (error) {
      console.error("Error converting PDF to JPG:", error);
      throw new Error(
        "Failed to convert PDF to JPG. Please try a different PDF file."
      );
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setErrorMessage(null);
    setCurrentPage(0);
    setImageUrls([]);
    setZipUrl(null);

    try {
      const urls = await convertPdfToJpg(file);
      setImageUrls(urls);

      // Create zip file for bulk download
      if (urls.length > 1) {
        const JSZip = (await import("jszip")).default;
        const zip = new JSZip();

        // Fetch each image and add to zip
        for (let i = 0; i < urls.length; i++) {
          const blob = await fetch(urls[i]).then((r) => r.blob());
          zip.file(`page_${i + 1}.jpg`, blob);
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const zipUrl = URL.createObjectURL(zipBlob);
        setZipUrl(zipUrl);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred during conversion.");
      }
    } finally {
      setConverting(false);
    }
  };

  const handleDownloadAll = async () => {
    if (zipUrl) {
      const link = document.createElement("a");
      link.href = zipUrl;
      link.download = `${file?.name.replace(".pdf", "") || "pdf"}_images.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (imageUrls.length === 1) {
      // If there's only one image, download it directly
      const link = document.createElement("a");
      link.href = imageUrls[0];
      link.download = `${file?.name.replace(".pdf", "") || "pdf"}_page_1.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <PageHeader>
          <h1>PDF to JPG Converter</h1>
          <p>Convert PDF documents to high-quality JPG images</p>
        </PageHeader>

        <Card>
          <CardContent>
            <h2>Upload PDF</h2>

            <DropZone $hasFile={!!file}>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
              />
              {file ? (
                <>
                  <FileText className="upload-icon" />
                  <p className="file-name">{file.name}</p>
                  <p className="sub-text">Click to change file</p>
                </>
              ) : (
                <>
                  <Upload className="upload-icon" />
                  <p className="main-text">Drag & drop your PDF here</p>
                  <p className="sub-text">or click to select a file</p>
                </>
              )}
            </DropZone>

            {errorMessage && (
              <ErrorAlert>
                <AlertTriangle className="error-icon" size={20} />
                <div className="error-content">
                  <p>Error</p>
                  <p>{errorMessage}</p>
                </div>
              </ErrorAlert>
            )}

            <InfoAlert>
              <Info className="info-icon" size={20} />
              <div className="info-content">
                <p>Secure Conversion</p>
                <p>
                  Your PDF is processed entirely in your browser. Files are
                  never uploaded to our servers, ensuring complete privacy.
                </p>
              </div>
            </InfoAlert>

            {converting && (
              <>
                <ProgressBar>
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        pageCount ? (currentPage / pageCount) * 100 : 0
                      }%`,
                    }}
                  />
                </ProgressBar>
                <ProgressText>
                  Converting page <span>{currentPage}</span> of{" "}
                  <span>{pageCount || "..."}</span>
                </ProgressText>
              </>
            )}

            <PrimaryButton
              disabled={!file || converting}
              onClick={handleConvert}
            >
              {converting ? (
                <>
                  <Loader className="animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <ImageIcon />
                  Convert to JPG
                </>
              )}
            </PrimaryButton>
          </CardContent>
        </Card>

        {imageUrls.length > 0 && (
          <Card>
            <CardContent>
              <h2>Converted Images</h2>

              <SuccessAlert>
                <CheckCircle className="success-icon" size={20} />
                <div className="success-content">
                  <p>Conversion Complete</p>
                  <p>
                    Successfully converted {imageUrls.length} page
                    {imageUrls.length !== 1 ? "s" : ""} to JPG format.
                  </p>
                </div>
              </SuccessAlert>

              <ButtonGroup style={{ marginBottom: "2rem" }}>
                <PrimaryButton onClick={handleDownloadAll}>
                  {imageUrls.length > 1 ? (
                    <>
                      <ZipIcon />
                      Download All as ZIP
                    </>
                  ) : (
                    <>
                      <Download />
                      Download JPG
                    </>
                  )}
                </PrimaryButton>
                <SecondaryButton
                  onClick={() => {
                    // Reset for a new conversion
                    setFile(null);
                    setImageUrls([]);
                    setZipUrl(null);

                    // Clear file input
                    const input = document.querySelector(
                      'input[type="file"]'
                    ) as HTMLInputElement;
                    if (input) input.value = "";
                  }}
                >
                  <Upload />
                  Convert Another PDF
                </SecondaryButton>
              </ButtonGroup>

              <ImagesGrid>
                {imageUrls.map((url, index) => (
                  <ImageCard key={index}>
                    <div className="image-wrapper">
                      <img src={url} alt={`Page ${index + 1}`} />
                    </div>
                    <div className="image-info">
                      <p className="page-number">Page {index + 1}</p>
                      <a
                        href={url}
                        download={`${
                          file?.name.replace(".pdf", "") || "pdf"
                        }_page_${index + 1}.jpg`}
                        className="download-link"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </div>
                  </ImageCard>
                ))}
              </ImagesGrid>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent>
            <h2>How to Convert PDF to JPG</h2>
            <div style={{ color: "#4b5563", lineHeight: 1.6 }}>
              <p style={{ marginBottom: "1rem" }}>
                Converting PDF documents to JPG images makes them easier to
                share, embed, and use in various applications. Follow these
                simple steps:
              </p>
              <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Upload Your PDF</strong> - Drag and drop or click to
                  select the PDF file you want to convert.
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Convert to JPG</strong> - Click the "Convert to JPG"
                  button and wait while each page is processed.
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong>Download Images</strong> - Download all pages as a ZIP
                  file or individual pages as needed.
                </li>
              </ol>
              <p style={{ marginBottom: "1rem" }}>
                This tool processes your files securely in your browser - your
                PDF is never uploaded to our servers, ensuring complete privacy.
              </p>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  color: "#1f2937",
                }}
              >
                Why Convert PDF to JPG?
              </h3>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Universal Compatibility</strong> - JPG files are
                  viewable on virtually all devices and platforms without
                  special software
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Easier Sharing</strong> - JPG images are easier to
                  share on social media, messaging apps, and email
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Web Publishing</strong> - Use in websites, blogs, and
                  online platforms that may not support PDF embedding
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Printing Options</strong> - Some printing services
                  prefer JPG files over PDF format
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Image Editing</strong> - Extract and edit specific
                  pages or elements from PDF documents
                </li>
              </ul>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  color: "#1f2937",
                }}
              >
                Common Use Cases
              </h3>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Document Sharing</strong> - Convert reports,
                  presentations, and documents for easier sharing
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Image Extraction</strong> - Extract images, diagrams,
                  and charts from PDF documents
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Digital Marketing</strong> - Create visual content for
                  social media from PDF resources
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>E-commerce</strong> - Convert product catalogs to
                  images for online stores
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <strong>Archiving</strong> - Create image backups of important
                  PDF documents
                </li>
              </ul>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  color: "#1f2937",
                }}
              >
                Technical Information
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                Our PDF to JPG converter maintains high image quality while
                optimizing file size. The conversion process:
              </p>
              <ul
                style={{
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "0.5rem" }}>
                  Renders each PDF page with 1.5x scale for crisp image quality
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Converts to JPG format with 80% quality setting for optimal
                  file size
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Preserves colors, text sharpness, and image details from the
                  original document
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  Processes multi-page PDFs with accurate page order
                  preservation
                </li>
              </ul>
              <p>
                For documents with many pages, the ZIP download option provides
                a convenient way to manage all the converted images in a single
                file.
              </p>
            </div>
          </CardContent>
        </Card>
      </ContentWrapper>
    </Container>
  );
}
