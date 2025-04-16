"use client";

import PDFCropper from "@/components/PDFCropper";
import { CropDimension, flipkartLabelCropDimensions, generateLabelCropDimensions, platformConfigs } from "@/config/staticData";
import { useState } from "react";

export default function AmazonLabel() {
  const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

  const handleNumPagesChange = (numPages: number) => {
    // Generate crop dimensions based on the actual number of pages
    const dimensions = generateLabelCropDimensions(numPages, flipkartLabelCropDimensions);
    setCropDimensions(dimensions);
  };

  return <PDFCropper platformConfig={platformConfigs.amazon} cropDimensions={cropDimensions} onNumPagesChange={handleNumPagesChange} />;
} 