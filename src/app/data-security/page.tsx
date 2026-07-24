import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Security & Local Browser Processing Policy",
  description: "Read about our client-side PDF processing architecture. Learn how PDF Cropper keeps your shipping labels and customer details secure.",
  alternates: {
    canonical: "https://pdfcrop.co.in/data-security",
  },
};

export default function DataSecurityPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1f2937", marginBottom: "1.5rem", fontWeight: "800" }}>
        Data Security & Privacy Practices
      </h1>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Last updated: July 24, 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          1. 100% Client-Side Processing Architecture
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          Unlike standard PDF conversion and crop tools that upload your sensitive documents to remote servers, <strong>pdfcrop.co.in</strong> employs a <strong>client-side processing design</strong>.
        </p>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          All file operations (PDF cropping, SKU/ASIN text extraction, document merging, file compression, and image conversions) are handled locally in your browser's sandboxed environment using libraries like <code>pdf-lib</code>, <code>pdfjs-dist</code>, and <code>jszip</code>.
        </p>
        <div style={{ background: "#f0fdf4", borderLeft: "4px solid #16a34a", padding: "1rem", margin: "1.5rem 0", borderRadius: "0 8px 8px 0" }}>
          <strong style={{ color: "#15803d", display: "block", marginBottom: "0.5rem" }}>No File Uploads</strong>
          <span style={{ color: "#166534", fontSize: "0.95rem" }}>
            When you select a document or drag a shipping label PDF onto our platform, the bytes are loaded directly into your computer's RAM. Our servers never see, collect, store, or index your customer data, purchase receipts, or business documents.
          </span>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          2. Complete Address & Financial Privacy
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          As an e-commerce seller, you handle buyer names, shipping addresses, telephone numbers, and commercial invoicing details. Processing this data on third-party remote servers could lead to data breach vulnerabilities and compliance leaks.
        </p>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          By keeping all processing inside your local web browser, we completely eliminate transmission risks, ensuring that customer details remain under your full operational custody.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          3. How It Works Mechanically
        </h2>
        <ol style={{ paddingLeft: "1.5rem", color: "#374151", lineHeight: "1.8" }}>
          <li style={{ marginBottom: "0.5rem" }}><strong>Upload:</strong> You drop your seller hub PDF file onto our browser zone.</li>
          <li style={{ marginBottom: "0.5rem" }}><strong>Parsing:</strong> The browser reads the vector layers of the PDF file client-side.</li>
          <li style={{ marginBottom: "0.5rem" }}><strong>Computation:</strong> The JS script calculates the coordinates, clips the unused sheets, and overlays extracted SKU text.</li>
          <li style={{ marginBottom: "0.5rem" }}><strong>Output:</strong> The browser generates a blob download link. The file saves directly from your browser memory to your local downloads folder.</li>
        </ol>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          4. Browser Sandbox Security
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          Our website operates entirely over secure, encrypted HTTPS protocol. Furthermore, our scripts execute in standard browser security sandboxes, meaning we cannot access your computer's filesystem or other background browser tabs.
        </p>
      </section>
    </div>
  );
}
