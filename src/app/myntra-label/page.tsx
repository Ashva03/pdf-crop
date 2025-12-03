"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import PDFCropper from "@/components/PDFCropper";
import {
  myntraLabelCropDimensions,
  platformConfigs,
  generateLabelCropDimensions,
  CropDimension,
} from "@/config/staticData";

// Generate structured data for the page
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Myntra PDF Label Cropper",
  description:
    "Free online tool to crop and resize Myntra PDF shipping labels for sellers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Crop Myntra shipping labels to exact size",
    "Simple drag-and-drop interface",
    "Preview before downloading",
    "Secure processing (files never leave your browser)",
    "100% free to use",
  ],
});

export default function MyntraLabel() {
  const [cropDimensions, setCropDimensions] = useState<
    Record<number, CropDimension>
  >({});
  const [structuredData, setStructuredData] =
    useState<ReturnType<typeof generateStructuredData>>();

  useEffect(() => {
    setStructuredData(generateStructuredData());
  }, []);

  const handleNumPagesChange = (numPages: number) => {
    // Generate crop dimensions based on the actual number of pages
    const dimensions = generateLabelCropDimensions(
      numPages,
      myntraLabelCropDimensions
    );
    setCropDimensions(dimensions);
  };

  return (
    <>
      {structuredData && (
        <Script
          id="myntra-label-structured-data"
          type="application/ld+json"
          strategy="worker"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <main itemScope itemType="https://schema.org/WebApplication">
        <h1 className="sr-only" itemProp="name">
          Myntra PDF Label Cropper
        </h1>
        <p className="sr-only" itemProp="description">
          Free online tool to crop and resize Myntra PDF shipping labels for
          sellers
        </p>
        <PDFCropper
          platformConfig={platformConfigs.myntra}
          cropDimensions={cropDimensions}
          onNumPagesChange={handleNumPagesChange}
        />
      </main>
    </>
  );
}
