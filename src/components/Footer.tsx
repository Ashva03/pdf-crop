'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 4rem 2rem;
  margin-top: 4rem;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: white;
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <Image
              src="/logo.png"
              alt="PDF Cropper Logo"
              width={40}
              height={40}
              priority
            />
          </FooterLogo>
          <h3>About PDF Cropper</h3>
          <p>PDF Cropper is a professional-grade tool designed for businesses and individuals who need precise document editing capabilities.</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/blog">Blog</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <FooterLinks>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/documentation">Documentation</Link>
            <Link href="/support">Support Center</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <FooterLinks>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/security">Security</Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} PDF Cropper. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  )
} 