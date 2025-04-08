"use client";

import styled from "styled-components";
import Link from "next/link";

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

const ContentSection = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const TutorialStep = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h2 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;

  h3 {
    color: #4f46e5;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: #4b5563;
    margin: 0;
    font-size: 0.9rem;
  }
`;

const TipBox = styled.div`
  background: #f0f9ff;
  border-left: 4px solid #4f46e5;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;

  h3 {
    color: #4f46e5;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #4b5563;
    margin: 0;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function BatchProcessingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Batch Processing</Title>
        <Description>
          Learn how to efficiently process multiple PDFs at once with PDF
          Cropper.
        </Description>
      </HeroSection>

      <ContentSection>
        <TutorialStep>
          <h2>Getting Started with Batch Processing</h2>
          <p>To process multiple PDFs simultaneously:</p>
          <ul>
            <li>Click the "Batch Process" button in the toolbar</li>
            <li>Select multiple PDFs from your computer</li>
            <li>Choose your desired output format and settings</li>
            <li>
              Apply the same crop settings to all files or customize
              individually
            </li>
          </ul>
          <img src="/tutorials/batch-start.jpg" alt="Starting Batch Process" />
        </TutorialStep>

        <TutorialStep>
          <h2>Batch Processing Features</h2>
          <p>Take advantage of these batch processing capabilities:</p>
          <FeatureGrid>
            <FeatureCard>
              <h3>Template Application</h3>
              <p>Apply saved crop templates to multiple files</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Custom Settings</h3>
              <p>Set different options for each file in the batch</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Progress Tracking</h3>
              <p>Monitor the progress of your batch processing</p>
            </FeatureCard>
          </FeatureGrid>
          <TipBox>
            <h3>Pro Tip</h3>
            <p>
              Save your batch settings as a preset to reuse them for future
              processing.
            </p>
          </TipBox>
        </TutorialStep>

        <TutorialStep>
          <h2>Organizing Output Files</h2>
          <p>Manage your processed files efficiently:</p>
          <ul>
            <li>Choose output directory for processed files</li>
            <li>Use custom naming conventions</li>
            <li>Create subfolders based on file types</li>
            <li>Generate processing reports</li>
          </ul>
          <img
            src="/tutorials/output-organization.jpg"
            alt="Output Organization"
          />
        </TutorialStep>

        <TutorialStep>
          <h2>Advanced Batch Options</h2>
          <p>Explore these advanced batch processing features:</p>
          <FeatureGrid>
            <FeatureCard>
              <h3>Conditional Processing</h3>
              <p>Apply different settings based on file properties</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Automated Workflows</h3>
              <p>Create and save complex processing workflows</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Error Handling</h3>
              <p>Configure how to handle processing errors</p>
            </FeatureCard>
          </FeatureGrid>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/advanced-cropping">
            ← Previous: Advanced Cropping
          </Link>
          <Link href="/tutorials/custom-templates">
            Next: Custom Templates →
          </Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
