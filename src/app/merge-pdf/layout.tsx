import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";

export const metadata: Metadata = {
  title: "Merge PDF Files | Combine PDFs Online for Free | PDF Cropper",
  description:
    "Easily merge multiple PDFs into a single document online. No watermarks, no registration - 100% free and secure. Combine PDFs in seconds!",
  keywords: [
    "merge PDF",
    "combine PDF",
    "join PDF files",
    "PDF merger",
    "online PDF tool",
    "merge multiple PDFs",
    "free PDF combiner",
    "PDF merge online",
    "combine PDF files",
    "merge PDF documents",
    "PDF tool",
    "PDF utility",
    "PDF editor",
  ],
  alternates: {
    canonical: "/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Files | Combine PDFs Online for Free",
    description:
      "Easily merge multiple PDFs into a single document. No watermarks, no registration - 100% free and secure!",
    url: `${baseUrl}/merge-pdf`,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-merge-pdf.jpg`,
        width: 1200,
        height: 630,
        alt: "Merge PDF Files - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Files | Combine PDFs Online for Free",
    description:
      "Easily merge multiple PDFs into a single document. No watermarks, no registration - 100% free!",
    images: [`${baseUrl}/images/og-merge-pdf.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function MergePdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
