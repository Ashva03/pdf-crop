"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Settings, Sliders, Layout, Minimize2, ZoomIn, RotateCw, ChevronLeft, ChevronRight, FileText } from "lucide-react";

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

const InterfaceSection = styled.div`
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
    margin-bottom: 1.25rem;
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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: #334155;
    line-height: 1.6;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      font-size: 1.25rem;
      margin-right: 0.75rem;
      line-height: 1.2;
    }

    strong {
      color: #0f172a;
    }
  }
`;

const MockupContainer = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
`;

const AppLayoutMockup = () => (
  <MockupContainer>
    <div style={{ width: '100%', maxWidth: '580px', border: '1px solid #cbd5e1', borderRadius: '10px', background: '#ffffff', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
      {/* App Header */}
      <div style={{ background: '#0f172a', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '12px' }}>
        <Layout size={14} color="#6366f1" />
        <span style={{ fontWeight: 600 }}>PDF Cropper - Seller Workspace</span>
      </div>
      {/* App Workspace Body */}
      <div style={{ display: 'flex', height: '220px' }}>
        {/* Workspace Canvas (Left) */}
        <div style={{ flex: 1, background: '#f1f5f9', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '0.75rem', gap: '0.5rem' }}>
          <div style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', fontSize: '10px' }}>
            <span style={{ display: 'flex', gap: '8px' }}><ZoomIn size={10} /> <RotateCw size={10} /></span>
            <span>Page 1 of 4</span>
          </div>
          <div style={{ flex: 1, background: '#fff', border: '1px dashed #94a3b8', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '80px', height: '110px', border: '1px solid #4f46e5', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '2px' }}>
              <div style={{ border: '1px dashed #4f46e5', height: '60px', margin: '4px', background: 'rgba(79, 70, 229, 0.1)' }}></div>
            </div>
          </div>
        </div>
        {/* Workspace Settings (Right) */}
        <div style={{ width: '180px', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: '#f8fafc' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#1e293b' }}>Crop Presets</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ background: '#4f46e5', color: '#fff', fontSize: '9px', padding: '4px 6px', borderRadius: '4px', fontWeight: 500 }}>Flipkart Label (A6)</div>
            <div style={{ background: '#e2e8f0', color: '#475569', fontSize: '9px', padding: '4px 6px', borderRadius: '4px' }}>Meesho Label</div>
            <div style={{ background: '#e2e8f0', color: '#475569', fontSize: '9px', padding: '4px 6px', borderRadius: '4px' }}>Custom Crop</div>
          </div>
          <div style={{ marginTop: 'auto', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', padding: '6px', fontSize: '11px', fontWeight: 600, textAlign: 'center' }}>
            Download PDF
          </div>
        </div>
      </div>
    </div>
  </MockupContainer>
);

const ToolbarMockup = () => (
  <MockupContainer>
    <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '0.5rem 1rem', display: 'flex', gap: '1.25rem', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', gap: '0.5rem', borderRight: '1px solid #e2e8f0', paddingRight: '1rem' }}>
        <button style={{ background: '#eef2ff', border: 'none', borderRadius: '4px', padding: '4px', cursor: 'default' }}><ZoomIn size={16} color="#4f46e5" /></button>
        <button style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '4px', cursor: 'default' }}><Minimize2 size={16} color="#64748b" /></button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', borderRight: '1px solid #e2e8f0', paddingRight: '1rem' }}>
        <button style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '4px', cursor: 'default' }}><RotateCw size={16} color="#64748b" /></button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '12px', fontWeight: 600, color: '#334155' }}>
        <ChevronLeft size={16} color="#cbd5e1" />
        <span>1 / 6</span>
        <ChevronRight size={16} color="#475569" />
      </div>
    </div>
  </MockupContainer>
);

const PanelMockup = () => (
  <MockupContainer>
    <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', width: '100%', maxWidth: '280px', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
        <Settings size={16} color="#4f46e5" />
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Export Configurations</span>
      </div>
      <div>
        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '4px' }}>OUTPUT FORMAT</label>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ flex: 1, padding: '4px', border: '2px solid #4f46e5', borderRadius: '4px', fontSize: '10px', color: '#4f46e5', fontWeight: 600, textAlign: 'center' }}>PDF</span>
          <span style={{ flex: 1, padding: '4px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '10px', color: '#64748b', textAlign: 'center' }}>PNG</span>
          <span style={{ flex: 1, padding: '4px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '10px', color: '#64748b', textAlign: 'center' }}>JPG</span>
        </div>
      </div>
      <div>
        <label style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '4px' }}>DENSITY / QUALITY</label>
        <div style={{ display: 'flex', gap: '4px', background: '#f8fafc', borderRadius: '4px', padding: '2px' }}>
          <span style={{ flex: 1, padding: '3px', background: '#fff', borderRadius: '3px', fontSize: '9px', color: '#1e293b', fontWeight: 600, textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Standard (150 DPI)</span>
          <span style={{ flex: 1, padding: '3px', fontSize: '9px', color: '#64748b', textAlign: 'center' }}>High (300 DPI)</span>
        </div>
      </div>
    </div>
  </MockupContainer>
);

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

export default function InterfaceOverviewPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Workspace Interface Overview</Title>
        <Description>
          Familiarize yourself with the PDF Cropper toolkit layout, drawing canvas, settings drawers, and responsive controls designed for e-commerce operators.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          Our online tools are engineered to pack power into a clean, simple browser interface. By processing vector assets on your local hardware via client-side WebAssembly, PDF Cropper eliminates complex menus and long uploading queue waiting times. This guide maps out the central interface panels, workspace configuration settings, and shortcut keys.
        </p>

        <InterfaceSection>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Layout size={20} color="#4f46e5" />
            </div>
            Workspace Core Components
          </h2>
          <p>
            When you import a document, the interface splits into a main **Rendering Workspace** on the left and a **Control Panel** on the right. This keeps layout adjustments separate from export actions.
          </p>
          <AppLayoutMockup />
          <FeatureList>
            <li>
              <strong>Upload Dashboard:</strong> The primary starting area. Accepts PDF files, multi-file queues, or raw image drops depending on the active tool page.
            </li>
            <li>
              <strong>Visual Drawing Canvas:</strong> Renders vector outlines of the uploaded document. It supports interactive selection bounding boxes that you can drag, expand, or snap to dimensions.
            </li>
            <li>
              <strong>Horizontal Toolbar:</strong> Sits directly above the canvas. Houses precision controls like Zoom sliders, Rotation buttons, and page navigation options.
            </li>
            <li>
              <strong>Settings Drawer:</strong> Positioned on the right margin. Houses standard presets (A6, A4, margins), crop density sliders, format selection checkboxes, and file processing action buttons.
            </li>
          </FeatureList>
        </InterfaceSection>

        <InterfaceSection>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Sliders size={20} color="#4f46e5" />
            </div>
            Toolbar Controls & Keyboard Shortcuts
          </h2>
          <p>
            The toolbar provides quick access to functions for fine-tuning selection boxes before exporting. Keeping these controls easily accessible helps you maintain accurate cropping boundaries for custom label sheets.
          </p>
          <ToolbarMockup />
          <FeatureList>
            <li>
              <strong>Precision Zoom (<ZoomIn size={14} />):</strong> Magnifies the canvas. Helpful when checking fine print on billing invoices, customer address lines, and shipping routing barcodes.
            </li>
            <li>
              <strong>Canvas Rotation (<RotateCw size={14} />):</strong> Rotates pages in 90-degree increments. Essential when carrier templates are exported in landscape mode but need to be printed portrait on thermal rolls.
            </li>
            <li>
              <strong>Page Navigators:</strong> Cycle back and forth through multi-page sheets. Multi-page cropping is supported in a batch queue.
            </li>
            <li>
              <strong>Nudge Arrows (Shortcuts):</strong> Move the selected crop bounding box pixel-by-pixel using your keyboard arrow keys for maximum precision.
            </li>
          </FeatureList>
        </InterfaceSection>

        <InterfaceSection>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Settings size={20} color="#4f46e5" />
            </div>
            Export & Format Configurations Panel
          </h2>
          <p>
            Before printing your cropped files, adjust your file type and quality settings. The right-hand panel gives you total control over the compile process.
          </p>
          <PanelMockup />
          <FeatureList>
            <li>
              <strong>Output Preset Toggles:</strong> Quickly switch between Flipkart (Ekart), Meesho (3PL), Myntra, Snapdeal, and standard A6 formats. Selecting a preset updates the bounding box coordinates automatically.
            </li>
            <li>
              <strong>Export Format Selector:</strong> Export files in vector PDF (default) or convert individual cropped pages to high-resolution PNG or JPG image files.
            </li>
            <li>
              <strong>DPI Density Calibration:</strong> Standardize file quality. Choose between **Standard (150 DPI)** for standard thermal printers and **High (300 DPI)** to ensure tracking barcodes scan cleanly.
            </li>
          </FeatureList>
        </InterfaceSection>

        <NavigationLinks>
          <Link href="/tutorials/getting-started">← Previous: Getting Started</Link>
          <Link href="/tutorials/basic-cropping">Next: Basic Cropping →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
