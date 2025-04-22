import type { Metadata } from 'next';
import SnapdealLabel from "./snapdealLabel"; // Import the main component

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/snapdeal-label`;

// Optimized metadata for SEO
export const metadata: Metadata = {
    title: 'Snapdeal PDF Label Cropper | Free Online Tool',
    description: 'Crop Snapdeal PDF shipping labels online for free. Upload your label, auto-crop to the standard size, preview, and download instantly. Perfect for Snapdeal sellers.',
    keywords: ['Snapdeal label cropper', 'PDF crop', 'shipping label', 'Snapdeal seller', 'crop PDF online', 'free tool', 'label formatter'],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Free Snapdeal PDF Label Cropper',
        description: 'Quickly crop your Snapdeal PDF shipping labels online. Free and easy tool for all Snapdeal sellers.',
        url: pageUrl,
        type: 'website',
        // Add a relevant image URL if you have one
        // images: [
        //   {
        //     url: `${baseUrl}/og-image-snapdeal.png`, // Example image path
        //     width: 1200,
        //     height: 630,
        //     alt: 'Snapdeal PDF Label Cropper Tool',
        //   },
        // ],
    },
    // Basic Structured Data (JSON-LD) - Placeholder
};

// The main page component simply renders the SnapdealLabel component
export default function SnapdealLabelPage() {
    return (
        <>
            {/* JSON-LD script could be added here if needed */}
            <SnapdealLabel />
        </>
    );
} 