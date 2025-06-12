"use client";

import styled from 'styled-components';
import Link from 'next/link';

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 0 20px;
`;

const PolicyHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PolicyTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const PolicyContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #4f46e5;
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: #4a5568;
    }
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #718096;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

export default function CookiePolicyContent() {
  return (
    <PolicyContainer>
      <PolicyHeader>
        <PolicyTitle>Cookie Policy</PolicyTitle>
      </PolicyHeader>
      <PolicyContent>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
          <li><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website. These cookies help us improve our website's performance and user experience.</li>
          <li><strong>Advertising Cookies:</strong> We use Google AdSense to display relevant advertisements. These cookies help us show you ads that are more relevant to your interests.</li>
          <li><strong>Preference Cookies:</strong> These cookies remember your settings and preferences to provide you with a more personalized experience.</li>
        </ul>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.</li>
          <li><strong>Persistent Cookies:</strong> These cookies remain on your device until they expire or you delete them.</li>
          <li><strong>Third-Party Cookies:</strong> These are cookies set by third-party services we use, such as Google Analytics and Google AdSense.</li>
        </ul>

        <h2>Your Cookie Choices</h2>
        <ul>
          <li>Browser Settings: Most web browsers allow you to control cookies through their settings preferences.</li>
          <li>Opt-Out Tools: You can opt out of Google Analytics and Google AdSense cookies using their respective opt-out tools.</li>
          <li>Cookie Consent: When you first visit our website, you can choose which cookies to accept or reject.</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>We use the following third-party services that may set cookies:</p>
        <ul>
          <li>Google Analytics</li>
          <li>Google AdSense</li>
          <li>Cloudflare</li>
        </ul>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
          <br />
          Email: support@pdfcrop.co.in
          <br />
          Or visit our <Link href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Contact Page</Link>
        </p>
      </PolicyContent>
      <LastUpdated>
        Last Updated: {new Date().toLocaleDateString()}
      </LastUpdated>
    </PolicyContainer>
  );
} 