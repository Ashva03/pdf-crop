"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { flipkartLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './flipkart-label.module.css';
import SiteDescription from "@/components/SiteDescription";
import React from 'react';
import { FlipkartIcon } from "@/components/PlatformIcons";

export default function FlipkartLabel() {
    const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

    const handleNumPagesChange = (numPages: number) => {
        // Generate crop dimensions based on the actual number of pages
        const dimensions = generateLabelCropDimensions(numPages, flipkartLabelCropDimensions);
        setCropDimensions(dimensions);
    };

    return (
        <div>
            {/* Platform-specific Header */}
            <div className={styles.pageHeader_flipkart}>
                <h1>
                    <FlipkartIcon className={styles.platformIcon} width={36} height={36} />
                    Flipkart PDF Label Cropper
                </h1>
                <p>Quickly crop your Flipkart shipping labels to the perfect size.</p>
            </div>
            {/* Using React.createElement to bypass TSX type checking for AMP tags */}
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
                platformConfig={platformConfigs.flipkart}
                cropDimensions={cropDimensions}
                onNumPagesChange={handleNumPagesChange}
            />
            <div className={styles.descriptionContainer}>
                <h2>How to Crop Your Flipkart Label PDF</h2>
                <p>
                    Easily crop your Flipkart shipping labels to the required dimensions using our simple tool. Follow these steps:
                </p>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Upload Your PDF:</strong> Click the upload button and select the Flipkart label PDF file from your device.
                    </li>
                    <li>
                        <strong>Preview and Adjust:</strong> The tool will automatically apply the standard Flipkart crop dimensions. You can preview each page and adjust the crop box if needed by dragging its corners or edges.
                    </li>
                    <li>
                        <strong>Crop the PDF:</strong> Once you're satisfied with the preview, click the "Crop PDF" button.
                    </li>
                    <li>
                        <strong>Download:</strong> Your cropped PDF label will be generated. Click the "Download" button to save it to your device, ready for printing.
                    </li>
                </ol>
                <p>
                    Our tool ensures your labels are precise and ready for your Flipkart shipments, saving you time and hassle.
                </p>
            </div>

            <SiteDescription />
        </div>
    );
}
