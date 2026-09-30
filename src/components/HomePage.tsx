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

/* Tools Grid Section */
const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ToolCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }
`;

const ToolIconHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 0.85rem;
`;

const ToolIconBox = styled.div<{ $color?: string }>`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${(props) => props.$color || "#eff6ff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
`;

const ToolTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
`;

const ToolDesc = styled.p`
  color: #475569;
  font-size: 0.925rem;
  line-height: 1.55;
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const CardActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #f1f5f9;
  color: #4f46e5;
  padding: 0.6rem 1.1rem;
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

/* Before & After Comparison Mockup */
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
  padding: 1.25rem;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
`;

const ToggleTab = styled.button<{ $active: boolean }>`
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
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
  padding: 2.25rem;

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
  font-size: 1.05rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.4rem;
`;

const DemoBoxMeta = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 1.25rem;
`;

const A4Paper = styled.div`
  width: 210px;
  height: 295px;
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
  top: 40px;
  left: 25px;
  width: 160px;
  height: 115px;
  border: 2px dashed #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;

const BarcodeLines = styled.div`
  height: 22px;
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
  height: 105px;
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
  padding: 6px;
`;

const A6ThermalLabel = styled.div`
  width: 180px;
  height: 255px;
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

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
`;

const SpecCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const SpecLabel = styled.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
`;

const SpecValue = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.4rem;
`;

const SpecDesc = styled.p`
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.5;
`;

/* Workflow Steps Section */
const WorkflowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const WorkflowCard = styled.div`
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
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const StepText = styled.p`
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.55;
`;

