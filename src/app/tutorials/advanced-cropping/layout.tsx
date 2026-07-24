import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Advanced Cropping Guide",
  description: "Master advanced cropping features: ASIN/SKU text extraction, automatic invoice receipt stripping, margins override, and multi-page layout scaling.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/advanced-cropping",
  },
  openGraph: {
    title: "Advanced Cropping Guide | PDF Cropper Tutorials",
    description: "Master advanced cropping features: ASIN/SKU text extraction, automatic invoice receipt stripping, margins override, and multi-page layout scaling.",
    url: "https://pdfcrop.co.in/tutorials/advanced-cropping",
  },
};

export default function AdvancedCroppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
