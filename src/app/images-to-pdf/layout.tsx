import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";

export const metadata: Metadata = {
  title: "Convert Images to PDF | Free Online Tool | PDF Cropper",
  description:
    "Easily convert multiple images to a single PDF file online. Supports JPG, PNG, WebP, and more. No registration required - 100% free!",
  alternates: {
    canonical: "/images-to-pdf",
  },
  openGraph: {
    title: "Convert Images to PDF | Free Online Tool",
    description:
      "Easily convert multiple images to a single PDF file online. Supports JPG, PNG, WebP, and more. No registration required!",
    url: `${baseUrl}/images-to-pdf`,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-images-to-pdf.jpg`,
        width: 1200,
        height: 630,
        alt: "Convert Images to PDF - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to PDF | Free Online Tool",
    description:
      "Easily convert multiple images to a single PDF file online. Supports JPG, PNG, WebP, and more.",
    images: [`${baseUrl}/images/og-images-to-pdf.jpg`],
  },
  keywords: [
    "images to pdf",
    "convert images to pdf",
    "jpg to pdf",
    "png to pdf",
    "multiple images to pdf",
    "online pdf converter",
    "free pdf tool",
    "image to pdf converter",
    "create pdf from images",
  ],
};

export default function ImagesToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
