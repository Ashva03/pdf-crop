import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/case-studies`;

export const metadata: Metadata = {
  title: "PDF Processing & Shipping Label Workflow Examples | PDF Cropper",
  description:
    "Explore step-by-step PDF processing workflow examples. Learn how online sellers format Flipkart, Amazon, Meesho, and Myntra shipping labels to 4x6 thermal paper.",
  keywords: [
    "PDF workflow examples",
    "shipping label cropping example",
    "Flipkart label workflow",
    "Amazon label SKU overlay",
    "thermal printing guide",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Shipping Label Processing Workflow Examples",
    description:
      "Explore step-by-step PDF processing workflow examples for marketplace sellers.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Label Processing Workflow Examples",
    description:
      "Explore step-by-step PDF processing workflow examples for marketplace sellers.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
