import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance Statement",
  description: "Read about how PDF Cropper complies with the General Data Protection Regulation (GDPR). Understand your data rights and our zero-retention policy.",
  alternates: {
    canonical: "https://pdfcrop.co.in/gdpr",
  },
};

export default function GDPRPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1f2937", marginBottom: "1.5rem", fontWeight: "800" }}>
        GDPR Compliance Statement
      </h1>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem" }}>
        Last updated: July 24, 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          1. Introduction
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          The General Data Protection Regulation (GDPR) is a comprehensive data privacy law regulating how organizations collect, handle, and secure the personal data of European Union residents.
        </p>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          <strong>pdfcrop.co.in</strong> is committed to operational transparency and privacy compliance. Because of our client-side software design, we are naturally aligned with GDPR privacy-by-design requirements.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          2. Role as a Zero-Data processor
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          Under the GDPR, organizations that determine the purpose and means of data processing are "Data Controllers," and organizations that process data on behalf of Controllers are "Data Processors."
        </p>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          Because <strong>pdfcrop.co.in</strong> processes all documents locally inside your web browser using client-side JavaScript, <strong>no personal data from your uploaded files is ever transmitted to us</strong>. Therefore:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", color: "#374151", lineHeight: "1.8" }}>
          <li>We do not act as a host or server-side processor of your document contents.</li>
          <li>We do not store, copy, monitor, share, or read the customer addresses, buyer names, or order items inside your PDF files.</li>
          <li>We operate under a strict <strong>Zero-Retention Policy</strong>.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          3. Technical Metrics & Analytics
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          We use Google Tag Manager and Google Analytics to collect basic, aggregated website traffic statistics (e.g. browser type, referral channels, page views) to help us optimize server performance and site structure. This data is anonymized and does not contain personal names, email addresses, or document data.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", color: "#1f2937", marginBottom: "1rem" }}>
          4. Contact Details
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.8", marginBottom: "1rem" }}>
          If you have any questions regarding our data privacy design or want to request support, please email us at <strong>ashvainfotech3@gmail.com</strong>.
        </p>
      </section>
    </div>
  );
}
