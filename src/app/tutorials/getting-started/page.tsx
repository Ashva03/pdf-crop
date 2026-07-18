"use client";

import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { Upload, Crop, Eye, Download, Info, Shield, CheckCircle } from "lucide-react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #f8fafc;
  padding: 2rem;
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

const Step = styled.div`
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

// Reusable styled mockups to replace broken image tags
const MockupContainer = styled.div`
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
`;

const UploadMockup = () => (
  <MockupContainer>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
      <div style={{ background: '#eef2ff', padding: '1rem', borderRadius: '50%' }}>
        <Upload size={36} color="#4f46e5" />
      </div>
      <div>
        <p style={{ fontWeight: 600, color: '#4f46e5', margin: 0 }}>Drag & drop your label PDF here</p>
        <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0.25rem 0 0 0' }}>Supports Flipkart, Amazon, Meesho, and Myntra (Max 10MB)</p>
      </div>
      <div style={{ padding: '0.5rem 1rem', background: '#4f46e5', color: 'white', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', cursor: 'default' }}>
        Browse Files
      </div>
    </div>
  </MockupContainer>
);

const CropMockup = () => (
  <MockupContainer style={{ borderStyle: 'solid', background: '#ffffff', minHeight: '260px' }}>
    <div style={{ width: '100%', maxWidth: '320px', border: '2px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', background: '#f8fafc', padding: '1rem', position: 'relative' }}>
      {/* Visual shipping label representation */}
      <div style={{ borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
        <span>EKART LOGISTICS</span>
        <span>PREPAID</span>
      </div>
      <div style={{ width: '40%', height: '8px', background: '#e2e8f0', marginBottom: '0.5rem' }}></div>
      <div style={{ width: '80%', height: '8px', background: '#e2e8f0', marginBottom: '0.75rem' }}></div>
      
      {/* Barcode area */}
      <div style={{ background: '#000', height: '40px', width: '100%', margin: '0.5rem 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} style={{ width: i % 3 === 0 ? '4px' : '2px', height: '100%', background: '#fff' }}></div>
        ))}
      </div>
      
      {/* Simulated Crop Area */}
      <div style={{ position: 'absolute', top: '15px', left: '15px', right: '15px', bottom: '15px', border: '2px dashed #4f46e5', background: 'rgba(79, 70, 229, 0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#4f46e5', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Crop size={10} /> Active Crop Bounds
        </div>
      </div>
    </div>
  </MockupContainer>
);

const PreviewMockup = () => (
  <MockupContainer style={{ borderStyle: 'solid', background: '#ffffff', minHeight: '260px' }}>
    <div style={{ display: 'flex', gap: '1.5rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={{ width: '130px', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.75rem', background: '#f8fafc', opacity: 0.6 }}>
        <p style={{ margin: 0, fontSize: '9px', fontWeight: 600, color: '#94a3b8', textAlign: 'center' }}>A4 Layout (Original)</p>
        <div style={{ background: '#cbd5e1', height: '110px', marginTop: '0.5rem', borderRadius: '4px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '40px', left: '20px', width: '90px', height: '35px', border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)' }}></div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>➔</div>
      <div style={{ width: '130px', border: '2px solid #10b981', borderRadius: '6px', padding: '0.75rem', background: '#ffffff', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)' }}>
        <p style={{ margin: 0, fontSize: '9px', fontWeight: 600, color: '#10b981', textAlign: 'center' }}>A6 Format (Cropped)</p>
        <div style={{ background: '#e2e8f0', height: '110px', marginTop: '0.5rem', borderRadius: '4px', padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ background: '#475569', height: '25px', width: '100%', display: 'flex', gap: '1px', alignItems: 'center' }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} style={{ width: i % 2 === 0 ? '3px' : '1px', height: '100%', background: '#fff' }}></div>
            ))}
          </div>
          <div style={{ width: '80%', height: '4px', background: '#cbd5e1', marginTop: '6px' }}></div>
          <div style={{ width: '60%', height: '4px', background: '#cbd5e1', marginTop: '3px' }}></div>
        </div>
      </div>
    </div>
  </MockupContainer>
);

const DownloadMockup = () => (
  <MockupContainer>
    <div style={{ width: '100%', maxWidth: '360px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: '#d1fae5', padding: '0.5rem', borderRadius: '8px' }}>
          <CheckCircle size={20} color="#059669" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>flipkart_labels_cropped.pdf</p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>Ready to print • 186 KB</p>
        </div>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', cursor: 'default' }}>
        <Download size={14} /> Save
      </button>
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

const InfoBox = styled.div`
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

