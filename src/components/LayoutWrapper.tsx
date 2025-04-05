'use client'

import styled from 'styled-components'
import Navigation from './Navigation'
import FooterComponent from './Footer'

const Main = styled.main`
  min-height: calc(100vh - 200px);
`

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <Main>{children}</Main>
            <FooterComponent />
        </>
    )
} 