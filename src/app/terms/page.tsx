import React from 'react';
import { Metadata } from 'next';
import TermsContent from '@/components/TermsContent';


export const metadata: Metadata = {
  title: 'Terms and Conditions | PDF Cropper',
  description: 'Read our terms and conditions to understand the rules and guidelines for using our PDF cropping services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms and Conditions | PDF Cropper',
    description: 'Read our terms and conditions to understand the rules and guidelines for using our PDF cropping services.',
    url: '/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
