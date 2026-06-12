import { Metadata } from 'next';
import InventoryManagementContent from './InventoryManagementContent';

export const metadata: Metadata = {
  title: 'Complete Guide to E-commerce Inventory Management | PDF Cropper',
  description: 'Learn proven strategies for effective inventory management in e-commerce to reduce costs, prevent stockouts, and improve cash flow.',
  keywords: 'inventory management e-commerce, stock control, warehouse management, inventory optimization, e-commerce operations',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/inventory-management-ecommerce',
  },
  openGraph: {
    title: 'Complete Guide to E-commerce Inventory Management',
    description: 'Learn proven strategies for effective inventory management in e-commerce to reduce costs and improve operations.',
    url: 'https://pdfcrop.co.in/blog/inventory-management-ecommerce',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/inventory-management.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Inventory Management Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to E-commerce Inventory Management',
    description: 'Learn proven strategies for effective inventory management in e-commerce.',
    images: ['https://pdfcrop.co.in/images/inventory-management.jpg'],
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

export default function InventoryManagementEcommerce() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Complete Guide to E-commerce Inventory Management",
            "description": "Learn proven strategies for effective inventory management in e-commerce to reduce costs, prevent stockouts, and improve cash flow.",
            "url": "https://pdfcrop.co.in/blog/inventory-management-ecommerce",
            "datePublished": "2024-02-01",
            "dateModified": "2024-02-01",
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
              "@id": "https://pdfcrop.co.in/blog/inventory-management-ecommerce"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/inventory-management.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Operations",
            "keywords": "inventory management e-commerce",
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
                  "name": "Inventory Management",
                  "item": "https://pdfcrop.co.in/blog/inventory-management-ecommerce"
                }
              ]
            }
          })
        }}
      />
      <InventoryManagementContent />
    </>
  );
}
