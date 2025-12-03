import type { Metadata } from "next";
import Script from "next/script";
import FlipkartLabel from "./flipkartLabel";

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdf-crop.com";
const pageUrl = `${baseUrl}/flipkart-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: "Flipkart PDF Label Cropper | Free A4 to A6 Tool",
  description:
    "Free online tool to crop Flipkart shipping labels from A4 to A6. Upload, auto-crop, preview, and download perfectly sized labels instantly. No registration required.",
  keywords: [
    "Flipkart label cropper",
    "PDF crop",
    "A4 to A6",
    "shipping label",
    "Flipkart seller",
    "crop PDF online",
    "free tool",
    "label cutter",
  ],
  alternates: {
    canonical: "/flipkart-label",
  },
  openGraph: {
    title: "Free Flipkart PDF Label Cropper (A4 to A6)",
    description:
      "Quickly crop your Flipkart A4 shipping labels to A6 size online. Easy-to-use, free tool for all Flipkart sellers.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-flipkart-label.jpg`,
        width: 1200,
        height: 630,
        alt: "Flipkart PDF Label Cropper Tool - Resize A4 to A6",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Flipkart PDF Label Cropper (A4 to A6)",
    description:
      "Quickly crop your Flipkart A4 shipping labels to A6 size online. Free tool for all Flipkart sellers.",
    images: [`${baseUrl}/images/og-flipkart-label.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
  // Basic Structured Data (JSON-LD)
  // You can enhance this further based on Schema.org guidelines
  // This script needs to be rendered in the component for client-side execution,
  // or handled differently for Server Components if needed.
  // For simplicity, we define it here but rendering requires adjustment.
  // Let's add a placeholder comment for now, as injecting scripts via metadata object isn't standard.
  // Consider adding JSON-LD via a script tag in the component or layout.
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Flipkart PDF Label Cropper",
  description:
    "Free online tool to crop Flipkart shipping labels from A4 to A6 size",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "PDF Cropper",
    url: "https://pdfcrop.co.in",
  },
});

export default function FlipkartLabelPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="flipkart-label-structured-data"
        type="application/ld+json"
        strategy="worker"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FlipkartLabel />
    </>
  );
}
