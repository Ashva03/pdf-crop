import { Metadata } from 'next';
import DocumentationClient from './DocumentationClient';

export const metadata: Metadata = {
  title: 'Documentation | PDF Cropper - User Guide & Technical Docs',
  description: 'Comprehensive guides and technical documentation to help you get the most out of PDF Cropper. User guides, API reference, and best practices for PDF editing.',
  keywords: 'PDF cropper documentation, user guide, technical documentation, API reference, PDF editing guide, tutorial',
  alternates: {
    canonical: 'https://pdfcrop.co.in/documentation',
  },
  openGraph: {
    title: 'Documentation | PDF Cropper - User Guide & Technical Docs',
    description: 'Comprehensive guides and technical documentation to help you get the most out of PDF Cropper.',
    url: 'https://pdfcrop.co.in/documentation',
    type: 'website',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/documentation-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Cropper Documentation and User Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | PDF Cropper',
    description: 'Comprehensive guides and technical documentation for PDF Cropper.',
    images: ['https://pdfcrop.co.in/images/documentation-guide.jpg'],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DocumentationPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Documentation",
            "description": "Comprehensive guides and technical documentation to help you get the most out of PDF Cropper.",
            "url": "https://pdfcrop.co.in/documentation",
            "mainEntity": {
              "@type": "Organization",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            },
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
                  "name": "Documentation",
                  "item": "https://pdfcrop.co.in/documentation"
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            },
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Getting Started Guide",
                "url": "https://pdfcrop.co.in/tutorials/getting-started"
              },
              {
                "@type": "WebPage",
                "name": "Interface & Tools Overview",
                "url": "https://pdfcrop.co.in/tutorials/interface-overview"
              },
              {
                "@type": "WebPage",
                "name": "Quality Settings & Barcode Standards",
                "url": "https://pdfcrop.co.in/tutorials/quality-settings"
              }
            ]
          })
        }}
      />
      <DocumentationClient />
    </>
  );
}
