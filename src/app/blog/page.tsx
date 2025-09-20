import { Metadata } from 'next';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | PDF Cropper',
  description: 'Expert guides, tips, and best practices for efficient shipping label management across multiple e-commerce platforms. Learn shipping standards and troubleshooting.',
  keywords: 'shipping label blog, e-commerce shipping, PDF cropping tips, shipping best practices, label management guide',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog',
  },
  openGraph: {
    title: 'Blog | PDF Cropper',
    description: 'Expert guides, tips, and best practices for efficient shipping label management across multiple e-commerce platforms.',
    url: 'https://pdfcrop.co.in/blog',
    type: 'website',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/blog-shipping-guides.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Crop Tool Blog - Shipping Label Guides and Tips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | PDF Cropper',
    description: 'Expert guides, tips, and best practices for efficient shipping label management.',
    images: ['https://pdfcrop.co.in/images/blog-shipping-guides.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "PDF Crop Tool Blog",
            "description": "Expert guides, tips, and best practices for efficient shipping label management across multiple e-commerce platforms.",
            "url": "https://pdfcrop.co.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Complete Guide to E-commerce Shipping Label Standards",
                "url": "https://pdfcrop.co.in/blog/shipping-label-standards",
                "description": "Learn about the shipping label requirements and standards for major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal."
              },
              {
                "@type": "BlogPosting",
                "headline": "E-commerce Shipping Label Best Practices",
                "url": "https://pdfcrop.co.in/blog/shipping-label-best-practices",
                "description": "Discover the best practices for creating and managing shipping labels to improve your e-commerce shipping efficiency and customer satisfaction."
              },
              {
                "@type": "BlogPosting",
                "headline": "How to Troubleshoot Common Shipping Label Issues for E-commerce",
                "url": "https://pdfcrop.co.in/blog/shipping-label-troubleshooting",
                "description": "A practical guide to identifying and fixing common shipping label problems for e-commerce sellers to improve delivery rates and customer satisfaction."
              }
            ],
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://pdfcrop.co.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://pdfcrop.co.in/blog"
                }
              ]
            }
          })
        }}
      />
      <BlogContent />
    </>
  );
}
