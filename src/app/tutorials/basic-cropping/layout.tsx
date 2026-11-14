import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
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

const breadcrumbJson = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pdfcrop.co.in",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tutorials",
      "item": "https://pdfcrop.co.in/tutorials",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Basic Cropping Guide",
      "item": "https://pdfcrop.co.in/tutorials/basic-cropping",
    },
  ],
};

export default function BasicCroppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}

