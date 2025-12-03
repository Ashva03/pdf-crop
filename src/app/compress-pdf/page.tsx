import type { Metadata } from "next";
import Script from "next/script";
import CompressPdfWrapper from "./CompressPdfWrapper";

export const metadata: Metadata = {
  title: "Compress PDF Files Online - Reduce PDF File Size | PDF Crop Tool",
  description:
    "Compress PDF files online to reduce file size while maintaining quality. Free tool with multiple compression levels. No registration required.",
  keywords:
    "compress PDF, PDF compression, reduce PDF size, PDF file compressor, online PDF compression, compress PDF online, PDF size reducer, free PDF compressor, PDF optimization",
  openGraph: {
    title: "Compress PDF Files Online - Reduce PDF File Size | PDF Crop Tool",
    description:
      "Compress PDF files online to reduce file size while maintaining quality. Free tool with multiple compression levels.",
    type: "website",
    url: "https://pdfcrop.co.in/compress-pdf",
    siteName: "PDF Crop Tool",
    images: [
      {
        url: "https://pdfcrop.co.in/images/pdf-compression-tool.webp",
        width: 1200,
        height: 630,
        alt: "PDF Compression Tool - Reduce PDF File Size Online",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Files Online - Reduce PDF File Size",
    description:
      "Compress PDF files online to reduce file size while maintaining quality. Free tool with multiple compression levels.",
    images: ["https://pdfcrop.co.in/images/pdf-compression-tool.jpg"],
  },
  alternates: {
    canonical: "https://pdfcrop.co.in/compress-pdf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CompressPdfPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF Compressor",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description:
      "Compress PDF files online to reduce file size while maintaining quality.",
    price: "0",
    priceCurrency: "USD",
    creator: {
      "@type": "Organization",
      name: "PDF Crop Tool",
      url: "https://pdfcrop.co.in",
    },
    featureList: [
      "Compress PDF files",
      "Reduce file size",
      "Maintain quality",
      "Multiple compression levels",
      "Free to use",
      "No registration required",
      "Secure processing",
    ],
    screenshot: "https://pdfcrop.co.in/images/pdf-compression-tool.jpg",
  };

  return (
    <>
      <CompressPdfWrapper />
      <Script
        id="compress-pdf-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
