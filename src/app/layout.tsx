import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import MonetizationLink from "@/components/MonetizationLink";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfcrop.co.in"),
  title: {
    default: "Crop PDF Labels for Flipkart, Meesho, Amazon & More | Online PDF Cropper Tool",
    template: "%s | PDF Cropper"
  },
  description: "Crop PDF shipping labels quickly for Amazon, Flipkart, Meesho, Snapdeal, and Myntra. Perfect for e-commerce sellers. Supports custom cropping, ASIN/SKU overlay, and batch processing. 100% free and secure browser-based tool.",
  keywords: "PDF cropper, PDF cropping tool, crop PDF labels, shipping label cropper, e-commerce PDF tool, Flipkart label crop, Meesho PDF crop, Amazon label crop, Myntra label crop, crop PDF online, custom PDF crop, seller tools, online selling, shipping labels PDF, crop invoices, PDF editor for sellers",
  openGraph: {
    title: "Crop PDF Labels for Flipkart, Meesho, Amazon & More | Online PDF Cropper Tool",
    description: "Crop shipping labels from PDF files in seconds. Perfect for online sellers using Flipkart, Amazon, Meesho, Myntra, and more.",
    type: "website",
    locale: "en_US",
    url: "https://pdfcrop.co.in/",
    siteName: "PDF Label Cropper",
    images: [
      {
        url: "https://pdfcrop.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Cropper - Free Online PDF Tools",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QF2MVJ5SNC"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QF2MVJ5SNC');
            `,
          }}
        />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6259586123575519"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={inter.className}
        itemProp="potentialAction"
        itemScope
        itemType="https://schema.org/SearchAction"
      >
        <Providers>
          <Navigation />
          <LayoutWrapper>
            {children}
            <div className="fixed bottom-4 right-4 z-50">
              <MonetizationLink />
            </div>
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
