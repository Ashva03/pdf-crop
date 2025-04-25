'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
    Upload,
    X,
    GripVertical,
    Loader2,
    Download,
    FileText,
    Layers, // Icon for Merge
    AlertTriangle,
    Printer // Added Printer icon
} from 'lucide-react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy, // Use vertical strategy for list
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Helper function to format bytes (can be moved to a utils file)
function formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Interface for tracking uploaded files
interface PdfFile {
    id: string; // Unique ID for dnd-kit
    file: File;
}

interface MergedPdfResult {
    fileName: string;
    downloadUrl: string;
}

// --- Sortable Item Component ---
function SortableFileItem({ id, pdfFile, onDelete }: { id: string; pdfFile: PdfFile; onDelete: (id: string) => void }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || 'transform 0.2s ease', // Add a default transition
        zIndex: isDragging ? 10 : 'auto',
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`flex items-center justify-between p-3 pl-2 border rounded-lg shadow-sm bg-white mb-2 transition-shadow duration-200 ${isDragging ? 'ring-2 ring-indigo-400 shadow-md' : 'border-gray-200 hover:shadow-md hover:border-gray-300'}`}
        >
            <div className="flex items-center flex-grow min-w-0"> {/* Allow text to truncate */}
                <div {...attributes} {...listeners} className="p-1.5 text-gray-500 hover:text-gray-800 cursor-grab mr-2 touch-none rounded-md hover:bg-gray-100">
                    <GripVertical size={20} />
                </div>
                <FileText className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                <div className="flex-grow min-w-0"> {/* Allow text to truncate */}
                    <p className="text-sm font-medium text-gray-900 truncate" title={pdfFile.file.name}>{pdfFile.file.name}</p>
                    <p className="text-xs text-gray-500">{formatBytes(pdfFile.file.size)}</p>
                </div>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="ml-4 p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full flex-shrink-0"
                aria-label="Remove file"
            >
                <X size={18} />
            </button>
        </div>
    );
}
// --- End Sortable Item ---

