/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
// We need to load PDF.js in the client component
import * as pdfjsLib from 'pdfjs-dist';

export default function PdfToJpgPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isConverting, setIsConverting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [jpgUrls, setJpgUrls] = useState<string[]>([]);
    const [progress, setProgress] = useState<{ current: number, total: number } | null>(null);

    // Set up the PDF.js worker
    useEffect(() => {
        // This only runs in the browser, not during SSR
        if (typeof window !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
        }
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setJpgUrls([]);
        setProgress(null);

        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            setError('Please select a valid PDF file.');
        }
    };

    // Function to convert PDF to JPG on the client side
    const convertPdfToJpg = async (file: File): Promise<string[]> => {
        const urls: string[] = [];

        try {
            // Read the file as an ArrayBuffer
            const arrayBuffer = await file.arrayBuffer();

            // Load the PDF document
            const pdf = await pdfjsLib.getDocument(new Uint8Array(arrayBuffer)).promise;

            // Get the total number of pages
            const totalPages = pdf.numPages;
            setProgress({ current: 0, total: totalPages });

            // Process each page
            for (let i = 1; i <= totalPages; i++) {
                setProgress({ current: i, total: totalPages });

                // Get the page
                const page = await pdf.getPage(i);

                // Set scale for better resolution
                const viewport = page.getViewport({ scale: 1.5 });

                // Create a canvas for rendering
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                // Get the rendering context
                const context = canvas.getContext('2d');
                if (!context) throw new Error('Could not get canvas context');

                // Render the page
                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;

                // Convert canvas to JPG URL
                const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                urls.push(dataUrl);
            }

            return urls;
        } catch (error) {
            console.error('Error converting PDF to JPG:', error);
            throw error;
        }
    };

    const handleConvert = async () => {
        if (!selectedFile) {
            setError('Please select a PDF file first.');
            return;
        }

        setIsConverting(true);
        setError(null);
        setJpgUrls([]);
        setProgress(null);

        try {
            // Let the server know we're processing a file (optional, can be removed)
            const formData = new FormData();
            formData.append('pdfFile', selectedFile);

            await fetch('/api/pdf-to-jpg', {
                method: 'POST',
                body: formData,
            });

            // Process the PDF on the client side
            const urls = await convertPdfToJpg(selectedFile);
            setJpgUrls(urls);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error('Conversion error:', err);
        } finally {
            setIsConverting(false);
            setProgress(null);
        }
    };

    // Function to download all images as ZIP
    const handleDownloadAll = async () => {
        if (jpgUrls.length === 0) return;

        try {
            setIsConverting(true);

            // We need to install jszip: yarn add jszip
            // Dynamic import JSZip (only loaded when needed)
            const JSZip = (await import('jszip')).default;
            const zip = new JSZip();

            // Add each image to the ZIP
            jpgUrls.forEach((url, index) => {
                // Convert data URL to blob
                const dataUrlParts = url.split(',');
                const contentType = dataUrlParts[0].split(':')[1].split(';')[0];
                const byteString = atob(dataUrlParts[1]);

                const arrayBuffer = new ArrayBuffer(byteString.length);
                const uint8Array = new Uint8Array(arrayBuffer);

                for (let i = 0; i < byteString.length; i++) {
                    uint8Array[i] = byteString.charCodeAt(i);
                }

                const blob = new Blob([arrayBuffer], { type: contentType });
                zip.file(`page_${index + 1}.jpg`, blob);
            });

            // Generate ZIP file
            const zipBlob = await zip.generateAsync({ type: 'blob' });

            // Create download link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(zipBlob);
            link.download = 'converted_images.zip';
            link.click();

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create ZIP file.');
            console.error('ZIP creation error:', err);
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-8">
                {/* Optional: Keep or remove header elements */}
            </div>

            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">PDF to JPG Converter</h1>
                <p className="text-center text-gray-600 mb-8">Upload your PDF file and convert it into JPG images quickly and easily.</p>

                <div className="mb-6">
                    <label
                        htmlFor="pdf-upload"
                        className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${selectedFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50'
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500">
                                {selectedFile ? (
                                    <span className="font-semibold text-green-600">{selectedFile.name}</span>
                                ) : (
                                    <>
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </>
                                )}
                            </p>
                            <p className="text-xs text-gray-500">PDF only (MAX. 50MB)</p>
                        </div>
                        <input
                            id="pdf-upload"
                            type="file"
                            className="hidden"
                            accept="application/pdf"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-center">
                        {error}
                    </div>
                )}

                {progress && progress.current > 0 && (
                    <div className="mb-6">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-indigo-600 h-2.5 rounded-full"
                                style={{ width: `${(progress.current / progress.total) * 100}%` }}
                            ></div>
                        </div>
                        <p className="text-center text-sm text-gray-600 mt-2">
                            Converting page {progress.current} of {progress.total}
                        </p>
                    </div>
                )}

                <button
                    onClick={handleConvert}
                    disabled={!selectedFile || isConverting}
                    className={`w-full py-3 px-4 text-lg font-semibold rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${!selectedFile || isConverting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                        }`}
                >
                    {isConverting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Converting...
                        </div>
                    ) : (
                        'Convert to JPG'
                    )}
                </button>

                {/* Results Area */}
                {jpgUrls.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Conversion Results</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {jpgUrls.map((url, index) => (
                                <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                                    <img src={url} alt={`Page ${index + 1}`} className="w-full h-auto object-contain" />
                                    <a
                                        href={url}
                                        download={`page_${index + 1}.jpg`}
                                        className="block text-center py-2 bg-gray-100 hover:bg-gray-200 text-sm text-indigo-700 font-medium transition-colors"
                                    >
                                        Download Page {index + 1}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleDownloadAll}
                                disabled={isConverting}
                                className={`py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isConverting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Download All as ZIP
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
} 