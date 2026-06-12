import { Metadata } from "next";
import BlogContent from "@/components/BlogContent";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "E-commerce Shipping Blog | Expert Guides & Best Practices | PDF Cropper",
  description:
    "Expert guides, tips, and best practices for efficient shipping label management, inventory optimization, customer service, and e-commerce business growth. Learn from industry experts.",
  keywords:
    "e-commerce shipping blog, shipping label management, inventory management, customer service, e-commerce best practices, shipping cost optimization, business growth strategies",
  alternates: {
    canonical: "https://pdfcrop.co.in/blog",
  },
  openGraph: {
    title: "E-commerce Shipping Blog | Expert Guides & Best Practices",
    description:
      "Expert guides, tips, and best practices for efficient shipping label management, inventory optimization, customer service, and e-commerce business growth.",
    url: "https://pdfcrop.co.in/blog",
    type: "website",
    siteName: "PDF Cropper",
    locale: "en_US",
    images: [
      {
        url: "https://pdfcrop.co.in/images/blog-shipping-guides.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper Blog - E-commerce Shipping Guides and Best Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Shipping Blog | Expert Guides & Best Practices",
    description:
      "Expert guides, tips, and best practices for efficient shipping label management, inventory optimization, customer service, and e-commerce business growth.",
    images: ["https://pdfcrop.co.in/images/blog-shipping-guides.jpg"],
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

export default function BlogPage() {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E-commerce Shipping Blog",
    description:
      "Expert guides, tips, and best practices for efficient shipping label management, inventory optimization, customer service, and e-commerce business growth.",
    url: "https://pdfcrop.co.in/blog",
    publisher: {
      "@type": "Organization",
      name: "PDF Cropper",
      url: "https://pdfcrop.co.in",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Article",
          position: 1,
          name: "E-commerce Shipping Label Standards",
          url: "https://pdfcrop.co.in/blog/shipping-label-standards",
        },
        {
          "@type": "Article",
          position: 2,
          name: "E-commerce Shipping Label Best Practices",
          url: "https://pdfcrop.co.in/blog/shipping-label-best-practices",
        },
        {
          "@type": "Article",
          position: 3,
          name: "How to Troubleshoot Common Shipping Label Issues",
          url: "https://pdfcrop.co.in/blog/shipping-label-troubleshooting",
        },
        {
          "@type": "Article",
          position: 4,
          name: "Complete Guide to Shipping Cost Optimization",
          url: "https://pdfcrop.co.in/blog/shipping-cost-optimization",
        },
        {
          "@type": "Article",
          position: 5,
          name: "How to Scale Your E-commerce Shipping Operations",
          url: "https://pdfcrop.co.in/blog/scaling-shipping-operations",
        },
        {
          "@type": "Article",
          position: 6,
          name: "Understanding E-commerce Shipping Carrier Options in India",
          url: "https://pdfcrop.co.in/blog/shipping-carrier-options-india",
        },
        {
          "@type": "Article",
          position: 7,
          name: "Complete Guide to E-commerce Inventory Management",
          url: "https://pdfcrop.co.in/blog/inventory-management-ecommerce",
        },
        {
          "@type": "Article",
          position: 8,
          name: "Building Excellent Customer Service for E-commerce",
          url: "https://pdfcrop.co.in/blog/customer-service-ecommerce",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
        strategy="worker"
      />
      <BlogContent />
    </>
  );
}
