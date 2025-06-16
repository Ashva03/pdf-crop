import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | PDF Cropper',
  description: 'Frequently asked questions about PDF Cropper, privacy, and e-commerce shipping label management.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 