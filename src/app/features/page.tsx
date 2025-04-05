'use client'

import styled from 'styled-components'
import Script from 'next/script'

const Container = styled.div`
  max-width: 1400px;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
  }
`

const AdContainer = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  text-align: center;
`

export default function FeaturesPage() {
    return (
        <Container>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
                crossOrigin="anonymous"
            />

            <HeroSection>
                <Title>Powerful Features for PDF Editing</Title>
                <Description>
                    Discover the comprehensive set of features that make PDF Cropper the ultimate tool for your document editing needs.
                </Description>
            </HeroSection>

            <FeaturesGrid>
                <FeatureCard>
                    <h3>Precision Cropping</h3>
                    <p>Select exact areas of your PDF with pixel-perfect precision. Our intuitive interface makes it easy to get the perfect crop every time.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>High-Quality Output</h3>
                    <p>Maintain the highest quality in your cropped PDFs. Our tool preserves the original resolution and clarity of your documents.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Multi-Page Support</h3>
                    <p>Work with PDFs of any length. Easily navigate between pages and apply consistent cropping across multiple pages.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Batch Processing</h3>
                    <p>Save time by processing multiple PDFs at once. Apply the same crop settings across multiple documents with just a few clicks.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Secure Processing</h3>
                    <p>All processing is done locally in your browser. Your documents never leave your device, ensuring complete privacy and security.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Custom Templates</h3>
                    <p>Save your favorite crop settings as templates for quick reuse. Perfect for regular document processing tasks.</p>
                </FeatureCard>
            </FeaturesGrid>

            <AdContainer>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-YOUR_ADSENSE_ID"
                    data-ad-slot="YOUR_AD_SLOT_ID"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </AdContainer>

            <FeaturesGrid>
                <FeatureCard>
                    <h3>Real-Time Preview</h3>
                    <p>See your changes instantly with our real-time preview feature. No need to wait to see how your cropped PDF will look.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Export Options</h3>
                    <p>Choose from multiple export formats and quality settings. Get your documents exactly how you need them.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Keyboard Shortcuts</h3>
                    <p>Speed up your workflow with intuitive keyboard shortcuts. Work faster and more efficiently with our power user features.</p>
                </FeatureCard>
            </FeaturesGrid>
        </Container>
    )
} 