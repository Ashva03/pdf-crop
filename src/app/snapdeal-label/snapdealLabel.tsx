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
                <h2>Snapdeal Shipping Label Requirements & Best Practices</h2>
                <p>
                    Understanding Snapdeal's shipping label specifications is crucial for successful order fulfillment. Our tool helps you meet these requirements while optimizing your shipping process.
                </p>
                
                <h3>Snapdeal Label Specifications</h3>
                <ul className={styles.specsList}>
                    <li><strong>Label Size:</strong> A6 (105mm × 148mm) is the standard format</li>
                    <li><strong>Print Quality:</strong> Minimum 300 DPI for clear barcode scanning</li>
                    <li><strong>Paper Type:</strong> Thermal paper or regular A4 paper</li>
                    <li><strong>Required Elements:</strong> Snapdeal barcode, tracking number, delivery address, and seller details</li>
                </ul>

                <h3>How to Process Your Snapdeal Labels</h3>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Download from Seller Panel:</strong> Access your Snapdeal Seller Panel and download the shipping label PDF for your order.
                    </li>
                    <li>
                        <strong>Upload to Our Tool:</strong> Click the upload button and select your Snapdeal label PDF file.
                    </li>
                    <li>
                        <strong>Automatic Optimization:</strong> Our tool automatically applies Snapdeal's standard dimensions and optimizes the label for printing.
                    </li>
                    <li>
                        <strong>Preview & Adjust:</strong> Review the preview and make any necessary adjustments to ensure all elements are clearly visible.
                    </li>
                    <li>
                        <strong>Download & Print:</strong> Generate your optimized label and print it using a thermal printer or regular printer.
                    </li>
                </ol>

                <h3>Best Practices for Snapdeal Shipping</h3>
                <ul className={styles.bestPracticesList}>
                    <li>Always verify the delivery address before printing</li>
                    <li>Ensure the Snapdeal barcode is clear and scannable</li>
                    <li>Use high-quality paper to prevent smudging</li>
                    <li>Keep a digital copy of the label for reference</li>
                    <li>Print labels in batches to save time</li>
                </ul>

                <div className={styles.tipsBox}>
                    <h4>Pro Tips</h4>
                    <ul>
                        <li>Regularly check Snapdeal's seller guidelines for any updates to label requirements</li>
                        <li>Consider using a thermal printer for faster, more efficient label printing</li>
                        <li>Keep your printer's firmware updated for optimal performance</li>
                        <li>Maintain a backup of all shipping labels for at least 90 days</li>
                        <li>Use the batch printing feature for handling multiple orders efficiently</li>
                    </ul>
                </div>
            </div>

            {/* Add the Site Description and Blog Section */}
            <SiteDescription />
        </div>
    );
} 