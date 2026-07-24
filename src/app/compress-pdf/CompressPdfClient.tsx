"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  Upload,
  FileText,
  Loader2,
  Download,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import styled from "styled-components";
import ToolContentSection from "@/components/ToolContentSection";

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

  .disclaimer {
    font-size: 0.875rem;
    opacity: 0.8;
    margin-top: 0.5rem;
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
  position: relative;

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

const FileLabel = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;

  .file-size {
    color: #6b7280;
    font-weight: normal;
  }
`;

const CompressionOptions = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    color: #4b5563;
    text-align: center;
    margin-bottom: 1rem;
  }

  .options-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const OptionButton = styled.button<{ isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
      : "#f3f4f6"};
  color: ${(props) => (props.isActive ? "white" : "#4b5563")};
  border: ${(props) => (props.isActive ? "none" : "1px solid #d1d5db")};
  box-shadow: ${(props) =>
    props.isActive ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    transform: translateY(-2px);
    background: ${(props) =>
      props.isActive
        ? "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)"
        : "#e5e7eb"};
  }

  &:active {
    transform: translateY(0);
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
  display: flex;
  align-items: flex-start;

  .error-icon {
    margin-right: 0.75rem;
    margin-top: 0.125rem;
  }

  .error-content {
    flex: 1;

    p:first-child {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
  }
`;

const ResultContainer = styled.div`
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;

  .success-icon {
    color: #22c55e;
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
  }

  h3 {
    color: #166534;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .stats {
    margin-bottom: 1.5rem;
  }

  .stat-item {
    margin-bottom: 0.5rem;

    span {
      font-weight: 500;
    }
  }

  .reduction {
    color: #16a34a;
    font-weight: 600;
  }

  .no-reduction {
    color: #f59e0b;
    font-style: italic;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

// Helper function to format bytes
function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

interface CompressionResult {
  fileName: string;
  originalSize: number;
  compressedSize: number;
  downloadUrl: string;
}

type CompressionLevel = "low" | "medium" | "high";

export default function CompressPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] =
    useState<CompressionLevel>("medium");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CompressionResult | null>(null);

  const handleFileChange = useCallback((selectedFile: File | null) => {
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setError(null);
        setResult(null); // Clear previous result
      } else {
        setError("Invalid file type. Please select a PDF file.");
        setFile(null);
        setResult(null);
      }
    }
  }, []);

  const handleCompressPdf = async () => {
    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("level", compressionLevel);

    try {
      const response = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "An unknown error occurred." }));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const originalSize = parseInt(
        response.headers.get("X-Original-Size") || "0",
        10
      );
      const compressedSize = parseInt(
        response.headers.get("X-Compressed-Size") || "0",
        10
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      setResult({
        fileName: `compressed_${file.name}`,
        originalSize: originalSize,
        compressedSize: compressedSize,
        downloadUrl: url,
      });
      setFile(null); // Clear the input file after success
    } catch (err: unknown) {
      let message = "Failed to compress PDF. Please try again.";
      if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      console.error("PDF Compression Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup object URL on component unmount or when result changes
  useEffect(() => {
    return () => {
      if (result?.downloadUrl) {
        URL.revokeObjectURL(result.downloadUrl);
      }
    };
  }, [result]);

  return (
    <Container>
      <ContentWrapper>
        <PageHeader>
          <h1>Compress PDF Files</h1>
          <p>
            Reduce the file size of your PDF documents for easier sharing and
            storage
          </p>
          <p className="disclaimer">
            (Compression effectiveness varies depending on the content of your
            PDF)
          </p>
        </PageHeader>

        <Card>
          <CardContent>
            <h2>Upload PDF</h2>

            {file && (
              <FileLabel>
                Selected: <span>{file.name}</span>{" "}
                <span className="file-size">({formatBytes(file.size)})</span>
              </FileLabel>
            )}

            <DropZone
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
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  handleFileChange(e.dataTransfer.files[0]);
                }
              }}
            >
              <input
                type="file"
                id="pdfInputControl"
                accept="application/pdf"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                }}
                onChange={(e) =>
                  handleFileChange(e.target.files ? e.target.files[0] : null)
                }
              />
              <Upload className="upload-icon" />
              <p className="main-text">Drag & drop PDF file here</p>
              <p className="sub-text">or click to select file</p>
            </DropZone>

            <CompressionOptions>
              <h3>Compression Level</h3>
              <div className="options-container">
                {(["low", "medium", "high"] as CompressionLevel[]).map(
                  (level) => (
                    <OptionButton
                      key={level}
                      isActive={compressionLevel === level}
                      onClick={() => setCompressionLevel(level)}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </OptionButton>
                  )
                )}
              </div>
            </CompressionOptions>

            {error && (
              <ErrorAlert>
                <AlertTriangle className="error-icon" size={20} />
                <div className="error-content">
                  <p>Error</p>
                  <p>{error}</p>
                </div>
              </ErrorAlert>
            )}

            <ButtonGroup>
              <PrimaryButton
                onClick={handleCompressPdf}
                disabled={isLoading || !file}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Compressing PDF...
                  </>
                ) : (
                  <>
                    <FileText size={18} />
                    Compress PDF
                  </>
                )}
              </PrimaryButton>
            </ButtonGroup>

            {result && (
              <ResultContainer>
                <CheckCircle className="success-icon" />
                <h3>Compression Complete!</h3>
                <div className="stats">
                  <div className="stat-item">
                    Original Size:{" "}
                    <span>{formatBytes(result.originalSize)}</span>
                  </div>
                  <div className="stat-item">
                    Compressed Size:{" "}
                    <span>{formatBytes(result.compressedSize)}</span>
                  </div>
                  <div className="reduction">
                    {(
                      (1 - result.compressedSize / result.originalSize) *
                      100
                    ).toFixed(1)}
                    % reduction
                  </div>
                  {result.compressedSize >= result.originalSize && (
                    <div className="no-reduction">
                      Note: File size did not decrease. This can happen with
                      already optimized PDFs.
                    </div>
                  )}
                </div>
                <PrimaryButton
                  as="a"
                  href={result.downloadUrl}
                  download={result.fileName}
                >
                  <Download size={18} />
                  Download Compressed PDF
                </PrimaryButton>
              </ResultContainer>
            )}
          </CardContent>
        </Card>

        <ToolContentSection toolId="compress-pdf" />
      </ContentWrapper>
    </Container>
  );
}
