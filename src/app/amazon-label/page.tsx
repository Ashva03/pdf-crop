import type { Metadata } from 'next';
import AmazonLabel from "./amazonLabel"; // Import the new component

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdfcrop.co.in';
const pageUrl = `${baseUrl}/amazon-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Amazon PDF Label Cropper | Free Online Tool (FBA/FBM)',
  description: 'Crop Amazon FBA/FBM PDF shipping labels online for free. Upload PDF, auto-crop to correct size, preview & download instantly. Simplify Amazon shipping prep.',
  keywords: ['Amazon label cropper', 'PDF crop', 'shipping label', 'Amazon FBA label', 'Amazon FBM label', 'Amazon seller', 'crop PDF online', 'free tool', 'label resizer', 'Amazon shipping labels', 'SKU extraction'],
  alternates: {
    canonical: '/amazon-label',
  },
  openGraph: {
    title: 'Free Amazon PDF Shipping Label Cropper Online',
    description: 'Crop Amazon FBA & FBM shipping labels from PDF accurately and quickly. Free online tool for Amazon sellers.',
    url: pageUrl,
    type: 'website',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/images/amazon-label-cropper.jpg`,
        width: 1200,
        height: 630,
        alt: 'Amazon PDF Label Cropper Tool - Process Shipping Labels Online',
      },
    ],
  },
  metadataBase: new URL('https://pdfcrop.co.in'),
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon PDF Label Cropper Tool',
    description: 'Free tool to crop Amazon shipping labels and extract SKU information',
    images: [`${baseUrl}/images/amazon-label-cropper.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

// The main page component now just renders the AmazonLabel component
export default function AmazonLabelPage() {
  // State and handlers are now moved to AmazonLabel component
  return (
    <>
      {/* Add JSON-LD structured data for rich search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Amazon PDF Label Cropper",
            "description": metadata.description,
            "url": pageUrl,
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Crop Amazon shipping labels",
              "Extract SKU information",
              "Print SKU on labels",
              "Remove invoices from printouts",
              "Preview processed PDFs"
            ],
            "operatingSystem": "Any",
            "browserRequirements": "Requires JavaScript enabled browser"
          })
        }}
      />
      <AmazonLabel />
    </>
  );
} 