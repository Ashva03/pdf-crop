import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Custom Templates Guide",
  description: "Learn how to configure custom cropping boundaries, define coordinates, and save custom templates for any shipping carrier or marketplace label.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/custom-templates",
  },
  openGraph: {
    title: "Custom Templates Guide | PDF Cropper Tutorials",
    description: "Learn how to configure custom cropping boundaries, define coordinates, and save custom templates for any shipping carrier or marketplace label.",
    url: "https://pdfcrop.co.in/tutorials/custom-templates",
  },
};

export default function CustomTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