export default function GettingStartedPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Getting Started with PDF Cropper</Title>
        <Description>
          Learn the essential workflows to format, optimize, and crop your e-commerce shipping labels to pixel-perfect thermal dimensions in under 60 seconds.
        </Description>
      </HeroSection>

      <ContentSection>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '2.5rem' }}>
          PDF Cropper is a professional utility built specifically for e-commerce entrepreneurs and logistics teams to handle document resizing locally and securely. When you export shipping labels from platform supplier panels like Amazon, Flipkart, Meesho, or Myntra, they are frequently packaged in A4 layouts that combine labels and customer invoices on the same page. Printing these layouts directly wastes sticker rolls and degrades barcode scan accuracy. Follow this step-by-step guide to get started.
        </p>

        <Step>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Upload size={20} color="#4f46e5" />
            </div>
            Step 1: Upload Your Shipping PDF File
          </h2>
          <p>
            Start by navigating to the specific marketplace label crop page from our toolbar (e.g., Flipkart Label, Amazon Label, or Meesho Label) or use the custom cropping engine for other delivery carriers. Locate the PDF file you downloaded from your seller panel. Drag and drop the file directly onto the dashed upload canvas, or click "Browse Files" to choose the file from your computer or mobile storage.
          </p>
          <UploadMockup />
          <InfoBox>
            <h3><Shield size={16} /> Privacy-First Browser Sandbox</h3>
            <p>
              Your commercial documents contain sensitive customer names, home addresses, and item billing details. Unlike traditional web converters, PDF Cropper processes all documents locally in your browser using secure client-side scripts. No files are ever uploaded or transmitted to our servers, ensuring compliance with global data privacy standards.
            </p>
          </InfoBox>
        </Step>

        <Step>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Crop size={20} color="#4f46e5" />
            </div>
            Step 2: Position the Bounding Box & Define Selection Areas
          </h2>
          <p>
            Once the PDF is imported, the tool renders vector-perfect page previews. For standard marketplaces, our system pre-populates coordinates matching their standard layouts. If you are using custom dimensions, you can adjust the selection boundaries manually. Click and drag the selection borders, or hover over the corners and drag to resize the crop area. You can also hold the box and reposition it to target specific labels.
          </p>
          <CropMockup />
          <p>
            The coordinates are measured in points (standard PDF units) to keep scaling aligned during compilation. If you are cropping multi-page sheets, the cropping zone is dynamically duplicated to identical pages, allowing you to crop a multi-page PDF batch in one go.
          </p>
        </Step>

        <Step>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Eye size={20} color="#4f46e5" />
            </div>
            Step 3: Preview Output Quality and Calibrate Scaling
          </h2>
          <p>
            Before export, check the rendered preview in the settings tray. The preview renders the output exactly as it will appear when sent to your thermal label printer. Check that the routing codes, order IDs, carrier name, tracking ID numbers, and central barcodes are perfectly clear. Zoom in to check details and ensure no crucial seller credentials or packaging abbreviations have been cut off.
          </p>
          <PreviewMockup />
          <TipBox>
            <h3><Info size={16} /> Resolution Tip for EKart and ATS Scanners</h3>
            <p>
              Automated logistics sorting hubs depend on barcode reader scans. Our tool preserves vector lines instead of converting them to raster graphics. This ensures text and barcode coordinates do not blur, maintaining high readability on thermal stickers.
            </p>
          </TipBox>
        </Step>

        <Step>
          <h2>
            <div style={{ background: '#eef2ff', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <Download size={20} color="#4f46e5" />
            </div>
            Step 4: Download the Cropped PDF & Calibrate Thermal Print Density
          </h2>
          <p>
            When satisfied with the preview, click "Download". Our client-side script compiles the pages and generates a download link instantly. Save the cropped PDF to your local directory. Open the saved PDF in your system document viewer, select print settings, and choose the correct paper dimensions (most commonly A6 or 4" x 6" thermal adhesive rolls).
          </p>
          <DownloadMockup />
          <p>
            For best printing results, calibrate your thermal printer's speed and density settings. High printing speeds can sometimes cause barcodes to print faintly, leading to carrier scanning failures during product dispatch.
          </p>
        </Step>

        <NavigationLinks>
          <Link href="/tutorials">← Back to Tutorials Hub</Link>
          <Link href="/tutorials/interface-overview">
            Next: Interface Overview →
          </Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  );
}
