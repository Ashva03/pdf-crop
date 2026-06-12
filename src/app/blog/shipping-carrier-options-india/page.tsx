import { Metadata } from 'next';
import CarrierOptionsContent from './CarrierOptionsContent';

export const metadata: Metadata = {
  title: 'Understanding E-commerce Shipping Carrier Options in India | PDF Cropper',
  description: 'Comprehensive comparison of shipping carriers available in India including pricing, delivery speeds, and platform integrations.',
  keywords: 'shipping carriers India, e-commerce logistics India, courier services India, delivery options India, shipping rates India',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/shipping-carrier-options-india',
  },
  openGraph: {
    title: 'Understanding E-commerce Shipping Carrier Options in India',
    description: 'Comprehensive comparison of shipping carriers available in India including pricing, delivery speeds, and platform integrations.',
    url: 'https://pdfcrop.co.in/blog/shipping-carrier-options-india',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/shipping-carriers-india.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Shipping Carriers in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding E-commerce Shipping Carrier Options in India',
    description: 'Comprehensive comparison of shipping carriers available in India.',
    images: ['https://pdfcrop.co.in/images/shipping-carriers-india.jpg'],
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

export default function ShippingCarrierOptionsIndia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Understanding E-commerce Shipping Carrier Options in India",
            "description": "Comprehensive comparison of shipping carriers available in India including pricing, delivery speeds, and platform integrations.",
            "url": "https://pdfcrop.co.in/blog/shipping-carrier-options-india",
            "datePublished": "2024-01-25",
            "dateModified": "2024-01-25",
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
              "@id": "https://pdfcrop.co.in/blog/shipping-carrier-options-india"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/shipping-carriers-india.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Logistics",
            "keywords": "shipping carriers India, e-commerce logistics",
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
                  "name": "Shipping Carrier Options in India",
                  "item": "https://pdfcrop.co.in/blog/shipping-carrier-options-india"
                }
              ]
            }
          })
        }}
      />
      <CarrierOptionsContent />
    </>
  );
}
