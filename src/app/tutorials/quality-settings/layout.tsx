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
      "name": "Quality Settings Guide",
      "item": "https://pdfcrop.co.in/tutorials/quality-settings",
    },
  ],
};

export default function QualitySettingsLayout({
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
