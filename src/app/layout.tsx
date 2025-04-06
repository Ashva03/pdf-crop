'use client'

import { Inter } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import Navigation from '@/components/Navigation'
import "./globals.css";
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Navigation />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
