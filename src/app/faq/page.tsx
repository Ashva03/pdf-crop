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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FAQHeaderStyled = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const FAQList = styled.div`
  color: #374151;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const Question = styled.h2`
  font-size: 1.3rem;
  color: #4f46e5;
  margin-top: 2rem;
`;

export default function FAQPage() {
  return (
    <div style={{ background: "#f2f4f4" }}>
      <Container>
        <HeroSection>
          <Title>Frequently Asked Questions</Title>
          <Description>
            Find answers to common questions about PDF Cropper and its features.
          </Description>
        </HeroSection>
        <FAQSection>
          <FAQContainer>
            <FAQHeaderStyled>
              <FAQTitle>Frequently Asked Questions</FAQTitle>
            </FAQHeaderStyled>
            <FAQList>
              <Question>Is PDF Cropper free to use?</Question>
              <p>Yes! PDF Cropper is completely free for all users.</p>
              <Question>How is my privacy protected?</Question>
              <p>All PDF processing is done locally in your browser. We do not store your files or personal data.</p>
              <Question>Which e-commerce platforms are supported?</Question>
              <p>We support Flipkart, Amazon, Meesho, and Snapdeal shipping labels, with more platforms coming soon.</p>
              <Question>Can I crop multiple labels at once?</Question>
              <p>Yes, our batch processing feature lets you crop multiple labels in a single upload.</p>
              <Question>Do I need to install any software?</Question>
              <p>No installation is required. PDF Cropper works directly in your web browser.</p>
              <Question>How do I contact support?</Question>
              <p>You can reach us anytime via our <a href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Contact Page</a> or by emailing support@pdfcrop.co.in.</p>
            </FAQList>
          </FAQContainer>
        </FAQSection>
      </Container>
    </div>
  );
}
