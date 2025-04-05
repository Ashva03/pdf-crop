'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const Navbar = styled.nav`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &.active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`

export default function Navigation() {
    const pathname = usePathname()

    return (
        <Navbar>
            <NavContent>
                <Link href="/">
                    <Logo>
                        <span>📄</span>
                        PDF Cropper
                    </Logo>
                </Link>
                <NavLinks>
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>
                        Home
                    </Link>
                    <Link href="/features" className={pathname === '/features' ? 'active' : ''}>
                        Features
                    </Link>
                    <Link href="/how-it-works" className={pathname === '/how-it-works' ? 'active' : ''}>
                        How It Works
                    </Link>
                    <Link href="/pricing" className={pathname === '/pricing' ? 'active' : ''}>
                        Pricing
                    </Link>
                    <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>
                        Blog
                    </Link>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                        Contact
                    </Link>
                </NavLinks>
            </NavContent>
        </Navbar>
    )
} 