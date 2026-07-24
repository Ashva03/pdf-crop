import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Basic Cropping Guide",
  description: "Learn the step-by-step process of basic shipping label cropping. Select coordinates, adjust simple margins, and prepare labels for thermal printing.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/basic-cropping",
  },
  openGraph: {
    title: "Basic Cropping Guide | PDF Cropper Tutorials",
    description: "Learn the step-by-step process of basic shipping label cropping. Select coordinates, adjust simple margins, and prepare labels for thermal printing.",
    url: "https://pdfcrop.co.in/tutorials/basic-cropping",
  },
};

export default function BasicCroppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
