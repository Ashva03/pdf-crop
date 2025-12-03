import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";

export const metadata: Metadata = {
  title:
    "PDF to JPG Converter | Convert PDF Pages to Images Online | PDF Cropper",
  description:
    "Convert PDF pages to high-quality JPG images online. Free tool to extract images from PDF files. No registration required - 100% secure and easy to use!",
  keywords: [
    "PDF to JPG",
    "convert PDF to image",
    "PDF to image converter",
    "extract images from PDF",
    "save PDF as JPG",
    "PDF to JPG online",
    "free PDF converter",
    "PDF to image online",
    "convert PDF pages to JPG",
    "PDF to JPG high quality",
  ],
  alternates: {
    canonical: "/pdf-to-jpg",
  },
  openGraph: {
    title: "PDF to JPG Converter | Free Online Tool",
    description:
      "Convert PDF pages to high-quality JPG images instantly. No watermarks, no registration - 100% free and secure!",
    url: `${baseUrl}/pdf-to-jpg`,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-pdf-to-jpg.jpg`,
        width: 1200,
        height: 630,
        alt: "PDF to JPG Converter - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG Converter | Free Online Tool",
    description:
      "Convert PDF pages to high-quality JPG images instantly. No watermarks, no registration - 100% free!",
    images: [`${baseUrl}/images/og-pdf-to-jpg.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function PdfToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
