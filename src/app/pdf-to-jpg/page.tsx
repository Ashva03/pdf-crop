import type { Metadata } from "next";
import PdfToJpgClient from "./PdfToJpgClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/pdf-to-jpg`;

export const metadata: Metadata = {
  title: "Convert PDF to JPG Online - High Quality Free Image Converter",
  description:
    "Convert PDF pages into high-resolution JPG images directly in your browser. Download single page images or a ZIP file. 100% free and secure.",
  keywords: [
    "PDF to JPG",
    "convert PDF to image",
    "PDF to image converter",
    "extract pages as JPG",
    "online PDF to JPG",
    "free image converter",
  ],
  alternates: {
    canonical: "/pdf-to-jpg",
  },
  openGraph: {
    title: "Convert PDF to JPG Online - Free Image Converter",
    description:
      "Convert PDF pages into high-resolution JPG images directly in your browser. Free, fast, and 100% local processing.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF to JPG Online",
    description:
      "Convert PDF pages into high-resolution JPG images directly in your browser for free.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function PdfToJpgPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF to JPG Converter",
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
      "Convert PDF pages to high-res JPG images",
      "100% browser-local processing via HTML5 Canvas",
      "Download individual images or ZIP archive",
      "Free to use without registration",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PdfToJpgClient />
    </>
  );
}
