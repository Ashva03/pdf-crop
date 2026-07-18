"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Plus, Check, Sliders, Info, Shield, Bookmark } from "lucide-react";

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

const CreateTemplateMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ width: '100%', maxWidth: '320px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#1e293b' }}>SAVE CUSTOM PRESET</div>
      <div>
        <label style={{ fontSize: '9px', color: '#64748b', display: 'block', marginBottom: '4px' }}>TEMPLATE NAME</label>
        <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>Delhivery 4x6 Label</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        <div>
          <label style={{ fontSize: '9px', color: '#64748b', display: 'block', marginBottom: '4px' }}>WIDTH (PT)</label>
          <div style={{ background: '#e2e8f0', padding: '4px', borderRadius: '4px', fontSize: '10px', textAlign: 'center' }}>288</div>
        </div>
        <div>
          <label style={{ fontSize: '9px', color: '#64748b', display: 'block', marginBottom: '4px' }}>HEIGHT (PT)</label>
          <div style={{ background: '#e2e8f0', padding: '4px', borderRadius: '4px', fontSize: '10px', textAlign: 'center' }}>432</div>
        </div>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '11px', justifyContent: 'center', cursor: 'default' }}>
        <Plus size={12} /> Save Preset
      </button>
    </div>
  </MockupContainer>
);

const ApplyTemplateMockup = () => (
  <MockupContainer>
    <div style={{ width: '100%', maxWidth: '280px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <div style={{ background: '#f8fafc', padding: '0.5rem 1rem', fontSize: '10px', fontWeight: 700, color: '#475569', borderBottom: '1px solid #cbd5e1' }}>
        LOAD SAVED PRESET
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#eef2ff' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#4f46e5' }}>Delhivery 4x6 Label</span>
          <span style={{ color: '#10b981', fontSize: '10px' }}>✓ Active</span>
        </div>
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#334155' }}>BlueDart A6 Preset</span>
          <span style={{ color: '#64748b', fontSize: '9px' }}>288 x 432 pt</span>
        </div>
        <div style={{ padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#334155' }}>Custom A4 Quad</span>
          <span style={{ color: '#64748b', fontSize: '9px' }}>Custom size</span>
        </div>
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

export default function CustomTemplatesPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Custom Presets & Templates</Title>
        <Description>
          Learn how to save, edit, and apply custom cropping boundaries for specialized shipping carriers and delivery manifests.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          While PDF Cropper includes default presets for major Indian marketplaces (Flipkart, Amazon, Meesho, Myntra, Snapdeal), e-commerce merchants frequently work with independent shipping carriers like BlueDart, Delhivery, DTDC, or DHL. Each of these carriers generates label PDFs with unique margins and dimensions. This guide explains how to define, save, and reuse custom presets.
        </p>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Bookmark size={20} color="#4f46e5" />
            </div>
            1. Creating and Saving a Custom Preset Layout
          </h2>
          <p>
            Start by uploading a sample PDF label from your carrier panel. Position and resize the crop bounding box to match the active label region. In the settings drawer, expand the "Custom Preset" accordion. Enter a descriptive name for your template (e.g. "Delhivery 4x6 Label") and click "Save Preset".
          </p>
          <CreateTemplateMockup />
          <p>
            The coordinate metrics (X, Y, Width, and Height) are saved to your browser's local storage. This allows you to reload the same dimensions for future uploads with one click.
          </p>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Sliders size={20} color="#4f46e5" />
            </div>
            2. Applying Saved Presets to New Documents
          </h2>
          <p>
            When you import a new label PDF from the same carrier, you don't need to adjust boundaries manually. Open the "Load Saved Preset" dropdown menu, select your saved template, and the selection box will update to the saved coordinates instantly.
          </p>
          <ApplyTemplateMockup />
          <TipBox>
            <h3><Info size={16} /> Preserving Preset Proportions</h3>
            <p>
              When applying a saved preset, ensure the uploaded PDF matches the orientation (portrait or landscape) and page dimensions of the original document used to save the template. If the document dimensions differ, the selection box might require slight adjustments.
            </p>
          </TipBox>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/batch-processing">← Previous: Batch Processing</Link>
          <Link href="/tutorials/quality-settings">Next: Quality Settings →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
