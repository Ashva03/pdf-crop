"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  AmazonIcon,
  FlipkartIcon,
  MeeshoIcon,
  SnapdealIcon,
  MyntraIcon,
} from "./PlatformIcons";

const Container = styled.div`
  width: 100%;
  color: #1f2937;
  background-color: #f8fafc;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
  color: white;
  padding: 5rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #e0e7ff;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.92;
  margin-bottom: 2rem;
  color: #c7d2fe;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: #10b981;
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);

  &:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1240px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 750px;
  margin: 0 auto 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
`;

/* Operations Grid */
const OperationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
`;

const OperationCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }
`;

const OpHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const OpIcon = styled.div<{ $color?: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.$color || "#eff6ff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const OpTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
`;

const OpDescription = styled.p`
  color: #475569;
  font-size: 0.975rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const OpDetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const OpDetailItem = styled.li`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  &::before {
    content: "✓";
    color: #10b981;
    font-weight: bold;
  }
`;

const CardLink = styled(Link)`
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: #3730a3;
    text-decoration: underline;
  }
`;

/* Before and After Interactive Demo */
const BeforeAfterContainer = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const DemoControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
`;

const ToggleTab = styled.button<{ $active: boolean }>`
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$active ? "#4f46e5" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#64748b")};

  &:hover {
    color: ${(props) => (props.$active ? "white" : "#1e293b")};
  }
`;

const DemoWorkspace = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const DemoBox = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DemoBoxTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.5rem;
`;

const DemoBoxMeta = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 1.5rem;
`;

/* Visual A4 Sheet Mockup */
const A4Paper = styled.div`
  width: 220px;
  height: 310px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShippingLabelOverlay = styled.div`
  position: absolute;
  top: 45px;
  left: 30px;
  width: 160px;
  height: 120px;
  border: 2px dashed #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const LabelContentMock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BarcodeLines = styled.div`
  height: 24px;
  background: repeating-linear-gradient(
    90deg,
    #1e293b 0px,
    #1e293b 3px,
    transparent 3px,
    transparent 6px,
    #1e293b 6px,
    #1e293b 10px
  );
  width: 100%;
  margin-top: 4px;
`;

const TextLine = styled.div<{ $width?: string; $height?: string }>`
  height: ${(props) => props.$height || "6px"};
  width: ${(props) => props.$width || "80%"};
  background: #cbd5e1;
  border-radius: 3px;
  margin-bottom: 4px;
`;

const WastedArea = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  height: 110px;
  border: 1px solid #fca5a5;
  background: rgba(254, 226, 226, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  padding: 8px;
`;

/* Cropped A6 Label Mockup */
const A6ThermalLabel = styled.div`
  width: 180px;
  height: 260px;
  background: #ffffff;
  border: 2px solid #10b981;
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.15);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const BadgeThermal = styled.span`
  position: absolute;
  top: -12px;
  right: 12px;
  background: #10b981;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
`;

/* Technical Specs Table / Cards */
const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SpecCard = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

const SpecLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const SpecValue = styled.p`
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const SpecDesc = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
`;

/* Batch Pipeline Steps */
const PipelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  position: relative;
`;

const PipelineCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  position: relative;
`;

const StepBadge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4f46e5;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const StepText = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
`;

/* Privacy Architecture Section */
const ArchitectureBox = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  margin-top: 2rem;
`;

const ArchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArchCard = styled.div<{ $highlight?: boolean }>`
  background: ${(props) =>
    props.$highlight ? "rgba(16, 185, 129, 0.1)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.$highlight ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  padding: 1.75rem;
`;

const ArchCardTitle = styled.h4<{ $accent?: string }>`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.$accent || "#ffffff"};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArchCardText = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
`;

/* Platform Presets Grid */
const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const PlatformCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #cbd5e1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

const PlatformIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const PlatformName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.4rem;
`;

const PlatformMeta = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 1.25rem;
`;

const PlatformLink = styled(Link)`
  display: inline-block;
  background: #f1f5f9;
  color: #4f46e5;
  padding: 0.55rem 1.1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
    color: white;
  }
