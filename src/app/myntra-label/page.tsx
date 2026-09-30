import type { Metadata } from "next";
import MyntraLabelClient from "./myntraLabel";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/myntra-label`;

export const metadata: Metadata = {
  title: "Myntra PDF Label Cropper | Free A4 to A6 Tool",
  description:
    "Free online tool to crop Myntra PPMP & Omni shipping labels from A4 to A6 thermal sticker format. Preserve barcode clarity and speed up order dispatches.",
  keywords: [
    "Myntra label cropper",
    "PDF crop tool",
    "shipping label",
    "Myntra seller",
    "crop PDF online",
    "free label tool",
    "resize Myntra label",
    "Myntra PPMP label",
  ],
  alternates: {
    canonical: "/myntra-label",
  },
  openGraph: {
    title: "Free Myntra PDF Shipping Label Cropper (A4 to A6)",
    description:
      "Crop and resize your Myntra seller shipping labels for perfect thermal sticker printing. Free, secure, and instant.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Myntra PDF Shipping Label Cropper (A4 to A6)",
    description:
      "Crop and resize your Myntra seller shipping labels for perfect thermal sticker printing.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function MyntraLabelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Myntra PDF Label Cropper",
    description: metadata.description,
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Crop Myntra shipping labels to exact A6 size",
      "Simple drag-and-drop interface",
      "Preview before downloading",
      "100% browser-local secure processing",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <MyntraLabelClient />
    </>
  );
}
