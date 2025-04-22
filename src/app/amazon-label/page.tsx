import type { Metadata } from 'next';
import AmazonLabel from "./amazonLabel"; // Import the new component

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/amazon-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Amazon PDF Label Cropper | Free Online Tool (FBA/FBM)',
  description: 'Easily crop Amazon FBA or FBM PDF shipping labels online for free. Upload your PDF, auto-crop to the correct size, preview, and download instantly. Simplify your Amazon shipping prep.',
  keywords: ['Amazon label cropper', 'PDF crop', 'shipping label', 'Amazon FBA label', 'Amazon FBM label', 'Amazon seller', 'crop PDF online', 'free tool', 'label resizer'],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Free Amazon PDF Shipping Label Cropper Online',
    description: 'Crop Amazon FBA & FBM shipping labels from PDF accurately and quickly. Free online tool for Amazon sellers.',
    url: pageUrl,
    type: 'website',
    // Add a relevant image URL if you have one
    // images: [
    //   {
    //     url: `${baseUrl}/og-image-amazon.png`, // Example image path
    //     width: 1200,
    //     height: 630,
    //     alt: 'Amazon PDF Label Cropper Tool',
    //   },
    // ],
  },
  // Basic Structured Data (JSON-LD) - Placeholder
};

// The main page component now just renders the AmazonLabel component
export default function AmazonLabelPage() {
  // State and handlers are now moved to AmazonLabel component
  return (
    <>
      {/* JSON-LD script could be added here if needed */}
      <AmazonLabel />
    </>
  );
} 