export default function MergePdfPage() {
    const [files, setFiles] = useState<PdfFile[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mergedPdfResult, setMergedPdfResult] = useState<MergedPdfResult | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null); // Ref for preview iframe
    const [needsRemerge, setNeedsRemerge] = useState(false); // State to trigger remerge effect

    // --- File Handling ---
    const handleFileChange = useCallback((selectedFiles: FileList | null) => {
        if (!selectedFiles) return;

        setError(null);
        setMergedPdfResult(null); // Clear previous result

        const newFiles: PdfFile[] = Array.from(selectedFiles)
            .filter(file => file.type === 'application/pdf')
            .map((file, index) => ({
                id: `${Date.now()}-${index}-${file.name}`, // Generate unique ID
                file: file,
            }));

        if (newFiles.length !== selectedFiles.length) {
            setError('Some non-PDF files were ignored.');
        }

        setFiles(prevFiles => [...prevFiles, ...newFiles]);

        // Optional: Reset the file input visually
        const input = document.getElementById('pdfMergeInputControl') as HTMLInputElement;
        if (input) input.value = '';

    }, []);

    // --- @dnd-kit Drag Logic ---
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    // Define handleMergePdfs *before* handleDragEnd which depends on it
    const handleMergePdfs = useCallback(async (/* currentFiles?: PdfFile[] */) => {
        // Note: Removing direct file list passing for simplicity with state closure
        // const filesToMerge = currentFiles || files;
        const filesToMerge = files; // Rely on the current `files` state

        if (filesToMerge.length < 2) {
            setError('Please select at least two PDF files to merge.');
            return;
        }

        if (mergedPdfResult?.downloadUrl) {
            URL.revokeObjectURL(mergedPdfResult.downloadUrl);
        }
        setMergedPdfResult(null);
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        filesToMerge.forEach(pdfFile => {
            formData.append('pdfs', pdfFile.file);
        });

        const fileOrderForApi = filesToMerge.map(f => f.file.name);
        console.log('Sending files to API in order:', fileOrderForApi);

        try {
            const response = await fetch('/api/merge-pdf', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'An unknown server error occurred.' }));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            setMergedPdfResult({
                fileName: 'merged_document.pdf',
                downloadUrl: url,
            });

        } catch (err: unknown) {
            let message = 'Failed to merge PDFs.';
            if (err instanceof Error) {
                message = err.message;
            }
            setError(message);
            console.error('PDF Merging Error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [files, mergedPdfResult]); // Depend on files and mergedPdfResult state

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = files.findIndex(item => item.id === active.id);
            const newIndex = files.findIndex(item => item.id === over.id);
            const updatedFiles = arrayMove(files, oldIndex, newIndex);
            setFiles(updatedFiles);

            // Set flag to trigger remerge effect if needed
            if (mergedPdfResult && updatedFiles.length >= 2) {
                setNeedsRemerge(true);
            }
        }
    }, [files, mergedPdfResult]); // Remove handleMergePdfs from here

    // --- Page Deletion (Keep existing) ---
    const handleDeleteFile = useCallback((idToRemove: string) => {
        setFiles(prevFiles => {
            const updatedFiles = prevFiles.filter(f => f.id !== idToRemove);
            // Set flag to trigger remerge effect if needed
            if (mergedPdfResult && updatedFiles.length >= 2) {
                setNeedsRemerge(true);
            } else if (mergedPdfResult && updatedFiles.length < 2) {
                // If deleting makes files < 2, clear the existing preview
                URL.revokeObjectURL(mergedPdfResult.downloadUrl);
                setMergedPdfResult(null);
            }
            return updatedFiles;
        });
    }, [mergedPdfResult]); // Remove handleMergePdfs from here

    // --- Effect to handle automatic re-merging ---
    useEffect(() => {
        if (needsRemerge) {
            handleMergePdfs();
            setNeedsRemerge(false); // Reset the flag
        }
    }, [needsRemerge, files, handleMergePdfs]); // Depend on flag, files, and the merge function

    // --- Preview Actions ---
    const handleDownload = () => {
        if (!mergedPdfResult?.downloadUrl) return;
        const a = document.createElement('a');
        a.href = mergedPdfResult.downloadUrl;
        a.download = mergedPdfResult.fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const handlePrint = () => {
        if (!iframeRef.current?.contentWindow) return;
        iframeRef.current.contentWindow.focus();
        iframeRef.current.contentWindow.print();
    };

    // --- Reset State ---
    const handleReset = () => {
        setFiles([]);
        setError(null);
        if (mergedPdfResult?.downloadUrl) {
            URL.revokeObjectURL(mergedPdfResult.downloadUrl);
        }
        setMergedPdfResult(null);
        setIsLoading(false);
        const input = document.getElementById('pdfMergeInputControl') as HTMLInputElement;
        if (input) input.value = '';
    }

    // Cleanup object URLs
    useEffect(() => {
        return () => {
            if (mergedPdfResult?.downloadUrl) {
                URL.revokeObjectURL(mergedPdfResult.downloadUrl);
            }
        };
    }, [mergedPdfResult]);


    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-12 lg:p-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="z-10 max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-8">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">Merge PDF Files</h1>
                    <p className="text-center text-indigo-100 mt-2 text-sm md:text-base">Combine multiple PDFs into one single document. Drag to reorder.</p>
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                    {/* Upload Area */}
                    <div className="mb-8">
                        <div
                            className="relative border-2 border-dashed border-indigo-300 rounded-xl p-10 sm:p-12 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 ease-in-out group"
                            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-indigo-500', 'bg-indigo-50'); }}
                            onDragLeave={(e) => { e.currentTarget.classList.remove('border-indigo-500', 'bg-indigo-50'); }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.remove('border-indigo-500', 'bg-indigo-50');
                                handleFileChange(e.dataTransfer.files);
                            }}
                        >
                            <input
                                type="file"
                                id="pdfMergeInputControl"
                                accept="application/pdf"
                                multiple // Allow multiple file selection
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => handleFileChange(e.target.files)}
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-300 mb-3 sm:mb-4" />
                                <p className="text-base sm:text-lg font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-300">Drag & drop PDF files here</p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1">or click to select files</p>
                            </div>
                        </div>
                    </div>

                    {/* File List & Reorder Area */}
                    {files.length > 0 && (
                        <div className="mb-8 border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 px-1">Files to Merge ({files.length}):</h2>
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                <SortableContext items={files} strategy={verticalListSortingStrategy}>
                                    <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                                        {files.map((pdfFile) => (
                                            <SortableFileItem key={pdfFile.id} id={pdfFile.id} pdfFile={pdfFile} onDelete={handleDeleteFile} />
                                        ))}
                                    </div>
                                </SortableContext>
                            </DndContext>
                        </div>
                    )}

                    {/* Error Display */}
                    {error && !mergedPdfResult && ( // Show general errors only before result
                        <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-sm mx-auto max-w-2xl mb-6" role="alert">
                            <div className="flex items-center">
                                <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                                <p className="font-bold">Error</p>
                            </div>
                            <p className="ml-8 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Merge Button / Loading / Result */}
                    <div className="text-center mt-8 sm:mt-10">
                        {!mergedPdfResult ? (
                            <button
                                onClick={() => handleMergePdfs()}
                                disabled={isLoading || files.length < 2}
                                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:transform-none"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-2 sm:mr-3 h-5 w-5" />
                                        Merging...
                                    </>
                                ) : (
                                    <>
                                        <Layers className="-ml-1 mr-1.5 sm:mr-2 h-5 w-5" />
                                        Merge {files.length || 0} PDF{(!files || files.length !== 1) ? 's' : ''}
                                    </>
                                )}
                            </button>
                        ) : (
                            <p className="text-gray-600 italic">PDF merged. Preview below or reorder files to merge again.</p>
                        )}
                    </div>
                </div>

                {/* --- Conditional Preview UI (remains the same) --- */}
                {mergedPdfResult && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-center text-gray-700">Merged PDF Preview</h2>

                        {error && mergedPdfResult && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 shadow-sm max-w-2xl mx-auto" role="alert">
                            </div>
                        )}

                        <div className="mb-6 md:mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-inner bg-gray-100" style={{ height: '70vh' }}>
                            <iframe
                                ref={iframeRef}
                                src={mergedPdfResult.downloadUrl}
                                title="Merged PDF Preview"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pt-4">
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Download className="-ml-1 mr-2 h-5 w-5" />
                                Download PDF
                            </button>
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Printer className="-ml-1 mr-2 h-5 w-5" />
                                Print PDF
                            </button>
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            >
                                <Upload className="-ml-1 mr-2 h-5 w-5" />
                                Merge More PDFs
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
} 