'use client'

import styled from 'styled-components'
// import Navigation from './Navigation' // Removed unused import
import FooterComponent from './Footer'

const Main = styled.main`
  min-height: calc(100vh - 200px);
  padding-top: 72px; /* Add padding to offset fixed navbar */
`

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Navigation is rendered in layout.tsx, no need to render here again */}
            {/* <Navigation /> */}
            <Main>{children}</Main>
            <FooterComponent />
        </>
    )
} 