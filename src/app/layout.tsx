import { Inter } from 'next/font/google'
import "./globals.css";
import LayoutContent from '@/components/LayoutContent'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Cropper - Crop Your PDF Documents with Precision',
  description: 'Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents.',
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
    url: 'https://pdf-crop.vercel.app',
    title: 'PDF Cropper - Crop Your PDF Documents with Precision',
    description: 'Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents.',
    siteName: 'PDF Cropper',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Cropper - Crop Your PDF Documents with Precision',
    description: 'Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents.',
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
