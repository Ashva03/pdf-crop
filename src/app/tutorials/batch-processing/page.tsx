"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Play, Loader, Shield, Info, CheckCircle, FileText } from "lucide-react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8fafc;
  font-family: 'Outfit', sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4.5rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.7;
`;

const ContentSection = styled.section`
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
`;

const TutorialStep = styled.div`
  margin-bottom: 3.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h2 {
    color: #1e1b4b;
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    color: #475569;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }
`;

const MockupContainer = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
`;

const BatchStartMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
        <span>BATCH UPLOAD QUEUE</span>
        <span>4 FILES READY</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { name: 'amazon_labels_july18.pdf', size: '1.4 MB', pages: '12 pages' },
          { name: 'flipkart_manifest_batch_1.pdf', size: '920 KB', pages: '8 pages' },
          { name: 'meesho_bulk_invoice.pdf', size: '2.1 MB', pages: '18 pages' },
          { name: 'custom_labels.pdf', size: '480 KB', pages: '4 pages' }
        ].map((file, idx) => (
          <div key={idx} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={16} color="#6366f1" />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e293b' }}>{file.name}</span>
            </div>
            <span style={{ fontSize: '10px', color: '#64748b' }}>{file.pages} ({file.size})</span>
          </div>
        ))}
      </div>
    </div>
  </MockupContainer>
);

const BatchProgressMockup = () => (
  <MockupContainer>
    <div style={{ width: '100%', maxWidth: '380px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <Loader className="animate-spin" size={32} color="#4f46e5" />
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Processing Batch Queue...</p>
        <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#64748b' }}>Compiling output pages: 26 of 42 pages completed</p>
      </div>
      <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
        <div style={{ background: '#4f46e5', width: '62%', height: '100%', borderRadius: '99px' }}></div>
      </div>
    </div>
  </MockupContainer>
);

const TipBox = styled.div`
  background: #f0fdf4;
  border-left: 4px solid #10b981;
  padding: 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0 12px 12px 0;

  h3 {
    color: #14532d;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #15803d;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s;

    &:hover {
      color: #3730a3;
      text-decoration: underline;
    }
  }
`;

export default function BatchProcessingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Batch Label Processing Guide</Title>
        <Description>
          Learn how to crop, optimize, and combine dozens of shipping labels simultaneously to streamline high-volume dispatch operations.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          For scaling e-commerce merchants, processing orders individually is a major time drain. PDF Cropper supports batch processing. When you upload multi-page documents containing many shipping labels, our cropping algorithms duplicate your crop coordinates across every page, allowing you to crop a multi-page PDF batch in one go.
        </p>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Play size={20} color="#4f46e5" />
            </div>
            1. Preparing and Uploading Your Bulk Queue
          </h2>
          <p>
            Locate the consolidated shipping label PDF from your supplier dashboard (for example, a multi-page file from Amazon FBA or Flipkart Seller Hub). Ensure all labels use a consistent layout so coordinates align. Drag and drop the bulk PDF file onto the upload workspace canvas. Our vector-perfect engine renders the document thumbnail queue on the workspace margin, listing the file details and total pages.
          </p>
          <BatchStartMockup />
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Loader size={20} color="#4f46e5" />
            </div>
            2. Monitoring Compilation Progress
          </h2>
          <p>
            Once you click compile, the client-side processing script processes the batch page-by-page. For multi-page files, the rendering engine processes elements concurrently, utilizing WebAssembly libraries to compile output files quickly. A progress bar in the settings drawer displays the current processing page index and the percentage completed.
          </p>
          <BatchProgressMockup />
          <TipBox>
            <h3><Info size={16} /> Memory Optimization during Bulk Exports</h3>
            <p>
              Because document parsing occurs in your browser sandbox, processing extremely large files (e.g. over 200 pages) can consume significant system RAM. For large bulk dispatches, we recommend splitting your files into batches of 50-100 pages to ensure optimal performance.
            </p>
          </TipBox>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Shield size={20} color="#4f46e5" />
            </div>
            3. Bulk PDF Safety & Security
          </h2>
          <p>
            When processing bulk documents containing customer names, billing rates, and shipping addresses, data privacy is a top priority. PDF Cropper processes files locally. No data is uploaded or transmitted to any external server during batch operations, keeping your customer and business data secure.
          </p>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/advanced-cropping">← Previous: Advanced Cropping</Link>
          <Link href="/tutorials/custom-templates">Next: Custom Templates →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
