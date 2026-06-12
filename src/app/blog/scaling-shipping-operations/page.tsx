import { Metadata } from 'next';
import ScalingShippingContent from './ScalingShippingContent';

export const metadata: Metadata = {
  title: 'How to Scale Your E-commerce Shipping Operations | PDF Cropper',
  description: 'Strategies and best practices for scaling your shipping operations as your e-commerce business grows from startup to enterprise.',
  keywords: 'scaling shipping operations, e-commerce growth, logistics scaling, warehouse automation, shipping efficiency',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/scaling-shipping-operations',
  },
  openGraph: {
    title: 'How to Scale Your E-commerce Shipping Operations',
    description: 'Strategies and best practices for scaling your shipping operations as your e-commerce business grows.',
    url: 'https://pdfcrop.co.in/blog/scaling-shipping-operations',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/scaling-shipping.jpg',
        width: 1200,
        height: 630,
        alt: 'Scaling E-commerce Shipping Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Scale Your E-commerce Shipping Operations',
    description: 'Strategies and best practices for scaling your shipping operations as your e-commerce business grows.',
    images: ['https://pdfcrop.co.in/images/scaling-shipping.jpg'],
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

export default function ScalingShippingOperations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Scale Your E-commerce Shipping Operations",
            "description": "Strategies and best practices for scaling your shipping operations as your e-commerce business grows from startup to enterprise.",
            "url": "https://pdfcrop.co.in/blog/scaling-shipping-operations",
            "datePublished": "2024-01-20",
            "dateModified": "2024-01-20",
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
              "@id": "https://pdfcrop.co.in/blog/scaling-shipping-operations"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/scaling-shipping.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Logistics",
            "keywords": "scaling shipping operations, e-commerce growth",
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
                  "name": "Scaling Shipping Operations",
                  "item": "https://pdfcrop.co.in/blog/scaling-shipping-operations"
                }
              ]
            }
          })
        }}
      />
      <ScalingShippingContent />
    </>
  );
}
