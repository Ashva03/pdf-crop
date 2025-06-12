'use client'
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components'; // Import styled-components
import { Metadata } from 'next';

// --- Styled Components for Terms Page ---
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

const TermsContent = styled.div`
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
// --- End Styled Components ---

export const metadata: Metadata = {
  title: 'Terms and Conditions | PDF Cropper',
  description: 'Read our terms and conditions to understand the rules and guidelines for using our PDF cropping services.',
};

const TermsPage: React.FC = () => {

    return (
        <>
            <Head>
                <title>Terms and Conditions - PDF Crop</title>
                <meta name="description" content="Read the Terms and Conditions for using PDF Crop." />
            </Head>
            <TermsContainer> {/* Use the styled container */}
                <TermsHeader>
                    <TermsTitle>Terms and Conditions</TermsTitle>
                    <LastUpdated>Last Updated: March 15, 2024</LastUpdated>
                </TermsHeader>

                <TermsContent>
                    <p>
                        Welcome to PDF Cropper. By accessing and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our website.
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using PDF Cropper, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        PDF Cropper provides online tools for processing and managing PDF files, specifically focusing on shipping label management for e-commerce platforms. Our services include:
                    </p>
                    <ul>
                        <li>PDF cropping and resizing</li>
                        <li>Shipping label formatting</li>
                        <li>Document optimization</li>
                        <li>Related PDF processing tools</li>
                    </ul>

                    <h2>3. User Responsibilities</h2>
                    <p>
                        As a user of our services, you agree to:
                    </p>
                    <ul>
                        <li>Provide accurate information when required</li>
                        <li>Use the service in compliance with all applicable laws</li>
                        <li>Not misuse or attempt to manipulate our services</li>
                        <li>Not upload malicious files or content</li>
                        <li>Respect intellectual property rights</li>
                    </ul>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of PDF Cropper are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>

                    <h2>5. User Content</h2>
                    <p>
                        When using our services, you retain ownership of your content. However, you grant us a license to:
                    </p>
                    <ul>
                        <li>Process your files for the intended purpose</li>
                        <li>Store temporary copies for service delivery</li>
                        <li>Use anonymized data for service improvement</li>
                    </ul>

                    <h2>6. Service Limitations</h2>
                    <p>
                        Our services are subject to the following limitations:
                    </p>
                    <ul>
                        <li>File size restrictions</li>
                        <li>Processing time limitations</li>
                        <li>Browser compatibility requirements</li>
                        <li>Internet connection requirements</li>
                    </ul>

                    <h2>7. Disclaimer of Warranties</h2>
                    <p>
                        Our services are provided "as is" without any warranties, express or implied. We do not guarantee:
                    </p>
                    <ul>
                        <li>Uninterrupted service</li>
                        <li>Error-free operation</li>
                        <li>Specific results</li>
                        <li>Compatibility with all systems</li>
                    </ul>

                    <h2>8. Limitation of Liability</h2>
                    <p>
                        We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                    </p>

                    <h2>9. Modifications to Service</h2>
                    <p>
                        We reserve the right to:
                    </p>
                    <ul>
                        <li>Modify or discontinue any part of our services</li>
                        <li>Change service features or functionality</li>
                        <li>Update pricing or terms</li>
                        <li>Implement new requirements</li>
                    </ul>

                    <h2>10. Termination</h2>
                    <p>
                        We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
                    </p>

                    <h2>11. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>

                    <h2>12. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page.
                    </p>

                    <h2>13. Contact Information</h2>
                    <p>
                        For any questions about these Terms and Conditions, please contact us:
                    </p>
                    <ul>
                        <li>Email: terms@pdfcrop.co.in</li>
                        <li>Contact Form: /contact</li>
                    </ul>
                </TermsContent>
            </TermsContainer>
            {/* </Layout> */}
        </>
    );
};

export default TermsPage;
