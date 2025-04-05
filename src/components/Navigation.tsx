'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'

const Nav = styled.nav`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavLink = styled(Link) <{ $active?: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: ${props => props.$active ? 1 : 0.8};
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transform: scaleX(${props => props.$active ? 1 : 0});
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 1;
    &:after {
      transform: scaleX(1);
    }
  }
`

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Nav>
      <NavContent>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo>
            <span>📄</span>
            PDF Cropper
          </Logo>
        </Link>
        <NavLinks>
          <NavLink href="/" $active={pathname === '/'}>
            Home
          </NavLink>
          <NavLink href="/features" $active={pathname === '/features'}>
            Features
          </NavLink>
          <NavLink href="/pricing" $active={pathname === '/pricing'}>
            Pricing
          </NavLink>
          <NavLink href="/blog" $active={pathname === '/blog'}>
            Blog
          </NavLink>
          <NavLink href="/contact" $active={pathname === '/contact'}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  )
} 