"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Crop, ZoomIn, Eye, Download, Info, Check } from "lucide-react";

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

const SelectCropAreaMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ position: 'relative', width: '220px', height: '150px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '25px', left: '35px', width: '150px', height: '100px', border: '2px solid #4f46e5', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '4px' }}>
        {/* Resize Handles */}
        <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
        <div style={{ position: 'absolute', bottom: '-4px', left: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
        <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
        <div style={{ position: 'absolute', top: 'calc(50% - 4px)', left: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
        <div style={{ position: 'absolute', top: 'calc(50% - 4px)', right: '-4px', width: '8px', height: '8px', background: '#4f46e5' }}></div>
      </div>
      <div style={{ position: 'absolute', top: '65px', left: '90px', color: '#4f46e5', fontSize: '10px', fontWeight: 600 }}>Drag to Resize</div>
    </div>
  </MockupContainer>
);

const FineTuneMockup = () => (
  <MockupContainer>
    <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>NUDGE CONTROL</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', width: '90px', margin: '0 auto' }}>
          <div></div>
          <button style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px', fontSize: '9px', textAlign: 'center', cursor: 'default' }}>▲</button>
          <div></div>
          <button style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px', fontSize: '9px', textAlign: 'center', cursor: 'default' }}>◀</button>
          <button style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px', fontSize: '9px', textAlign: 'center', cursor: 'default' }}>▼</button>
          <button style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px', fontSize: '9px', textAlign: 'center', cursor: 'default' }}>▶</button>
        </div>
        <p style={{ fontSize: '9px', color: '#64748b', textAlign: 'center', margin: 0 }}>Arrow keys move box 1px</p>
      </div>
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>GRID SNAP</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '32px', height: '16px', background: '#4f46e5', borderRadius: '99px', padding: '2px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ width: '12px', height: '12px', background: '#fff', borderRadius: '50%' }}></span>
          </span>
          <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>Snap to Margins</span>
        </div>
      </div>
    </div>
  </MockupContainer>
);

const PreviewCropMockup = () => (
  <MockupContainer style={{ background: '#ffffff', borderStyle: 'solid' }}>
    <div style={{ display: 'flex', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', width: '110px', height: '110px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>Canvas View</span>
        <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', border: '1px dashed #4f46e5', background: 'rgba(79, 70, 229, 0.05)' }}></div>
      </div>
      <div style={{ fontSize: '16px', color: '#94a3b8' }}>➔</div>
      <div style={{ border: '2px solid #10b981', borderRadius: '6px', width: '110px', height: '110px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ background: '#e2e8f0', width: '90px', height: '90px', borderRadius: '4px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ background: '#475569', height: '16px' }}></div>
          <div style={{ background: '#cbd5e1', height: '4px', width: '70%' }}></div>
          <div style={{ background: '#cbd5e1', height: '4px', width: '50%' }}></div>
        </div>
      </div>
    </div>
  </MockupContainer>
);

const SaveCropMockup = () => (
  <MockupContainer>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{ display: 'flex', background: '#e0f2fe', borderRadius: '8px', padding: '0.5rem 1rem', border: '1px solid #bae6fd' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#0369a1' }}>Format: A6 Vector PDF (Standard 105 x 148 mm)</span>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '15px', cursor: 'default', boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)' }}>
        <Download size={18} /> Download Cropped PDF
      </button>
    </div>
  </MockupContainer>
);

const TipBox = styled.div`
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1.25rem;
  margin: 1.5rem 0;
  border-radius: 0 12px 12px 0;

  h3 {
    color: #1e3a8a;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #1d4ed8;
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

export default function BasicCroppingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Basic PDF Cropping Guide</Title>
        <Description>
          Master the fundamentals of importing document sheets, selecting layout zones, fine-tuning cropping coordinates, and exporting files.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          Cropping PDF pages is the core workflow on PDF Cropper. Unlike text processors, PDFs align graphics and fonts on a fixed geometric grid. When you crop a PDF page, you modify its canvas definitions (specifically the **CropBox** and **MediaBox** coordinates) to crop out whitespace without altering the underlying vector elements. This maintains barcode sharpness and text readability.
        </p>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Crop size={20} color="#4f46e5" />
            </div>
            1. Selecting the Crop Boundary Area
          </h2>
          <p>
            When your PDF is uploaded, a crop bounding box is drawn over the canvas workspace. This selection rectangle represents the output boundaries. You can drag and position the box by clicking and holding inside its boundaries. To adjust selection width and height, click and drag the square anchors positioned on the corners and edges of the bounding box.
          </p>
          <SelectCropAreaMockup />
          <p>
            For standard carrier labels, the coordinates snap to preset e-commerce templates automatically. Adjust the selection boxes manually if the shipping label formatting on your carrier dashboard uses custom page margins.
          </p>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <ZoomIn size={20} color="#4f46e5" />
            </div>
            2. Precision Fine-Tuning and Keyboard Shortcuts
          </h2>
          <p>
            When printing labels, alignment errors can cut off barcodes or customer addresses. To avoid cropping errors, use our zoom tools to magnify details. For pixel-perfect positioning, click the selection box and use your keyboard **Arrow Keys** (Up, Down, Left, Right) to nudge the selection box exactly 1 pixel in that direction.
          </p>
          <FineTuneMockup />
          <TipBox>
            <h3><Info size={16} /> Keyboard Shortcuts for Faster Editing</h3>
            <p>
              Hold down the **Shift** key while dragging selection corners to preserve the aspect ratio of the bounding box. This keeps the proportions locked to A6 or 4" x 6" layout dimensions, preventing label skewing.
            </p>
          </TipBox>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Eye size={20} color="#4f46e5" />
            </div>
            3. Previewing the Output Layout
          </h2>
          <p>
            The preview area displays the cropped output page. It compiles the coordinate modifications instantly and renders a digital prototype of the sheet as it will appear when printed. Check that all customer address details, billing values, logistics routing symbols, and carrier barcodes are clear and centered.
          </p>
          <PreviewCropMockup />
          <p>
            For multi-page bulk files, toggle through the page navigation index at the bottom. This allows you to verify that the selection box matches all labels in the document before exporting.
          </p>
        </TutorialStep>

        <TutorialStep>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Download size={20} color="#4f46e5" />
            </div>
            4. Compiling & Downloading Output Documents
          </h2>
          <p>
            When satisfied with the preview, click "Download". Our client-side script compiles the pages and generates a download link instantly. Save the cropped PDF to your local directory. Open the saved PDF in your system document viewer, select print settings, and choose the correct paper dimensions (most commonly A6 or 4" x 6" thermal adhesive rolls).
          </p>
          <SaveCropMockup />
          <p>
            Our compilation engine does not rasterize your documents. Text overlays, barcode graphics, and vector shapes remain sharp during processing, ensuring clear prints on thermal paper.
          </p>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/interface-overview">← Previous: Interface Overview</Link>
          <Link href="/tutorials/saving-exporting">Next: Saving & Exporting →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
