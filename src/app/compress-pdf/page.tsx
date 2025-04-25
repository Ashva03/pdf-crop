'use client';

import React, { useState, useCallback } from 'react';
import { Upload, FileText, Loader2, Download, CheckCircle } from 'lucide-react';

// Helper function to format bytes
function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

interface CompressionResult {
    fileName: string;
    originalSize: number;
    compressedSize: number;
    downloadUrl: string;
}

type CompressionLevel = 'low' | 'medium' | 'high';

export default function CompressPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('medium');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<CompressionResult | null>(null);

    const handleFileChange = useCallback((selectedFile: File | null) => {
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf') {
                setFile(selectedFile);
                setError(null);
                setResult(null); // Clear previous result
            } else {
                setError('Invalid file type. Please select a PDF file.');
                setFile(null);
                setResult(null);
            }
        }
    }, []);

    const handleCompressPdf = async () => {
        if (!file) {
            setError('Please select a PDF file first.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append('pdf', file);
        formData.append('level', compressionLevel);

        try {
            const response = await fetch('/api/compress-pdf', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'An unknown error occurred.' }));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const originalSize = parseInt(response.headers.get('X-Original-Size') || '0', 10);
            const compressedSize = parseInt(response.headers.get('X-Compressed-Size') || '0', 10);
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
            let message = 'Failed to compress PDF. Please try again.';
            if (err instanceof Error) {
                message = err.message;
            }
            setError(message);
            console.error('PDF Compression Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Cleanup object URL on component unmount or when result changes
    React.useEffect(() => {
        return () => {
            if (result?.downloadUrl) {
                URL.revokeObjectURL(result.downloadUrl);
            }
        };
    }, [result]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-12 lg:p-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">Compress PDF</h1>
                    <p className="text-center text-indigo-100 mt-2 text-sm md:text-base">Reduce the file size of your PDF documents.</p>
                    <p className="text-center text-xs text-indigo-200 mt-1">(Note: Compression effectiveness varies. Advanced compression not guaranteed.)</p>
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                    {/* File Input Area */}
                    <div className="mb-6 md:mb-8">
                        <label
                            htmlFor="pdfInput"
                            className="block text-lg font-semibold text-indigo-700 mb-4 text-center cursor-pointer"
                        >
                            {file ? `Selected: ${file.name} (${formatBytes(file.size)})` : 'Click or Drag to Upload PDF'}
                        </label>
                        <div
                            className="relative border-2 border-dashed border-indigo-300 rounded-xl p-6 sm:p-8 md:p-10 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 ease-in-out group"
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
                                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                    handleFileChange(e.dataTransfer.files[0]);
                                }
                            }}
                        >
                            <input
                                type="file"
                                id="pdfInputControl"
                                accept="application/pdf"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" // Input covers the area
                                onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-300 mb-3 sm:mb-4" />
                                <p className="text-sm text-gray-500">Drop your PDF here or click</p>
                            </div>
                        </div>
                    </div>

                    {/* Compression Level Options - Mostly illustrative for now */}
                    <div className="mb-6 md:mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-3 text-center sm:text-left">Compression Level (Illustrative)</label>
                        <div className="flex flex-wrap justify-center gap-3">
                            {(['low', 'medium', 'high'] as CompressionLevel[]).map((level) => (
                                <button
                                    key={level}
                                    type="button"
                                    onClick={() => setCompressionLevel(level)}
                                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-sm ${compressionLevel === level ? 'bg-indigo-600 text-white ring-2 ring-offset-2 ring-indigo-500' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 ring-1 ring-gray-300 hover:ring-gray-400'}`}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 shadow-sm" role="alert">
                            <p className="font-bold">Error</p>
                            <p>{error}</p>
                        </div>
                    )}

                    {/* Compress Button / Loading Indicator */}
                    <div className="text-center mt-8 sm:mt-10">
                        <button
                            onClick={handleCompressPdf}
                            disabled={isLoading || !file}
                            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:transform-none"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin -ml-1 mr-2 sm:mr-3 h-5 w-5" />
                                    Compressing...
                                </>
                            ) : (
                                <>
                                    <FileText className="-ml-1 mr-1.5 sm:mr-2 h-5 w-5" />
                                    Compress PDF
                                </>
                            )}
                        </button>
                    </div>

                    {/* Result Display */}
                    {result && (
                        <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm text-center">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-green-800 mb-3">Compression Complete!</h3>
                            <p className="text-sm text-gray-700">Original Size: <span className="font-medium">{formatBytes(result.originalSize)}</span></p>
                            <p className="text-sm text-gray-700 mb-4">Compressed Size: <span className="font-medium text-green-700">{formatBytes(result.compressedSize)}</span></p>
                            <p className="text-xs text-gray-500 mb-5">({((1 - result.compressedSize / result.originalSize) * 100).toFixed(1)}% reduction)</p>
                            {result.compressedSize >= result.originalSize && <p className="text-xs text-orange-600 mb-5">(Note: File size did not decrease. This can happen with already optimized PDFs.)</p>}
                            <a
                                href={result.downloadUrl}
                                download={result.fileName}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Download className="-ml-1 mr-2 h-5 w-5" />
                                Download Compressed PDF
                            </a>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
} 