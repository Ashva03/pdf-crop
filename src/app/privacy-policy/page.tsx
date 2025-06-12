import { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/privacy-policy`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Privacy Policy | PDF Cropper',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information when using our PDF cropping services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | PDF Crop',
    description: 'Learn about data handling practices at pdf-crop.com.',
    url: '/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
} 