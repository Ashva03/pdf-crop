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
    cursor: pointer;

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
    answer:
      "Yes! PDF Cropper is completely free for all users. There are no hidden fees, no premium tiers, and no registration required. All our tools including PDF cropping, compression, merging, and conversion are available at no cost.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "All PDF processing is done locally in your browser. We do not store your files or personal data. Your documents never leave your device, ensuring complete privacy and security. We use industry-standard encryption for any data transmission.",
  },
  {
    question: "Which e-commerce platforms are supported?",
    answer:
      "We support Flipkart, Amazon, Meesho, Snapdeal, and Myntra shipping labels. Each platform has specific requirements for label size, format, and barcode placement. Our tools are optimized to meet these exact specifications, ensuring your labels are accepted without issues.",
  },
  {
    question: "Can I crop multiple labels at once?",
    answer:
      "Yes, our batch processing feature lets you crop multiple labels in a single upload. You can process up to 100 labels at once, saving hours of manual work. The batch processor maintains consistent quality across all labels and applies the same formatting rules to each document.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No installation is required. PDF Cropper works directly in your web browser. Simply visit our website, upload your PDF, and start processing. Our tools are compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We primarily work with PDF files for input and output. Additionally, our image-to-PDF tool supports JPG, PNG, GIF, and other common image formats. Our PDF-to-JPG converter exports high-quality images. All processed files maintain their original quality and resolution.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "PDF Cropper can handle files up to 100MB in size. For most shipping labels and business documents, this is more than sufficient. If you need to process larger files, consider using our PDF compression tool first to reduce file size without compromising quality.",
  },
  {
    question: "How accurate is the label cropping?",
    answer:
      "Our cropping algorithm is highly accurate and specifically tuned for each e-commerce platform's requirements. We continuously update our specifications based on platform guidelines to ensure 99.9% accuracy. However, we always recommend previewing your labels before printing.",
  },
  {
    question: "Can I use PDF Cropper on mobile devices?",
    answer:
      "Yes! PDF Cropper is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. Our mobile-optimized interface ensures you can process labels on-the-go, perfect for sellers who need to manage shipments from anywhere.",
  },
  {
    question: "How do I contact support?",
    answer:
      'You can reach us anytime via our <a href="/contact">Contact Page</a> or by emailing support@pdfcrop.co.in. Our support team typically responds within 24 hours. We also have comprehensive documentation and tutorials available on our website.',
  },
  {
    question: "What happens to my data after processing?",
    answer:
      "Since all processing happens locally in your browser, your data is never transmitted to our servers. Once you close the browser tab or refresh the page, all processed files are cleared from memory. We do not retain any copies of your documents.",
  },
  {
    question: "Can I integrate PDF Cropper with my existing workflow?",
    answer:
      "While we don't currently offer API access, our tools are designed to fit seamlessly into existing workflows. You can download processed files and integrate them with your shipping software, inventory management systems, or any other tools you use.",
  },
  {
    question: "How often are the tools updated?",
    answer:
      "We regularly update our tools to ensure compatibility with the latest e-commerce platform requirements. Updates are deployed automatically, so you always have access to the most current specifications without needing to install anything.",
  },
  {
    question: "Is PDF Cropper suitable for commercial use?",
    answer:
      "Absolutely! PDF Cropper is used by thousands of businesses, from individual sellers to large e-commerce operations. Our tools are designed to handle high-volume processing and maintain professional quality standards required for commercial shipping.",
  },
  {
    question: "What if my label doesn't crop correctly?",
    answer:
      "If you encounter any issues with label cropping, please contact our support team with details about the problem. We can help troubleshoot the issue and, if necessary, update our algorithms to handle your specific case. Your feedback helps us improve our tools for everyone.",
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
