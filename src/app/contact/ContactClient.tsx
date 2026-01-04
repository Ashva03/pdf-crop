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
  max-width: 42rem;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: #4f46e5;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  text-align: center;
  margin-bottom: 1.5rem;
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

const InfoSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  text-align: left;
`;

const InfoListItem = styled.li`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "•";
    color: #4f46e5;
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  a {
    color: #4f46e5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function ContactClient() {
  return (
    <Container>
      <Card>
        <Title>Get in Touch</Title>
        <Subtitle>
          We're here to help you with any questions, feedback, or support you
          need. Reach out to us and we'll get back to you as soon as possible!
        </Subtitle>
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

        <InfoSection>
          <InfoTitle>How We Can Help</InfoTitle>
          <InfoText>Our support team is available to assist you with:</InfoText>
          <InfoList>
            <InfoListItem>
              Technical support for PDF cropping tools
            </InfoListItem>
            <InfoListItem>
              Questions about platform-specific label requirements
            </InfoListItem>
            <InfoListItem>Feature requests and suggestions</InfoListItem>
            <InfoListItem>Bug reports and troubleshooting</InfoListItem>
            <InfoListItem>General inquiries about our services</InfoListItem>
            <InfoListItem>
              Partnership and collaboration opportunities
            </InfoListItem>
          </InfoList>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Response Time</InfoTitle>
          <InfoText>
            We typically respond to all inquiries within 24-48 hours during
            business days. For urgent matters, please mention "URGENT" in your
            subject line.
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Other Ways to Get Help</InfoTitle>
          <InfoText>
            Before contacting us, you might find answers in our:
          </InfoText>
          <InfoList>
            <InfoListItem>
              <a
                href="/faq"
                style={{ color: "#4f46e5", textDecoration: "none" }}
              >
                Frequently Asked Questions (FAQ)
              </a>
            </InfoListItem>
            <InfoListItem>
              <a
                href="/tutorials"
                style={{ color: "#4f46e5", textDecoration: "none" }}
              >
                Video Tutorials and Guides
              </a>
            </InfoListItem>
            <InfoListItem>
              <a
                href="/documentation"
                style={{ color: "#4f46e5", textDecoration: "none" }}
              >
                Documentation and User Guides
              </a>
            </InfoListItem>
            <InfoListItem>
              <a
                href="/support"
                style={{ color: "#4f46e5", textDecoration: "none" }}
              >
                Support Center
              </a>
            </InfoListItem>
          </InfoList>
        </InfoSection>
      </Card>
    </Container>
  );
}

export default ContactClient;
