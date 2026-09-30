"use client";

import { useState } from "react";
import PDFCropper from "@/components/PDFCropper";
import styled from "styled-components";
import { MyntraIcon } from "@/components/PlatformIcons";
import ToolContentSection from "@/components/ToolContentSection";
import {
  myntraLabelCropDimensions,
  platformConfigs,
  generateLabelCropDimensions,
  CropDimension,
} from "@/config/staticData";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, #ff3f6c 0%, #d11c5a 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(255, 63, 108, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h1 {
    font-size: 2.25rem;
    margin: 0;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    letter-spacing: -0.025em;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    margin: 0;
  }
`;

export default function MyntraLabelClient() {
  const [cropDimensions, setCropDimensions] = useState<
    Record<number, CropDimension>
  >({});

  const handleNumPagesChange = (numPages: number) => {
    const dimensions = generateLabelCropDimensions(
      numPages,
      myntraLabelCropDimensions
    );
    setCropDimensions(dimensions);
  };

  return (
    <PageContainer>
      <PageHeader>
        <h1>
          <MyntraIcon width={36} height={36} />
          Myntra Shipping Label PDF Cropper
        </h1>
        <p>Format Myntra PPMP & Omni labels to standard A6 dimensions instantly.</p>
      </PageHeader>

      <PDFCropper
        platformConfig={platformConfigs.myntra}
        cropDimensions={cropDimensions}
        onNumPagesChange={handleNumPagesChange}
      />

      <ToolContentSection toolId="myntra-label" />
    </PageContainer>
  );
}
