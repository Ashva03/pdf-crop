"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { CropDimension, snapdealLabelCropDimensions, platformConfigs, generateLabelCropDimensions } from "@/config/staticData";
import styles from './snapdeal-label.module.css';
import SiteDescription from "@/components/SiteDescription";

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
                <h1>Snapdeal Shipping Label Cropper</h1>
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
                <h2>How to Crop Your Snapdeal Label PDF</h2>
                <p>
                    Easily format your Snapdeal shipping labels using our online tool. Just follow these steps:
                </p>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Upload PDF:</strong> Select the Snapdeal label PDF file you wish to crop.
                    </li>
                    <li>
                        <strong>Preview Crop:</strong> Our tool applies standard Snapdeal dimensions. Check the preview for accuracy.
                    </li>
                    <li>
                        <strong>Adjust (Optional):</strong> If needed, drag the crop box corners to fine-tune the cropping area.
                    </li>
                    <li>
                        <strong>Crop & Download:</strong> Click "Crop PDF", then click "Download" to save the formatted Snapdeal labels.
                    </li>
                </ol>
                <p>
                    Get perfectly sized Snapdeal labels ready for printing and shipping your orders efficiently.
                </p>
            </div>

            {/* Add the Site Description and Blog Section */}
            <SiteDescription />
        </div>
    );
} 