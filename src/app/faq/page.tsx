"use client";

import { useState } from "react";
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

const SearchSection = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  color: #4f46e5;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FAQSection = styled.section`
  padding: 4rem 0;
`;

const FAQContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;

  h3 {
    color: #4f46e5;
    margin: 0;
    font-size: 1.25rem;
    transition: color 0.2s ease;
  }

  &:hover h3 {
    color: #7c3aed;
  }
`;

const FAQContent = styled.div<{ $isOpen: boolean }>`
  padding: ${(props) => (props.$isOpen ? "0 2rem 1.5rem" : "0 2rem")};
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1), opacity 0.2s ease,
    visibility 0s ${(props) => (props.$isOpen ? "0s" : "0.4s")},
    padding 0.2s ease;
  overflow: hidden;
  transform-origin: top;
  transform: translateZ(0);
  will-change: max-height, opacity, padding;

  p {
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
    transition: transform 0.2s ease;
    transform: ${(props) =>
      props.$isOpen
        ? "translateY(0) scale(1)"
        : "translateY(-8px) scale(0.98)"};
  }
`;

const FAQIcon = styled.span<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: 1rem;
  flex-shrink: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: #4f46e5;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }

  &::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%)
      ${(props) =>
        props.$isOpen ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)"};
  }
`;

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What types of PDFs can I crop with PDF Cropper?",
        answer:
          "PDF Cropper supports all standard PDF files, including scanned documents, digital PDFs, and password-protected PDFs (with proper authorization).",
      },
      {
        question: "Is my data secure when using PDF Cropper?",
        answer:
          "Yes, we take data security seriously. All file processing is done locally in your browser, and we do not store or transmit your files to our servers.",
      },
    ],
  },
  {
    category: "Features",
    questions: [
      {
        question: "Can I crop multiple pages at once?",
        answer:
          "Yes, PDF Cropper supports batch processing of multiple pages. You can apply the same crop settings to all pages or customize each page individually.",
      },
      {
        question: "What output formats are supported?",
        answer:
          "PDF Cropper supports various output formats including PDF, PNG, and JPEG. You can choose the format that best suits your needs.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Is any software installation required?",
        answer:
          "No, PDF Cropper is a web-based application that runs entirely in your browser. No installation is required.",
      },
      {
        question: "Can I save my crop settings for future use?",
        answer:
          "Yes, you can save your crop settings as templates and reuse them later. This is especially useful for batch processing similar documents.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "What is the maximum file size I can process?",
        answer:
          "PDF Cropper can handle files up to 100MB in size. For larger files, we recommend using our desktop application.",
      },
      {
        question: "How can I get support if I have issues?",
        answer:
          "We offer multiple support channels including email support, live chat, and a comprehensive knowledge base. Visit our support page for more information.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion((prev) => (prev === questionId ? null : questionId));
  };

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div style={{ background: "#f2f4f4" }}>
      <Container>
        <HeroSection>
          <Title>Frequently Asked Questions</Title>
          <Description>
            Find answers to common questions about PDF Cropper and its features.
          </Description>
        </HeroSection>
        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search FAQs"
          />
        </SearchSection>
        <FAQSection>
          <FAQContainer>
            {filteredFAQs.map((category, categoryIndex) => (
              <CategorySection key={categoryIndex}>
                <CategoryTitle>{category.category}</CategoryTitle>
                {category.questions.map((faq, index) => {
                  const questionId = `${categoryIndex}-${index}`;
                  return (
                    <FAQItem key={questionId}>
                      <FAQHeader onClick={() => toggleQuestion(questionId)}>
                        <h3>{faq.question}</h3>
                        <FAQIcon $isOpen={openQuestion === questionId} />
                      </FAQHeader>
                      <FAQContent $isOpen={openQuestion === questionId}>
                        <p>{faq.answer}</p>
                      </FAQContent>
                    </FAQItem>
                  );
                })}
              </CategorySection>
            ))}
          </FAQContainer>
        </FAQSection>
      </Container>
    </div>
  );
}
