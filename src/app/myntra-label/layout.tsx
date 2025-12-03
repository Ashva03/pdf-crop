import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pdfcrop.co.in";

export const metadata: Metadata = {
  title: "Myntra PDF Label Cropper | Free Online Tool | PDF Cropper",
  description:
    "Crop and resize Myntra PDF shipping labels online. Free tool to adjust your Myntra seller labels for printing. No registration required - 100% secure!",
  keywords: [
    "Myntra label cropper",
    "PDF crop tool",
    "shipping label",
    "Myntra seller",
    "crop PDF online",
    "free label tool",
    "resize PDF label",
    "Myntra shipping label",
    "print label",
    "label maker",
    "Myntra seller tool",
  ],
  alternates: {
    canonical: "/myntra-label",
  },
  openGraph: {
    title: "Myntra PDF Label Cropper | Free Online Tool",
    description:
      "Crop and resize your Myntra shipping labels for perfect printing. Free, secure, and easy to use - no registration required!",
    url: `${baseUrl}/myntra-label`,
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: `${baseUrl}/images/og-myntra-label.jpg`,
        width: 1200,
        height: 630,
        alt: "Myntra PDF Label Cropper - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myntra PDF Label Cropper | Free Online Tool",
    description:
      "Crop and resize your Myntra shipping labels for perfect printing. Free, secure, and easy to use!",
    images: [`${baseUrl}/images/og-myntra-label.jpg`],
  },
  metadataBase: new URL("https://pdfcrop.co.in"),
};

export default function MyntraLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
