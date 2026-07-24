"use client";

import React, { useEffect } from "react";
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
  font-size: 5rem;
  color: #ef4444;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ActionButton = styled.button<{ $secondary?: boolean }>`
  background: ${(props) =>
    props.$secondary ? "white" : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"};
  color: ${(props) => (props.$secondary ? "#4f46e5" : "white")};
  border: ${(props) => (props.$secondary ? "2px solid #4f46e5" : "none")};
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.$secondary ? "none" : "0 4px 6px rgba(79, 70, 229, 0.15)")};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.$secondary
        ? "0 4px 6px rgba(0,0,0,0.05)"
        : "0 6px 12px rgba(79, 70, 229, 0.3)"};
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error boundary:", error);
  }, [error]);

  return (
    <ErrorContainer>
      <Title>500</Title>
      <Subtitle>Something Went Wrong</Subtitle>
      <Message>
        An unexpected error occurred while rendering this page. Our team has been notified, and we are working to resolve it as quickly as possible.
      </Message>
      <ButtonGroup>
        <ActionButton onClick={() => reset()}>Try Again</ActionButton>
        <ActionButton $secondary onClick={() => (window.location.href = "/")}>
          Back to Homepage
        </ActionButton>
      </ButtonGroup>
    </ErrorContainer>
  );
}
