"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Scissors, FileText, Layers, Tag, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.7;
`;

const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const WorkflowCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  }

  .icon-badge {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: #eef2ff;
    color: #4f46e5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }

  h2 {
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #f1f5f9;
    color: #475569;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  p {
    color: #475569;
    line-height: 1.65;
    font-size: 0.975rem;
    margin-bottom: 1.25rem;
    flex-grow: 1;
  }

  .steps-box {
    background: #f8fafc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid #f1f5f9;

    h3 {
      font-size: 0.875rem;
      font-weight: 700;
      color: #334155;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    ul {
      margin: 0;
      padding-left: 1.25rem;
      color: #64748b;
      font-size: 0.875rem;
      line-height: 1.6;

      li {
        margin-bottom: 0.25rem;
      }
    }
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #4f46e5;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NoteBox = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    color: #16a34a;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .content {
    h3 {
      margin: 0 0 0.25rem 0;
      color: #14532d;
      font-size: 1.05rem;
      font-weight: 700;
    }

    p {
      margin: 0;
      color: #166534;
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

export default function CaseStudiesContent() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Container>
        <HeroSection>
          <Title>Shipping Label Processing Examples & Workflows</Title>
          <Description>
            Step-by-step demonstrations showing how sellers use our PDF tools to transform standard A4 marketplace downloads into 4x6 inch thermal sticker labels.
          </Description>
        </HeroSection>

        <NoteBox>
          <ShieldCheck className="icon" size={24} />
          <div className="content">
            <h3>Genuine Technical Workflow Documentation</h3>
            <p>
              The workflow examples below illustrate actual software functionality implemented in our client-side cropping and document manipulation utilities. All document processing takes place in your local web browser sandbox.
            </p>
          </div>
        </NoteBox>

        <WorkflowGrid>
          <WorkflowCard>
            <div className="icon-badge">
              <Scissors size={24} />
            </div>
            <span className="tag">Flipkart Seller Hub</span>
            <h2>Flipkart A4 Manifest to A6 Label Crop</h2>
            <p>
              Demonstrates isolating shipping label blocks from Flipkart Seller Hub PDF exports and converting multi-page A4 sheets into 4x6 inch thermal sticker rolls.
            </p>
            <div className="steps-box">
              <h3>Workflow Steps:</h3>
              <ul>
                <li>Upload Flipkart A4 PDF export</li>
                <li>Extract vector boundary coordinates</li>
                <li>Resize page box to 101.6mm x 152.4mm</li>
                <li>Export ready-to-print A6 PDF</li>
              </ul>
            </div>
            <Link href="/flipkart-label" className="action-link">
              Open Flipkart Label Cropper <ArrowRight size={16} />
            </Link>
          </WorkflowCard>

          <WorkflowCard>
            <div className="icon-badge">
              <Tag size={24} />
            </div>
            <span className="tag">Amazon Seller Central</span>
            <h2>Amazon Easy Ship SKU Overlay & Crop</h2>
            <p>
              Shows how Amazon Easy Ship shipping labels are cropped to A6 format while extracting ASIN/SKU text to print on label margins for packaging verification.
            </p>
            <div className="steps-box">
              <h3>Workflow Steps:</h3>
              <ul>
                <li>Parse Amazon Easy Ship PDF</li>
                <li>Extract SKU/ASIN text via regex</li>
                <li>Strip tax invoice pages if enabled</li>
                <li>Overlay SKU info on A6 margin space</li>
              </ul>
            </div>
            <Link href="/amazon-label" className="action-link">
              Open Amazon Label Cropper <ArrowRight size={16} />
            </Link>
          </WorkflowCard>

          <WorkflowCard>
            <div className="icon-badge">
              <FileText size={24} />
            </div>
            <span className="tag">Meesho Supplier Panel</span>
            <h2>Meesho Order Sheet Label Formatting</h2>
            <p>
              Illustrates cropping order details from Meesho Supplier Panel sheets into 4x6 sticker formats without obscuring Cash on Delivery payment values.
            </p>
            <div className="steps-box">
              <h3>Workflow Steps:</h3>
              <ul>
                <li>Upload Meesho order PDF file</li>
                <li>Target shipping address & barcode block</li>
                <li>Format layout to 4x6 thermal paper</li>
                <li>Download clean PDF for printing</li>
              </ul>
            </div>
            <Link href="/meesho-label" className="action-link">
              Open Meesho Label Cropper <ArrowRight size={16} />
            </Link>
          </WorkflowCard>

          <WorkflowCard>
            <div className="icon-badge">
              <Layers size={24} />
            </div>
            <span className="tag">Multi-File Processing</span>
            <h2>Multi-PDF Document Merging for Archives</h2>
            <p>
              Demonstrates combining daily shipping manifests, carrier pick-up sheets, and packing slips from different platforms into a single consolidated PDF.
            </p>
            <div className="steps-box">
              <h3>Workflow Steps:</h3>
              <ul>
                <li>Upload multiple PDF documents</li>
                <li>Reorder files using drag-and-drop</li>
                <li>Compile PDF tree client-side</li>
                <li>Download unified document archive</li>
              </ul>
            </div>
            <Link href="/merge-pdf" className="action-link">
              Open Merge PDF Tool <ArrowRight size={16} />
            </Link>
          </WorkflowCard>
        </WorkflowGrid>
      </Container>
    </div>
  );
}
