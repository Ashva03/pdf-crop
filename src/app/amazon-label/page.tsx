import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

// Dynamically import the AmazonLabel component with no SSR
const AmazonLabel = dynamic(() => import("./amazonLabel"), {
  ssr: false,
  loading: () => <div>Loading Amazon Label Tool...</div>,
});

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/amazon-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: "Amazon PDF Label Cropper | Free Online Tool (FBA/FBM)",
  description:
    "Crop Amazon FBA/FBM PDF shipping labels online for free. Upload PDF, auto-crop to correct size, preview & download instantly. Simplify Amazon shipping prep.",
  keywords: [
    "Amazon label cropper",
    "PDF crop",
    "shipping label",
    "Amazon FBA label",
    "Amazon FBM label",
    "Amazon seller",
    "crop PDF online",
    "free tool",
    "label resizer",
    "Amazon shipping labels",
    "SKU extraction",
  ],
  alternates: {
    canonical: "/amazon-label",
  },
  openGraph: {
    title: "Free Amazon PDF Shipping Label Cropper Online",
    description:
      "Crop Amazon FBA & FBM shipping labels from PDF accurately and quickly. Free online tool for Amazon sellers.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Crop Tool",
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/images/amazon-label-cropper.webp`,
        width: 1200,
        height: 630,
        alt: "Amazon PDF Label Cropper Tool - Process Shipping Labels Online",
        type: "image/webp",
      },
    ],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
  twitter: {
    card: "summary_large_image",
    title: "Amazon PDF Label Cropper Tool",
    description:
      "Free tool to crop Amazon shipping labels and extract SKU information",
    images: [`${baseUrl}/images/amazon-label-cropper.webp`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Amazon PDF Label Cropper",
  description: metadata.description,
  url: pageUrl,
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Crop Amazon shipping labels",
    "Extract SKU information",
    "Print SKU on labels",
    "Remove invoices from printouts",
    "Preview processed PDFs",
  ],
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript enabled browser",
};

export default function AmazonLabelPage() {
  return (
    <>
      <Script
        id="amazon-label-jsonld"
        type="application/ld+json"
        strategy="worker"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmazonLabel />
    </>
  );
}