`;

export default function HomePage() {
  const [activeDemoTab, setActiveDemoTab] = useState<"comparison" | "specs">(
    "comparison"
  );

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Badge>
            <span>🔒 100% In-Browser Privacy Protection</span>
          </Badge>
          <HeroTitle>
            E-Commerce Shipping Label Cropper & PDF Processing System
          </HeroTitle>
          <HeroSubtitle>
            Extract, trim, and standardize shipping labels from multi-page PDF
            manifests into thermal printer-ready formats (A6 / 4x6 inch) for
            Flipkart, Amazon, Meesho, Snapdeal, and Myntra without sending
            files to an external server.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton href="/flipkart-label">
              Crop Flipkart Labels
            </PrimaryButton>
            <SecondaryButton href="/amazon-label">
              Crop Amazon Labels
            </SecondaryButton>
            <SecondaryButton href="/meesho-label">
              Crop Meesho Labels
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Real Before-and-After Example Section */}
      <Section>
        <SectionHeader>
          <SectionTitle>Real Before & After Cropping Output</SectionTitle>
          <SectionSubtitle>
            Standard A4 seller manifests contain excess margins, invoice details,
            and wasted white space. Our cropper isolates exact label boundaries
            for 4x6" thermal printing.
          </SectionSubtitle>
        </SectionHeader>

        <BeforeAfterContainer>
          <DemoControls>
            <ToggleTab
              $active={activeDemoTab === "comparison"}
              onClick={() => setActiveDemoTab("comparison")}
            >
              Side-by-Side Visual Comparison
            </ToggleTab>
            <ToggleTab
              $active={activeDemoTab === "specs"}
              onClick={() => setActiveDemoTab("specs")}
            >
              Coordinate & Ratio Specifications
            </ToggleTab>
          </DemoControls>

          <DemoWorkspace>
            <DemoBox>
              <DemoBoxTitle>Original Uncropped A4 PDF Manifest</DemoBoxTitle>
              <DemoBoxMeta>Dimensions: 210 x 297 mm (A4 Standard)</DemoBoxMeta>
              <A4Paper>
                <TextLine $width="40%" $height="8px" />
                <ShippingLabelOverlay>
                  <LabelContentMock>
                    <TextLine $width="70%" $height="6px" />
                    <TextLine $width="90%" $height="6px" />
                    <BarcodeLines />
                    <TextLine $width="50%" $height="6px" />
                  </LabelContentMock>
                </ShippingLabelOverlay>
                <WastedArea>
                  ❌ Unneeded Tax Invoice & Blank Margins (Wastes 70% Paper)
                </WastedArea>
              </A4Paper>
            </DemoBox>

            <DemoBox>
              <DemoBoxTitle>Cropped Thermal Printer-Ready Output</DemoBoxTitle>
              <DemoBoxMeta>Dimensions: 100 x 150 mm (4x6 Inches / A6)</DemoBoxMeta>
              <A6ThermalLabel>
                <BadgeThermal>Ready for Thermal Print</BadgeThermal>
                <TextLine $width="60%" $height="8px" />
                <TextLine $width="90%" $height="8px" />
                <BarcodeLines />
                <TextLine $width="100%" $height="8px" />
                <TextLine $width="75%" $height="8px" />
                <TextLine $width="40%" $height="8px" />
              </A6ThermalLabel>
            </DemoBox>
          </DemoWorkspace>

          {activeDemoTab === "specs" && (
            <div style={{ padding: "0 2.5rem 2.5rem" }}>
              <SpecsGrid>
                <SpecCard>
                  <SpecLabel>Flipkart Preset</SpecLabel>
                  <SpecValue>X:185, Y:456</SpecValue>
                  <SpecDesc>Bounds: 225 x 365 pt. Isolates primary shipping barcode & address box.</SpecDesc>
                </SpecCard>
                <SpecCard>
                  <SpecLabel>Meesho Preset</SpecLabel>
                  <SpecValue>X:0, Y:495</SpecValue>
                  <SpecDesc>Bounds: 595 x 345 pt. Crops full width meesho 4-page packing list headers.</SpecDesc>
                </SpecCard>
                <SpecCard>
                  <SpecLabel>Amazon Preset</SpecLabel>
                  <SpecValue>X:180, Y:420</SpecValue>
                  <SpecDesc>Bounds: 260 x 390 pt. Standardizes Amazon FBA/FBM shipping labels.</SpecDesc>
                </SpecCard>
              </SpecsGrid>
            </div>
          )}
        </BeforeAfterContainer>
      </Section>

      {/* Supported PDF Operations */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Supported PDF Operations</SectionTitle>
          <SectionSubtitle>
            A comprehensive list of exact PDF manipulation tools available on this platform.
          </SectionSubtitle>
        </SectionHeader>

        <OperationsGrid>
          <OperationCard>
            <OpHeader>
              <OpIcon $color="#e0e7ff">🏷️</OpIcon>
              <OpTitle>Platform Shipping Label Cropping</OpTitle>
            </OpHeader>
            <OpDescription>
              Crop multi-page shipping manifest PDFs according to official platform label guidelines for Flipkart, Amazon, Meesho, Snapdeal, and Myntra.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Preset bounding box coordinates per marketplace</OpDetailItem>
              <OpDetailItem>Automatic page viewport clipping</OpDetailItem>
              <OpDetailItem>Direct print & instant multi-page PDF generation</OpDetailItem>
            </OpDetailList>
            <CardLink href="/flipkart-label">Open Label Cropper →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#dcfce7">✂️</OpIcon>
              <OpTitle>Custom PDF Cropping</OpTitle>
            </OpHeader>
            <OpDescription>
              Manually drag, adjust, and set precise crop rectangle boundaries for any PDF page or entire multi-page document.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Interactive click-and-drag crop selection</OpDetailItem>
              <OpDetailItem>Custom X, Y, Width, Height dimension controls</OpDetailItem>
              <OpDetailItem>Apply single crop box to all pages simultaneously</OpDetailItem>
            </OpDetailList>
            <CardLink href="/flipkart-label">Use Custom Crop →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#fef3c7">🔀</OpIcon>
              <OpTitle>PDF Page Editing & Reordering</OpTitle>
            </OpHeader>
            <OpDescription>
              Reorder, rotate, or delete specific pages within any multi-page PDF document using a drag-and-drop page grid.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Individual page preview thumbnails</OpDetailItem>
              <OpDetailItem>Delete unwanted invoice or summary pages</OpDetailItem>
              <OpDetailItem>Re-sequence pages before label extraction</OpDetailItem>
            </OpDetailList>
            <CardLink href="/edit-pdf">Edit PDF Pages →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#fae8ff">🧩</OpIcon>
              <OpTitle>PDF Merging</OpTitle>
            </OpHeader>
            <OpDescription>
              Combine multiple separate PDF files into a single consolidated document without quality loss or page distortion.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Merge unlimited individual PDF files</OpDetailItem>
              <OpDetailItem>Preserve vector sharpness & barcode readability</OpDetailItem>
              <OpDetailItem>Reorder uploaded files before merging</OpDetailItem>
            </OpDetailList>
            <CardLink href="/merge-pdf">Merge PDF Files →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#e0f2fe">🗜️</OpIcon>
              <OpTitle>PDF File Compression</OpTitle>
            </OpHeader>
            <OpDescription>
              Reduce overall PDF file size for easier email transmission or platform uploading while keeping shipping barcodes crisp.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Optimized file size reduction algorithms</OpDetailItem>
              <OpDetailItem>Preserves high DPI barcode clarity</OpDetailItem>
              <OpDetailItem>Stateless stream processing</OpDetailItem>
            </OpDetailList>
            <CardLink href="/compress-pdf">Compress PDF →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#fce7f3">🖼️</OpIcon>
              <OpTitle>Image to PDF Conversion</OpTitle>
            </OpHeader>
            <OpDescription>
              Convert JPG, PNG, and WebP images into standardized single or multi-page PDF files ready for printing.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Supports JPG, PNG, WebP image formats</OpDetailItem>
              <OpDetailItem>Auto-fits image margins to standard page sizes</OpDetailItem>
              <OpDetailItem>Combine multiple image files into 1 PDF</OpDetailItem>
            </OpDetailList>
            <CardLink href="/images-to-pdf">Convert Images to PDF →</CardLink>
          </OperationCard>

          <OperationCard>
            <OpHeader>
              <OpIcon $color="#fef9c3">📷</OpIcon>
              <OpTitle>PDF to JPG Extraction</OpTitle>
            </OpHeader>
            <OpDescription>
              Export PDF document pages into high-resolution JPG images for archival, documentation, or image editing.
            </OpDescription>
            <OpDetailList>
              <OpDetailItem>Extract individual pages as clear JPG images</OpDetailItem>
              <OpDetailItem>High resolution canvas rendering</OpDetailItem>
              <OpDetailItem>Zip export for multi-page extractions</OpDetailItem>
            </OpDetailList>
            <CardLink href="/pdf-to-jpg">Extract PDF to JPG →</CardLink>
          </OperationCard>
        </OperationsGrid>
      </Section>

      {/* How Batch Processing Works */}
      <Section>
        <SectionHeader>
          <SectionTitle>How Multi-Page Batch Processing Works</SectionTitle>
          <SectionSubtitle>
            Process 10, 50, or 500 shipping labels in a single PDF file instantly without repeating manual cropping actions.
          </SectionSubtitle>
        </SectionHeader>

        <PipelineGrid>
          <PipelineCard>
            <StepBadge>1</StepBadge>
            <StepTitle>Multi-Page Manifest Ingestion</StepTitle>
            <StepText>
              Upload a bulk PDF containing multiple orders downloaded from seller portals (e.g., a 100-page Flipkart or Meesho manifest file).
            </StepText>
          </PipelineCard>

          <PipelineCard>
            <StepBadge>2</StepBadge>
            <StepTitle>Automated Coordinate Mapping</StepTitle>
            <StepText>
              The engine reads document dimensions using PDF.js and maps platform crop coordinates (`x, y, width, height`) to every page stream.
            </StepText>
          </PipelineCard>

          <PipelineCard>
            <StepBadge>3</StepBadge>
            <StepTitle>Canvas & Stream Crop Box Transformation</StepTitle>
            <StepText>
              Using `pdf-lib` stream manipulation, page MediaBoxes and CropBoxes are updated across all pages simultaneously in memory.
            </StepText>
          </PipelineCard>

          <PipelineCard>
            <StepBadge>4</StepBadge>
            <StepTitle>Compiled Thermal Output Download</StepTitle>
            <StepText>
              A single processed multi-page PDF is generated containing only the cropped 4x6" labels, ready for immediate batch printing.
            </StepText>
          </PipelineCard>
        </PipelineGrid>
      </Section>

      {/* Supported File Sizes and Limits */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Technical Specifications & File Limits</SectionTitle>
          <SectionSubtitle>
            Transparent operational thresholds for client-side and server-assisted operations.
          </SectionSubtitle>
        </SectionHeader>

        <SpecsGrid>
          <SpecCard>
            <SpecLabel>Max File Size (Cropping)</SpecLabel>
            <SpecValue>10 MB</SpecValue>
            <SpecDesc>
              Maximum file size for client-side shipping label cropping tools (`flipkart`, `amazon`, `meesho`, etc.).
            </SpecDesc>
          </SpecCard>

          <SpecCard>
            <SpecLabel>Max File Size (General Tools)</SpecLabel>
            <SpecValue>100 MB</SpecValue>
            <SpecDesc>
              Maximum upload size supported for general PDF utilities such as `PDF Merge` and `Images to PDF`.
            </SpecDesc>
          </SpecCard>

          <SpecCard>
            <SpecLabel>Page Processing Limit</SpecLabel>
            <SpecValue>Up to 500+ Pages</SpecValue>
            <SpecDesc>
              Batch processing runs directly in client RAM; handles hundreds of pages per file depending on available device memory.
            </SpecDesc>
          </SpecCard>

          <SpecCard>
            <SpecLabel>Supported Input Formats</SpecLabel>
            <SpecValue>.PDF, .JPG, .PNG</SpecValue>
            <SpecDesc>
              Accepts standard Adobe PDF documents and bitmap image formats (.jpg, .jpeg, .png, .webp).
            </SpecDesc>
          </SpecCard>
        </SpecsGrid>
      </Section>

      {/* Local Processing vs Server Upload Explanation */}
      <Section>
        <SectionHeader>
          <SectionTitle>Privacy & Data Security Architecture</SectionTitle>
          <SectionSubtitle>
            Clear breakdown of where your PDF documents are processed and stored.
          </SectionSubtitle>
        </SectionHeader>

        <ArchitectureBox>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Is your data safe? How processing works:
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Shipping labels contain sensitive customer personally identifiable information (PII) including names, addresses, and phone numbers. Here is our technical processing breakdown:
          </p>

          <ArchGrid>
            <ArchCard $highlight={true}>
              <ArchCardTitle $accent="#10b981">
                <span>💻</span> 100% Client-Side Local Processing (Cropping)
              </ArchCardTitle>
              <ArchCardText>
                When using the <strong>Label Cropper</strong> tools (Flipkart, Amazon, Meesho, Snapdeal, Myntra, Custom Crop), all PDF rendering and PDF modification execute entirely inside your web browser using HTML5 Canvas and `pdf-lib` WebAssembly.
                <br /><br />
                <strong>Your files NEVER leave your computer or mobile device.</strong> Zero network bytes are sent to any external server.
              </ArchCardText>
            </ArchCard>

            <ArchCard>
              <ArchCardTitle $accent="#60a5fa">
                <span>⚡</span> Stateless API Micro-services (General Tools)
              </ArchCardTitle>
              <ArchCardText>
                For server-assisted tools like <strong>PDF Compression</strong> or <strong>Image-to-PDF Conversion</strong>, files are processed via dedicated stateless API endpoints (`/api/...`).
                <br /><br />
                File data is held in temporary server memory (RAM) only for the duration of the request and is <strong>immediately purged</strong>. No files are saved to disk or logged.
              </ArchCardText>
            </ArchCard>
          </ArchGrid>
        </ArchitectureBox>
      </Section>

      {/* Supported Platforms Presets */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Marketplace Presets & Supported Platforms</SectionTitle>
          <SectionSubtitle>
            Pre-configured bounding dimensions designed specifically for major Indian e-commerce seller portals.
          </SectionSubtitle>
        </SectionHeader>

        <PlatformGrid>
          <PlatformCard>
            <PlatformIconWrapper>
              <FlipkartIcon width={40} height={40} />
            </PlatformIconWrapper>
            <PlatformName>Flipkart</PlatformName>
            <PlatformMeta>A6 Thermal Crop Box (185, 456, 225, 365)</PlatformMeta>
            <PlatformLink href="/flipkart-label">Process Flipkart Labels</PlatformLink>
          </PlatformCard>

          <PlatformCard>
            <PlatformIconWrapper>
              <AmazonIcon width={40} height={40} />
            </PlatformIconWrapper>
            <PlatformName>Amazon</PlatformName>
            <PlatformMeta>FBA / Easy Ship Crop Box (180, 420, 260, 390)</PlatformMeta>
            <PlatformLink href="/amazon-label">Process Amazon Labels</PlatformLink>
          </PlatformCard>

          <PlatformCard>
            <PlatformIconWrapper>
              <MeeshoIcon width={40} height={40} />
            </PlatformIconWrapper>
            <PlatformName>Meesho</PlatformName>
            <PlatformMeta>4-Page Manifest Header Crop (0, 495, 595, 345)</PlatformMeta>
            <PlatformLink href="/meesho-label">Process Meesho Labels</PlatformLink>
          </PlatformCard>

          <PlatformCard>
            <PlatformIconWrapper>
              <SnapdealIcon width={40} height={40} />
            </PlatformIconWrapper>
            <PlatformName>Snapdeal</PlatformName>
            <PlatformMeta>Standardized Label Crop (2, 122, 270, 295)</PlatformMeta>
            <PlatformLink href="/snapdeal-label">Process Snapdeal Labels</PlatformLink>
          </PlatformCard>

          <PlatformCard>
            <PlatformIconWrapper>
              <MyntraIcon width={40} height={40} />
            </PlatformIconWrapper>
            <PlatformName>Myntra</PlatformName>
            <PlatformMeta>Myntra Logistics Preset (150, 400, 300, 400)</PlatformMeta>
            <PlatformLink href="/myntra-label">Process Myntra Labels</PlatformLink>
          </PlatformCard>
        </PlatformGrid>
      </Section>
    </Container>
  );
}
