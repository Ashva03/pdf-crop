"use client";
"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import PDFCropper from "@/components/PDFCropper";
import styled from "styled-components";
import { MyntraIcon } from "@/components/PlatformIcons";
import ToolContentSection from "@/components/ToolContentSection";
import {
  myntraLabelCropDimensions,
  platformConfigs,
  generateLabelCropDimensions,
  CropDimension,
} from "@/config/staticData";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, #ff3f6c 0%, #d11c5a 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(255, 63, 108, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    font-size: 2.25rem;
    margin: 0;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    letter-spacing: -0.025em;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin: 0;
  }
`;

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
      <PageContainer>
        <main itemScope itemType="https://schema.org/WebApplication">
          <PageHeader>
            <h1 itemProp="name">
              <MyntraIcon width={36} height={36} />
              Myntra Shipping Label PDF Cropper
            </h1>
            <p itemProp="description">Format Myntra PPMP & Omni labels to standard A6 dimensions instantly.</p>
          </PageHeader>
          
          <PDFCropper
            platformConfig={platformConfigs.myntra}
            cropDimensions={cropDimensions}
            onNumPagesChange={handleNumPagesChange}
          />

          <ToolContentSection toolId="myntra-label" />
        </main>
      </PageContainer>
    </>
  );
}
