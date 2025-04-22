import type { Metadata } from 'next';
import MeeshoLabel from "./meeshoLabel";

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/meesho-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Meesho PDF Label Cropper | Free & Easy Online Tool',
  description: 'Crop Meesho PDF shipping labels online for free. Simple tool to resize your labels accurately. Upload, auto-crop, preview, and download instantly. Perfect for Meesho sellers.',
  keywords: ['Meesho label cropper', 'PDF crop tool', 'shipping label', 'Meesho seller', 'crop PDF online', 'free label tool', 'resize PDF label'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Free Online Meesho PDF Label Cropper',
    description: 'Easily crop your Meesho PDF shipping labels online. Free, fast, and accurate tool designed for Meesho sellers.',
    url: pageUrl,
    type: 'website',
    // Add a relevant image URL if you have one
    // images: [
    //   {
    //     url: `${baseUrl}/og-image-meesho.png`, // Example image path
    //     width: 1200,
    //     height: 630,
    //     alt: 'Meesho PDF Label Cropper Tool',
    //   },
    // ],
  },
  // Basic Structured Data (JSON-LD) - Placeholder
  // Consider adding JSON-LD via a script tag in the component or layout.
};

export default function MeeshoLabelPage() {
  return (
    <>
      {/* Example of adding JSON-LD script directly (if needed in Client Component context) */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": metadata.title,
            "description": metadata.description,
            "url": pageUrl,
            "keywords": metadata.keywords?.join(', ')
          })
        }}
      /> */}
      <MeeshoLabel />
    </>
  );
} 