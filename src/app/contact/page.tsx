import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us - PDF Crop Tool Support | Get Help & Support',
  description: 'Get in touch with PDF Crop Tool support team. Contact us for help with PDF cropping, shipping labels, and technical assistance. We\'re here to help!',
  keywords: 'contact PDF crop tool, support help, technical assistance, PDF cropping help, shipping label support, customer service',
  openGraph: {
    title: 'Contact Us - PDF Crop Tool Support',
    description: 'Get in touch with PDF Crop Tool support team. Contact us for help with PDF cropping, shipping labels, and technical assistance.',
    type: 'website',
    url: 'https://pdfcrop.co.in/contact',
    siteName: 'PDF Crop Tool',
    locale: 'en_US',
    images: [
      {
        url: 'https://pdfcrop.co.in/images/contact-support.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact PDF Crop Tool Support Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - PDF Crop Tool Support',
    description: 'Get in touch with PDF Crop Tool support team for help with PDF cropping and shipping labels.',
    images: ['https://pdfcrop.co.in/images/contact-support.jpg'],
  },
  alternates: {
    canonical: 'https://pdfcrop.co.in/contact',
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

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact PDF Crop Tool",
            "description": "Get in touch with PDF Crop Tool support team for help with PDF cropping, shipping labels, and technical assistance.",
            "url": "https://pdfcrop.co.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "PDF Crop Tool",
              "url": "https://pdfcrop.co.in",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "ashvainfotech3@gmail.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
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
                  "name": "Contact",
                  "item": "https://pdfcrop.co.in/contact"
                }
              ]
            }
          })
        }}
      />
      <ContactClient />
    </>
  );
}
