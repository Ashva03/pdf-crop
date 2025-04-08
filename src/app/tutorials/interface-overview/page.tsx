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

const InterfaceSection = styled.div`
  margin-bottom: 3rem;

  h2 {
    color: #4f46e5;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: #4b5563;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
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

export default function InterfaceOverviewPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Interface Overview</Title>
        <Description>
          Learn about the different components and features of the PDF Cropper
          interface.
        </Description>
      </HeroSection>

      <ContentSection>
        <InterfaceSection>
          <h2>Main Interface Components</h2>
          <img
            src="/tutorials/interface-overview.jpg"
            alt="PDF Cropper Interface"
          />
          <FeatureList>
            <li>
              Upload Area: Drag and drop or click to upload your PDF files
            </li>
            <li>
              Toolbar: Access cropping tools, zoom controls, and other features
            </li>
            <li>Preview Area: View and interact with your PDF</li>
            <li>Settings Panel: Adjust crop settings and output options</li>
            <li>Action Buttons: Download, save, and share your cropped PDF</li>
          </FeatureList>
        </InterfaceSection>

        <InterfaceSection>
          <h2>Toolbar Features</h2>
          <img src="/tutorials/toolbar-features.jpg" alt="Toolbar Features" />
          <FeatureList>
            <li>Crop Tool: Select and adjust the crop area</li>
            <li>Zoom Controls: Zoom in/out and fit to screen</li>
            <li>Rotation: Rotate your PDF in 90-degree increments</li>
            <li>Page Navigation: Move between pages in multi-page PDFs</li>
            <li>Undo/Redo: Revert or reapply your changes</li>
          </FeatureList>
        </InterfaceSection>

        <InterfaceSection>
          <h2>Settings Panel</h2>
          <img src="/tutorials/settings-panel.jpg" alt="Settings Panel" />
          <FeatureList>
            <li>Output Format: Choose between PDF, PNG, or JPEG</li>
            <li>Quality Settings: Adjust output quality and file size</li>
            <li>Page Range: Select specific pages to crop</li>
            <li>Custom Templates: Save and load crop presets</li>
            <li>Advanced Options: Access additional cropping features</li>
          </FeatureList>
        </InterfaceSection>

        <NavigationLinks>
          <Link href="/tutorials/getting-started">
            ← Previous: Getting Started
          </Link>
          <Link href="/tutorials/basic-cropping">Next: Basic Cropping →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
