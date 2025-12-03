/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const FAQSection = styled.section`
  padding: 4rem 0;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FAQHeaderStyled = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const FAQList = styled.div`
  color: #374151;
  line-height: 1.7;
  font-size: 1.05rem;

  p {
    margin: 0 0 1.5rem 1.5rem;
    padding-left: 0.5rem;
    border-left: 3px solid #e5e7eb;

    @media (max-width: 768px) {
      margin-left: 0.5rem;
    }
  }

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  color: #4f46e5;
  margin: 2rem 0 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;

  &::before {
    content: "▶";
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 0.8em;
    transition: transform 0.2s;
  }

  &[aria-expanded="true"]::before {
    transform: rotate(90deg);
  }
`;

const faqData = [
  {
    question: "Is PDF Cropper free to use?",
    answer: "Yes! PDF Cropper is completely free for all users.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "All PDF processing is done locally in your browser. We do not store your files or personal data.",
  },
  {
    question: "Which e-commerce platforms are supported?",
    answer:
      "We support Flipkart, Amazon, Meesho, and Snapdeal shipping labels, with more platforms coming soon.",
  },
  {
    question: "Can I crop multiple labels at once?",
    answer:
      "Yes, our batch processing feature lets you crop multiple labels in a single upload.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No installation is required. PDF Cropper works directly in your web browser.",
  },
  {
    question: "How do I contact support?",
    answer:
      'You can reach us anytime via our <a href="/contact">Contact Page</a> or by emailing support@pdfcrop.co.in.',
  },
];

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>?/gm, ""), // Remove HTML tags for structured data
    },
  })),
});

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [structuredData, setStructuredData] = useState<any>(null);

  useEffect(() => {
    setStructuredData(generateStructuredData());
  }, []);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ background: "#f2f4f4", minHeight: "100vh" }}>
      {structuredData && (
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          strategy="worker"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <Container>
        <HeroSection>
          <Title>Frequently Asked Questions</Title>
          <Description>
            Get answers to common questions about PDF Cropper and our e-commerce
            tools.
          </Description>
        </HeroSection>

        <FAQSection>
          <FAQContainer>
            <FAQHeaderStyled>
              <FAQTitle>Common Questions</FAQTitle>
            </FAQHeaderStyled>

            <FAQList>
              {faqData.map((item, index) => (
                <div key={index}>
                  <Question
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faq-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {item.question}
                  </Question>
                  <div
                    id={`faq-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    style={{
                      display: expandedIndex === index ? "block" : "none",
                      marginBottom: "1rem",
                    }}
                  >
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </div>
              ))}
            </FAQList>
          </FAQContainer>
        </FAQSection>
      </Container>
    </div>
  );
}
