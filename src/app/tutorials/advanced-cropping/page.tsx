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

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`

const FeatureCard = styled.div`
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

export default function AdvancedCroppingPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Advanced Cropping</Title>
                <Description>
                    Master advanced cropping techniques and features in PDF Cropper.
                </Description>
            </HeroSection>

            <ContentSection>
                <TutorialStep>
                    <h2>Advanced Selection Tools</h2>
                    <p>Take advantage of these powerful selection features:</p>
                    <FeatureGrid>
                        <FeatureCard>
                            <h3>Smart Selection</h3>
                            <p>Automatically detect and select document boundaries</p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Custom Shapes</h3>
                            <p>Create non-rectangular crop areas with custom shapes</p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Multiple Selections</h3>
                            <p>Select and crop multiple areas simultaneously</p>
                        </FeatureCard>
                    </FeatureGrid>
                    <img src="/tutorials/advanced-selection.jpg" alt="Advanced Selection Tools" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Precision Controls</h2>
                    <p>Fine-tune your crops with precision controls:</p>
                    <ul>
                        <li>Use the grid overlay for perfect alignment</li>
                        <li>Enable snap-to-grid for precise positioning</li>
                        <li>Set exact dimensions in pixels or inches</li>
                        <li>Use keyboard shortcuts for quick adjustments</li>
                    </ul>
                    <img src="/tutorials/precision-controls.jpg" alt="Precision Controls" />
                    <TipBox>
                        <h3>Pro Tip</h3>
                        <p>Use the Alt key while dragging to temporarily disable snap-to-grid for fine adjustments.</p>
                    </TipBox>
                </TutorialStep>

                <TutorialStep>
                    <h2>Multi-Page Cropping</h2>
                    <p>Handle multi-page documents efficiently:</p>
                    <ul>
                        <li>Apply the same crop to all pages</li>
                        <li>Set different crops for different pages</li>
                        <li>Use page ranges for selective cropping</li>
                        <li>Preview changes across multiple pages</li>
                    </ul>
                    <img src="/tutorials/multi-page-cropping.jpg" alt="Multi-Page Cropping" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Advanced Features</h2>
                    <p>Explore these advanced cropping capabilities:</p>
                    <FeatureGrid>
                        <FeatureCard>
                            <h3>Content-Aware Cropping</h3>
                            <p>Automatically adjust crop to preserve important content</p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Batch Processing</h3>
                            <p>Apply the same crop settings to multiple documents</p>
                        </FeatureCard>
                        <FeatureCard>
                            <h3>Custom Templates</h3>
                            <p>Save and reuse your favorite crop settings</p>
                        </FeatureCard>
                    </FeatureGrid>
                </TutorialStep>

                <NavigationLinks>
                    <Link href="/tutorials/saving-exporting">← Previous: Saving & Exporting</Link>
                    <Link href="/tutorials/batch-processing">Next: Batch Processing →</Link>
                </NavigationLinks>
            </ContentSection>
        </Container>
    )
} 