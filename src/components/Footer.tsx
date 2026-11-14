/* eslint-disable @next/next/no-img-element */
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
    cursor: pointer;

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
          <h3>Platform Tools</h3>
          <ul>
            <li>
              <Link href="/flipkart-label">Flipkart Label</Link>
            </li>
            <li>
              <Link href="/meesho-label">Meesho Label</Link>
            </li>
            <li>
              <Link href="/snapdeal-label">Snapdeal Label</Link>
            </li>
            <li>
              <Link href="/amazon-label">Amazon Label</Link>
            </li>
            <li>
              <Link href="/myntra-label">Myntra Label</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>PDF Tools</h3>
          <ul>
            <li>
              <Link href="/images-to-pdf">Images to PDF</Link>
            </li>
            <li>
              <Link href="/pdf-to-jpg">PDF to JPG</Link>
            </li>
            <li>
              <Link href="/merge-pdf">Merge PDF</Link>
            </li>
            <li>
              <Link href="/compress-pdf">Compress PDF</Link>
            </li>
            <li>
              <Link href="/edit-pdf">Edit PDF</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tutorials">Tutorials & Guides</Link>
            </li>
            <li>
              <Link href="/blog">E-Commerce Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact Support</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Legal & Privacy</h3>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/disclaimer">Platform Disclaimer</Link>
            </li>
            <li>
              <Link href="/gdpr">GDPR Compliance</Link>
            </li>
            <li>
              <Link href="/data-security">Data Security</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Guides & Resources</h3>
          <ul>
            <li>
              <Link href="/tutorials">All Tutorials</Link>
            </li>
            <li>
              <Link href="/blog/crop-a4-pdf-to-4x6-label">A4 to 4x6 Crop Guide</Link>
            </li>
            <li>
              <Link href="/blog/optimal-thermal-printer-settings">Thermal Printer Setup</Link>
            </li>
            <li>
              <Link href="/blog/why-thermal-printer-prints-blank">Blank Label Fixes</Link>
            </li>
            <li>
              <Link href="/blog/shipping-carrier-options-india">Carrier Comparison</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Publisher & Support</h3>
          <ul>
            <li><strong>Organization:</strong> PDF Cropper</li>
            <li><strong>Operated By:</strong> Ashva Infotech</li>
            <li><strong>Location:</strong> Surat, Gujarat, India</li>
            <li><strong>Support:</strong> support@pdfcrop.co.in</li>
            <li><strong>Business:</strong> ashvainfotech3@gmail.com</li>
            <li><strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM IST</li>
          </ul>
        </FooterSection>
      </FooterContent>
      <div style={{ maxWidth: "1400px", margin: "2rem auto 0", padding: "0 2rem", fontSize: "0.825rem", color: "#9ca3af", lineHeight: "1.6", borderTop: "1px solid #374151", paddingTop: "1.5rem" }}>
        <p style={{ margin: "0 0 0.5rem" }}>
          <strong>Platform Disclaimer:</strong> PDF Cropper is an independent browser-based document utility. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Amazon.com, Inc., Flipkart Internet Private Limited, Meesho (Fashnear Technologies Pvt. Ltd.), Snapdeal Private Limited, or Myntra Designs Pvt. Ltd. All trademarks, service marks, and company names are property of their respective owners.
        </p>
      </div>
      <Copyright>
        <img src="/favicon-16x16.png" alt="PDF Cropper Logo" />©{" "}
        {new Date().getFullYear()} PDF Cropper (Ashva Infotech). All rights reserved.
      </Copyright>
    </Footer>
  );
}
