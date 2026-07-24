import { Metadata } from "next";
import fs from "fs";
import path from "path";
import BlogContent from "@/components/BlogContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "E-commerce Shipping Blog | Expert Guides & Best Practices | PDF Cropper",
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
  // Read posts from JSON registry dynamically
  const registryPath = path.join(process.cwd(), "src", "content", "blog-registry.json");
  let posts = [];
  try {
    if (fs.existsSync(registryPath)) {
      const data = fs.readFileSync(registryPath, "utf8");
      posts = JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading blog registry:", error);
  }

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
      itemListElement: posts.map((post: any, index: number) => ({
        "@type": "Article",
        position: index + 1,
        name: post.title,
        url: `https://pdfcrop.co.in/blog/${post.slug}`,
      })),
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
      <BlogContent posts={posts} />
    </>
  );
}
