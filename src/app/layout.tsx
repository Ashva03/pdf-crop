'use client'

import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Navigation from '@/components/Navigation'
import "./globals.css";
import Script from 'next/script'
import LayoutWrapper from '@/components/LayoutWrapper'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PDF Cropper - Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents." />
        <meta name="keywords" content="PDF, crop, document, editor, online, tool" />
        <meta property="og:title" content="PDF Cropper" />
        <meta property="og:description" content="Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdf-cropper.vercel.app" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDF Cropper" />
        <meta name="twitter:description" content="Crop your PDF documents with precision. Perfect for e-commerce platforms and business documents." />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navigation />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
