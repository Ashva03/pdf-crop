"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { meeshoLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";

export default function MeeshoLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    // Generate crop dimensions based on the actual number of pages
    const dimensions = generateLabelCropDimensions(numPages, meeshoLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <PDFCropper 
      platformConfig={platformConfigs.meesho} 
      cropDimensions={cropDimensions}
      onNumPagesChange={handleNumPagesChange}
    />
  );
} 