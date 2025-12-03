import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

// Import the client component that handles the dynamic import with ssr: false
const CompressPdfClient = dynamic(() => import("./CompressPdfClient"), {
  ssr: false,
});

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
  return (
    <>
      {/* Structured Data */}
      <Script
        id="compress-pdf-jsonld"
        type="application/ld+json"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "PDF Compression Tool",
            description:
              "Compress PDF files online to reduce file size while maintaining quality. Free PDF compression tool with multiple compression levels.",
            url: "https://pdfcrop.co.in/compress-pdf",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
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
          }),
        }}
      />
      <CompressPdfClient />
    </>
  );
}
