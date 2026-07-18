"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Download, Sliders, Settings, Info, Shield, CheckCircle } from "lucide-react";

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

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FormatCard = styled.div`
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

const QualitySettingsMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>DPI QUALITY OPTIONS</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', padding: '0.75rem', borderRadius: '8px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e293b' }}>Vector PDF (Original Lines)</span>
            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>Ideal for thermal barcodes. No quality loss.</p>
          </div>
          <span style={{ background: '#10b981', color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Recommended</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '8px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#334155' }}>Rasterized PNG (300 DPI)</span>
            <p style={{ margin: 0, fontSize: '9px', color: '#64748b' }}>High resolution image export.</p>
          </div>
          <span style={{ color: '#64748b', fontSize: '9px' }}>420 KB</span>
        </div>
      </div>
    </div>
  </MockupContainer>
);

const SavingOptionsMockup = () => (
  <MockupContainer>
    <div style={{ width: '100%', maxWidth: '340px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#1e293b' }}>EXPORT FILE OPTIONS</span>
      <div>
        <label style={{ fontSize: '9px', color: '#64748b', display: 'block', marginBottom: '4px' }}>CUSTOM FILE NAME TEMPLATE</label>
        <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '6px', borderRadius: '6px', fontSize: '11px', color: '#1e293b', fontFamily: 'monospace' }}>
          {`{original_name}_cropped`}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
        <span style={{ width: '32px', height: '16px', background: '#10b981', borderRadius: '99px', padding: '2px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <span style={{ width: '12px', height: '12px', background: '#fff', borderRadius: '50%' }}></span>
        </span>
        <span style={{ fontSize: '10px', color: '#334155', fontWeight: 600 }}>Download immediately without previewing</span>
      </div>
    </div>
  </MockupContainer>
);

const BatchSavingMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '360px' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b' }}>BATCH DOWNLOAD OPTIONS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ border: '2px solid #4f46e5', borderRadius: '8px', padding: '0.75rem', textAlign: 'center', background: '#eef2ff' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#4f46e5', display: 'block' }}>Single PDF File</span>
          <span style={{ fontSize: '8px', color: '#64748b' }}>All labels merged in order</span>
        </div>
        <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', color: '#334155', display: 'block' }}>ZIP Archive</span>
          <span style={{ fontSize: '8px', color: '#64748b' }}>Separate files inside ZIP</span>
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

export default function SavingExportingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Saving & Exporting Guide</Title>
        <Description>
          Learn how to save, configure, and print your cropped shipping labels. Choose formats, adjust quality, and set up thermal printers.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          After adjusting coordinates and previewing pages, the final step is saving and exporting your file. PDF Cropper processes page changes in browser memory, utilizing WebAssembly libraries to compile output files. This guide details file options, resolution settings, and thermal printer setups.
        </p>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Sliders size={20} color="#4f46e5" />
            </div>
            1. Output Quality and Calibration
          </h2>
          <p>
            When exporting cropped files, choosing the right file type is essential for optimal results. By default, PDF Cropper exports in vector PDF format, preserving original shapes and text outlines without rasterization. This maintains barcode sharpness at any scale, ensuring reliable scans at carrier sorting hubs.
          </p>
          <QualitySettingsMockup />
          <FormatGrid>
            <FormatCard>
              <h3>Vector PDF Format</h3>
              <p>Preserves vector graphic assets. Best for thermal barcode stickers.</p>
            </FormatCard>
            <FormatCard>
              <h3>PNG/JPG Image</h3>
              <p>Converts pages to high-resolution raster images (300 DPI). Best for digital sharing.</p>
            </FormatCard>
          </FormatGrid>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Settings size={20} color="#4f46e5" />
            </div>
            2. Custom File Naming & Auto-Download
          </h2>
          <p>
            For merchants processing high order volumes, maintaining clear file organization is essential. You can define a file naming template in the settings drawer (e.g. {"{original_name}_cropped"}), adding dates or crop indexes automatically. You can also enable "Auto-Download" to save files immediately after processing without manual preview steps.
          </p>
          <SavingOptionsMockup />
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Download size={20} color="#4f46e5" />
            </div>
            3. Batch Saving & ZIP Exports
          </h2>
          <p>
            When processing multiple labels simultaneously, you can choose how to compile and save your output files. Choose "Single PDF File" to merge all cropped pages in sequence, or select "ZIP Archive" to compile each page as a separate PDF or image file inside a compressed ZIP folder.
          </p>
          <BatchSavingMockup />
          <TipBox>
            <h3><Info size={16} /> Thermal Printer Calibration</h3>
            <p>
              To ensure clear prints on A6 (4" x 6") thermal paper, calibrate your printer's speed and density settings. High printing speeds can cause barcodes to print faintly, leading to carrier scanning failures during product dispatch.
            </p>
          </TipBox>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/custom-templates">← Previous: Custom Templates</Link>
          <Link href="/tutorials">Back to Tutorials Hub</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
