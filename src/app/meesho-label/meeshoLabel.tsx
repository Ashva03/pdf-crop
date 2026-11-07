"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { meeshoLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './meesho-label.module.css';
import ToolContentSection from "@/components/ToolContentSection";
import { MeeshoIcon } from "@/components/PlatformIcons";
import AdBanner from "@/components/AdBanner";

export default function MeeshoLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    const dimensions = generateLabelCropDimensions(numPages, meeshoLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <div>
      {/* Platform-specific Header */}
      <div className={styles.pageHeader_meesho}>
        <h1>
          <MeeshoIcon className={styles.platformIcon} width={36} height={36} />
          Meesho PDF Label Cropper
        </h1>
        <p>Easily crop and calibrate your Meesho shipping labels for 4×6 thermal roll printers.</p>
      </div>

      <PDFCropper
        platformConfig={platformConfigs.meesho}
        cropDimensions={cropDimensions}
        onNumPagesChange={handleNumPagesChange}
      />

      <AdBanner slotId="8472910392" />

      <ToolContentSection toolId="meesho-label" />

      <AdBanner slotId="8472910393" />
    </div>
  );
} 