"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Upload,
  X,
  GripVertical,
  Loader2,
  FileText,
  Layers,
  AlertTriangle,
} from "lucide-react";
import ToolContentSection from "@/components/ToolContentSection";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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

const FileListContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  background: #f9fafb;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.2rem;
    color: #1f2937;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .files-container {
    max-height: 320px;
    overflow-y: auto;
    padding-right: 0.5rem;
  }
`;

const SortableItemWrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 8px;
  background: white;
  margin-bottom: 0.5rem;
  box-shadow: ${(props) =>
    props.isDragging
      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
      : "0 1px 3px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${(props) => (props.isDragging ? "#4f46e5" : "#e5e7eb")};
  transform: ${(props) => (props.isDragging ? "scale(1.02)" : "scale(1)")};
  z-index: ${(props) => (props.isDragging ? "10" : "auto")};
  opacity: ${(props) => (props.isDragging ? "0.8" : "1")};
  transition: all 0.2s ease;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .drag-handle {
    padding: 0.375rem;
    color: #6b7280;
    cursor: grab;
    border-radius: 4px;

    &:hover {
      background: #f3f4f6;
      color: #4b5563;
    }

    &:active {
      cursor: grabbing;
    }
  }

  .file-icon {
    color: #ef4444;
    margin-right: 0.75rem;
  }

  .file-info {
    flex: 1;
    min-width: 0;

    .file-name {
      font-weight: 500;
      color: #1f2937;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-size {
      font-size: 0.75rem;
      color: #6b7280;
    }
  }

  .remove-button {
    margin-left: 0.5rem;
    padding: 0.375rem;
    color: #9ca3af;
    border-radius: 50%;

    &:hover {
      background: #fee2e2;
      color: #ef4444;
    }
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

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

interface PdfFile {
  id: string;
  file: File;
}

interface MergedPdfResult {
  fileName: string;
  downloadUrl: string;
}

function SortableFileItem({
  id,
  pdfFile,
  onDelete,
}: {
  id: string;
  pdfFile: PdfFile;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 0.2s ease",
  };

  return (
    <SortableItemWrapper ref={setNodeRef} style={style} isDragging={isDragging}>
      <div className="flex items-center flex-grow min-w-0">
        <div {...attributes} {...listeners} className="drag-handle">
          <GripVertical size={18} />
        </div>
        <FileText className="file-icon" size={20} />
        <div className="file-info">
          <div className="file-name" title={pdfFile.file.name}>
            {pdfFile.file.name}
          </div>
          <div className="file-size">{formatBytes(pdfFile.file.size)}</div>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="remove-button"
        aria-label="Remove file"
      >
        <X size={18} />
      </button>
    </SortableItemWrapper>
  );
}

export default function MergePdfClient() {
  const [files, setFiles] = useState<PdfFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mergedPdfResult, setMergedPdfResult] =
    useState<MergedPdfResult | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [needsRemerge, setNeedsRemerge] = useState(false);

  const handleFileChange = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    setError(null);
    setMergedPdfResult(null);

    const newFiles: PdfFile[] = Array.from(selectedFiles)
      .filter((file) => file.type === "application/pdf")
      .map((file, index) => ({
        id: `${Date.now()}-${index}-${file.name}`,
        file: file,
      }));

    if (newFiles.length !== selectedFiles.length) {
      setError("Some non-PDF files were ignored.");
    }

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    const input = document.getElementById(
      "pdfMergeInputControl"
    ) as HTMLInputElement;
    if (input) input.value = "";
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleMergePdfs = useCallback(async () => {
    const filesToMerge = files;

    if (filesToMerge.length < 2) {
      setError("Please select at least two PDF files to merge.");
      return;
    }

    if (mergedPdfResult?.downloadUrl) {
      URL.revokeObjectURL(mergedPdfResult.downloadUrl);
    }
    setMergedPdfResult(null);
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    filesToMerge.forEach((pdfFile) => {
      formData.append("pdfs", pdfFile.file);
    });

    try {
      const response = await fetch("/api/merge-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "An error occurred while merging PDFs." }));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setMergedPdfResult({
        fileName: "merged_document.pdf",
        downloadUrl: url,
      });
    } catch (err: unknown) {
      let message = "Failed to merge PDFs.";
      if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      console.error("PDF Merging Error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [files, mergedPdfResult]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        const oldIndex = files.findIndex((item) => item.id === active.id);
        const newIndex = files.findIndex((item) => item.id === over.id);
        const updatedFiles = arrayMove(files, oldIndex, newIndex);
        setFiles(updatedFiles);

        if (mergedPdfResult && updatedFiles.length >= 2) {
          setNeedsRemerge(true);
        }
      }
    },
    [files, mergedPdfResult]
  );

  const handleDeleteFile = useCallback(
    (idToRemove: string) => {
      setFiles((prevFiles) => {
        const updatedFiles = prevFiles.filter((f) => f.id !== idToRemove);
        if (mergedPdfResult && updatedFiles.length >= 2) {
          setNeedsRemerge(true);
        } else if (mergedPdfResult && updatedFiles.length < 2) {
          URL.revokeObjectURL(mergedPdfResult.downloadUrl);
          setMergedPdfResult(null);
        }
        return updatedFiles;
      });
    },
    [mergedPdfResult]
  );

  useEffect(() => {
    if (needsRemerge) {
      handleMergePdfs();
      setNeedsRemerge(false);
    }
  }, [needsRemerge, files, handleMergePdfs]);

  useEffect(() => {
    return () => {
      if (mergedPdfResult?.downloadUrl) {
        URL.revokeObjectURL(mergedPdfResult.downloadUrl);
      }
    };
  }, [mergedPdfResult]);

  return (
    <Container>
      <ContentWrapper>
        <PageHeader>
          <h1>Merge PDF Files Online</h1>
          <p>Combine multiple PDF documents into a single organized file</p>
        </PageHeader>

        <Card>
          <CardContent>
            <h2>Upload PDFs</h2>

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
                handleFileChange(e.dataTransfer.files);
              }}
            >
              <input
                type="file"
                id="pdfMergeInputControl"
                accept="application/pdf"
                multiple
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                }}
                onChange={(e) => handleFileChange(e.target.files)}
              />
              <Upload className="upload-icon" />
              <p className="main-text">Drag & drop PDF files here</p>
              <p className="sub-text">or click to select files</p>
            </DropZone>

            {error && !mergedPdfResult && (
              <ErrorAlert>
                <AlertTriangle className="error-icon" size={20} />
                <div className="error-content">
                  <p>Error</p>
                  <p>{error}</p>
                </div>
              </ErrorAlert>
            )}

            {files.length > 0 && (
              <FileListContainer>
                <h3>Files to Merge ({files.length})</h3>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={files}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="files-container">
                      {files.map((pdfFile) => (
                        <SortableFileItem
                          key={pdfFile.id}
                          id={pdfFile.id}
                          pdfFile={pdfFile}
                          onDelete={handleDeleteFile}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              </FileListContainer>
            )}

            {!mergedPdfResult ? (
              <ButtonGroup>
                <PrimaryButton
                  onClick={() => handleMergePdfs()}
                  disabled={isLoading || files.length < 2}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Merging PDFs...
                    </>
                  ) : (
                    <>
                      <Layers size={18} />
                      Merge {files.length || 0} PDF
                      {files.length !== 1 ? "s" : ""}
                    </>
                  )}
                </PrimaryButton>
              </ButtonGroup>
            ) : (
              <p
                style={{
                  textAlign: "center",
                  color: "#4b5563",
                  fontStyle: "italic",
                }}
              >
                PDF merged successfully. Reorder files to merge again if needed.
              </p>
            )}
          </CardContent>
        </Card>

        {mergedPdfResult && (
          <Card>
            <CardContent>
              <h2>Merged PDF Preview</h2>

              {error && mergedPdfResult && (
                <ErrorAlert>
                  <AlertTriangle className="error-icon" size={20} />
                  <div className="error-content">
                    <p>Preview Error</p>
                    <p>{error}</p>
                  </div>
                </ErrorAlert>
              )}

              <PDFPreviewContainer>
                <iframe
                  ref={iframeRef}
                  src={mergedPdfResult.downloadUrl}
                  title="Merged PDF Preview"
                  width="100%"
                  height="100%"
                />
              </PDFPreviewContainer>
            </CardContent>
          </Card>
        )}

        <ToolContentSection toolId="merge-pdf" />
      </ContentWrapper>
    </Container>
  );
}
