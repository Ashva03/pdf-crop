import { type Metadata } from "next";
import HomePage from "@/components/HomePage";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfcrop.co.in"),
  alternates: {
    canonical: "/",
  },
  title:
    "PDF Cropper - Free Online PDF Tools for E-commerce Sellers | Shipping Label Management",
  description:
    "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra. Convert images to PDF, merge PDFs, compress PDFs, and edit PDF documents. 100% free, no registration required, secure browser-based processing.",
  keywords:
    "PDF cropper, shipping label, e-commerce tools, Flipkart label, Amazon label, Meesho label, Snapdeal label, Myntra label, PDF tools",
  openGraph: {
    title: "PDF Cropper - Free Online PDF Tools for E-commerce Sellers",
    description:
      "Free online PDF tools for e-commerce sellers. Crop shipping labels for Flipkart, Amazon, Meesho, Snapdeal, and Myntra. Convert images to PDF, merge PDFs, compress PDFs, and edit PDF documents. 100% free, secure, browser-based processing.",
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
  authors: [{ name: "PDF Cropper" }],
  creator: "PDF Cropper",
  publisher: "PDF Cropper",
};

const structuredData = {
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
  creator: {
    "@type": "Organization",
    name: "PDF Cropper",
    url: "https://pdfcrop.co.in",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "ashvainfotech3@gmail.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "PDF Cropper",
    url: "https://pdfcrop.co.in",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PDF Cropper",
  url: "https://pdfcrop.co.in",
  logo: "https://pdfcrop.co.in/og-image.jpg",
  description:
    "Free online PDF tools for e-commerce sellers. Specialized in shipping label management for Flipkart, Amazon, Meesho, Snapdeal, and Myntra platforms.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "ashvainfotech3@gmail.com",
    availableLanguage: "English",
  },
  sameAs: [],
  foundingDate: "2024",
  areaServed: "Worldwide",
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="organization-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <HomePage />
    </>
  );
}
