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
        <p>
          We use the following types of cookies:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website's performance and user experience.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
          </li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages:
        </p>
        <ul>
          <li>
            <strong>Google AdSense:</strong> We use Google AdSense to display advertisements. AdSense uses cookies to:
            <ul>
              <li>Serve ads based on your prior visits to our website and other sites</li>
              <li>Limit the number of times you see a particular ad</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Prevent fraud and abuse</li>
            </ul>
            You can opt out of personalized advertising by visiting Google's Ads Settings page.
          </li>
          <li>
            <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to:
            <ul>
              <li>Distinguish unique users</li>
              <li>Remember the number and time of previous visits</li>
              <li>Remember traffic source information</li>
              <li>Determine the start and end of a session</li>
            </ul>
            You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
          </li>
        </ul>

        <h2>Cookie Duration</h2>
        <p>
          Cookies can remain on your computer or mobile device for different periods of time:
        </p>
        <ul>
          <li><strong>Session Cookies:</strong> These cookies exist only while your browser is open. They are automatically deleted when you close your browser.</li>
          <li><strong>Persistent Cookies:</strong> These cookies survive after your browser is closed. They can remain on your device for a period of time specified in the cookie.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website and some services and functionalities may not work.
        </p>
        <p>
          To manage cookies, you can:
        </p>
        <ul>
          <li>Use your browser settings to control cookie preferences</li>
          <li>Use Google's Ads Settings to manage personalized ads</li>
          <li>Install the Google Analytics Opt-out Browser Add-on</li>
          <li>Use the "Do Not Track" feature in your browser</li>
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