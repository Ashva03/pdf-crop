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

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`

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

export default function SavingExportingPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Saving & Exporting</Title>
                <Description>
                    Learn how to save and export your cropped PDFs in different formats.
                </Description>
            </HeroSection>

            <ContentSection>
                <TutorialStep>
                    <h2>Output Formats</h2>
                    <p>PDF Cropper supports multiple output formats. Choose the one that best suits your needs:</p>
                    <FormatGrid>
                        <FormatCard>
                            <h3>PDF</h3>
                            <p>Best for documents, maintains text quality and vector graphics</p>
                        </FormatCard>
                        <FormatCard>
                            <h3>PNG</h3>
                            <p>Ideal for images, supports transparency</p>
                        </FormatCard>
                        <FormatCard>
                            <h3>JPEG</h3>
                            <p>Good for photos, smaller file size</p>
                        </FormatCard>
                    </FormatGrid>
                </TutorialStep>

                <TutorialStep>
                    <h2>Quality Settings</h2>
                    <p>Adjust the quality settings based on your needs:</p>
                    <ul>
                        <li>Resolution: Choose between 72 DPI (web) and 300 DPI (print)</li>
                        <li>Compression: Balance between file size and quality</li>
                        <li>Color Mode: RGB for digital, CMYK for print</li>
                    </ul>
                    <img src="/tutorials/quality-settings.jpg" alt="Quality Settings" />
                    <TipBox>
                        <h3>Pro Tip</h3>
                        <p>For printing, always use 300 DPI and CMYK color mode for best results.</p>
                    </TipBox>
                </TutorialStep>

                <TutorialStep>
                    <h2>Saving Options</h2>
                    <p>You can save your cropped PDF in several ways:</p>
                    <ul>
                        <li>Download directly to your computer</li>
                        <li>Save to cloud storage (Google Drive, Dropbox)</li>
                        <li>Share via email or link</li>
                        <li>Save as a template for future use</li>
                    </ul>
                    <img src="/tutorials/saving-options.jpg" alt="Saving Options" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Batch Processing</h2>
                    <p>When working with multiple files:</p>
                    <ul>
                        <li>Apply the same crop settings to multiple PDFs</li>
                        <li>Save your settings as a preset</li>
                        <li>Export all files at once</li>
                        <li>Organize output files in folders</li>
                    </ul>
                    <img src="/tutorials/batch-processing.jpg" alt="Batch Processing" />
                </TutorialStep>

                <NavigationLinks>
                    <Link href="/tutorials/basic-cropping">← Previous: Basic Cropping</Link>
                    <Link href="/tutorials/advanced-cropping">Next: Advanced Cropping →</Link>
                </NavigationLinks>
            </ContentSection>
        </Container>
    )
} 