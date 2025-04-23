import { type Metadata } from 'next';
import HomePage from "@/components/HomePage";


export const metadata: Metadata = {
  metadataBase: new URL('https://pdfcrop.co.in'),
  alternates: {
    canonical: '/',
  },
  // ... other metadata if exists ...
};

export default function Home() {

  return (
    <HomePage />
  );
}
