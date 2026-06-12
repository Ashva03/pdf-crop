import { Metadata } from 'next';
import ShippingCostContent from './ShippingCostContent';

export const metadata: Metadata = {
  title: 'Complete Guide to Shipping Cost Optimization for E-commerce Sellers',
  description: 'Learn proven strategies to reduce shipping costs, improve delivery efficiency, and increase profit margins for your e-commerce business.',
  keywords: 'shipping cost optimization, e-commerce shipping costs, reduce shipping expenses, logistics optimization, delivery cost reduction',
  alternates: {
    canonical: 'https://pdfcrop.co.in/blog/shipping-cost-optimization',
  },
  openGraph: {
    title: 'Complete Guide to Shipping Cost Optimization for E-commerce Sellers',
    description: 'Learn proven strategies to reduce shipping costs, improve delivery efficiency, and increase profit margins.',
    url: 'https://pdfcrop.co.in/blog/shipping-cost-optimization',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/shipping-cost-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'Shipping Cost Optimization Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Shipping Cost Optimization',
    description: 'Learn proven strategies to reduce shipping costs and improve delivery efficiency.',
    images: ['https://pdfcrop.co.in/images/shipping-cost-optimization.jpg'],
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

export default function ShippingCostOptimization() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Complete Guide to Shipping Cost Optimization for E-commerce Sellers",
            "description": "Learn proven strategies to reduce shipping costs, improve delivery efficiency, and increase profit margins.",
            "url": "https://pdfcrop.co.in/blog/shipping-cost-optimization",
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15",
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
              "@id": "https://pdfcrop.co.in/blog/shipping-cost-optimization"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/shipping-cost-optimization.jpg",
              "width": 1200,
              "height": 630
            },
            "articleSection": "E-commerce Logistics",
            "keywords": "shipping cost optimization, e-commerce shipping costs",
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
                  "name": "Shipping Cost Optimization",
                  "item": "https://pdfcrop.co.in/blog/shipping-cost-optimization"
                }
              ]
            }
          })
        }}
      />
      <ShippingCostContent />
    </>
  );
}
