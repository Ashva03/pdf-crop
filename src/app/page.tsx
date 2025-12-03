import { type Metadata } from "next";
import HomePage from "@/components/HomePage";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfcrop.co.in"),
  alternates: {
    canonical: "/",
  },
  title: "PDF Cropper - Free Online PDF Tools for E-commerce Sellers",
  description:
    "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra. Convert, merge, and compress PDFs.",
  keywords:
    "PDF cropper, shipping label, e-commerce tools, Flipkart label, Amazon label, Meesho label, Snapdeal label, Myntra label, PDF tools",
  openGraph: {
    title: "PDF Cropper - Free Online PDF Tools for E-commerce Sellers",
    description:
      "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra. Convert, merge, and compress PDFs.",
    url: "https://pdfcrop.co.in",
    siteName: "PDF Cropper",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://pdfcrop.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper - Free Online PDF Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Cropper - Free Online PDF Tools for E-commerce Sellers",
    description:
      "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra.",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "PDF Cropper",
            url: "https://pdfcrop.co.in",
            image: "https://pdfcrop.co.in/og-image.jpg",
            screenshot: "https://pdfcrop.co.in/og-image.jpg",
            description:
              "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra. Convert images to PDF, merge PDFs, compress PDFs, and more.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            applicationSubCategory: "PDF Tools",
            featureList: [
              "Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra",
              "Convert images to PDF",
              "Convert PDF to JPG",
              "Merge multiple PDFs",
              "Compress PDF files",
              "Edit PDF documents",
            ],
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            permissions: "Requires access to local files for PDF processing",
          }),
        }}
      />
      <HomePage />
    </>
  );
}
