"use client";

import React, { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { meeshoLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './meesho-label.module.css';
import SiteDescription from "@/components/SiteDescription";
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

      <div className={styles.descriptionContainer}>
        <h2>Meesho Invoice Splitting & Thermal Sizing Guide</h2>
        <p>
          As a Meesho seller, packaging efficiency directly affects your margins and dispatch times. A unique aspect of the Meesho Seller Panel is that shipping labels and customer invoices are generated together on a single PDF page or sequential sheets. Printing this entire sheet on adhesive thermal sticker rolls wastes valuable paper and increases logistics costs.
        </p>
        <p>
          Our Meesho PDF label cropper is designed to solve this exact issue. It intelligently separates the shipping label from the customer invoice layout. You can print the adhesive shipping label on a 4" x 6" (A6) thermal roll, and print the billing details separately on standard paper or skip it if digital slips are preferred.
        </p>
        
        <h3>Meesho Label Standards & Logistics Sizing</h3>
        <p>
          Meesho works with multiple third-party logistics (3PL) partners including Shadowfax, Delhivery, Xpressbees, and ElasticRun. Each partner has strict requirements for labels:
        </p>
        <ul className={styles.specsList} style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>A6 Layout (4" x 6"):</strong> Contains the customer name, shipping address, routing code, hub code, and the central shipping barcode. This must be pasted flat on the main surface of the box or plastic packet.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Clear Barcodes:</strong> If the barcode runs over folds or corners, or is printed at a low density, the 3PL pickup agent will reject the package during pickup, causing dispatch rate delays.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Invoice Placement:</strong> The detailed invoice sheet should be folded and placed inside the package. Our tool crops the PDF so you only send the label to your thermal sticker printer.
          </li>
        </ul>

        <h3>Step-by-Step Meesho Label Processing</h3>
        <ol className={styles.stepsList}>
          <li>
            <strong>Get the PDF:</strong> Log into the Meesho Supplier Panel, navigate to "Orders", select "Ready to Ship", and click "Download Labels" to save the PDF.
          </li>
          <li>
            <strong>Upload the File:</strong> Click our Meesho Label Cropper upload area or drag the PDF file in.
          </li>
          <li>
            <strong>Adjust Crop Settings:</strong> The tool automatically highlights the shipping barcode portion. Adjust crop borders if your supplier layout has custom margins.
          </li>
          <li>
            <strong>High-Quality PDF Generation:</strong> Preview the output. The tool maintains the native PDF vector format, ensuring that the fonts, barcodes, and address lines are extremely sharp.
          </li>
          <li>
            <strong>Download and Print:</strong> Export the cropped PDF and print it directly onto A6 thermal roll stickers.
          </li>
        </ol>

        <h3>Frequently Asked Questions (FAQ) for Meesho Suppliers</h3>
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ marginBottom: "1.2rem" }}>
            <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Why does Meesho generate shipping labels and invoices together?</h4>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              Meesho packages them together to ensure that the invoice matches the shipping label, reducing packing mistakes. However, printing this combined layout on A4 paper is wasteful. Our tool splits them, letting you print the label on thermal paper and the invoice on standard copy paper.
            </p>
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Can I process bulk downloads of Meesho shipping labels?</h4>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              Yes! Our Meesho Label Cropper supports bulk PDF multi-page cropping. When you upload a multi-page PDF downloaded from the Meesho panel, our script crops the shipping label portion from each page in a batch, generating a single clean PDF containing all labels.
            </p>
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Is my client information safe on this website?</h4>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>
              Absolutely. In compliance with data security practices, all processing is performed locally on your computer via client-side libraries. No document is sent to our servers.
            </p>
          </div>
        </div>
      </div>

      <SiteDescription />
    </div>
  );
} 