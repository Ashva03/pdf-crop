import { Inter } from 'next/font/google'
import "./globals.css";
import LayoutContent from '@/components/LayoutContent'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Cropper - Free Online PDF Tools for Document Management',
  description: 'Free online PDF tools for cropping, compressing, merging, splitting, rotating, converting, and optimizing PDF documents. Perfect for businesses, students, and professionals.',
  keywords: 'PDF cropper, PDF tools, PDF editor, PDF compressor, PDF merger, PDF splitter, PDF converter, PDF optimizer, PDF watermark, PDF sign, PDF OCR, document management, online PDF tools, free PDF tools, PDF manipulation, PDF processing, PDF editing software, PDF utilities, PDF workflow, PDF automation, PDF business tools, PDF student tools, PDF professional tools',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#4f46e5',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pdfcrope.ashvainfo.co.in',
    title: 'PDF Cropper - Free Online PDF Tools for Document Management',
    description: 'Free online PDF tools for cropping, compressing, merging, splitting, rotating, converting, and optimizing PDF documents. Perfect for businesses, students, and professionals.',
    siteName: 'PDF Cropper',
    images: [
      {
        url: 'https://pdfcrope.ashvainfo.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PDF Cropper - Free Online PDF Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Cropper - Free Online PDF Tools for Document Management',
    description: 'Free online PDF tools for cropping, compressing, merging, splitting, rotating, converting, and optimizing PDF documents. Perfect for businesses, students, and professionals.',
    images: ['https://pdfcrope.ashvainfo.co.in/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://pdfcrope.ashvainfo.co.in',
  },
  authors: [{ name: 'PDF Cropper Team' }],
  category: 'technology',
  classification: 'Business & Productivity',
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  )
}
