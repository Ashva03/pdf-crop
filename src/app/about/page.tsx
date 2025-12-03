import { Metadata } from "next";
import Script from "next/script";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | PDF Cropper",
  description:
    "Learn about the mission, team, and story behind PDF Cropper. Discover what makes us unique in e-commerce shipping label management.",
  alternates: {
    canonical: "https://pdfcrop.co.in/about",
  },
  openGraph: {
    title: "About Us | PDF Cropper",
    description:
      "Learn about the mission, team, and story behind PDF Cropper. Discover what makes us unique in e-commerce shipping label management.",
    url: "https://pdfcrop.co.in/about",
    type: "website",
    siteName: "PDF Cropper",
    locale: "en_US",
    images: [
      {
        url: "https://pdfcrop.co.in/images/about-og.webp",
        width: 1200,
        height: 630,
        alt: "About PDF Cropper - E-commerce Shipping Label Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | PDF Cropper",
    description:
      "Learn about the mission, team, and story behind PDF Cropper. Discover what makes us unique in e-commerce shipping label management.",
    images: ["https://pdfcrop.co.in/images/about-og.webp"],
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

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About PDF Cropper",
    description:
      "Learn about the mission, team, and story behind PDF Cropper. Discover what makes us unique in e-commerce shipping label management.",
    url: "https://pdfcrop.co.in/about",
    publisher: {
      "@type": "Organization",
      name: "PDF Cropper",
      url: "https://pdfcrop.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://pdfcrop.co.in/logo.png",
        width: 250,
        height: 60,
      },
      sameAs: [
        "https://twitter.com/pdfcropper",
        "https://www.linkedin.com/company/pdf-cropper",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pdfcrop.co.in/about",
    },
    image: {
      "@type": "ImageObject",
      url: "https://pdfcrop.co.in/images/about-og.jpg",
      width: 1200,
      height: 630,
    },
    datePublished: "2023-01-01",
    dateModified: "2024-12-03",
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="worker"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
