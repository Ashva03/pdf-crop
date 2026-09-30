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
    canonical: "/tutorials",
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
    "@type": "ItemList",
    name: "PDF Cropper Tutorials",
    description: metadata.description,
    url: pageUrl,
    itemListElement: [
      {
        "@type": "HowTo",
        name: "Getting Started with PDF Cropper",
        url: `${baseUrl}/tutorials/getting-started`,
      },
      {
        "@type": "HowTo",
        name: "Basic PDF Cropping Techniques",
        url: `${baseUrl}/tutorials/basic-cropping`,
      },
      {
        "@type": "HowTo",
        name: "Batch Processing Multi-Page PDFs",
        url: `${baseUrl}/tutorials/batch-processing`,
      },
    ],
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
