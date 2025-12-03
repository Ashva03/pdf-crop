import type { Metadata } from "next";
import Script from "next/script";
import SnapdealLabel from "./snapdealLabel";

// Define Base URL - Using the canonical domain that Google prefers
const baseUrl = "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/snapdeal-label`;
const pageTitle = "Snapdeal PDF Label Cropper | Free Online Tool";
const pageDescription =
  "Crop Snapdeal PDF shipping labels online for free. Upload your label, auto-crop to the standard size, preview, and download instantly. Perfect for Snapdeal sellers.";

// Generate structured data for JSON-LD
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Snapdeal PDF Label Cropper",
    url: pageUrl,
    description: pageDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "PDF Crop",
      url: baseUrl,
    },
  };
}

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  metadataBase: new URL(baseUrl), // Helps with URL resolution
  keywords: [
    "Snapdeal label cropper",
    "PDF crop",
    "shipping label",
    "Snapdeal seller",
    "crop PDF online",
    "free tool",
    "label formatter",
    "Snapdeal shipping",
    "PDF resizer",
    "print labels",
    "ecommerce tools",
    "seller tools",
    "Snapdeal label generator",
    "print shipping label",
    "PDF resizer",
    "print labels",
    "ecommerce tools",
    "seller tools",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: "PDF Crop",
    images: [
      {
        url: `${baseUrl}/images/og-snapdeal-label.jpg`,
        width: 1200,
        height: 630,
        alt: "Snapdeal PDF Label Cropper Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/images/og-snapdeal-label.jpg`],
  },
};

// The main page component with structured data and semantic HTML
export default function SnapdealLabelPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="worker"
      />
      <main itemScope itemType="https://schema.org/WebApplication">
        <h1 className="sr-only">Snapdeal PDF Label Cropper</h1>
        <SnapdealLabel />
      </main>
    </>
  );
}
