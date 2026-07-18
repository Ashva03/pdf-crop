"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import PDFCropper from "@/components/PDFCropper";
import styled from "styled-components";
import { MyntraIcon } from "@/components/PlatformIcons";
import SiteDescription from "@/components/SiteDescription";
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

const DescriptionContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid #eef2f6;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  margin-bottom: 3rem;
  color: #333;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #1f1f2e;
    font-size: 1.6rem;
    font-weight: 700;
    border-bottom: 2px solid #ff3f6c;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  h3 {
    margin-top: 1.8rem;
    margin-bottom: 0.8rem;
    color: #2e2e42;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ul, ol {
    color: #4b5563;
    line-height: 1.7;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
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

          <DescriptionContainer>
            <h2>Myntra PPMP Sizing & Label Compliance</h2>
            <p>
              Myntra has one of the strictest packaging and logistics standards in Indian e-commerce. Whether you fulfill orders through Myntra's PPMP (Pure Play Marketplace Portal) model, Omni-channel shipping, or catalog-based dropshipping, the barcodes on your packages must scan perfectly during transit.
            </p>
            <p>
              When labels are printed directly from A4 documents without cropping, the tracking barcode, merchant details, and routing abbreviations shrink. This tool resolves this by letting you trim extra margin space and scale labels to A6 format.
            </p>

            <h3>Myntra Shipping Label Standards</h3>
            <p>
              Keep the following in mind when shipping orders on Myntra:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Label Specifications:</strong> The label size must meet the 4" x 6" (A6) standard. Handing over packages with miniature, un-cropped labels printed on A4 pages can lead to logistics compliance penalties.
              </li>
              <li>
                <strong>Barcode Legibility:</strong> Ensure there are no vertical print lines missing in the carrier barcodes. Keep print heads clean to prevent barcode scanning failures.
              </li>
              <li>
                <strong>Client-Side Security:</strong> All processing is done locally in your browser. Your shipment files containing client addresses and financial data are never sent to external servers.
              </li>
            </ul>

            <h3>Step-by-Step Guide for Myntra Sellers</h3>
            <ol>
              <li>
                <strong>Download Label Sheets:</strong> Go to the Myntra Seller Portal, locate your packed shipments, and download the label PDF.
              </li>
              <li>
                <strong>Upload PDF:</strong> Drag and drop the PDF file into the crop section above.
              </li>
              <li>
                <strong>Crop Setup:</strong> The cropper automatically estimates the active boundaries. You can drag and position the selection box as needed.
              </li>
              <li>
                <strong>Format and Export:</strong> Review the high-resolution vector preview to ensure text clarity and click download to get the cropped PDF.
              </li>
              <li>
                <strong>Print:</strong> Print the label on A6 self-adhesive thermal paper and paste it onto the shipping bag.
              </li>
            </ol>

            <h3>Frequently Asked Questions (FAQ) for Myntra Sellers</h3>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ marginBottom: "1.2rem" }}>
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#2e2e42" }}>Q: How does this tool help Myntra sellers?</h4>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>
                  Myntra sellers often receive PDFs designed for A4 printers. Scaling this down directly to A6 labels results in text being too small to read. Our tool crops the label area, so that it prints at 100% size on 4" x 6" thermal sheets, meeting Myntra's compliance requirements.
                </p>
              </div>
              <div style={{ marginBottom: "1.2rem" }}>
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#2e2e42" }}>Q: Is there a charge to use this tool?</h4>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>
                  No. This tool is 100% free, and there are no file size limits or registration steps required.
                </p>
              </div>
              <div style={{ marginBottom: "1.2rem" }}>
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#2e2e42" }}>Q: Are my files kept secure?</h4>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>
                  Yes. Your PDF is processed locally on your computer using JavaScript. Your files are never uploaded to any remote server, maintaining privacy.
                </p>
              </div>
            </div>
          </DescriptionContainer>
          <SiteDescription />
        </main>
      </PageContainer>
    </>
  );
}
