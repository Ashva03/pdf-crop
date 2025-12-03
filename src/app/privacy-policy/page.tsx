import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Script from "next/script";

// Define Base URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/privacy-policy`;

// Generate structured data for the page
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - PDF Cropper",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information when using our PDF cropping services.",
  publisher: {
    "@type": "Organization",
    name: "PDF Cropper",
    url: "https://pdfcrop.co.in",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
  datePublished: "2023-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
});

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: "Privacy Policy | PDF Cropper",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information when using our PDF cropping services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PDF Cropper",
    description:
      "Learn how we handle your data at PDF Cropper. Your privacy is important to us.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-privacy-policy.jpg`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - PDF Cropper",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | PDF Cropper",
    description:
      "Learn how we handle your data at PDF Cropper. Your privacy is important to us.",
    images: [`${baseUrl}/images/og-privacy-policy.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function PrivacyPolicy() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="privacy-policy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PrivacyPolicyContent />
    </>
  );
}
