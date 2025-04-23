'use client'
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components'; // Import styled-components

// --- Styled Components for Terms Page ---
const TermsContainer = styled.main`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff; // White background for content area
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Subtle shadow
  color: #333; // Darker text color for readability
  line-height: 1.7;
`;

const H1 = styled.h1`
  color: var(--primary-color, #4f46e5); // Use theme color or fallback
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color, #4f46e5);
  padding-bottom: 0.5rem;
`;

const H2 = styled.h2`
  color: #1f2937; // Dark heading color
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
  color: #555; // Slightly lighter paragraph text
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 2rem;
`;
// --- End Styled Components ---

const TermsPage: React.FC = () => {

    return (
        <>
            <Head>
                <title>Terms and Conditions - PDF Crop</title>
                <meta name="description" content="Read the Terms and Conditions for using PDF Crop." />
            </Head>
            <TermsContainer> {/* Use the styled container */}
                <H1>Terms and Conditions</H1>
                <LastUpdated>Last updated: April 23, 2025</LastUpdated>

                <P>
                    Welcome to PDF Crop! These terms and conditions outline the rules and regulations for the use of the PDF Crop website and services.
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use PDF Crop's website if you do not accept all of the terms and conditions stated on this page.
                </P>

                <H2>1. Introduction</H2>
                <P>
                    PDF Crop ("Service") provides users with tools to modify and crop PDF documents online. These Terms govern your access to and use of the Service.
                </P>

                <H2>2. Use of Service</H2>
                <P>
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that any files you upload and process do not infringe on any third-party rights (including copyright) and do not contain malicious or illegal content.
                </P>
                <P>
                    The Service is provided for personal and business use. Excessive use or use that compromises the stability or performance of the Service for other users may result in temporary or permanent suspension of access.
                </P>

                <H2>3. Uploaded Content</H2>
                <P>
                    You retain ownership of any intellectual property rights that you hold in the content you upload to the Service. When you upload content, you give PDF Crop a limited, worldwide, royalty-free license to use, host, store, reproduce, modify (solely for the purpose of operating and improving the Service, such as formatting or cropping as requested by you), and display such content.
                </P>
                <P>
                    We prioritize your privacy and data security. Uploaded files are typically processed automatically and stored temporarily only as needed to provide the Service. Please see our Privacy Policy for more details on data handling.
                </P>

                <H2>4. Intellectual Property</H2>
                <P>
                    The Service itself, including the website design, text, graphics, logos, underlying software, and other material provided by PDF Crop, are the property of PDF Crop or its licensors and are protected by copyright and other intellectual property laws.
                </P>

                <H2>5. Disclaimers</H2>
                <P>
                    The Service is provided "as is" and "as available" without any warranties of any kind, express or implied. PDF Crop does not warrant that the service will be error-free, uninterrupted, secure, or that it will meet your requirements. We do not guarantee the accuracy or reliability of any results obtained through the use of the Service.
                </P>

                <H2>6. Limitation of Liability</H2>
                <P>
                    To the fullest extent permitted by applicable law, PDF Crop shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the service; (b) any conduct or content of any third party on the service; (c) any content obtained from the service; or (d) unauthorized access, use, or alteration of your transmissions or content.
                </P>

                <H2>7. Changes to Terms</H2>
                <P>
                    We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the "Last updated" date on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </P>

                <H2>8. Governing Law</H2>
                <P>
                    These Terms shall be governed and construed in accordance with the laws of [**Please Specify Jurisdiction, e.g., State, Country**], without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in that jurisdiction.
                </P>

                <H2>9. Contact Information</H2>
                <P>
                    If you have any questions about these Terms, please contact us via the information provided on our Contact page.
                </P>

                {/* Add other necessary sections for your Terms and Conditions here */}
                {/* REMINDER: This content requires review and potentially significant modification by you or legal counsel. */}

            </TermsContainer>
            {/* </Layout> */}
        </>
    );
};

export default TermsPage;
