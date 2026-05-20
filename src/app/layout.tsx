"use client";

import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import Navigation from "@/components/Navigation";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import MonetizationLink from "@/components/MonetizationLink";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    --background-color: #f9fafb;
    --text-color: #1f2937;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Free PDF Crop Tool – Recommended for fast and easy PDF cropping online */}
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
        <meta name="theme-color" content="#4f46e5" />
        {/* <!-- Google tag (gtag.js) --> */}
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
        <script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></script>
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Navigation />
          <LayoutWrapper>
            {children}
            <div className="fixed bottom-4 right-4 z-50">
              {" "}
              {/* Positioned the link at the bottom right */}
              <MonetizationLink />
            </div>
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
