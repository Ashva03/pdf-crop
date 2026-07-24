import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Quality Settings Guide",
  description: "Learn how to manage print quality settings, select correct resolution DPI, adjust vector rendering, and verify label sharpness before printing.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/quality-settings",
  },
  openGraph: {
    title: "Quality Settings Guide | PDF Cropper Tutorials",
    description: "Learn how to manage print quality settings, select correct resolution DPI, adjust vector rendering, and verify label sharpness before printing.",
    url: "https://pdfcrop.co.in/tutorials/quality-settings",
  },
};

export default function QualitySettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
