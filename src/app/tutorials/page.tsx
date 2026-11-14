import type { Metadata } from "next";
import TutorialsClient from "./TutorialsClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/tutorials`;

export const metadata: Metadata = {
  title: "PDF Cropper Tutorials & Guides | Learn Step-by-Step",
  description:
    "Master PDF Cropper with our step-by-step tutorials and guides. Learn basic to advanced techniques for cropping, editing, and optimizing your shipping PDFs.",
  keywords: [
    "PDF cropper tutorials",
    "crop PDF guide",
    "thermal label cropping tutorial",
    "batch PDF cropping guide",
    "PDF optimization steps",
  ],
  alternates: {
    canonical: "https://pdfcrop.co.in/tutorials",
  },
  openGraph: {
    title: "PDF Cropper Tutorials & Step-by-Step Guides",
    description:
      "Master PDF Cropper with our step-by-step tutorials and guides.",
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Cropper Tutorials & Guides",
    description:
      "Master PDF Cropper with our step-by-step tutorials and guides.",
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function TutorialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PDF Cropper Tutorials & Guides",
    description: metadata.description,
    url: pageUrl,
    mainEntity: {
      "@type": "ItemList",
      name: "PDF Cropper Tutorials",
      itemListElement: [
        {
          "@type": "HowTo",
          position: 1,
          name: "Getting Started with PDF Cropper",
          description: "Learn how to upload PDFs, select custom crop coordinates, and process your first document.",
        },
        {
          "@type": "HowTo",
          position: 2,
          name: "Interface Overview & Workspace Components",
          description: "Explore the main controls, offset sliders, page selectors, and PDF preview container.",
        },
        {
          "@type": "HowTo",
          position: 3,
          name: "Basic PDF Cropping Techniques",
          description: "Step-by-step guide to adjusting margins, selecting page boundaries, and cropping A4 documents.",
        },
        {
          "@type": "HowTo",
          position: 4,
          name: "Advanced PDF Cropping Techniques",
          description: "Master multi-region cropping, rotation offsets, and coordinate precision for non-standard labels.",
        },
        {
          "@type": "HowTo",
          position: 5,
          name: "Batch Processing Multi-Page PDFs",
          description: "Process multi-page PDFs simultaneously. Format entire order batches into standard A6 labels.",
        },
        {
          "@type": "HowTo",
          position: 6,
          name: "Custom Templates & Offset Margins",
          description: "Configure custom offset margins to compensate for thermal printer border cutoffs.",
        },
        {
          "@type": "HowTo",
          position: 7,
          name: "Quality Settings & Barcode Clarity",
          description: "Ensure vector barcode definitions maintain 300+ DPI sharpness for automated hub scanners.",
        },
        {
          "@type": "HowTo",
          position: 8,
          name: "Saving & Exporting PDF Documents",
          description: "Best practices for saving cropped PDFs and configuring thermal print drivers on Windows and Mac.",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <TutorialsClient />
    </>
  );
}
