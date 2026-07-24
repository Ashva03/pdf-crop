import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Batch Processing Guide",
  description: "Learn how to crop and optimize multiple e-commerce shipping labels in a single PDF upload, saving hours of manual work in your packing center.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/batch-processing",
  },
  openGraph: {
    title: "Batch Processing Guide | PDF Cropper Tutorials",
    description: "Learn how to crop and optimize multiple e-commerce shipping labels in a single PDF upload, saving hours of manual work in your packing center.",
    url: "https://pdfcrop.co.in/tutorials/batch-processing",
  },
};

export default function BatchProcessingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
