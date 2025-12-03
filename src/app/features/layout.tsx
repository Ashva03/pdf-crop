import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | PDF Cropper - Advanced PDF Processing Tools",
  description:
    "Discover powerful PDF processing features including precise cropping, batch processing, and secure document handling. All tools work directly in your browser.",
  alternates: {
    canonical: "https://pdfcrop.co.in/features",
  },
  openGraph: {
    title: "Advanced PDF Processing Features | PDF Cropper",
    description:
      "Explore powerful tools for PDF cropping, batch processing, and secure document handling. All processing happens in your browser for maximum privacy.",
    url: "https://pdfcrop.co.in/features",
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: "https://pdfcrop.co.in/images/og-features.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper - Advanced PDF Processing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced PDF Processing Features",
    description:
      "Discover powerful PDF processing tools including batch processing and secure document handling.",
    images: ["https://pdfcrop.co.in/images/og-features.jpg"],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
