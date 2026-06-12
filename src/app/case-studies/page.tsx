import { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
  title: 'E-commerce Success Stories & Case Studies | PDF Cropper',
  description: 'Real-world examples of how e-commerce businesses have improved their operations with our PDF tools and shipping label solutions.',
  keywords: 'e-commerce case studies, success stories, shipping label optimization, business growth, operational efficiency',
  alternates: {
    canonical: 'https://pdfcrop.co.in/case-studies',
  },
  openGraph: {
    title: 'E-commerce Success Stories & Case Studies',
    description: 'Real-world examples of how e-commerce businesses have improved their operations.',
    url: 'https://pdfcrop.co.in/case-studies',
    type: 'article',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Success Stories & Case Studies',
    description: 'Real-world examples of how e-commerce businesses have improved their operations.',
    images: ['https://pdfcrop.co.in/images/case-studies.jpg'],
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

export default function CaseStudies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "headline": "E-commerce Success Stories & Case Studies",
            "description": "Real-world examples of how e-commerce businesses have improved their operations with our PDF tools and shipping label solutions.",
            "url": "https://pdfcrop.co.in/case-studies",
            "datePublished": "2024-02-10",
            "dateModified": "2024-02-10",
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
              "@id": "https://pdfcrop.co.in/case-studies"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://pdfcrop.co.in/images/case-studies.jpg",
              "width": 1200,
              "height": 630
            }
          })
        }}
      />
      <CaseStudiesContent />
    </>
  );
}
