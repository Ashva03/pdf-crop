import { Metadata } from "next";
import Script from "next/script";
import ShippingLabelStandardsContent from "@/components/ShippingLabelStandardsContent";

export const metadata: Metadata = {
  title: "Complete Guide to E-commerce Shipping Label Standards | PDF Cropper",
  description:
    "Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.",
  keywords:
    "shipping label standards, e-commerce shipping requirements, Flipkart labels, Amazon labels, Meesho labels, Snapdeal labels",
  alternates: {
    canonical: "https://pdfcrop.co.in/blog/shipping-label-standards",
  },
  openGraph: {
    title:
      "Complete Guide to E-commerce Shipping Label Standards | PDF Cropper",
    description:
      "Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.",
    url: "https://pdfcrop.co.in/blog/shipping-label-standards",
    type: "article",
    siteName: "PDF Crop Tool",
    locale: "en_US",
    images: [
      {
        url: "https://pdfcrop.co.in/images/shipping-label-standards.webp",
        width: 1200,
        height: 630,
        alt: "Complete Guide to E-commerce Shipping Label Standards",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to E-commerce Shipping Label Standards",
    description:
      "Comprehensive guide to shipping label requirements and standards across major e-commerce platforms.",
    images: ["https://pdfcrop.co.in/images/shipping-label-standards.webp"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Guide to E-commerce Shipping Label Standards",
  description:
    "Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.",
  image: "https://pdfcrop.co.in/images/shipping-label-standards.webp",
  author: {
    "@type": "Organization",
    name: "PDF Cropper",
  },
  publisher: {
    "@type": "Organization",
    name: "PDF Cropper",
    logo: {
      "@type": "ImageObject",
      url: "https://pdfcrop.co.in/logo.webp",
    },
  },
  datePublished: "2024-03-15",
  dateModified: new Date().toISOString().split("T")[0],
};

export default function ShippingLabelStandardsPage() {
  return (
    <>
      <Script
        id="shipping-standards-jsonld"
        type="application/ld+json"
        strategy="worker"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShippingLabelStandardsContent />
    </>
  );
}
