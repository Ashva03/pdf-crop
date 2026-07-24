import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Interface Overview Guide",
  description: "Take a tour of the PDF Cropper interface. Learn about the options, sidebars, controls, and print settings to optimize your shipping label cropping workflow.",
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials/interface-overview",
  },
  openGraph: {
    title: "Interface Overview Guide | PDF Cropper Tutorials",
    description: "Take a tour of the PDF Cropper interface. Learn about the options, sidebars, controls, and print settings to optimize your shipping label cropping workflow.",
    url: "https://pdfcrop.co.in/tutorials/interface-overview",
  },
};

export default function InterfaceOverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
