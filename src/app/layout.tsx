import { Inter } from 'next/font/google'
import "./globals.css"
import { Metadata } from 'next'
import LayoutContent from '@/components/LayoutContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PDF Cropper - Professional PDF Page Cropping Tool',
    template: '%s | PDF Cropper'
  },
  description: 'Crop PDF pages with precision. Perfect for e-commerce platforms like Flipkart, Myntra, and Meesho. Custom crop options available for business documents.',
  keywords: 'PDF cropper, PDF editor, e-commerce PDF, business documents, Flipkart PDF, Myntra PDF, Meesho PDF, custom PDF cropping',
  authors: [{ name: 'PDF Cropper Team' }],
  creator: 'PDF Cropper',
  publisher: 'PDF Cropper',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pdf-crop.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PDF Cropper - Professional PDF Page Cropping Tool',
    description: 'Crop PDF pages with precision. Perfect for e-commerce platforms like Flipkart, Myntra, and Meesho.',
    url: 'https://pdf-crop.vercel.app',
    siteName: 'PDF Cropper',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PDF Cropper',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Cropper - Professional PDF Page Cropping Tool',
    description: 'Crop PDF pages with precision. Perfect for e-commerce platforms.',
    images: ['/og-image.png'],
    creator: '@pdfcropper',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#4f46e5',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
