import type { Metadata } from 'next';
import FlipkartLabel from "./flipkartLabel";

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/flipkart-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Flipkart PDF Label Cropper | Free Online Tool (A4 to A6)',
  description: 'Crop Flipkart PDF shipping labels from A4 to A6 online for free. Upload, auto-crop, preview, and download perfectly sized labels instantly. Improve your Flipkart shipping process.',
  keywords: ['Flipkart label cropper', 'PDF crop', 'A4 to A6', 'shipping label', 'Flipkart seller', 'crop PDF online', 'free tool', 'label cutter'],
  alternates: {
    canonical: '/flipkart-label',
  },
  openGraph: {
    title: 'Free Flipkart PDF Label Cropper (A4 to A6)',
    description: 'Quickly crop your Flipkart A4 shipping labels to A6 size online. Easy-to-use, free tool for all Flipkart sellers.',
    url: pageUrl,
    type: 'website',
    // Add a relevant image URL if you have one
    // images: [
    //   {
    //     url: `${baseUrl}/og-image-flipkart.png`, // Example image path
    //     width: 1200,
    //     height: 630,
    //     alt: 'Flipkart PDF Label Cropper Tool',
    //   },
    // ],
  },
  metadataBase: new URL('https://pdfcrop.co.in'),
  // Basic Structured Data (JSON-LD)
  // You can enhance this further based on Schema.org guidelines
  // This script needs to be rendered in the component for client-side execution,
  // or handled differently for Server Components if needed.
  // For simplicity, we define it here but rendering requires adjustment.
  // Let's add a placeholder comment for now, as injecting scripts via metadata object isn't standard.
  // Consider adding JSON-LD via a script tag in the component or layout.
};

export default function FlipkartLabelPage() {
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
      <FlipkartLabel />
    </>
  );
}
