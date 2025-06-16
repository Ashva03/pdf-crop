import { Metadata } from 'next';
import ShippingLabelStandardsContent from '@/components/ShippingLabelStandardsContent';

export const metadata: Metadata = {
  title: 'Complete Guide to E-commerce Shipping Label Standards | PDF Cropper',
  description: 'Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
  alternates: {
    canonical: '/blog/shipping-label-standards',
  },
  openGraph: {
    title: 'Complete Guide to E-commerce Shipping Label Standards | PDF Cropper',
    description: 'Comprehensive guide to shipping label requirements and standards across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
    url: '/blog/shipping-label-standards',
    type: 'article',
  },
};

export default function ShippingLabelStandardsPage() {
  return <ShippingLabelStandardsContent />;
} 