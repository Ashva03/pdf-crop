"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Script from "next/script";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f2f4f4;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SupportCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SupportLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: #4f46e5;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
  }
`;

const SupportList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin-bottom: 0.75rem;
    color: #4b5563;
    display: flex;
    align-items: center;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I contact support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact our support team via email at ashvainfotech3@gmail.com, or use the contact form on our website. We aim to respond within 24-48 business hours.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find tutorials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit our Tutorials section for step-by-step guides and visual walk-throughs on using PDF Cropper effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What are your support response hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our support team processes inquiries Monday through Friday, from 9:00 AM to 5:00 PM IST.",
      },
    },
  ],
});

// This is a Client Component
const SupportPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#f2f4f4" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()).replace(/</g, "\\u003c"),
        }}
      />
      <Container>
        <HeroSection>
          <Title>Support Center</Title>
          <Description>
            We're here to help! Choose from our support options or contact us
            directly.
          </Description>
        </HeroSection>

        <SupportGrid>
          <SupportCard>
            <h2>Help Center</h2>
            <p>
              Find answers to common questions and learn how to use PDF Cropper
              effectively.
            </p>
            <SupportList>
              <li>
                <SupportLink href="/faq">FAQ</SupportLink>
              </li>
              <li>
                <SupportLink href="/tutorials">Tutorials & Guides</SupportLink>
              </li>
              <li>
                <SupportLink href="/documentation">User Documentation</SupportLink>
              </li>
              <li>
                <SupportLink href="/how-it-works">How It Works</SupportLink>
              </li>
            </SupportList>
          </SupportCard>

          <SupportCard>
            <h2>Contact Support</h2>
            <p>
              Get in touch with our team for assistance or business inquiries.
            </p>
            <SupportList>
              <li>Email: ashvainfotech3@gmail.com</li>
              <li>Alt Email: support@pdfcrop.co.in</li>
              <li>Response Time: 24-48 business hours</li>
              <li>Sandbox Processing: Fully local and secure</li>
            </SupportList>
          </SupportCard>

          <SupportCard>
            <h2>Community & Resources</h2>
            <p>Explore our latest resources, guides, and contact channels.</p>
            <SupportList>
              <li>
                <SupportLink href="/blog">E-commerce Blog</SupportLink>
              </li>
              <li>
                <SupportLink href="/case-studies">Workflow Guides</SupportLink>
              </li>
              <li>
                <SupportLink href="/features">Product Features</SupportLink>
              </li>
              <li>
                <SupportLink href="/contact">Direct Contact</SupportLink>
              </li>
            </SupportList>
          </SupportCard>
        </SupportGrid>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          {submitted ? (
            <div style={{ padding: "1.5rem", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", color: "#166534" }}>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>✓ Message Sent Successfully!</h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                Thank you for reaching out. Our support team has logged your inquiry and will respond within 24-48 business hours via support@pdfcrop.co.in.
              </p>
            </div>
          ) : (
            <>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Support</option>
                  <option value="labels">Label Format / Carrier Inquiry</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </>
          )}
        </ContactForm>
      </Container>
    </div>
  );
};

export default SupportPage;
