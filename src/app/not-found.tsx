"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ErrorContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #4f46e5;
  margin: 0;
  font-weight: 900;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #1f2937;
  margin: 1rem 0 2rem;
  font-weight: 700;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(79, 70, 229, 0.3);
  }
`;

export default function NotFound() {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Message>
        Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back to cropping your shipping labels.
      </Message>
      <HomeButton href="/">Back to Homepage</HomeButton>
    </ErrorContainer>
  );
}
