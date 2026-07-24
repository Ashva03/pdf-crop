import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Saving & Exporting Guide",
  description: "Learn best export practices: download individual cropped PDFs, package multiple processed labels in a ZIP archive, or print directly from your browser.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/saving-exporting",
  },
  openGraph: {
    title: "Saving & Exporting Guide | PDF Cropper Tutorials",
    description: "Learn best export practices: download individual cropped PDFs, package multiple processed labels in a ZIP archive, or print directly from your browser.",
    url: "https://pdfcrop.co.in/tutorials/saving-exporting",
  },
};

export default function SavingExportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
