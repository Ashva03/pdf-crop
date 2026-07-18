'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
    Upload,
    GripVertical,
    Loader2,
    Save,
    Download,
    Trash2,
    AlertTriangle,
    CheckCircle,
    RotateCcw
} from 'lucide-react';

// Import @dnd-kit components and hooks
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
    rectSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Configure pdfjs worker locally
const PDF_WORKER_PATH = '/pdf.worker.min.js';

interface PageThumbnail {
    id: string; // Unique ID for dnd - MUST remain string for dnd-kit
    pageNum: number; // Original page number (1-based)
    thumbnailUrl: string; // Data URL for the image
}

interface EditedPdfResult {
    fileName: string;
    downloadUrl: string;
}

// --- Sortable Item Component (for @dnd-kit) ---
function SortablePageItem({ id, page, onDelete }: { id: string; page: PageThumbnail; onDelete: (id: string) => void }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 10 : 'auto',
        width: '100px', // Fixed width for thumbnails
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`relative group border rounded-lg shadow-md bg-white ${isDragging ? 'ring-2 ring-indigo-500 shadow-xl' : 'shadow-sm'}`}
        >
            <div {...attributes} {...listeners} className="absolute top-1 left-1 text-gray-400 hover:text-gray-700 cursor-grab p-0.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical size={18} />
            </div>
            <button
                onClick={() => onDelete(id)}
                className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 shadow z-10"
                aria-label="Delete page"
            >
                <Trash2 size={14} />
            </button>
            <img
                src={page.thumbnailUrl}
                alt={`Page ${page.pageNum}`}
                className={`w-full h-auto object-contain rounded-md ${isDragging ? 'opacity-80' : ''}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center text-xs py-0.5 rounded-b-md">
                <span className="text-gray-300">P. {page.pageNum}</span>
            </div>
        </div>
    );
}
// --- End Sortable Item ---

export default function EditPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageThumbnail[]>([]);
    const [isLoadingThumbnails, setIsLoadingThumbnails] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [editedPdfResult, setEditedPdfResult] = useState<EditedPdfResult | null>(null);
    const [originalFileName, setOriginalFileName] = useState<string>('');

    // --- PDF Loading & Thumbnail Generation ---
    const generateThumbnails = useCallback(async (pdfFile: File) => {
        if (!pdfFile) return;
        setIsLoadingThumbnails(true);
        setError(null);
        setPages([]); // Clear previous pages
        setEditedPdfResult(null); // Clear previous result
        setOriginalFileName(pdfFile.name);

        try {
            // Dynamically import pdfjsLib here
            const pdfjsLib = await import('pdfjs-dist');
            // Set worker source *after* import
            pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_PATH;

            const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(pdfFile));
            const pdf = await loadingTask.promise;
            const numPages = pdf.numPages;
            const thumbnailPromises: Promise<PageThumbnail | null>[] = [];

            for (let i = 1; i <= numPages; i++) {
                thumbnailPromises.push(
                    (async (pageNum): Promise<PageThumbnail | null> => {
                        try {
                            const page = await pdf.getPage(pageNum);
                            const viewport = page.getViewport({ scale: 0.3 });
                            const canvas = document.createElement('canvas');
                            const context = canvas.getContext('2d');
                            if (!context) throw new Error('Could not get canvas context');

                            canvas.height = viewport.height;
                            canvas.width = viewport.width;

                            const renderContext = {
                                canvasContext: context,
                                viewport: viewport,
                            };
                            await page.render(renderContext).promise;
                            const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.7);
                            return {
                                id: `page-${pageNum}`,
                                pageNum: pageNum,
                                thumbnailUrl: thumbnailUrl,
                            };
                        } catch (renderError) {
                            console.error(`Error rendering page ${pageNum}:`, renderError);
                            return null;
                        }
                    })(i)
                );
            }

            const generatedPages = (await Promise.all(thumbnailPromises)).filter(p => p !== null) as PageThumbnail[];
            setPages(generatedPages);
        } catch (pdfError: unknown) {
            console.error('Error loading PDF:', pdfError);
            let message = 'Unknown error';
            if (pdfError instanceof Error) {
                message = pdfError.message;
            }
            setError(`Failed to load PDF: ${message}`);
            setFile(null);
        } finally {
            setIsLoadingThumbnails(false);
        }
    }, []);

    // --- File Handling ---
    const handleFileChange = useCallback((selectedFile: File | null) => {
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf') {
                setFile(selectedFile);
                setError(null);
                setPages([]);
                setEditedPdfResult(null);
                generateThumbnails(selectedFile);
            } else {
                setError('Invalid file type. Please select a PDF file.');
                setFile(null);
                setPages([]);
                setEditedPdfResult(null);
            }
        }
    }, [generateThumbnails]);

    // --- @dnd-kit Drag Logic ---
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setPages((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }, []);
    // --- End @dnd-kit Drag Logic ---

    // --- Page Deletion ---
    const handleDeletePage = useCallback((idToDelete: string) => {
        setPages((prevPages) => prevPages.filter((page) => page.id !== idToDelete));
    }, []);

    // --- Save Changes (API Call) ---
    const handleSaveChanges = async () => {
        if (!file || pages.length === 0) {
            setError('No file selected or no pages remaining.');
            return;
        }

        setIsProcessing(true);
        setError(null);
        setEditedPdfResult(null);

        const formData = new FormData();
        formData.append('pdf', file);
        const pageOrder = pages.map(p => p.pageNum);
        formData.append('pageOrder', JSON.stringify(pageOrder));

        try {
            const response = await fetch('/api/edit-pdf', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'An unknown error occurred.' }));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            setEditedPdfResult({
                fileName: `edited_${originalFileName}`,
                downloadUrl: url
            });

        } catch (err: unknown) {
            let message = 'Failed to save changes.';
            if (err instanceof Error) {
                message = err.message;
            }
            setError(message);
            console.error('PDF Editing Error:', err);
        } finally {
            setIsProcessing(false);
        }
    };

    // --- Reset State --- 
    const handleReset = () => {
        setFile(null);
        setPages([]);
        setError(null);
        if (editedPdfResult?.downloadUrl) {
            URL.revokeObjectURL(editedPdfResult.downloadUrl);
        }
        setEditedPdfResult(null);
        setIsLoadingThumbnails(false);
        setIsProcessing(false);
        setOriginalFileName('');
        const input = document.getElementById('pdfEditInputControl') as HTMLInputElement;
        if (input) input.value = '';
    }

    // Cleanup object URLs
    useEffect(() => {
        const currentPageUrls = pages.map(p => p.thumbnailUrl);
        return () => {
            currentPageUrls.forEach(url => URL.revokeObjectURL(url));
            if (editedPdfResult?.downloadUrl) {
                URL.revokeObjectURL(editedPdfResult.downloadUrl);
            }
        };
    }, [pages, editedPdfResult]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-12 lg:p-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="z-10 max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden my-8"> {/* Wider for page layout */}
                {/* Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">Edit PDF (Rearrange/Delete Pages)</h1>
                    <p className="text-center text-indigo-100 mt-2 text-sm md:text-base">Upload a PDF, then drag to reorder or click trash to delete pages.</p>
                </div>

                <div className="p-6 sm:p-8 md:p-10">

                    {/* --- Upload Section (Visible when no file or result) --- */}
                    {!file && !editedPdfResult && (
                        <div
                            className="relative border-2 border-dashed border-indigo-300 rounded-xl p-10 sm:p-12 md:p-16 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 ease-in-out group"
                            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-indigo-500', 'bg-indigo-50'); }}
                            onDragLeave={(e) => { e.currentTarget.classList.remove('border-indigo-500', 'bg-indigo-50'); }}
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
                                id="pdfEditInputControl"
                                accept="application/pdf"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="h-12 w-12 sm:h-16 sm:w-16 text-indigo-400 group-hover:text-indigo-600 transition-colors duration-300 mb-4 sm:mb-5" />
                                <p className="text-lg sm:text-xl font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors duration-300">Drag & drop PDF here</p>
                                <p className="text-sm sm:text-base text-gray-500 mt-1">or click to select file</p>
                            </div>
                        </div>
                    )}

                    {/* --- Loading Thumbnails Indicator --- */}
                    {isLoadingThumbnails && (
                        <div className="text-center p-10">
                            <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mx-auto mb-4" />
                            <p className="text-lg font-medium text-gray-700">Loading PDF pages...</p>
                        </div>
                    )}

                    {/* --- Editing UI (@dnd-kit Version) --- */}
                    {!isLoadingThumbnails && pages.length > 0 && (
                        <div>
                            <p className="text-center text-sm text-gray-600 mb-6">Drag pages to reorder, click <Trash2 size={14} className="inline -mt-1" /> to delete.</p>
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                <SortableContext items={pages} strategy={rectSortingStrategy}>
                                    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg min-h-[150px]">
                                        {pages.map((page) => (
                                            <SortablePageItem key={page.id} id={page.id} page={page} onDelete={handleDeletePage} />
                                        ))}
                                    </div>
                                </SortableContext>
                            </DndContext>

                            {/* Save Changes Button */}
                            <div className="text-center mt-8 sm:mt-10">
                                <button
                                    onClick={handleSaveChanges}
                                    disabled={isProcessing || pages.length === 0}
                                    className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:transform-none"
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="animate-spin -ml-1 mr-2 sm:mr-3 h-5 w-5" />
                                            Saving Changes...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="-ml-1 mr-1.5 sm:mr-2 h-5 w-5" />
                                            Save {pages.length} Page{pages.length !== 1 ? 's' : ''}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* --- Error Display --- */}
                    {error && (
                        <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-sm mx-auto max-w-2xl" role="alert">
                            <div className="flex items-center">
                                <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                                <p className="font-bold">Error</p>
                            </div>
                            <p className="ml-8 text-sm">{error}</p>
                        </div>
                    )}

                    {/* --- Result Display --- */}
                    {editedPdfResult && (
                        <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm text-center max-w-lg mx-auto">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-green-800 mb-4">PDF Edited Successfully!</h3>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <a
                                    href={editedPdfResult.downloadUrl}
                                    download={editedPdfResult.fileName}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
                                >
                                    <Download className="-ml-1 mr-2 h-5 w-5" />
                                    Download Edited PDF
                                </a>
                                <button
                                    onClick={handleReset}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
                                >
                                    <RotateCcw className="-ml-1 mr-2 h-5 w-5" />
                                    Edit Another PDF
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* SEO Content Section */}
            <div className="z-10 max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 mb-16 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-600 pb-2 mb-4 inline-block">Online PDF Page Organizer: Reorder & Delete Pages</h2>
                <p className="leading-relaxed mb-4">
                    Managing complex multi-page PDF documents can be difficult without dedicated editing software. Our free online PDF editor provides an easy, visual drag-and-drop solution. Whether you need to reorganize pages in a business report, discard duplicate pages, or change the sequence of a scanned document, you can customize your file layout in seconds.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Features of our Local PDF Editor</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                        <strong>Drag & Drop Organization:</strong> Simply drag the page thumbnails into the correct order. The interface gives you a visual preview of each page before you save changes.
                    </li>
                    <li>
                        <strong>Page Deletion:</strong> Instantly remove blank pages, terms and conditions pages, or redundant invoices from your PDF with a single click.
                    </li>
                    <li>
                        <strong>Privacy-First Processing:</strong> Like all our tools, document rendering occurs entirely on your local device. We use WebAssembly libraries to process the file in your browser sandbox, so your confidential data never reaches remote servers.
                    </li>
                    <li>
                        <strong>High Fidelity Output:</strong> The tool edits document pages without rasterizing text or compressing images, preserving the quality of vector graphics, fonts, and annotations.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How to Rearrange and Edit Your PDF Pages</h3>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li>
                        <strong>Upload:</strong> Click the drop area or drag your PDF directly onto this page.
                    </li>
                    <li>
                        <strong>Visualize & Reorder:</strong> Wait a few seconds for the page thumbnails to render. Hold and drag any thumbnail to position it.
                    </li>
                    <li>
                        <strong>Delete Unneeded Pages:</strong> Hover over any thumbnail and click the trash can icon to discard that specific page from the final document.
                    </li>
                    <li>
                        <strong>Generate Output:</strong> Click the "Save Changes" button. The client-side script compiles the pages and generates a download link.
                    </li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-t pt-6">Frequently Asked Questions (FAQ)</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-900">Q: Is it secure to upload my confidential business reports?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Yes. Your files are never uploaded. The PDF processing is completed on your local machine using standard JavaScript and WebAssembly compiled libraries. This guarantees maximum security and privacy for medical, financial, or personal documents.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Q: Does editing a PDF affect its text searchability?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            No. Our tool edits the page order in the document's structure metadata without modifying the content streams. Your text outlines, hyperlinks, and OCR layers remain fully functional and searchable.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Q: Are there limitations on file size or page count?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            We do not impose limits on file size. However, because processing occurs entirely in your browser's memory, extremely large files (e.g., over 500 pages) may take longer to load thumbnails depending on your system RAM.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
