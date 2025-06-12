"use client";

import styled from 'styled-components';
import Link from 'next/link';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const AboutContentStyled = styled.div`
  color: #374151;
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    color: #1f2937;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

export default function AboutContent() {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About Us</AboutTitle>
      </AboutHeader>
      <AboutContentStyled>
        <p><strong>PDF Cropper</strong> was founded to solve a real problem for e-commerce sellers: making shipping label management fast, accurate, and stress-free. Our mission is to empower sellers with easy-to-use tools that save time, reduce errors, and improve delivery rates.</p>
        <h2>Our Story</h2>
        <p>We noticed that many sellers struggled with label formatting, platform-specific requirements, and wasted time on manual cropping. PDF Cropper was built to automate and simplify this process, so you can focus on growing your business.</p>
        <h2>What Makes Us Unique?</h2>
        <ul>
          <li>Platform-specific label tools for Flipkart, Amazon, Meesho, and Snapdeal</li>
          <li>Batch processing and fast PDF cropping</li>
          <li>Privacy-first: all processing is done in your browser</li>
          <li>Free to use, with no hidden fees</li>
          <li>Continuous updates based on user feedback</li>
        </ul>
        <h2>Our Commitment</h2>
        <p>We are committed to providing the best possible experience for e-commerce sellers. If you have feedback or suggestions, <Link href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>contact us</Link> anytime!</p>
      </AboutContentStyled>
    </AboutContainer>
  );
} 