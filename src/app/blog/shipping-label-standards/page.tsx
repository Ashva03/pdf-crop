import { Metadata } from 'next';
import ShippingLabelStandardsContent from '@/components/ShippingLabelStandardsContent';

export const metadata: Metadata = {
  title: 'Complete Guide to E-commerce Shipping Label Standards | PDF Cropper',
  description: 'Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
  keywords: 'shipping label standards, e-commerce shipping requirements, Flipkart labels, Amazon labels, Meesho labels, Snapdeal labels',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/shipping-label-standards',
  },
  openGraph: {
    title: 'Complete Guide to E-commerce Shipping Label Standards | PDF Cropper',
    description: 'Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
    url: 'https://pdfcrop.co.in/blog/shipping-label-standards',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/shipping-label-standards.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Guide to E-commerce Shipping Label Standards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to E-commerce Shipping Label Standards',
    description: 'Comprehensive guide to shipping label requirements and standards across major e-commerce platforms.',
    images: ['https://pdfcrop.co.in/images/shipping-label-standards.jpg'],
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

export default function ShippingLabelStandardsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Complete Guide to E-commerce Shipping Label Standards",
            "description": "Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.",
            "url": "https://pdfcrop.co.in/blog/shipping-label-standards",
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "author": {
              "@type": "Organization",
              "name": "PDF Crop Tool"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pdfcrop.co.in/blog/shipping-label-standards"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/shipping-label-standards.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Shipping",
            "keywords": "shipping label standards, e-commerce shipping requirements",
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Shipping Label Standards",
                  "item": "https://pdfcrop.co.in/blog/shipping-label-standards"
                }
              ]
            }
          })
        }}
      />
      <ShippingLabelStandardsContent />
    </>
  );
} 