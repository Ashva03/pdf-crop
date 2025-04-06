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

const TutorialStep = styled.div`
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

const TipBox = styled.div`
  background: #f0f9ff;
  border-left: 4px solid #4f46e5;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;

  h3 {
    color: #4f46e5;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #4b5563;
    margin: 0;
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

export default function BasicCroppingPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Basic Cropping</Title>
                <Description>
                    Learn the fundamentals of cropping PDFs with PDF Cropper.
                </Description>
            </HeroSection>

            <ContentSection>
                <TutorialStep>
                    <h2>Selecting the Crop Area</h2>
                    <p>To start cropping your PDF, click and drag on the preview area to create a crop rectangle. You can adjust the size and position of the crop area by:</p>
                    <ul>
                        <li>Dragging the corners to resize proportionally</li>
                        <li>Dragging the edges to resize in one direction</li>
                        <li>Clicking and dragging inside the crop area to move it</li>
                    </ul>
                    <img src="/tutorials/select-crop-area.jpg" alt="Selecting Crop Area" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Fine-Tuning the Crop</h2>
                    <p>Use the following tools to precisely adjust your crop:</p>
                    <ul>
                        <li>Zoom in/out to get a closer look at the edges</li>
                        <li>Use the arrow keys for pixel-perfect adjustments</li>
                        <li>Enable the grid overlay for better alignment</li>
                    </ul>
                    <img src="/tutorials/fine-tune-crop.jpg" alt="Fine-Tuning Crop" />
                    <TipBox>
                        <h3>Pro Tip</h3>
                        <p>Hold the Shift key while dragging to maintain the aspect ratio of your crop area.</p>
                    </TipBox>
                </TutorialStep>

                <TutorialStep>
                    <h2>Previewing Your Crop</h2>
                    <p>Before finalizing your crop, you can:</p>
                    <ul>
                        <li>Toggle between the original and cropped view</li>
                        <li>Check how the crop looks on different pages</li>
                        <li>Use the preview mode to see the final result</li>
                    </ul>
                    <img src="/tutorials/preview-crop.jpg" alt="Previewing Crop" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Saving Your Crop</h2>
                    <p>When you're satisfied with your crop:</p>
                    <ul>
                        <li>Click the "Apply Crop" button to confirm</li>
                        <li>Choose your desired output format (PDF, PNG, JPEG)</li>
                        <li>Set the quality and resolution settings</li>
                        <li>Click "Download" to save your cropped file</li>
                    </ul>
                    <img src="/tutorials/save-crop.jpg" alt="Saving Crop" />
                </TutorialStep>

                <NavigationLinks>
                    <Link href="/tutorials/interface-overview">← Previous: Interface Overview</Link>
                    <Link href="/tutorials/saving-exporting">Next: Saving & Exporting →</Link>
                </NavigationLinks>
            </ContentSection>
        </Container>
    )
} 