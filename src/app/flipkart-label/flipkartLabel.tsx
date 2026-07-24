"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { flipkartLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './flipkart-label.module.css';
import ToolContentSection from "@/components/ToolContentSection";
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
            <ToolContentSection toolId="flipkart-label" />
        </div>
    );
}
