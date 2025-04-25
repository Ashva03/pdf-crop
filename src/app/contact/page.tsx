"use client";
import React from "react";
import styled from "styled-components";
import { Mail } from "lucide-react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f4f4;
  padding: 3rem 1rem;
`;

const Card = styled.div`
  max-width: 28rem;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: #4f46e5;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  text-align: center;
`;

const EmailContainer = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const EmailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #4f46e5;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  gap: 8px;
  margin-top: 24px;

  &:hover {
    background-color: #4338ca;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
  }
`;

function ContactPage() {
  return (
    <Container>
      <Card>
        <Title>Get in Touch</Title>
        <Subtitle>We're here to help you. Reach out to us!</Subtitle>
        <EmailContainer>
          <Mail className="h-5 w-5 text-indigo-600" />
          <span className="text-lg text-gray-700">
            ashvainfotech3@gmail.com
          </span>
        </EmailContainer>
        <div className="flex justify-center">
          <EmailButton
            onClick={() =>
              (window.location.href = "mailto:ashvainfotech3@gmail.com")
            }
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </EmailButton>
        </div>
      </Card>
    </Container>
  );
}

export default ContactPage;
