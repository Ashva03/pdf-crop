"use client";

import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #4f46e5;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
    color: #e5e7eb;
  }

  a {
    color: #e5e7eb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4f46e5;
    }
  }

  p {
    color: #e5e7eb;
    line-height: 1.6;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <FooterContent>
        <FooterSection>
          <h3>About PDF Cropper</h3>
          <p>
            PDF Cropper is a professional-grade tool designed for businesses and
            individuals who need precise document editing capabilities.
          </p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: ashvainfotech3@gmail.com</li>
            <li>Address: Surat Gujarat</li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <img src="/favicon-16x16.png" alt="PDF Cropper Logo" />©{" "}
        {new Date().getFullYear()} PDF Cropper. All rights reserved.
      </Copyright>
    </Footer>
  );
}
