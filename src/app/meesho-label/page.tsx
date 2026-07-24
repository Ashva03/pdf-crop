import type { Metadata } from "next";
import MeeshoLabel from "./meeshoLabel";

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/meesho-label`;

// Generate structured data for the page
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Meesho PDF Label Cropper",
  description:
    "Free online tool to crop and resize Meesho PDF shipping labels for sellers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Crop Meesho shipping labels to exact size",
    "Simple drag-and-drop interface",
    "Preview before downloading",
    "Secure processing (files never leave your browser)",
    "100% free to use",
  ],
});

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: "Meesho PDF Label Cropper | Free & Easy Online Tool",
  description:
    "Free online tool to crop and resize Meesho PDF shipping labels. Simple, fast, and secure. No registration required - perfect for Meesho sellers!",
  keywords: [
    "Meesho label cropper",
    "PDF crop tool",
    "shipping label",
    "Meesho seller",
    "crop PDF online",
    "free label tool",
    "resize PDF label",
    "Meesho shipping label",
    "print label",
    "label maker",
  ],
  alternates: {
    canonical: "/meesho-label",
  },
  openGraph: {
    title: "Free Online Meesho PDF Label Cropper",
    description:
      "Quickly crop and resize your Meesho shipping labels online. Free, fast, and secure - no registration required!",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-meesho-label.jpg`,
        width: 1200,
        height: 630,
        alt: "Meesho PDF Label Cropper - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Meesho PDF Label Cropper",
    description:
      "Quickly crop and resize your Meesho shipping labels online. Free, fast, and secure!",
    images: [`${baseUrl}/images/og-meesho-label.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function MeeshoLabelPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <script
        id="meesho-label-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MeeshoLabel />
    </>
  );
}
