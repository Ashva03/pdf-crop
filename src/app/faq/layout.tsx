import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PDF Cropper - E-commerce Tools",
  description:
    "Get answers to common questions about PDF Cropper, privacy policies, and how to use our e-commerce shipping label management tools effectively.",
  alternates: {
    canonical: "https://pdfcrop.co.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | PDF Cropper - E-commerce Tools",
    description:
      "Get answers to common questions about PDF Cropper, privacy policies, and how to use our e-commerce shipping label management tools effectively.",
    url: "https://pdfcrop.co.in/faq",
    type: "website",
    siteName: "PDF Cropper",
    images: [
      {
        url: "https://pdfcrop.co.in/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper - Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | PDF Cropper",
    description:
      "Get answers about our PDF tools and e-commerce shipping label management.",
    images: ["https://pdfcrop.co.in/images/og-faq.jpg"],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
