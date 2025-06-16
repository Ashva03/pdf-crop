"use client";

import styled from 'styled-components';
import Link from 'next/link';

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

export default function PrivacyPolicyContent() {
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
          <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. This service may collect information such as your IP address, browser type, pages visited, and time spent on pages. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</li>
          <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. AdSense uses cookies to serve ads based on your prior visits to our website and other sites. You can opt out of personalized advertising by visiting Google's Ads Settings page.</li>
          <li><strong>Cloudflare:</strong> We use Cloudflare for security and performance optimization. Cloudflare may collect technical information about your visit to help protect our website from malicious activity.</li>
        </ul>

        <h2>Advertising and Marketing</h2>
        <p>
          We use Google AdSense to display advertisements on our website. These advertisements may be:
        </p>
        <ul>
          <li>Contextual advertisements based on the content of our pages</li>
          <li>Personalized advertisements based on your browsing history</li>
          <li>Non-personalized advertisements that don't use cookies or personal data</li>
        </ul>
        <p>
          You can control how Google uses your information for advertising by:
        </p>
        <ul>
          <li>Visiting Google's Ads Settings page</li>
          <li>Using the Google Analytics Opt-out Browser Add-on</li>
          <li>Managing your cookie preferences through your browser settings</li>
        </ul>

        <h2>Data Collection for Advertising</h2>
        <p>
          When you visit our website, we and our advertising partners may collect and process the following information for advertising purposes:
        </p>
        <ul>
          <li>Pages you visit and content you interact with</li>
          <li>Device information (browser type, operating system)</li>
          <li>IP address (anonymized)</li>
          <li>Time and date of your visit</li>
          <li>Referral source</li>
        </ul>
        <p>
          This information is used to:
        </p>
        <ul>
          <li>Display relevant advertisements</li>
          <li>Measure the effectiveness of advertising campaigns</li>
          <li>Prevent fraud and abuse</li>
          <li>Improve our services</li>
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

        <h2>Your Rights Under GDPR</h2>
        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These rights include:</p>
        <ul>
          <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>

        <h2>Data Protection Officer</h2>
        <p>
          We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy or our privacy practices, please contact our DPO at:
          <br />
          Email: privacy@pdfcrop.co.in
        </p>

        <h2>International Data Transfers</h2>
        <p>
          Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
        </p>
        <p>
          If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal data, to India and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
        </p>

        <h2>Data Retention</h2>
        <p>
          We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
          <br />
          By email: privacy@pdfcrop.co.in
          <br />
          By visiting our <Link href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Contact Page</Link>
        </p>

        <h2>Consent</h2>
        <p>
          By using our services, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our services.
        </p>
      </PolicyContent>
    </PolicyContainer>
  );
} 