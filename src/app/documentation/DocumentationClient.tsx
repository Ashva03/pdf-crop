"use client";

import styled from "styled-components";
import Link from "next/link";

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

const DocumentationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const DocCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const DocLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin-bottom: 0.75rem;
    color: #4b5563;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

export default function DocumentationClient() {
  return (
    <div style={{ background: "#f2f4f4" }}>
      <Container>
        <HeroSection>
          <Title>Documentation</Title>
          <Description>
            Comprehensive guides and technical documentation to help you get the
            most out of PDF Cropper.
          </Description>
        </HeroSection>

        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Search documentation..."
            aria-label="Search documentation"
          />
        </SearchSection>

        <DocumentationGrid>
          <DocCard>
            <h2>User Guide</h2>
            <p>
              Step-by-step instructions for using PDF Cropper effectively. Learn
              how to crop shipping labels, convert PDFs, merge documents, and
              more with our comprehensive user guides.
            </p>
            <DocList>
              <li>Getting Started Guide - Learn the basics of PDF cropping</li>
              <li>Basic Operations - Upload, crop, and download PDFs</li>
              <li>Advanced Features - Batch processing and custom templates</li>
              <li>Troubleshooting - Common issues and solutions</li>
              <li>
                Platform-Specific Guides - Flipkart, Amazon, Meesho, Snapdeal,
                Myntra
              </li>
            </DocList>
            <DocLink href="/tutorials/getting-started">
              View User Guide →
            </DocLink>
          </DocCard>

          <DocCard>
            <h2>Technical Documentation</h2>
            <p>
              In-depth technical information for developers and power users.
              Understand how our tools work, integration options, and technical
              specifications for optimal usage.
            </p>
            <DocList>
              <li>API Reference - Technical specifications and endpoints</li>
              <li>
                Integration Guide - How to integrate PDF tools into your
                workflow
              </li>
              <li>Performance Optimization - Tips for faster processing</li>
              <li>Security Best Practices - Privacy and data handling</li>
              <li>
                Browser Compatibility - Supported browsers and requirements
              </li>
            </DocList>
            <DocLink href="/tutorials/interface-overview">
              View Technical Docs →
            </DocLink>
          </DocCard>

          <DocCard>
            <h2>Best Practices</h2>
            <p>
              Tips and recommendations for optimal PDF cropping and document
              management. Learn from our experience to improve your workflow
              efficiency and output quality.
            </p>
            <DocList>
              <li>Quality Settings - Optimize output quality and file size</li>
              <li>Batch Processing - Process multiple files efficiently</li>
              <li>File Organization - Best practices for managing documents</li>
              <li>
                Workflow Optimization - Streamline your document processing
              </li>
              <li>
                Label Formatting - Platform-specific formatting guidelines
              </li>
            </DocList>
            <DocLink href="/tutorials/quality-settings">
              View Best Practices →
            </DocLink>
          </DocCard>
        </DocumentationGrid>

        <DocCard style={{ marginTop: "2rem" }}>
          <h2>Quick Start Guide</h2>
          <p>New to PDF Cropper? Follow these steps to get started:</p>
          <ol
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
              color: "#4b5563",
              lineHeight: 1.8,
            }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Choose Your Tool</strong> - Select the appropriate tool
              from our platform-specific label croppers (Flipkart, Amazon,
              Meesho, Snapdeal, Myntra) or use our general PDF tools (convert,
              merge, compress, edit).
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Upload Your File</strong> - Drag and drop your PDF file or
              click to browse and select from your device.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Process Your Document</strong> - Our tool will
              automatically process your file according to the selected platform
              requirements or your chosen settings.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Download Result</strong> - Preview your processed document
              and download it when ready. All processing happens in your browser
              for complete privacy.
            </li>
          </ol>
          <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
            For detailed instructions, visit our{" "}
            <DocLink href="/tutorials/getting-started">
              Getting Started Tutorial
            </DocLink>{" "}
            or check out our <DocLink href="/faq">FAQ section</DocLink> for
            common questions.
          </p>
        </DocCard>
      </Container>
    </div>
  );
}
