import type { Metadata } from "next";
import MergePdfClient from "./MergePdfClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/merge-pdf`;

export const metadata: Metadata = {
  title: "Merge PDF Files Online - Combine Multiple PDFs Free",
  description:
    "Combine multiple PDF documents into a single organized file online for free. Drag and drop file reordering, instant preview, and secure processing.",
  keywords: [
    "merge PDF",
    "combine PDF",
    "join PDF files",
    "PDF merger online",
    "free PDF merger",
    "combine multiple PDFs",
  ],
  alternates: {
    canonical: "/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Files Online - Combine PDFs Free",
    description:
      "Combine multiple PDF documents into a single organized file online for free.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Files Online",
    description:
      "Combine multiple PDF documents into a single organized file online for free.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function MergePdfPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF Merger Tool",
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
      "Merge multiple PDF files into one file",
      "Drag and drop file reordering",
      "Instant PDF preview",
      "Free to use without registration",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <MergePdfClient />
    </>
  );
}
