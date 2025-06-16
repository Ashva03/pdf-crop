"use client";

import styled from 'styled-components';
import Link from 'next/link';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const TermsHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const TermsTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const TermsContentText = styled.div`
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

export default function TermsContent() {
  return (
    <TermsContainer>
      <TermsHeader>
        <TermsTitle>Terms and Conditions</TermsTitle>
        <LastUpdated>Last Updated: March 15, 2024</LastUpdated>
      </TermsHeader>

      <TermsContentText>
        <p>
          Welcome to PDF Cropper. By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          PDF Cropper provides online tools for:
        </p>
        <ul>
          <li>Cropping and formatting PDF shipping labels</li>
          <li>Converting images to PDF</li>
          <li>Converting PDF to JPG</li>
          <li>Merging multiple PDFs</li>
          <li>Compressing PDF files</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>
          As a user of our services, you agree to:
        </p>
        <ul>
          <li>Provide accurate information when required</li>
          <li>Use the services in compliance with all applicable laws</li>
          <li>Not misuse or attempt to manipulate our services</li>
          <li>Not upload malicious files or content</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by PDF Cropper and are protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>5. User Content</h2>
        <p>
          You retain all rights to any content you upload or process through our services. However, you grant us a license to process and store your content as necessary to provide our services.
        </p>

        <h2>6. Service Limitations</h2>
        <p>
          Our services are subject to the following limitations:
        </p>
        <ul>
          <li>Maximum file size: 100MB per file</li>
          <li>Maximum number of files: 10 files per batch</li>
          <li>Processing time may vary based on file size and server load</li>
        </ul>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted or error-free.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          PDF Cropper shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </p>

        <h2>9. Modifications to Service</h2>
        <p>
          We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
        </p>

        <h2>10. Termination</h2>
        <p>
          We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date at the top of this page.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us:
          <br />
          By email: terms@pdfcrop.co.in
          <br />
          By visiting our <Link href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Contact Page</Link>
        </p>
      </TermsContentText>
    </TermsContainer>
  );
} 