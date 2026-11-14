import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
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
      "name": "Batch Processing Guide",
      "item": "https://pdfcrop.co.in/tutorials/batch-processing",
    },
  ],
};

export default function BatchProcessingLayout({
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

