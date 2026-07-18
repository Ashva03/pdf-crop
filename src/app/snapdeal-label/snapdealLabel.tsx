"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { CropDimension, snapdealLabelCropDimensions, platformConfigs, generateLabelCropDimensions } from "@/config/staticData";
import styles from './snapdeal-label.module.css';
import SiteDescription from "@/components/SiteDescription";
import { SnapdealIcon } from "@/components/PlatformIcons";

export default function SnapdealLabel() {
    const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

    const handleNumPagesChange = (numPages: number) => {
        // Generate crop dimensions based on the actual number of pages
        const dimensions = generateLabelCropDimensions(numPages, snapdealLabelCropDimensions); // Use snapdeal dimensions
        setCropDimensions(dimensions);
    };

    return (
        <div>
            {/* Platform-specific Header */}
            <div className={styles.pageHeader_snapdeal}>
                <h1>
                    <SnapdealIcon className={styles.platformIcon} width={36} height={36} />
                    Snapdeal Shipping Label Cropper
                </h1>
                <p>Quickly crop your Snapdeal PDF labels to the standard size.</p>
            </div>
            {React.createElement('amp-ad', {
                width: "100vw",
                height: "320",
                type: "adsense",
                layout: "fixed-height",
                "data-ad-client": "ca-pub-6259586123575519",
                "data-ad-slot": "7712907827",
                "data-auto-format": "rspv",
                "data-full-width": ""
            }, React.createElement('div', { placeholder: '' }))}
            <PDFCropper
                platformConfig={platformConfigs.snapdeal} // Use snapdeal config
                cropDimensions={cropDimensions}
                onNumPagesChange={handleNumPagesChange}
            />

            <div className={styles.descriptionContainer}>
                <h2>Snapdeal Seller Zone Sizing & Printing Guide</h2>
                <p>
                    For merchants processing orders on the Snapdeal Seller Zone, standard shipping compliance is essential for fast dispatch times and high customer ratings. Snapdeal labels are downloaded as PDFs that often contain unnecessary borders, margins, or multiple labels on a single page, depending on your printer settings.
                </p>
                <p>
                    Our Snapdeal PDF shipping label cropper isolates the active label area automatically, resizing it to standard 4" x 6" (A6) dimensions. This guarantees that Snapdeal's barcodes, buyer details, and logistics routing numbers are clear for regional delivery agents.
                </p>
                
                <h3>Snapdeal Shipping Label Guidelines</h3>
                <p>
                    To ensure smooth handling by Snapdeal's courier partners:
                </p>
                <ul className={styles.specsList} style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Dimensions:</strong> Keep the label to the standard A6 layout (105mm x 148mm). This fits standard thermal rolls and packaging pouches perfectly.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Tracking and Route Barcodes:</strong> The label contains a Snapdeal tracking number barcode and an internal route code. Ensure these are completely visible and not truncated by margins.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>No Manual Rescaling:</strong> Manually resizing labels in PDF readers can distort the barcode aspect ratio. Our tool performs lossless cropping, retaining the original barcode proportion so it remains scan-ready.
                    </li>
                </ul>

                <h3>Step-by-Step Guide for Snapdeal Sellers</h3>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Download from Seller Zone:</strong> Navigate to your Snapdeal Seller Zone, mark orders as packed, and download the shipping label PDF.
                    </li>
                    <li>
                        <strong>Select and Upload:</strong> Upload the PDF file to our web cropper.
                    </li>
                    <li>
                        <strong>Visual Trim:</strong> The tool auto-detects the label borders. You can make fine adjustments using the crop rectangle handles.
                    </li>
                    <li>
                        <strong>Download Cropped PDF:</strong> Download the file. The tool scales the text dynamically to ensure maximum readibility.
                    </li>
                    <li>
                        <strong>Print directly:</strong> Load your A6 thermal paper roll, send the PDF to your thermal printer, and affix it to the parcel.
                    </li>
                </ol>

                <h3>Frequently Asked Questions (FAQ) for Snapdeal Sellers</h3>
                <div style={{ marginTop: "1.5rem" }}>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Why should I crop my Snapdeal labels rather than printing them directly?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            Directly printing A4 sheets onto A6 thermal labels causes the text and barcodes to shrink, making them difficult to read or scan. Trimming margins first and printing at the native A6 scale keeps details readable.
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Are my documents secure when using this online tool?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            Yes. The cropping software operates completely in-browser via JavaScript. No PDF files are uploaded to our servers, assuring data security for your customers' details.
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: What settings should I use for thermal printing?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            Choose 4" x 6" or A6 paper in your printer preferences, set margins to "None", and keep quality at 300 DPI or higher to keep barcode lines clean.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add the Site Description and Blog Section */}
            <SiteDescription />
        </div>
    );
} 