import { Metadata } from "next";

const baseUrl = "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/tutorials`;
const pageTitle = "PDF Cropper Tutorials & Guides | Learn How to Use";
const pageDescription =
  "Master PDF Cropper with our step-by-step video tutorials and guides. Learn basic to advanced techniques for cropping, editing, and optimizing your PDF documents.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-tutorials.jpg`,
        width: 1200,
        height: 630,
        alt: "PDF Cropper Tutorials & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/images/og-tutorials.jpg`],
  },
};
