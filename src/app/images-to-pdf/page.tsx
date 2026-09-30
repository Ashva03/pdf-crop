import type { Metadata } from "next";
import ImagesToPdfClient from "./ImagesToPdfClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/images-to-pdf`;

export const metadata: Metadata = {
  title: "Convert Images to PDF Online - Free JPG & PNG to PDF Converter",
  description:
    "Convert multiple images (JPG, PNG, WebP) into a single PDF document online. Rearrange page order, preview, and download your formatted PDF for free.",
  keywords: [
    "images to PDF",
    "JPG to PDF",
    "PNG to PDF",
    "image converter",
    "convert photos to PDF",
    "compile PDF online",
    "free image converter",
  ],
  alternates: {
    canonical: "/images-to-pdf",
  },
  openGraph: {
    title: "Convert Images to PDF Online - Free Converter",
    description:
      "Convert multiple images (JPG, PNG, WebP) into a single PDF document online. Free, fast, and secure.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to PDF Online",
    description:
      "Convert multiple images (JPG, PNG, WebP) into a single PDF document online for free.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function ImagesToPdfPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Images to PDF Converter",
    description: metadata.description,
    url: pageUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Convert JPG, PNG, and WebP images to PDF",
      "Rearrange image order before compiling",
      "Preview generated PDF in browser",
      "Free to use without registration",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ImagesToPdfClient />
    </>
  );
}