/* Privacy & File Processing Section */
const PrivacyBox = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2.5rem;
`;

const PrivacyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrivacyCard = styled.div<{ $highlight?: boolean }>`
  background: ${(props) =>
    props.$highlight ? "rgba(16, 185, 129, 0.1)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.$highlight ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  padding: 1.75rem;
`;

const PrivacyTitle = styled.h4<{ $accent?: string }>`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${(props) => props.$accent || "#ffffff"};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PrivacyText = styled.p`
  font-size: 0.925rem;
  color: #94a3b8;
  line-height: 1.6;
`;

/* Troubleshooting & FAQ Accordion */
const TroubleshootingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const TroubleshootingCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #ef4444;
`;

const TroubleTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const TroubleText = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.55;
`;

const FaqContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FaqQuestion = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.25rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${(props) => (props.$isOpen ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  padding: ${(props) => (props.$isOpen ? "0 1.5rem 1.25rem" : "0 1.5rem")};
  line-height: 1.65;
  color: #475569;
  font-size: 0.95rem;
`;

const QuickLinksSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const QuickLinkBtn = styled(Link)`
  background: #e0e7ff;
  color: #4338ca;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #4338ca;
    color: white;
  }
`;

export default function HomePage() {
  const [activeDemoTab, setActiveDemoTab] = useState<"comparison" | "specs">(
    "comparison"
  );
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allTools = [
    {
      id: "flipkart",
      name: "Flipkart Label Cropper",
      desc: "Crop Flipkart Seller Hub A4 manifest PDFs into standard Ekart A6 thermal sticker labels.",
      icon: <FlipkartIcon width={32} height={32} />,
      href: "/flipkart-label",
      color: "#eff6ff",
    },
    {
      id: "amazon",
      name: "Amazon Label Cropper",
      desc: "Crop Amazon FBA/FBM shipping labels, extract SKU/ASIN details client-side, and strip invoices.",
      icon: <AmazonIcon width={32} height={32} />,
      href: "/amazon-label",
      color: "#fff7ed",
    },
    {
      id: "meesho",
      name: "Meesho Label Cropper",
      desc: "Format Meesho supplier panel PDF manifests into 4x6 inch thermal sticker printouts.",
      icon: <MeeshoIcon width={32} height={32} />,
      href: "/meesho-label",
      color: "#fdf2f8",
    },
    {
      id: "snapdeal",
      name: "Snapdeal Label Cropper",
      desc: "Extract shipping labels from Snapdeal vendor panel printouts with calibrated crop bounds.",
      icon: <SnapdealIcon width={32} height={32} />,
      href: "/snapdeal-label",
      color: "#fef2f2",
    },
    {
      id: "myntra",
      name: "Myntra Label Cropper",
      desc: "Format Myntra logistics shipping labels into crisp A6 dimensions for fashion e-commerce orders.",
      icon: <MyntraIcon width={32} height={32} />,
      href: "/myntra-label",
      color: "#fdf2f8",
    },
    {
      id: "crop",
      name: "Custom PDF Crop",
      desc: "Drag and drop a custom crop rectangle over any PDF page or apply bounds across all pages.",
      icon: "✂️",
      href: "/flipkart-label",
      color: "#f0fdf4",
    },
    {
      id: "compress",
      name: "Compress PDF",
      desc: "Reduce PDF document file sizes for email sharing or portal uploads while preserving barcode DPI.",
      icon: "🗜️",
      href: "/compress-pdf",
      color: "#e0f2fe",
    },
    {
      id: "merge",
      name: "Merge PDF",
      desc: "Combine multiple separate PDF files into a single structured document using drag-and-drop ordering.",
      icon: "🧩",
      href: "/merge-pdf",
      color: "#fae8ff",
    },
    {
      id: "edit",
      name: "Edit PDF",
      desc: "Reorder page sequences, rotate page layouts (90°/180°), or delete unwanted sheets visually.",
      icon: "🔀",
      href: "/edit-pdf",
      color: "#fef3c7",
    },
    {
      id: "images-to-pdf",
      name: "Images to PDF",
      desc: "Convert JPG, PNG, and WebP images into a single formatted multi-page PDF document.",
      icon: "🖼️",
      href: "/images-to-pdf",
      color: "#fce7f3",
    },
    {
      id: "pdf-to-jpg",
      name: "PDF to JPG",
      desc: "Render PDF document pages onto high-resolution HTML5 Canvas elements and export JPGs in a ZIP file.",
      icon: "📷",
      href: "/pdf-to-jpg",
      color: "#fef9c3",
    },
  ];

  const faqs = [
    {
      q: "How does the PDF label cropper work?",
      a: "The tool loads your PDF using PDF.js and pdf-lib, applies preset crop coordinates calibrated for each e-commerce marketplace (Flipkart, Amazon, Meesho, Snapdeal, Myntra), and outputs a clean A6 (4x6 inch) PDF formatted for thermal printers.",
    },
    {
      q: "Which tools process files locally in the browser vs on a server?",
      a: "Label Cropping (Flipkart, Amazon, Meesho, Snapdeal, Myntra, Custom Crop) and PDF-to-JPG execute 100% locally in your browser memory via WebAssembly/Canvas. Tools like Compress PDF, Merge PDF, Edit PDF, and Images-to-PDF utilize stateless API routes (/api/...) where files are held temporarily in RAM during processing and immediately purged.",
    },
    {
      q: "Can I process multi-page bulk manifest PDFs?",
      a: "Yes. The batch cropper reads multi-page document trees and maps the specified crop bounding box across all pages simultaneously, generating a consolidated multi-page A6 output file.",
    },
    {
      q: "How do I avoid blurry barcodes when printing thermal labels?",
      a: "In your printer print preview dialog, always set margins to 'None' and scale to 'Actual Size' (100%). Avoid choosing 'Fit to Printable Area' which stretches vector barcodes and reduces scanner read rates.",
    },
    {
      q: "Does the Amazon Label Cropper support SKU extraction?",
      a: "Yes. When uploading Amazon label manifests containing invoice sheets, the tool parses SKU/ASIN text client-side via regular expressions and overlays the SKU info onto the shipping label border so packagers know what item goes in the box.",
    },
    {
      q: "Are password-protected PDF files supported?",
      a: "Password-protected or encrypted PDFs cannot be read until they are decrypted. Please unlock password-protected files before uploading.",
    },
    {
      q: "Is there a file size limit?",
      a: "Browser-based cropping tools support files up to 10 MB per document. General utilities like PDF Merge and Images-to-PDF support files up to 100 MB.",
    },
  ];

  return (
    <Container>
      {/* 1. Hero Section */}
      <HeroSection>
        <HeroContent>
          <Badge>
            <span>🔒 Verified Client & Stateless Architecture</span>
          </Badge>
          <HeroTitle>
            E-Commerce Shipping Label Cropper & PDF Tools
          </HeroTitle>
          <HeroSubtitle>
            Format, crop, and standardize shipping label PDFs from Flipkart, Amazon, Meesho, Snapdeal, and Myntra into thermal printer-ready 4x6" (A6) sticker documents.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton href="/flipkart-label">
              Start Cropping Labels
            </PrimaryButton>
            <SecondaryButton href="#tools-section">
              View All PDF Tools
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* 2. PDF Tools Grid Section */}
      <Section id="tools-section">
        <SectionHeader>
          <SectionTitle>All Available PDF Tools</SectionTitle>
          <SectionSubtitle>
            A complete suite of PDF utility tools built for online sellers, document administrators, and logistics stations.
          </SectionSubtitle>
        </SectionHeader>

        <ToolsGrid>
          {allTools.map((tool) => (
            <ToolCard key={tool.id}>
              <ToolIconHeader>
                <ToolIconBox $color={tool.color}>
                  {tool.icon}
                </ToolIconBox>
                <ToolTitle>{tool.name}</ToolTitle>
              </ToolIconHeader>
              <ToolDesc>{tool.desc}</ToolDesc>
              <CardActionButton href={tool.href}>
                Open Tool →
              </CardActionButton>
            </ToolCard>
          ))}
        </ToolsGrid>
      </Section>

      {/* 3. Real Before & After Comparison */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Before & After Label Cropping Demo</SectionTitle>
          <SectionSubtitle>
            Standard seller portals export A4 manifest sheets with invoice details, return notes, and white space margins. Our cropper extracts exact barcode & shipping address regions for 4x6" thermal sticker printing.
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
              Preset Dimensions (Pt)
            </ToggleTab>
          </DemoControls>

          <DemoWorkspace>
            <DemoBox>
              <DemoBoxTitle>Original Uncropped A4 PDF Sheet</DemoBoxTitle>
              <DemoBoxMeta>Dimensions: 210 x 297 mm (Standard A4 Page)</DemoBoxMeta>
              <A4Paper>
                <TextLine $width="40%" $height="8px" />
                <ShippingLabelOverlay>
                  <TextLine $width="70%" $height="6px" />
                  <TextLine $width="90%" $height="6px" />
                  <BarcodeLines />
                  <TextLine $width="50%" $height="6px" />
                </ShippingLabelOverlay>
                <WastedArea>
                  ❌ Unneeded Tax Invoice & Blank Margins (Wastes 70% Paper)
                </WastedArea>
              </A4Paper>
            </DemoBox>

            <DemoBox>
              <DemoBoxTitle>Cropped Thermal Sticker Output</DemoBoxTitle>
              <DemoBoxMeta>Dimensions: 100 x 150 mm (4x6 Inch / A6)</DemoBoxMeta>
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
            <div style={{ padding: "0 2.25rem 2.25rem" }}>
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

      {/* 4. How to Use Step-by-Step Guide */}
      <Section>
        <SectionHeader>
          <SectionTitle>How to Crop Shipping Label PDFs</SectionTitle>
          <SectionSubtitle>
            A 5-step breakdown of how to process single or multi-page PDF documents.
          </SectionSubtitle>
        </SectionHeader>

        <WorkflowGrid>
          <WorkflowCard>
            <StepBadge>1</StepBadge>
            <StepTitle>Upload PDF File</StepTitle>
            <StepText>
              Drag and drop your PDF file into the upload dropzone or browse your computer/mobile storage (supports up to 10 MB per file).
            </StepText>
          </WorkflowCard>

          <WorkflowCard>
            <StepBadge>2</StepBadge>
            <StepTitle>Select Target Platform / Area</StepTitle>
            <StepText>
              Choose your marketplace preset (Flipkart, Amazon, Meesho, Snapdeal, Myntra) or drag a custom crop rectangle across the page preview.
            </StepText>
          </WorkflowCard>

          <WorkflowCard>
            <StepBadge>3</StepBadge>
            <StepTitle>Apply Crop Coordinates</StepTitle>
            <StepText>
              Click Process/Crop. The engine recalculates PDF MediaBox and CropBox streams across all pages simultaneously.
            </StepText>
          </WorkflowCard>

          <WorkflowCard>
            <StepBadge>4</StepBadge>
            <StepTitle>Preview Results</StepTitle>
            <StepText>
              Inspect rendered page thumbnails in the interactive canvas viewport to confirm barcode clarity and label alignment.
            </StepText>
          </WorkflowCard>

          <WorkflowCard>
            <StepBadge>5</StepBadge>
            <StepTitle>Download Output PDF</StepTitle>
            <StepText>
              Click Download to save the cropped multi-page PDF file ready for instant direct thermal sticker printing.
            </StepText>
          </WorkflowCard>
        </WorkflowGrid>
      </Section>

      {/* 5. Privacy & File Processing Architecture */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Privacy & Technical File Processing Architecture</SectionTitle>
          <SectionSubtitle>
            Honest, verified technical explanation of how document data is handled across different tools.
          </SectionSubtitle>
        </SectionHeader>

        <PrivacyBox>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            How Document Privacy & Security Works:
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: "0.975rem", lineHeight: 1.6 }}>
            Shipping manifests contain sensitive customer addresses and tracking details. We separate operations into two distinct processing models:
          </p>

          <PrivacyGrid>
            <PrivacyCard $highlight={true}>
              <PrivacyTitle $accent="#10b981">
                <span>💻</span> 100% Client-Side Browser Processing
              </PrivacyTitle>
              <PrivacyText>
                <strong>Tools:</strong> Label Croppers (Flipkart, Amazon, Meesho, Snapdeal, Myntra) & PDF to JPG.
                <br /><br />
                All parsing, viewport rendering, and PDF stream modifications execute 100% locally inside your web browser using HTML5 Canvas and `pdf-lib` WebAssembly. <strong>No network bytes leave your computer.</strong>
              </PrivacyText>
            </PrivacyCard>

            <PrivacyCard>
              <PrivacyTitle $accent="#60a5fa">
                <span>⚡</span> Stateless Server API Micro-Services
              </PrivacyTitle>
              <PrivacyText>
                <strong>Tools:</strong> Compress PDF, Merge PDF, Images to PDF, Edit PDF.
                <br /><br />
                Files are processed via dedicated stateless API endpoints (`/api/...`). Incoming payloads are held temporarily in server memory (RAM) strictly for document processing and are <strong>immediately purged</strong>. No files are saved to disk.
              </PrivacyText>
            </PrivacyCard>
          </PrivacyGrid>
        </PrivacyBox>
      </Section>

      {/* 6. Troubleshooting & Common Issues */}
      <Section>
        <SectionHeader>
          <SectionTitle>Common PDF Cropping Issues & Troubleshooting</SectionTitle>
          <SectionSubtitle>
            Solutions for common printer margin errors, barcode scan issues, and file parsing errors.
          </SectionSubtitle>
        </SectionHeader>

        <TroubleshootingGrid>
          <TroubleshootingCard>
            <TroubleTitle>Password-Protected PDFs</TroubleTitle>
            <TroubleText>
              Encrypted or password-protected PDF files cannot be parsed. Decrypt or unlock your PDF using your original document viewer before uploading.
            </TroubleText>
          </TroubleshootingCard>

          <TroubleshootingCard>
            <TroubleTitle>Printer Margin Distortion ("Fit to Page")</TroubleTitle>
            <TroubleText>
              If barcodes print distorted, ensure your printer driver settings are set to "Actual Size" or 100% scale with margins set to "None".
            </TroubleText>
          </TroubleshootingCard>

          <TroubleshootingCard>
            <TroubleTitle>Faint Thermal Barcode Lines</TroubleTitle>
            <TroubleText>
              If courier automated scanners fail to read printed labels, clean your thermal printhead and increase the print density/darkness level in printer preferences.
            </TroubleText>
          </TroubleshootingCard>

          <TroubleshootingCard>
            <TroubleTitle>Scanned Image Raster PDFs</TroubleTitle>
            <TroubleText>
              Cropping scanned paper PDFs rescales bitmap pixels. For highest print quality, use the original vector PDF exports downloaded from seller portals.
            </TroubleText>
          </TroubleshootingCard>
        </TroubleshootingGrid>
      </Section>

      {/* 7. FAQ Section */}
      <Section style={{ background: "#ffffff", borderRadius: "16px", padding: "4rem 2rem" }}>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Answers to key technical questions regarding PDF cropping and utility tools.
          </SectionSubtitle>
        </SectionHeader>

        <FaqContainer>
          {faqs.map((faq, idx) => {
            const isOpen = !!openFaq[idx];
            return (
              <FaqItem key={idx}>
                <FaqQuestion onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: "300" }}>{isOpen ? "−" : "+"}</span>
                </FaqQuestion>
                <FaqAnswer $isOpen={isOpen}>{faq.a}</FaqAnswer>
              </FaqItem>
            );
          })}
        </FaqContainer>
      </Section>

      {/* 8. Quick Internal Links */}
      <Section style={{ textAlign: "center", paddingTop: "2rem" }}>
        <h3 style={{ fontSize: "1.2rem", color: "#1e293b", fontWeight: 700, marginBottom: "0.5rem" }}>
          Explore Additional Learning Resources
        </h3>
        <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
          Check out our tutorials, strategic seller blog guides, and help documentation:
        </p>
        <QuickLinksSection>
          <QuickLinkBtn href="/tutorials">View Tutorials →</QuickLinkBtn>
          <QuickLinkBtn href="/blog">Read E-Commerce Blog →</QuickLinkBtn>
          <QuickLinkBtn href="/faq">Full FAQ Page →</QuickLinkBtn>
          <QuickLinkBtn href="/about">About PDF Cropper →</QuickLinkBtn>
        </QuickLinksSection>
      </Section>
    </Container>
  );
}
