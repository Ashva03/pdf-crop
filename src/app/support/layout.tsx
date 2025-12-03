import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center | PDF Cropper - Get Help & Contact Us",
  description:
    "Get help with PDF Cropper. Contact our support team, browse our help center, or join our community for assistance with all your PDF cropping needs.",
  alternates: {
    canonical: "https://pdfcrop.co.in/support",
  },
  openGraph: {
    title: "Support Center | PDF Cropper - Get Help & Contact Us",
    description:
      "Get help with PDF Cropper. Contact our support team, browse our help center, or join our community for assistance with all your PDF cropping needs.",
    url: "https://pdfcrop.co.in/support",
    type: "website",
    siteName: "PDF Cropper",
    locale: "en_US",
    images: [
      {
        url: "https://pdfcrop.co.in/images/support-og.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper Support Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Center | PDF Cropper - Get Help & Contact Us",
    description:
      "Get help with PDF Cropper. Contact our support team or browse our help center for assistance.",
    images: ["https://pdfcrop.co.in/images/support-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
