'use client'

import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 16px;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`

const ContentSection = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`

const Step = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h2 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
`

const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default function GettingStartedPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Getting Started with PDF Cropper</Title>
                <Description>
                    Learn how to use PDF Cropper effectively with this step-by-step guide.
                </Description>
            </HeroSection>

            <ContentSection>
                <Step>
                    <h2>Step 1: Upload Your PDF</h2>
                    <p>Start by uploading your PDF file. You can either drag and drop your file into the upload area or click to browse your files.</p>
                    <img src="/tutorials/upload-step.jpg" alt="Upload PDF" />
                </Step>

                <Step>
                    <h2>Step 2: Select Crop Area</h2>
                    <p>Use the crop tool to select the area you want to keep. You can adjust the size and position of the crop area by dragging the corners or edges.</p>
                    <img src="/tutorials/crop-step.jpg" alt="Select Crop Area" />
                </Step>

                <Step>
                    <h2>Step 3: Preview and Adjust</h2>
                    <p>Preview your cropped PDF and make any necessary adjustments. You can zoom in/out and pan around to ensure you've selected the perfect area.</p>
                    <img src="/tutorials/preview-step.jpg" alt="Preview and Adjust" />
                </Step>

                <Step>
                    <h2>Step 4: Download Your Cropped PDF</h2>
                    <p>Once you're satisfied with the crop, click the download button to save your cropped PDF. You can choose to download as PDF or other supported formats.</p>
                    <img src="/tutorials/download-step.jpg" alt="Download PDF" />
                </Step>

                <NavigationLinks>
                    <Link href="/tutorials">← Back to Tutorials</Link>
                    <Link href="/tutorials/interface-overview">Next: Interface Overview →</Link>
                </NavigationLinks>
            </ContentSection>
        </Container>
    )
} 