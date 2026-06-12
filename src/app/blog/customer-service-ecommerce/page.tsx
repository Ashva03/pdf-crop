import { Metadata } from 'next';
import CustomerServiceContent from './CustomerServiceContent';

export const metadata: Metadata = {
  title: 'Building Excellent Customer Service for E-commerce | PDF Cropper',
  description: 'Learn proven strategies to build exceptional customer service in e-commerce, increase customer loyalty, and drive business growth.',
  keywords: 'e-commerce customer service, customer support, customer experience, customer retention, e-commerce success',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/customer-service-ecommerce',
  },
  openGraph: {
    title: 'Building Excellent Customer Service for E-commerce',
    description: 'Learn proven strategies to build exceptional customer service in e-commerce and drive business growth.',
    url: 'https://pdfcrop.co.in/blog/customer-service-ecommerce',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/customer-service.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Customer Service Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building Excellent Customer Service for E-commerce',
    description: 'Learn proven strategies to build exceptional customer service in e-commerce.',
    images: ['https://pdfcrop.co.in/images/customer-service.jpg'],
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

export default function CustomerServiceEcommerce() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Building Excellent Customer Service for E-commerce",
            "description": "Learn proven strategies to build exceptional customer service in e-commerce, increase customer loyalty, and drive business growth.",
            "url": "https://pdfcrop.co.in/blog/customer-service-ecommerce",
            "datePublished": "2024-02-05",
            "dateModified": "2024-02-05",
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
              "@id": "https://pdfcrop.co.in/blog/customer-service-ecommerce"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/customer-service.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Business",
            "keywords": "e-commerce customer service",
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
                  "name": "Customer Service",
                  "item": "https://pdfcrop.co.in/blog/customer-service-ecommerce"
                }
              ]
            }
          })
        }}
      />
      <CustomerServiceContent />
    </>
  );
}
