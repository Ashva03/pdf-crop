"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { myntraLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";

export default function MyntraLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    // Generate crop dimensions based on the actual number of pages
    const dimensions = generateLabelCropDimensions(numPages, myntraLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <PDFCropper 
      platformConfig={platformConfigs.myntra} 
      cropDimensions={cropDimensions}
      onNumPagesChange={handleNumPagesChange}
    />
  );
} 