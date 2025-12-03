import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";

export const metadata: Metadata = {
  title: "How PDF Cropper Works | Step-by-Step Guide",
  description:
    "Learn how to use PDF Cropper to edit, crop, and process your PDF documents with our easy step-by-step guide. Start optimizing your PDFs today!",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How PDF Cropper Works | Step-by-Step Guide",
    description:
      "Learn how to use PDF Cropper to edit, crop, and process your PDF documents with our easy step-by-step guide. Start optimizing your PDFs today!",
    url: `${baseUrl}/how-it-works`,
    type: "article",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-how-it-works.jpg`,
        width: 1200,
        height: 630,
        alt: "How PDF Cropper Works - Step by Step Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How PDF Cropper Works | Step-by-Step Guide",
    description:
      "Learn how to use PDF Cropper to edit, crop, and process your PDF documents with our easy step-by-step guide.",
    images: [`${baseUrl}/images/og-how-it-works.jpg`],
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
