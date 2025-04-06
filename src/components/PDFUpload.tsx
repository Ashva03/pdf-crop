'use client'

import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

const UploadContainer = styled.div`
  background: white;
  border: 2px dashed #4f46e5;
  padding: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #7c3aed;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  &.dragging {
    border-color: #7c3aed;
    background-color: rgba(124, 58, 237, 0.05);
  }
`

const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

const UploadIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const UploadTitle = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
`

const UploadDescription = styled.p`
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`

const UploadButton = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`

const FileInput = styled.input`
  display: none;
`

const FilePreview = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const FileIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #4f46e5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`

const FileInfo = styled.div`
  flex: 1;
  text-align: left;
`

const FileName = styled.h4`
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.25rem;
`

const FileSize = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
  }
`

const ErrorMessage = styled.div`
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.875rem;
  max-width: 500px;
  width: 100%;
`

const DragText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 1rem;
`

interface PDFUploadProps {
  onFileSelect: (file: File) => void;
  maxFileSize?: number; // in MB
}

export default function PDFUpload({ onFileSelect, maxFileSize = 100 }: PDFUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File) => {
    setError(null);

    // Check if file is a PDF
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    // Check file size
    if (file.size > maxFileSize * 1024 * 1024) {
      setError(`File size exceeds the maximum limit of ${maxFileSize}MB`);
      return;
    }

    setSelectedFile(file);
    onFileSelect(file);
  }, [maxFileSize, onFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }, [handleFileSelect]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  }, [handleFileSelect]);

  const handleRemoveFile = useCallback(() => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <UploadContainer
      className={isDragging ? 'dragging' : ''}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <UploadContent>
        <UploadIcon>📄</UploadIcon>
        <UploadTitle>Upload Your PDF</UploadTitle>
        <UploadDescription>
          Drag and drop your PDF file here or click the button below to browse your files.
          Maximum file size: {maxFileSize}MB
        </UploadDescription>

        <FileInput
          type="file"
          accept=".pdf"
          onChange={handleFileInputChange}
          ref={fileInputRef}
          id="pdf-upload"
        />

        <UploadButton onClick={() => fileInputRef.current?.click()}>
          <span>📁</span> Browse Files
        </UploadButton>

        <DragText>or drag and drop your PDF here</DragText>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {selectedFile && (
          <FilePreview>
            <FileIcon>📄</FileIcon>
            <FileInfo>
              <FileName>{selectedFile.name}</FileName>
              <FileSize>{formatFileSize(selectedFile.size)}</FileSize>
            </FileInfo>
            <RemoveButton onClick={handleRemoveFile} title="Remove file">×</RemoveButton>
          </FilePreview>
        )}
      </UploadContent>
    </UploadContainer>
  );
} 