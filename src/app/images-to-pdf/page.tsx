'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Upload, X, FileText, Loader2, Download, Printer, RotateCcw } from 'lucide-react';

interface ImageFile extends File {
    preview: string;
}

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
            .filter(file => file.type.startsWith('image/')) // Ensure only images are processed
            .map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }) as ImageFile);

        // Revoke previous previews before setting new ones
        setFiles(prevFiles => {
            prevFiles.forEach(pf => URL.revokeObjectURL(pf.preview));
            return [...prevFiles, ...newFiles];
        });
    }, []);

    const handleRemoveFile = (fileName: string) => {
        setFiles(prevFiles => {
            const removedFile = prevFiles.find(file => file.name === fileName);
            if (removedFile) {
                URL.revokeObjectURL(removedFile.preview);
            }
            return prevFiles.filter(file => file.name !== fileName);
        });
    };

    const handleGeneratePdf = async () => {
        if (files.length === 0) {
            setError('Please select at least one image file.');
            return;
        }

        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file);
        });

        try {
            const response = await fetch('/api/images-to-pdf', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'An unknown error occurred while parsing the error response.' }));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'images-to-pdf.pdf'; // Set the download filename
            document.body.appendChild(a);

            // Instead of downloading, set the preview URL
            setPdfPreviewUrl(url);

            // Clear the input files state and revoke their object URLs *after* setting preview
            setFiles(prevFiles => {
                prevFiles.forEach(pf => URL.revokeObjectURL(pf.preview));
                return [];
            });

            a.remove(); // Remove the temporary link

        } catch (err: unknown) {
            let message = 'Failed to generate PDF. Please try again.';
            if (err instanceof Error) {
                message = err.message;
            }
            setError(message);
            console.error('PDF Generation Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Cleanup object URLs on component unmount
    React.useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [files]); // Dependency array ensures this runs only if files change

    // --- New Functions Start ---
    const handleDownload = () => {
        if (!pdfPreviewUrl) return;
        const a = document.createElement('a');
        a.href = pdfPreviewUrl;
        a.download = 'images-to-pdf.pdf';
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
    // --- New Functions End ---

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-12 lg:p-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="z-10 max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-8">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">Images to PDF Converter</h1>
                    <p className="text-center text-indigo-100 mt-2 text-sm md:text-base">Easily convert your JPG & PNG images into a single PDF document.</p>
                </div>

                {/* --- Upload UI (Now Always Visible) --- */}
                <div className="p-6 sm:p-8 md:p-10">
                    {/* File Input Area */}
                    <div
                        className="border-2 border-dashed border-indigo-300 rounded-xl p-6 sm:p-8 md:p-10 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 ease-in-out mb-6 md:mb-8 group relative"
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.currentTarget.classList.add('border-indigo-500', 'bg-indigo-50');
                        }}
                        onDragLeave={(e) => {
                            e.currentTarget.classList.remove('border-indigo-500', 'bg-indigo-50');
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            e.currentTarget.classList.remove('border-indigo-500', 'bg-indigo-50');
                            handleDrop(e.dataTransfer.files);
                        }}
                    >
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            accept="image/png, image/jpeg, image/jpg"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" // Make input cover the area for better clickability
                            onChange={(e) => handleDrop(e.target.files)}
                        />
                        <div className="flex flex-col items-center justify-center pointer-events-none"> {/* Prevent text/icon from blocking input click */}
                            <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-300 mb-3 sm:mb-4" />
                            <p className="text-base sm:text-lg font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-300">Drag & drop images here</p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">or click to select files (PNG, JPG)</p>
                        </div>
                    </div>

                    {/* Image Previews */}
                    {files.length > 0 && (
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-700">Selected Images ({files.length}):</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                                {files.map((file) => (
                                    <div key={file.preview} className="relative group border border-gray-200 rounded-lg overflow-hidden shadow-sm aspect-square flex items-center justify-center bg-gray-100">
                                        <img
                                            src={file.preview}
                                            alt={file.name}
                                            className="max-h-full max-w-full object-contain group-hover:opacity-70 transition-opacity duration-200"
                                        />
                                        <button
                                            onClick={() => handleRemoveFile(file.name)}
                                            className="absolute top-1.5 right-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 shadow-md z-10"
                                            aria-label="Remove image"
                                        >
                                            <X size={16} />
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <p className="text-white text-xs font-medium truncate" title={file.name}>{file.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && !pdfPreviewUrl && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 shadow-sm" role="alert">
                            <p className="font-bold">Error</p>
                            <p>{error}</p>
                        </div>
                    )}

                    {/* Generate Button */}
                    <div className="text-center mt-8 sm:mt-10">
                        <button
                            onClick={handleGeneratePdf}
                            disabled={isLoading || files.length === 0}
                            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:transform-none"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 sm:mr-3 h-5 w-5" />
                                    Generating PDF...
                                </>
                            ) : (
                                <>
                                    <FileText className="-ml-1 mr-1.5 sm:mr-2 h-5 w-5" />
                                    Generate PDF from {files.length} Image{files.length !== 1 ? 's' : ''}
                                </>
                            )}
                        </button>
                    </div>
                </div>
                {/* --- End Upload UI --- */}

                {/* --- Conditional Preview UI --- */}
                {pdfPreviewUrl && (
                    <div className="p-6 sm:p-8 md:p-10 border-t border-gray-200 mt-12">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-700">PDF Preview</h2>

                        {/* Error Message specific to preview? (Optional) */}
                        {error && pdfPreviewUrl && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 shadow-sm" role="alert">
                                <p className="font-bold">Preview Error</p>
                                <p>{error}</p>
                            </div>
                        )}

                        {/* PDF Preview Iframe */}
                        <div className="mb-6 md:mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-inner bg-gray-100" style={{ height: '80vh' }}>
                            <iframe
                                ref={iframeRef}
                                src={pdfPreviewUrl}
                                title="PDF Preview"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                            {/* Download Button - Primary Action */}
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Download className="-ml-1 mr-2 h-5 w-5" />
                                Download PDF
                            </button>
                            {/* Print Button - Secondary Action */}
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Printer className="-ml-1 mr-2 h-5 w-5" />
                                Print PDF
                            </button>
                            {/* Clear Preview Button - Tertiary Action */}
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <RotateCcw className="-ml-1 mr-2 h-5 w-5" />
                                Clear Preview
                            </button>
                        </div>
                    </div>
                )}
                {/* --- End Preview UI --- */}

            </div>
        </main>
    );
} 