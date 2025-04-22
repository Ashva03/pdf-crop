import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="text-gray-700">
            This Privacy Policy describes how we collect, use, and handle your personal information when you use our PDF cropping service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Usage data (how you interact with our service)</li>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and improve our PDF cropping service</li>
            <li>To analyze usage patterns and optimize user experience</li>
            <li>To display relevant advertisements through Google AdSense</li>
            <li>To detect and prevent fraudulent activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Advertising</h2>
          <p className="text-gray-700">
            We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to our website and other sites. You can opt out of personalized advertising by visiting Google's Ads Settings page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 