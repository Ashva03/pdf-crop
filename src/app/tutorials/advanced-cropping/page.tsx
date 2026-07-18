"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Layers, Zap, Sliders, Info, Shield, Check } from "lucide-react";

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

const MultiPageCropMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '460px', justifyContent: 'center' }}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} style={{ border: '1px solid #cbd5e1', borderRadius: '6px', width: '110px', height: '140px', background: '#f8fafc', position: 'relative', opacity: idx === 0 ? 1 : 0.7 }}>
          <div style={{ position: 'absolute', top: '4px', left: '4px', fontSize: '9px', fontWeight: 600, color: '#64748b' }}>Page {idx + 1}</div>
          <div style={{ position: 'absolute', top: '30px', left: '15px', right: '15px', bottom: '15px', border: '1px dashed #4f46e5', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '8px', color: '#4f46e5', fontWeight: 600 }}>Sync Crop</span>
          </div>
        </div>
      ))}
    </div>
  </MockupContainer>
);

const AutoDetectMockup = () => (
  <MockupContainer>
    <div style={{ position: 'relative', width: '280px', height: '140px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '1rem', gap: '0.5rem' }}>
      <div style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b' }}>
        <span>SHIPMENT BILLING</span>
        <span>AUTO-SCANNING</span>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', height: '60px' }}>
        <div style={{ background: '#cbd5e1', height: '40px', width: '40px', borderRadius: '4px' }}></div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ background: '#e2e8f0', height: '6px', width: '80%' }}></div>
          <div style={{ background: '#e2e8f0', height: '6px', width: '90%' }}></div>
          <div style={{ background: '#e2e8f0', height: '6px', width: '60%' }}></div>
        </div>
      </div>
      {/* Scan line animation overlay */}
      <div style={{ position: 'absolute', top: '10px', left: '0', right: '0', height: '2px', background: '#10b981', boxShadow: '0 0 8px #10b981', animation: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: '#d1fae5', color: '#065f46', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
        Barcode Located
      </div>
    </div>
  </MockupContainer>
);

const CustomDimensionsMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '9px', color: '#64748b', fontWeight: 600 }}>X (LEFT)</span>
          <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textAlign: 'center', color: '#1e293b' }}>180 pt</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '9px', color: '#64748b', fontWeight: 600 }}>Y (TOP)</span>
          <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textAlign: 'center', color: '#1e293b' }}>420 pt</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '9px', color: '#64748b', fontWeight: 600 }}>WIDTH</span>
          <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textAlign: 'center', color: '#1e293b' }}>260 pt</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '9px', color: '#64748b', fontWeight: 600 }}>HEIGHT</span>
          <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textAlign: 'center', color: '#1e293b' }}>390 pt</div>
        </div>
      </div>
      <div style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '11px', padding: '8px', borderRadius: '6px', textAlign: 'center', fontWeight: 500 }}>
        🔒 Lock Aspect Ratio to A6 Proportions (4" x 6")
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

export default function AdvancedCroppingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Advanced PDF Cropping Guide</Title>
        <Description>
          Learn how to manage multi-page cropping queues, configure custom canvas points, and utilize advanced layout templates.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          Welcome to the advanced operations manual. For sellers processing high order volumes, manual adjustments on every page are inefficient. PDF Cropper supports automated multi-page synchronization, barcode scanning localization, and coordinates specification to streamline your packaging and logistics workflows.
        </p>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Layers size={20} color="#4f46e5" />
            </div>
            1. Multi-Page Synchronization
          </h2>
          <p>
            When you upload a multi-page PDF (for example, a consolidated label export containing 50 orders from your seller panel), you don't need to define boundaries for each page separately. By default, our tool synchronizes the selection box across all pages. Adjusting the coordinates on Page 1 applies the same dimensions to the subsequent pages instantly.
          </p>
          <p>
            If your document contains pages with different formats (e.g. shipping labels mixed with invoice details, like Amazon prints), you can toggle off the "Sync All Pages" setting in the control drawer. This allows you to apply different bounding dimensions to specific pages, or discard pages entirely before compilation.
          </p>
          <MultiPageCropMockup />
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Zap size={20} color="#4f46e5" />
            </div>
            2. Barcode Alignment & Automatic Detection
          </h2>
          <p>
            Our tool parses the underlying vector paths of your PDF document. The alignment engine scans for standard e-commerce barcode structures (such as Code 128, Code 39, or 2D DataMatrix elements). Once located, the interface highlights the crop zone around the tracking barcode, setting up the standard crop box margins automatically.
          </p>
          <AutoDetectMockup />
          <TipBox>
            <h3><Info size={16} /> Resolution Tip for EKart and ATS Scanners</h3>
            <p>
              Ensure the scan line preview doesn't clip the quiet zones (the blank space directly preceding and following a barcode). Clipping quiet zones can prevent scanners at logistics hubs from reading the barcode, causing shipment delays.
            </p>
          </TipBox>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Sliders size={20} color="#4f46e5" />
            </div>
            3. Custom Coordinates Calibration
          </h2>
          <p>
            For specialized shipping carriers, you can specify precise coordinate metrics in the settings drawer. Point coordinates are defined relative to the bottom-left corner (0,0) of the PDF:
          </p>
          <ul>
            <li><strong>X (Left Offset):</strong> Horizontal coordinate where the crop area begins.</li>
            <li><strong>Y (Bottom/Top Offset):</strong> Vertical offset from the page margin.</li>
            <li><strong>Width/Height:</strong> Precision boundaries of your output sheet.</li>
          </ul>
          <CustomDimensionsMockup />
          <p>
            Once you define a layout that fits your custom carrier labels, you can save it as a custom preset in local storage. This allows you to reload the same dimensions for future uploads with one click.
          </p>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/basic-cropping">← Previous: Basic Cropping</Link>
          <Link href="/tutorials/batch-processing">Next: Batch Processing →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
