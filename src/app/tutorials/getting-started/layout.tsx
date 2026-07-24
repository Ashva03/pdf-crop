import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Getting Started Guide",
  description: "Learn the basics of PDF Cropper. Discover how to get started, set up your workspace, and crop shipping labels in a few simple clicks.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/getting-started",
  },
  openGraph: {
    title: "Getting Started Guide | PDF Cropper Tutorials",
    description: "Learn the basics of PDF Cropper. Discover how to get started, set up your workspace, and crop shipping labels in a few simple clicks.",
    url: "https://pdfcrop.co.in/tutorials/getting-started",
  },
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
