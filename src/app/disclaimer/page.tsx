import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Platform Relationship Notice",
  description: "Read the official disclaimer for PDF Cropper. Learn about our relationship with e-commerce platforms and the terms of our browser-based document utilities.",
  alternates: {
    canonical: "https://pdfcrop.co.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1f2937", marginBottom: "1.5rem", fontWeight: "800" }}>
        Disclaimer
      </h1>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Last updated: July 24, 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          1. General Information
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          The information and document processing utilities provided on <strong>pdfcrop.co.in</strong> (the "Service") are intended for general educational, operational, and informational purposes only. While we endeavor to keep the service functional, accurate, and secure, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, tools, products, or services contained on the website for any purpose.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          2. No Endorsement or Affiliation
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          <strong>pdfcrop.co.in</strong> is an independent software tool developer. We are <strong>not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with</strong> any of the e-commerce marketplaces or shipping carriers mentioned on this website, including but not limited to:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", color: "#374151", lineHeight: "1.8" }}>
          <li>Amazon.com, Inc. / Amazon Seller Central</li>
          <li>Flipkart Internet Private Limited / Flipkart Seller Hub</li>
          <li>Meesho (Fashnear Technologies Private Limited)</li>
          <li>Snapdeal Private Limited</li>
          <li>Myntra Designs Private Limited</li>
        </ul>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          All brand names, trademarks, and registered trademarks mentioned are the property of their respective owners. The use of these names, trademarks, and brands on our site is solely for identification and optimization compatibility purposes, showing users which templates our tool can parse.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          3. Limitation of Liability
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          Our tools process documents client-side inside your local browser sandbox. We do not store, view, or retain your document contents on external servers. However, we cannot guarantee that document coordinates, text overlays, invoice removal, or label resizing will always compile without formatting shifts.
        </p>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data, loss of business profits, package rejection by shipping carriers, warehouse processing fees, or delays in order fulfillment arising out of, or in connection with, the use of this Service.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          4. Operational Consent
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          It is the user's responsibility to verify the accuracy of the output documents (resized shipping labels, merged PDFs, compressed files) before printing or distributing them. Ensure that carrier barcodes are sharp, buyer addresses are legible, and tracking details are correct.
        </p>
      </section>
    </div>
  );
}
