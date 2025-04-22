import React from 'react';
import type { Metadata } from 'next';
import styles from './privacy-policy.module.css'; // Import the CSS module

// Define Base URL (Replace with your actual domain)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdf-crop.com';
const pageUrl = `${baseUrl}/privacy-policy`;

// Optimized metadata for SEO
export const metadata: Metadata = {
  title: 'Privacy Policy | PDF Crop',
  description: 'Read the Privacy Policy for pdf-crop.com to understand how we collect, use, and protect your data when you use our online PDF cropping tools.',
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

export default function PrivacyPolicyPage() {
  // Generate the date string server-side or keep client-side if interaction needed
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    // Apply container style
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <div className="space-y-6"> {/* Keeping Tailwind spacing for simplicity or replace with module styles */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.paragraph}>
            Welcome to pdf-crop.com. This Privacy Policy describes how we collect, use, and handle your personal information when you use our online PDF cropping service and related tools.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.paragraph}>When you use our service, we may collect the following types of information:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Usage Data:</strong> Information about how you interact with our service, such as features used and session duration.</li>
            <li className={styles.listItem}><strong>Device Information:</strong> Browser type, operating system, and other technical details about the device you use to access our service.</li>
            <li className={styles.listItem}><strong>IP Address and Location Data:</strong> Your IP address may be logged for security and analytical purposes, providing general location information.</li>
            <li className={styles.listItem}><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance user experience and enable certain functionalities, including advertising.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p className={styles.paragraph}>The information we collect is used for the following purposes:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>To provide, maintain, and improve our PDF cropping service and other tools.</li>
            <li className={styles.listItem}>To analyze usage patterns and understand how users interact with our website to optimize performance and user experience.</li>
            <li className={styles.listItem}>To display relevant advertisements through third-party partners like Google AdSense.</li>
            <li className={styles.listItem}>To monitor for and prevent fraudulent activities, security breaches, or technical issues.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Advertising and Third-Party Services</h2>
          <p className={styles.paragraph}>
            We partner with third-party advertising networks, such as Google AdSense, to display advertisements on our website. These partners may use cookies and similar technologies to collect information about your visits to this and other websites to provide personalized advertisements.
          </p>
          <p className={styles.paragraph}>
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ads Settings</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p className={styles.paragraph}>
            We implement reasonable security measures designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>User Rights</h2>
          <p className={styles.paragraph}>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or request deletion of your data. Please contact us if you wish to exercise these rights.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions, concerns, or comments about this Privacy Policy or our data practices, please contact us via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Updates to This Policy</h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "last updated" date.
          </p>
        </section>

        {/* Apply last updated style */}
        <p className={styles.lastUpdated}>
          Last updated: {lastUpdatedDate}
        </p>
      </div>
    </div>
  );
} 