import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | PDF Cropper',
  description: 'Learn about the mission, team, and story behind PDF Cropper. Discover what makes us unique in e-commerce shipping label management.'
};

export default function AboutPage() {
  return (
    <AboutContent />
  );
}
