"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { meeshoLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './meesho-label.module.css';
import ToolContentSection from "@/components/ToolContentSection";
import { MeeshoIcon } from "@/components/PlatformIcons";

export default function MeeshoLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    const dimensions = generateLabelCropDimensions(numPages, meeshoLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <div>
      <div className={styles.pageHeader_meesho}>
        <h1>
          <MeeshoIcon className={styles.platformIcon} width={36} height={36} />
          Meesho PDF Label Cropper
        </h1>
        <p>Easily crop your Meesho shipping labels online.</p>
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
        platformConfig={platformConfigs.meesho}
        cropDimensions={cropDimensions}
        onNumPagesChange={handleNumPagesChange}
      />

      <ToolContentSection toolId="meesho-label" />
    </div>
  );
} 