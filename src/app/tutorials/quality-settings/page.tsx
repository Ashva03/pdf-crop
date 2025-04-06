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
`

const SettingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`

const SettingCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    color: #4b5563;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
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

export default function QualitySettingsPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Quality Settings</Title>
        <Description>
          Learn how to optimize your PDF quality settings for different use cases.
        </Description>
      </HeroSection>

      <ContentSection>
        <TutorialStep>
          <h2>Resolution Settings</h2>
          <p>Choose the right resolution for your needs:</p>
          <SettingGrid>
            <SettingCard>
              <h3>Web (72 DPI)</h3>
              <p>Ideal for online viewing and sharing. Perfect for websites, email attachments, and digital documents.</p>
            </SettingCard>
            <SettingCard>
              <h3>Print (300 DPI)</h3>
              <p>Best for professional printing. Ensures crisp text and high-quality images in printed documents.</p>
            </SettingCard>
            <SettingCard>
              <h3>Custom DPI</h3>
              <p>Set your own resolution value for specific requirements. Great for specialized use cases.</p>
            </SettingCard>
          </SettingGrid>
        </TutorialStep>

        <TutorialStep>
          <h2>Compression Options</h2>
          <p>Balance between file size and quality with these compression options:</p>
          <FeatureList>
            <li>Lossless compression for maximum quality - preserves all original data</li>
            <li>Lossy compression for smaller file sizes - reduces file size while maintaining acceptable quality</li>
            <li>Custom compression settings - fine-tune compression levels to your needs</li>
            <li>Preview compression effects - see the impact before applying</li>
          </FeatureList>
          <TipBox>
            <h3>Pro Tip</h3>
            <p>Use lossless compression for text documents and lossy compression for image-heavy PDFs to optimize file size while maintaining quality.</p>
          </TipBox>
        </TutorialStep>

        <TutorialStep>
          <h2>Color Settings</h2>
          <p>Configure color settings for optimal output:</p>
          <SettingGrid>
            <SettingCard>
              <h3>RGB Mode</h3>
              <p>Best for digital viewing and web use. Ensures accurate colors on screens and digital displays.</p>
            </SettingCard>
            <SettingCard>
              <h3>CMYK Mode</h3>
              <p>Required for professional printing. Matches the color space used in commercial printing.</p>
            </SettingCard>
            <SettingCard>
              <h3>Grayscale</h3>
              <p>Convert to black and white. Perfect for documents that don't require color.</p>
            </SettingCard>
          </SettingGrid>
        </TutorialStep>

        <TutorialStep>
          <h2>Advanced Quality Controls</h2>
          <p>Fine-tune your output with these advanced settings:</p>
          <FeatureList>
            <li>Image quality adjustment - control the quality of embedded images</li>
            <li>Text sharpening - enhance text clarity and readability</li>
            <li>Color profile management - ensure accurate color reproduction</li>
            <li>Metadata preservation - maintain document properties and information</li>
          </FeatureList>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/custom-templates">← Previous: Custom Templates</Link>
          <Link href="/tutorials/document-scanning">Next: Document Scanning →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  )
} 