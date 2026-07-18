"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import { flipkartLabelCropDimensions, platformConfigs, generateLabelCropDimensions, CropDimension } from "@/config/staticData";
import styles from './flipkart-label.module.css';
import SiteDescription from "@/components/SiteDescription";
import React from 'react';
import { FlipkartIcon } from "@/components/PlatformIcons";

export default function FlipkartLabel() {
    const [cropDimensions, setCropDimensions] = useState<Record<number, CropDimension>>({});

    const handleNumPagesChange = (numPages: number) => {
        // Generate crop dimensions based on the actual number of pages
        const dimensions = generateLabelCropDimensions(numPages, flipkartLabelCropDimensions);
        setCropDimensions(dimensions);
    };

    return (
        <div>
            {/* Platform-specific Header */}
            <div className={styles.pageHeader_flipkart}>
                <h1>
                    <FlipkartIcon className={styles.platformIcon} width={36} height={36} />
                    Flipkart PDF Label Cropper
                </h1>
                <p>Quickly crop your Flipkart shipping labels to the perfect size.</p>
            </div>
            {/* Using React.createElement to bypass TSX type checking for AMP tags */}
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
                platformConfig={platformConfigs.flipkart}
                cropDimensions={cropDimensions}
                onNumPagesChange={handleNumPagesChange}
            />
            <div className={styles.descriptionContainer}>
                <h2>Flipkart Smart Fulfillment & Ekart Sizing Guidelines</h2>
                <p>
                    For sellers on Flipkart, adhering to shipping label guidelines is a prerequisite for keeping your "Flipkart Assured" status and avoiding order cancellations. When you process orders in the Flipkart Seller Hub, shipping labels are generated as combined A4 PDFs. These documents often include packaging instructions and invoices alongside the shipping labels.
                </p>
                <p>
                    Our Flipkart PDF label cropper helps you extract and isolate standard A6 shipping labels automatically, allowing you to print clean thermal labels for Ekart Logistics, Flipkart’s main logistics partner.
                </p>
                
                <h3>Understanding Flipkart's Label Sizing Requirements</h3>
                <p>
                    Flipkart logistics carriers use automated sorting hubs. To make sure your shipments are processed immediately:
                </p>
                <ul className={styles.specsList} style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>A6 Dimensions (105mm × 148mm):</strong> This is Flipkart's standard dimensions for shipping labels. Labels must contain the shipping barcode, the customer shipping details, and the seller registration details.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Dithering and Printing Density:</strong> Thermal printers should be calibrated to print clear lines. Grey scales or dithering can cause the Ekart barcode scanner to read tracking IDs incorrectly, marking shipments as late or missing.
                    </li>
                    <li style={{ marginBottom: "0.5rem" }}>
                        <strong>Invoice Requirements:</strong> Depending on Flipkart's tax regulations, the invoice must be printed separately and kept inside or attached in a plastic pouch on the box. Our cropper isolates the shipping label so that you do not waste sticky thermal labels on internal invoices.
                    </li>
                </ul>

                <h3>Step-by-Step Guide for Flipkart Sellers</h3>
                <ol className={styles.stepsList}>
                    <li>
                        <strong>Download Labels:</strong> Open your Flipkart Seller Hub, go to the Active Orders tab, select your ready-to-ship packages, and click "Print Label" to download the PDF.
                    </li>
                    <li>
                        <strong>Upload PDF:</strong> Drag and drop your Flipkart PDF file into our secure web cropper tool.
                    </li>
                    <li>
                        <strong>Auto Sizing:</strong> The tool automatically reads the coordinates, crops extraneous margins, and formats the pages to A6 format.
                    </li>
                    <li>
                        <strong>Check Barcodes:</strong> Use our high-resolution preview to ensure that the Flipkart order ID, product description, and tracking barcodes are clear.
                    </li>
                    <li>
                        <strong>Print and Pack:</strong> Download the file and print it on a thermal sticker paper. Affix it to the packet and hand it over to the Ekart agent.
                    </li>
                </ol>

                <h3>Flipkart Shipping Label Specifications</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "1.5rem 0", color: "#333", fontSize: "0.95rem" }}>
                    <thead>
                        <tr style={{ borderBottom: "2px solid #ccc", background: "#f2f2f2" }}>
                            <th style={{ padding: "8px", textAlign: "left" }}>Parameter</th>
                            <th style={{ padding: "8px", textAlign: "left" }}>Specification</th>
                            <th style={{ padding: "8px", textAlign: "left" }}>Why It Matters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "8px" }}>Standard Size</td>
                            <td style={{ padding: "8px" }}>A6 (105mm x 148mm)</td>
                            <td style={{ padding: "8px" }}>Fits standard shipping pouches and thermal label sheets</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "8px" }}>Barcode Resolution</td>
                            <td style={{ padding: "8px" }}>300 DPI (minimum)</td>
                            <td style={{ padding: "8px" }}>Ensures accurate scanning at Ekart logistics hubs</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "8px" }}>Paper Media</td>
                            <td style={{ padding: "8px" }}>Self-adhesive thermal paper</td>
                            <td style={{ padding: "8px" }}>Speeds up packaging and prevents labels from detaching</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "8px" }}>Barcode Format</td>
                            <td style={{ padding: "8px" }}>1D / Code 128</td>
                            <td style={{ padding: "8px" }}>Must be unsmudged and complete on the package surface</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Frequently Asked Questions (FAQ) for Flipkart Sellers</h3>
                <div style={{ marginTop: "1.5rem" }}>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: How does this tool optimize Flipkart labels?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            When you download Flipkart shipping labels, they are often in A4 layout. Printing them directly to A6 labels causes text scaling issues. Our tool automatically trims the blank margins and isolates the actual label, rescaling it directly to A6 dimensions without losing quality.
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: What should I do if my thermal labels are smudging?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            Smudging is usually caused by setting the printer density/darkness too high, or print speed too fast. In your thermal printer preferences, set print speed to 2.0 ips or 3.0 ips and adjust density settings to a medium value. This ensures clean sharp barcode lines.
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.2rem" }}>
                        <h4 style={{ margin: "0 0 0.4rem 0", color: "#1f2937" }}>Q: Do my shipping files leave my computer?</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                            No. All label processing is done client-side using JavaScript in your web browser. Your customer data and seller documents are never transmitted to our servers or stored online, aligning with standard data security protocols.
                        </p>
                    </div>
                </div>
            </div>

            <SiteDescription />
        </div>
    );
}
