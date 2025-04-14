"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { flipkartLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";

export default function FlipkartLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    // Generate crop dimensions based on the actual number of pages
    const dimensions = generateLabelCropDimensions(numPages, flipkartLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return (
    <PDFCropper 
      platformConfig={platformConfigs.flipkart} 
      cropDimensions={cropDimensions}
      onNumPagesChange={handleNumPagesChange}
    />
  );
}
