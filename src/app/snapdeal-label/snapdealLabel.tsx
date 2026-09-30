"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { CropDimension, snapdealLabelCropDimensions, platformConfigs, generateLabelCropDimensions } from "@/config/staticData";
import styles from './snapdeal-label.module.css';
import ToolContentSection from "@/components/ToolContentSection";
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
            <PDFCropper
                platformConfig={platformConfigs.snapdeal} // Use snapdeal config
                cropDimensions={cropDimensions}
                onNumPagesChange={handleNumPagesChange}
            />

            <ToolContentSection toolId="snapdeal-label" />
        </div>
    );
} 