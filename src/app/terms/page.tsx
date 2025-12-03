import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import TermsContent from "@/components/TermsContent";

const baseUrl = "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/terms`;
const pageTitle = "Terms and Conditions | PDF Cropper";
const pageDescription =
  "Review our comprehensive terms and conditions to understand the rules, guidelines, and policies for using PDF Cropper. Learn about user responsibilities, intellectual property, and service limitations.";

// Generate structured data for the terms page
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "PDF Cropper",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 250,
        height: 60,
      },
    },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-terms.jpg`,
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - PDF Cropper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/images/og-terms.jpg`],
  },
};

export default function TermsPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="worker"
      />
      <main itemScope itemType="https://schema.org/WebPage">
        <h1 className="sr-only">Terms and Conditions</h1>
        <TermsContent />
      </main>
    </>
  );
}
