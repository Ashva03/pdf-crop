import React from 'react';
import { Metadata } from 'next';
import styled from 'styled-components';

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/privacy-policy`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Privacy Policy | PDF Cropper',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information when using our PDF cropping services.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Privacy Policy | PDF Crop',
    description: 'Learn about data handling practices at pdf-crop.com.',
    url: pageUrl,
    type: 'website',
  },
};

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const PolicyHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const PolicyTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const PolicyContent = styled.div`
  color: #374151;
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    color: #1f2937;
    font-size: 1.8rem;
    margin: 2.5rem 0 1.5rem;
  }

  h3 {
    color: #1f2937;
    font-size: 1.4rem;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
  }
`;

const LastUpdated = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function PrivacyPolicy() {
  return (
    <PolicyContainer>
      <PolicyHeader>
        <PolicyTitle>Privacy Policy</PolicyTitle>
        <LastUpdated>Last Updated: March 15, 2024</LastUpdated>
      </PolicyHeader>

      <PolicyContent>
        <p>
          At PDF Cropper, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our PDF cropping services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when using our services:
        </p>
        <ul>
          <li>PDF files you upload for processing</li>
          <li>Contact information when you reach out to us</li>
          <li>Usage data and preferences</li>
          <li>Device and browser information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the collected information for various purposes:
        </p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To improve user experience</li>
          <li>To communicate with you about our services</li>
          <li>To detect and prevent technical issues</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information:
        </p>
        <ul>
          <li>All file processing is done locally in your browser</li>
          <li>We use secure HTTPS connections</li>
          <li>Regular security assessments</li>
          <li>Limited access to personal information</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          We use third-party services that may collect information:
        </p>
        <ul>
          <li>Google Analytics for website analytics</li>
          <li>Google AdSense for advertising</li>
          <li>Cloudflare for security and performance</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies:
        </p>
        <ul>
          <li>Essential cookies for website functionality</li>
          <li>Analytics cookies to understand user behavior</li>
          <li>Advertising cookies for personalized ads</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You have certain rights regarding your personal information:
        </p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to processing of your information</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>Email: privacy@pdfcrop.co.in</li>
          <li>Contact Form: /contact</li>
        </ul>

        <h2>Consent</h2>
        <p>
          By using our services, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our services.
        </p>
      </PolicyContent>
    </PolicyContainer>
  );
} 