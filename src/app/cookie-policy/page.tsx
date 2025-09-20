import { Metadata } from 'next';
import CookiePolicyContent from '@/components/CookiePolicyContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | PDF Cropper',
  description: 'Learn about how PDF Cropper uses cookies to improve your experience. Our cookie policy explains what cookies are, how we use them, and your choices regarding cookies.',
  keywords: 'cookie policy, PDF cropper cookies, privacy policy, data protection, website cookies',
  alternates: {
    canonical: 'https://pdfcrop.co.in/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | PDF Cropper',
    description: 'Learn about how PDF Cropper uses cookies to improve your experience. Our cookie policy explains what cookies are, how we use them, and your choices regarding cookies.',
    url: 'https://pdfcrop.co.in/cookie-policy',
    type: 'website',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/cookie-policy.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Crop Tool Cookie Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | PDF Cropper',
    description: 'Learn about how PDF Cropper uses cookies to improve your experience.',
    images: ['https://pdfcrop.co.in/images/cookie-policy.jpg'],
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

export default function CookiePolicyPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy",
            "description": "Learn about how PDF Cropper uses cookies to improve your experience. Our cookie policy explains what cookies are, how we use them, and your choices regarding cookies.",
            "url": "https://pdfcrop.co.in/cookie-policy",
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
                  "name": "Cookie Policy",
                  "item": "https://pdfcrop.co.in/cookie-policy"
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in"
            }
          })
        }}
      />
      <CookiePolicyContent />
    </>
  );
} 