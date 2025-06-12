import { Metadata } from 'next';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | PDF Cropper',
  description: 'Expert guides, tips, and best practices for efficient shipping label management across multiple e-commerce platforms.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | PDF Cropper',
    description: 'Expert guides, tips, and best practices for efficient shipping label management across multiple e-commerce platforms.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
