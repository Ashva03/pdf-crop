'use client'

import { Inter } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import Navigation from '@/components/Navigation'
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

export default function LayoutContent({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <StyledComponentsRegistry>
            <GlobalStyle />
            <Navigation />
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </StyledComponentsRegistry>
    )
} 