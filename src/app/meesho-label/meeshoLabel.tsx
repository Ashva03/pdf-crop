"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { meeshoLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './meesho-label.module.css';
import SiteDescription from "@/components/SiteDescription";

export default function MeeshoLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    const dimensions = generateLabelCropDimensions(numPages, meeshoLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <div>
      <div className={styles.pageHeader_meesho}>
        <h1>Meesho PDF Label Cropper</h1>
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

      <div className={styles.descriptionContainer}>
        <h2>How to Crop Your Meesho Label PDF</h2>
        <p>
          Optimize your Meesho shipping labels effortlessly with our dedicated PDF cropping tool. Follow these simple steps to get started:
        </p>
        <ol className={styles.stepsList}>
          <li>
            <strong>Upload PDF Label:</strong> Click the upload area or button to select the Meesho label PDF file from your computer or mobile device.
          </li>
          <li>
            <strong>Automatic Cropping & Preview:</strong> Our tool automatically detects and applies the standard cropping dimensions for Meesho labels. Preview the result for each page.
          </li>
          <li>
            <strong>Adjust if Necessary:</strong> If needed, you can manually adjust the crop area by dragging the corners or sides of the selection box on the preview.
          </li>
          <li>
            <strong>Crop and Download:</strong> Once you are happy with the preview, click the "Crop PDF" button. Then, click "Download" to save the perfectly cropped Meesho label PDF to your device.
          </li>
        </ol>
        <p>
          Using our tool ensures your Meesho labels meet the required specifications, helping streamline your packing and shipping process.
        </p>
      </div>

      <SiteDescription />
    </div>
  );
} 