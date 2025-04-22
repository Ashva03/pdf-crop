"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
// TODO: Verify and import amazonLabelCropDimensions if available
import { CropDimension, flipkartLabelCropDimensions as amazonLabelCropDimensions, platformConfigs, generateLabelCropDimensions } from "@/config/staticData";
import styles from './amazon-label.module.css';
import SiteDescription from "@/components/SiteDescription";

export default function AmazonLabel() {
    const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

    const handleNumPagesChange = (numPages: number) => {
        // Generate crop dimensions based on the actual number of pages
        const dimensions = generateLabelCropDimensions(numPages, amazonLabelCropDimensions); // Use amazon dimensions
        setCropDimensions(dimensions);
    };

    return (
        <div>
            {/* Platform-specific Header */}
            <div className={styles.pageHeader_amazon}>
                <h1>Amazon Shipping Label Cropper</h1>
                <p>Crop your Amazon PDF labels to the correct size easily.</p>
            </div>

            <PDFCropper
                platformConfig={platformConfigs.amazon}
                cropDimensions={cropDimensions}
                onNumPagesChange={handleNumPagesChange}
            />

            <div className={styles.descriptionContainer}>
                <h2>How to Crop Your Amazon Label PDF</h2>
                <p>
                    Use our tool to quickly format your Amazon shipping labels from PDF files. Follow these steps:
                </p>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Upload Label PDF:</strong> Select the Amazon label PDF file you downloaded from Seller Central.
                    </li>
                    <li>
                        <strong>Auto-Crop & Preview:</strong> The standard crop dimensions for Amazon labels will be applied automatically. Preview each label page.
                    </li>
                    <li>
                        <strong>Adjust (If Needed):</strong> If the automatic crop isn't perfect, drag the corners of the box to adjust the cropping area precisely.
                    </li>
                    <li>
                        <strong>Crop & Download:</strong> Click "Crop PDF" to process the file, then "Download" to save your print-ready labels.
                    </li>
                </ol>
                <p>
                    Ensure your Amazon FBA or FBM labels are perfectly sized for efficient shipping and receiving.
                </p>
            </div>

            {/* Add the Site Description and Blog Section */}
            <SiteDescription />
        </div>
    );
} 