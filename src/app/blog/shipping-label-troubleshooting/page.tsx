import { Metadata } from 'next';
import ShippingLabelContent from './ShippingLabelContent';

export const metadata: Metadata = {
  title: 'Troubleshoot Common Shipping Label Issues | PDF Cropper',
  description: 'A practical guide to identifying and fixing common shipping label problems for e-commerce sellers. Improve delivery rates and customer satisfaction.',
  keywords: 'shipping label troubleshooting, e-commerce shipping problems, label issues, delivery problems, shipping errors',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/shipping-label-troubleshooting',
  },
  openGraph: {
    title: 'Troubleshoot Common Shipping Label Issues | PDF Cropper',
    description: 'A practical guide to identifying and fixing common shipping label problems for e-commerce sellers. Improve delivery rates and customer satisfaction.',
    url: 'https://pdfcrop.co.in/blog/shipping-label-troubleshooting',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/shipping-troubleshooting.jpg',
        width: 1200,
        height: 630,
        alt: 'Troubleshoot Common Shipping Label Issues Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Troubleshoot Common Shipping Label Issues',
    description: 'A practical guide to identifying and fixing common shipping label problems for e-commerce sellers.',
    images: ['https://pdfcrop.co.in/images/shipping-troubleshooting.jpg'],
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

export default function ShippingLabelTroubleshooting() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Troubleshoot Common Shipping Label Issues",
            "description": "A practical guide to identifying and fixing common shipping label problems for e-commerce sellers. Improve delivery rates and customer satisfaction.",
            "url": "https://pdfcrop.co.in/blog/shipping-label-troubleshooting",
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
              "@id": "https://pdfcrop.co.in/blog/shipping-label-troubleshooting"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/shipping-troubleshooting.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Shipping",
            "keywords": "shipping label troubleshooting, e-commerce shipping problems",
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
                  "name": "Shipping Label Troubleshooting",
                  "item": "https://pdfcrop.co.in/blog/shipping-label-troubleshooting"
                }
              ]
            }
          })
        }}
      />
      <ShippingLabelContent />
    </>
  );
} 