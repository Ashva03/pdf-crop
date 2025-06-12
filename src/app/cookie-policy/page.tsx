import { Metadata } from 'next';
import CookiePolicyContent from '@/components/CookiePolicyContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | PDF Cropper',
  description: 'Learn about how PDF Cropper uses cookies to improve your experience. Our cookie policy explains what cookies are, how we use them, and your choices regarding cookies.',
  alternates: {
    canonical: '/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | PDF Cropper',
    description: 'Learn about how PDF Cropper uses cookies to improve your experience. Our cookie policy explains what cookies are, how we use them, and your choices regarding cookies.',
    url: '/cookie-policy',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
} 