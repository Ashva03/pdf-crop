"use client";

import { useState, useRef, useEffect } from "react";
import * as PDFLib from "pdf-lib";
import styles from './amazon-label.module.css';
import SiteDescription from "@/components/SiteDescription";
import { Document, Page, pdfjs } from "react-pdf";
import { AmazonIcon } from "@/components/PlatformIcons";

// Initialize PDF.js worker on client side
if (typeof window !== "undefined") {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

// Helper function to extract text from a PDF page
async function extractTextFromPage(pdfDoc: PDFLib.PDFDocument, pageIndex: number): Promise<string> {
    try {
        if (typeof window === "undefined") return "";

        // Convert the PDFLib document to bytes
        const pdfBytes = await pdfDoc.save();

        // Use pdf.js to extract text
        const pdf = await pdfjs.getDocument({ data: pdfBytes }).promise;
        if (pageIndex >= pdf.numPages) return "";

        const page = await pdf.getPage(pageIndex + 1);
        const textContent = await page.getTextContent();

        // Extract text from content items
        const text = textContent.items
            .map(item => 'str' in item ? item.str : '')
            .join(' ');

        console.log(`[Page ${pageIndex + 1}] Raw extracted text (first 300 chars): ${text.substring(0, 300)}`);
        return text;
    } catch (error) {
        console.error("Error extracting text:", error);
        return "";
    }
}

// Function to extract SKU information from extracted text
function extractSkuInfo(text: string, printOption: string): string {
    // Only use these as absolute last resort fallbacks
    const defaultProduct = "Brafozy Women's Cotton Lightly Padded Non-Wired Solid Casual Style Lingerie Set (JDWE009_Black_34)";
    const defaultSkuId = "B08GKCG214";
    const defaultSellerSku = "WUDH009_BK_34_Brafozy_KD";

    if (!text || text.trim().length < 10) {
        console.warn("No text extracted or text too short, using fallback values");
        return printOption === "printSkuId"
            ? `${defaultSkuId} (${defaultSellerSku})`
            : `${defaultProduct} | ${defaultSkuId} (${defaultSellerSku})`;
    }

    // Additional patterns for finding product info
    // Amazon invoice typically includes product details in various formats
    const productPatterns = [
        // More specific patterns for product names in Amazon invoices
        /description[\s:]*([^|]+)/i,
        /item[\s:]*([^|]+)/i,
        /description[\s:]*([\w\s\'-]+\([^)]+\))/i,
        /style[\s:]*([\w\s\'-]+)/i,
        /title[\s:]*([\w\s\'-]+)/i
    ];

    // Multiple patterns for ASIN/SKU - Amazon uses B0/B1/B2... followed by 8 or 9 chars
    const skuPatterns = [
        /B0[0-9A-Z]{8}/,  // Standard B0 format
        /B1[0-9A-Z]{8}/,  // Alternate B1 format
        /B2[0-9A-Z]{8}/,  // Alternate B2 format
        /asin[\s:]*([B][0-9A-Z]{9})/i,  // Labeled as ASIN
        /sku[\s:]*([B][0-9A-Z]{9})/i     // Labeled as SKU
    ];

    // Patterns for seller SKU which varies more widely
    const sellerSkuPatterns = [
        /\(([A-Z0-9_]+)\)/,                    // (SKU_CODE) format
        /seller[\s]*sku[\s:]*([A-Z0-9_]+)/i,   // "Seller SKU: CODE"
        /neel[0-9]+[_][a-z]+[_][0-9]+/i,       // Format like NEEL009_BK_34
        /[A-Z0-9]+[_][A-Z]+[_][0-9]+[_][A-Z]+/i // Format like NEEL009_BK_34_BRAND
    ];

    // Extract product name
    let productName = "";
    for (const pattern of productPatterns) {
        const match = text.match(pattern);
        if (match && match[1] && match[1].trim().length > 5) {
            productName = match[1].trim();
            console.log(`Found product name: ${productName}`);
            break;
        }
    }

    // Extract SKU ID (ASIN)
    let skuId = "";
    for (const pattern of skuPatterns) {
        const match = text.match(pattern);
        if (match) {
            // If the pattern has a capturing group, use that, otherwise use the whole match
            skuId = match[1] ? match[1] : match[0];
            console.log(`Found SKU ID: ${skuId}`);
            break;
        }
    }

    // Extract seller SKU
    let sellerSku = "";
    for (const pattern of sellerSkuPatterns) {
        const match = text.match(pattern);
        if (match && match[1] && match[1].length > 3) {
            sellerSku = match[1];
            console.log(`Found seller SKU: ${sellerSku}`);
            break;
        } else if (match && match[0] && match[0].length > 3) {
            // Some patterns might not have capturing groups
            sellerSku = match[0];
            console.log(`Found seller SKU (from full match): ${sellerSku}`);
            break;
        }
    }

    // Check if we found valid data, otherwise use fallbacks
    if (!productName) {
        console.warn("Could not extract product name, using fallback");
        productName = defaultProduct;
    }

    if (!skuId) {
        console.warn("Could not extract SKU ID, using fallback");
        skuId = defaultSkuId;
    }

    if (!sellerSku) {
        console.warn("Could not extract seller SKU, using fallback");
        sellerSku = defaultSellerSku;
    }

    // Create the formatted output
    console.log(`Final SKU info: ${printOption === "printSkuId" ?
        `ASIN: ${skuId} | Seller SKU: ${sellerSku}` :
        `${productName} | ASIN: ${skuId} | Seller SKU: ${sellerSku}`}`);

    return printOption === "printSkuId" ?
        ` ${skuId} | ${sellerSku}` :
        `${productName} | ${skuId} | ${sellerSku}`;
}

export default function AmazonLabel() {
    // No longer need cropDimensions state since we're not cropping
    // const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>("");
    const [printOption, setPrintOption] = useState<string>("printSkuId");
    const [invoiceOption, setInvoiceOption] = useState<string>("removeInvoice");
    const [processing, setProcessing] = useState<boolean>(false);
    const [processedPdfUrl, setProcessedPdfUrl] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleNumPagesChange = (numPages: number) => {
        setNumPages(numPages);
        // No longer need to generate crop dimensions
        // const dimensions = generateLabelCropDimensions(numPages, amazonLabelCropDimensions);
        // setCropDimensions(dimensions);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setFileName(file.name);
            setProcessedPdfUrl(null);
            setProcessing(false);
        }
    };

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handlePrintOptionChange = (option: string) => {
        setPrintOption(option);
        // Reset processing state when options change to show generate button again
        setProcessing(false);
        if (processedPdfUrl) {
            URL.revokeObjectURL(processedPdfUrl);
            setProcessedPdfUrl(null);
        }
    };

    const handleInvoiceOptionChange = (option: string) => {
        setInvoiceOption(option);
        // Reset processing state when options change to show generate button again
        setProcessing(false);
        if (processedPdfUrl) {
            URL.revokeObjectURL(processedPdfUrl);
            setProcessedPdfUrl(null);
        }
    };

    const handlePageChange = (delta: number) => {
        setCurrentPage((prevPage) =>
            Math.max(1, Math.min(prevPage + delta, numPages))
        );
    };

    const processPdf = async () => {
        if (!selectedFile) {
            setError("Please select a file first");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);
        setProcessing(true);

        try {
            // Load the selected PDF file
            const arrayBuffer = await selectedFile.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
            const newPdfDoc = await PDFLib.PDFDocument.create();

            // Get the number of pages
            const docPages = pdfDoc.getPages().length;
            handleNumPagesChange(docPages);

            // Process pages based on selected options
            let processedPages = 0;
            let skippedPages = 0;

            for (let pageNum = 1; pageNum <= docPages; pageNum++) {
                const pageIndex = pageNum - 1;
                const page = pdfDoc.getPages()[pageIndex];
                const { width, height } = page.getSize();

                // No longer need crop dimensions since we're not cropping the pages
                // const cropBox = cropDimensions[pageNum] || platformConfigs.amazon.defaultCropDimension;

                const isOddPage = pageNum % 2 === 1; // Shipping label pages (1, 3, 5...)
                const isEvenPage = pageNum % 2 === 0; // Invoice pages (2, 4, 6...)

                // Handle page inclusion based on invoiceOption
                if (isEvenPage && invoiceOption === "removeInvoice") {
                    // Skip adding this page to the output if it's an invoice page and removeInvoice is selected
                    skippedPages++;
                    continue;
                }

                // Include this page in the output
                if (isOddPage) {
                    // This is a shipping label page - keep original dimensions instead of cropping
                    const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
                    const newPage = newPdfDoc.addPage([width, height]); // Use original size

                    // Draw the shipping label content without cropping
                    const embeddedPage = await newPdfDoc.embedPage(copiedPage);
                    newPage.drawPage(embeddedPage, {
                        x: 0,
                        y: 0,
                        width: width,
                        height: height,
                    });

                    // If there's a next page (invoice) and we're not on the last page, extract SKU info
                    if (pageNum < docPages) {
                        const nextPageIndex = pageIndex + 1;

                        console.log(`Processing shipping label page ${pageNum}, extracting SKU from invoice page ${pageNum + 1}`);

                        // Extract text from the invoice page
                        const invoiceText = await extractTextFromPage(pdfDoc, nextPageIndex);

                        // Extract SKU information from the invoice text
                        const skuInfo = extractSkuInfo(invoiceText, printOption);

                        // Improved dynamic sizing for rectangle
                        const fontSize = printOption === "printSkuId" ? 14 : 12; // Slightly smaller font

                        // Calculate text dimensions for better sizing
                        // Split the text into words for word-wrapping calculation
                        const words = skuInfo.split(' ');
                        // Maximum rectangle width - either 500 points or page width minus margins
                        const maxRectWidth = Math.min(width - 100, 500);

                        // Calculate lines needed based on word wrapping
                        const lines = [''];
                        let lineIndex = 0;
                        let longestLineWidth = 0;

                        // Use a more generous character width estimate (0.7 instead of 0.5)
                        const charWidthFactor = 0.7;

                        words.forEach(word => {
                            // Estimate if adding this word would exceed the max width
                            const testLine = lines[lineIndex] + (lines[lineIndex].length > 0 ? ' ' : '') + word;
                            const lineWidth = testLine.length * (fontSize * charWidthFactor); // More accurate width estimate

                            if (lineWidth > maxRectWidth - 60) { // Increased padding from 40 to 60
                                // Start a new line
                                lineIndex++;
                                lines[lineIndex] = word;
                            } else {
                                // Add to current line
                                lines[lineIndex] = testLine;
                                longestLineWidth = Math.max(longestLineWidth, lineWidth);
                            }
                        });

                        // Calculate optimal rectangle dimensions with extra padding
                        const rectWidth = Math.min(longestLineWidth + 80, maxRectWidth); // Increased padding from 40 to 80
                        const lineHeight = fontSize * 1.2; // 120% of font size for line spacing
                        const textHeight = lines.length * lineHeight;
                        const rectHeight = Math.min(textHeight + 30, 120); // Increased padding from 20 to 30

                        // Position rectangle on the page - adjust Y position to avoid overlap
                        const maxSkuY = height - 200; // Don't go higher than this
                        const minSkuY = 165; // Don't go lower than this
                        const skuY = Math.min(Math.max(rectHeight + 20, minSkuY), maxSkuY);

                        // Center the rectangle horizontally
                        const rectX = (width - rectWidth) / 2;

                        console.log(`Drawing SKU info with ${lines.length} lines. Box: ${rectWidth}x${rectHeight} at (${rectX}, ${skuY})`);

                        // Draw a white background for the SKU info
                        newPage.drawRectangle({
                            x: rectX,
                            y: skuY - rectHeight + 20, // Position to align text correctly
                            width: rectWidth,
                            height: rectHeight,
                            color: PDFLib.rgb(1, 1, 1), // White background
                            borderColor: PDFLib.rgb(0, 0, 0), // Black border
                            borderWidth: 1,
                            opacity: 0.9,
                        });

                        // Draw the text, handling multiple lines if needed
                        if (lines.length === 1) {
                            // Single line text - center it
                            newPage.drawText(skuInfo, {
                                x: rectX + 40, // Increased padding from 20 to 40
                                y: skuY,
                                size: fontSize,
                                color: PDFLib.rgb(0, 0, 0),
                                maxWidth: rectWidth - 80, // Increased padding from 40 to 80
                            });
                        } else {
                            // Multi-line text - draw each line
                            lines.forEach((line, index) => {
                                newPage.drawText(line, {
                                    x: rectX + 40, // Increased padding from 20 to 40
                                    y: skuY - (index * lineHeight),
                                    size: fontSize,
                                    color: PDFLib.rgb(0, 0, 0),
                                });
                            });
                        }
                    }
                } else {
                    // This is an invoice page - only include if keepInvoice is selected
                    // We've already filtered out invoice pages if removeInvoice is selected
                    const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
                    const newPage = newPdfDoc.addPage([width, height]); // Use original size for invoice

                    // Draw the entire invoice page without cropping
                    const embeddedPage = await newPdfDoc.embedPage(copiedPage);
                    newPage.drawPage(embeddedPage, {
                        x: 0,
                        y: 0,
                        width: width,
                        height: height,
                    });
                }

                processedPages++;
            }

            // Save the processed PDF
            const pdfBytes = await newPdfDoc.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            setProcessedPdfUrl(url);

            const pagesAction = invoiceOption === "removeInvoice" ? "shipping labels" : "pages";
            setSuccess(`Successfully processed ${processedPages} ${pagesAction}!
                ${skippedPages > 0 ? `(${skippedPages} invoice pages skipped)` : ""}`);

        } catch (error) {
            console.error("Error processing PDF:", error);
            setError("Failed to process the PDF. Please try again.");
            setProcessing(false);
        } finally {
            setLoading(false);
        }
    };

    const handlePrintPdf = () => {
        if (!processedPdfUrl) return;

        const printWindow = window.open(processedPdfUrl, "_blank");
        if (printWindow) {
            printWindow.addEventListener('load', () => {
                printWindow.print();
            });
        }
    };

    const handleDownloadPdf = () => {
        if (!processedPdfUrl || !selectedFile) return;

        const a = document.createElement("a");
        const originalFileName = selectedFile.name.replace(".pdf", "");
        a.download = `${originalFileName}_processed.pdf`;
        a.href = processedPdfUrl;
        a.click();
    };

    const handlePrepareLabels = () => {
        if (!selectedFile) {
            setError("Please select a file first");
            return;
        }

        processPdf();
    };

    // Clean up object URLs when component unmounts
    useEffect(() => {
        return () => {
            if (processedPdfUrl) {
                URL.revokeObjectURL(processedPdfUrl);
            }
        };
    }, [processedPdfUrl]);

    return (
        <div>
            {/* Platform-specific Header */}
            <div className={styles.pageHeader_amazon}>
                <h1>
                    <AmazonIcon className={styles.platformIcon} width={36} height={36} />
                    Amazon Shipping Label Processor
                </h1>
                <p>Process your Amazon PDF labels and add SKU information easily.</p>
            </div>

            {/* File Selection UI */}
            <div className={styles.optionsContainer}>
                <div className={styles.fileSelection}>
                    <span className={styles.fileLabel}>Choose File</span>
                    <div className={styles.fileInput}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        />
                        <button
                            onClick={handleFileButtonClick}
                            className={styles.fileButton}
                        >
                            Choose File
                        </button>
                        <span className={styles.fileName}>{fileName || "No file selected"}</span>
                    </div>
                </div>

                {/* Print Options */}
                <div className={styles.optionGroup}>
                    <div
                        className={`${styles.optionRadio} ${printOption === "printSkuId" ? styles.selected : ""}`}
                        onClick={() => handlePrintOptionChange("printSkuId")}
                    >
                        <div className={styles.radioCircle}>
                            {printOption === "printSkuId" && <div className={styles.radioInner}></div>}
                        </div>
                        <span>Print SKU Id</span>
                    </div>

                    <div
                        className={`${styles.optionRadio} ${printOption === "printSkuWithDesc" ? styles.selected : ""}`}
                        onClick={() => handlePrintOptionChange("printSkuWithDesc")}
                    >
                        <div className={styles.radioCircle}>
                            {printOption === "printSkuWithDesc" && <div className={styles.radioInner}></div>}
                        </div>
                        <span>Print SKU with Description</span>
                    </div>
                </div>

                {/* Invoice Options */}
                <div className={styles.optionGroup}>
                    <div
                        className={`${styles.optionRadio} ${invoiceOption === "removeInvoice" ? styles.selected : ""}`}
                        onClick={() => handleInvoiceOptionChange("removeInvoice")}
                    >
                        <div className={styles.radioCircle}>
                            {invoiceOption === "removeInvoice" && <div className={styles.radioInner}></div>}
                        </div>
                        <span>Remove Invoice</span>
                    </div>

                    <div
                        className={`${styles.optionRadio} ${invoiceOption === "keepInvoice" ? styles.selected : ""}`}
                        onClick={() => handleInvoiceOptionChange("keepInvoice")}
                    >
                        <div className={styles.radioCircle}>
                            {invoiceOption === "keepInvoice" && <div className={styles.radioInner}></div>}
                        </div>
                        <span>Keep Invoice</span>
                    </div>
                </div>

                {/* Action Button - Show Generate button any time we're not in processing state */}
                <button
                    className={styles.prepareButton}
                    onClick={handlePrepareLabels}
                    disabled={!selectedFile || loading}
                >
                    {loading ? 'Processing...' : 'Generate Labels'}
                </button>
            </div>

            {/* Processing Results UI */}
            {processing && processedPdfUrl && (
                <div className={styles.pdfCropperWrapper}>
                    {loading && <div className={styles.loadingIndicator}>Processing your PDF...</div>}

                    {error && <div className={styles.errorMessage}>{error}</div>}
                    {success && <div className={styles.successMessage}>{success}</div>}

                    <div className={styles.resultContainer}>
                        {/* PDF Preview */}
                        <div className={styles.pdfPreview}>
                            <Document
                                file={processedPdfUrl}
                                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                                onLoadError={() => setError("Failed to load processed PDF")}
                            >
                                <Page
                                    pageNumber={currentPage}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </Document>

                            {numPages > 1 && (
                                <div className={styles.pageControls}>
                                    <button
                                        onClick={() => handlePageChange(-1)}
                                        disabled={currentPage <= 1}
                                        className={styles.pageButton}
                                    >
                                        Previous
                                    </button>
                                    <span className={styles.pageInfo}>
                                        Page {currentPage} of {numPages}
                                    </span>
                                    <button
                                        onClick={() => handlePageChange(1)}
                                        disabled={currentPage >= numPages}
                                        className={styles.pageButton}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.actionButtons}>
                            <button
                                onClick={handlePrintPdf}
                                className={styles.printButton}
                            >
                                Print PDF
                            </button>
                            <button
                                onClick={handleDownloadPdf}
                                className={styles.downloadButton}
                            >
                                Download PDF
                            </button>
                            <button
                                onClick={() => {
                                    setProcessing(false);
                                    if (processedPdfUrl) {
                                        URL.revokeObjectURL(processedPdfUrl);
                                        setProcessedPdfUrl(null);
                                    }
                                }}
                                className={styles.backButton}
                            >
                                Back to Options
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.descriptionContainer}>
                <h2>Amazon Shipping Label Requirements & Best Practices</h2>
                <p>
                    Understanding Amazon's shipping label specifications is crucial for successful order fulfillment. Our tool helps you meet these requirements while optimizing your shipping process.
                </p>
                
                <h3>Amazon Label Specifications</h3>
                <ul className={styles.specsList}>
                    <li><strong>Label Size:</strong> 4" x 6" (101.6mm × 152.4mm) is the standard format</li>
                    <li><strong>Print Quality:</strong> Minimum 300 DPI for clear barcode scanning</li>
                    <li><strong>Paper Type:</strong> Thermal paper or regular A4 paper</li>
                    <li><strong>Required Elements:</strong> Amazon barcode, tracking number, delivery address, and seller details</li>
                </ul>

                <h3>How to Process Your Amazon Labels</h3>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Download from Seller Central:</strong> Access your Amazon Seller Central account and download the shipping label PDF for your order.
                    </li>
                    <li>
                        <strong>Upload to Our Tool:</strong> Click the upload button and select your Amazon label PDF file.
                    </li>
                    <li>
                        <strong>Choose Processing Options:</strong>
                        <ul>
                            <li>Add SKU information to labels</li>
                            <li>Include product descriptions</li>
                            <li>Remove invoice pages</li>
                            <li>Keep invoice pages for reference</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Preview & Adjust:</strong> Review the preview and make any necessary adjustments to ensure all elements are clearly visible.
                    </li>
                    <li>
                        <strong>Download & Print:</strong> Generate your optimized label and print it using a thermal printer or regular printer.
                    </li>
                </ol>

                <h3>Best Practices for Amazon Shipping</h3>
                <ul className={styles.bestPracticesList}>
                    <li>Always verify the delivery address before printing</li>
                    <li>Ensure the Amazon barcode is clear and scannable</li>
                    <li>Use high-quality paper to prevent smudging</li>
                    <li>Keep a digital copy of the label for reference</li>
                    <li>Print labels in batches to save time</li>
                </ul>

                <div className={styles.tipsBox}>
                    <h4>Pro Tips</h4>
                    <ul>
                        <li>Regularly check Amazon's seller guidelines for any updates to label requirements</li>
                        <li>Consider using a thermal printer for faster, more efficient label printing</li>
                        <li>Keep your printer's firmware updated for optimal performance</li>
                        <li>Maintain a backup of all shipping labels for at least 90 days</li>
                        <li>Use the SKU information feature to help with inventory management</li>
                    </ul>
                </div>
            </div>

            {/* Add the Site Description and Blog Section */}
            <SiteDescription />
        </div>
    );
} 