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

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .step-number {
    background: #4f46e5;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }

  .step-content {
    flex: 1;

    h3 {
      color: #1f2937;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
    }
  }
`

const AdContainer = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  text-align: center;
`

const TipsSection = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 16px;
`

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const TipCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h4 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
  }
`

export default function HowItWorksPage() {
    return (
        <Container>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
                crossOrigin="anonymous"
            />

            <HeroSection>
                <Title>How PDF Cropper Works</Title>
                <Description>
                    Learn how to use our powerful PDF cropping tool in just a few simple steps. Get started with your document editing today.
                </Description>
            </HeroSection>

            <StepsContainer>
                <Step>
                    <div className="step-number">1</div>
                    <div className="step-content">
                        <h3>Upload Your PDF</h3>
                        <p>Start by uploading your PDF file. Our tool supports all standard PDF formats, including scanned documents and multi-page files. Simply drag and drop your file or click to browse.</p>
                    </div>
                </Step>

                <Step>
                    <div className="step-number">2</div>
                    <div className="step-content">
                        <h3>Select Crop Area</h3>
                        <p>Use our intuitive interface to draw the exact area you want to crop. The real-time preview helps you see exactly how your cropped PDF will look before processing.</p>
                    </div>
                </Step>

                <Step>
                    <div className="step-number">3</div>
                    <div className="step-content">
                        <h3>Adjust Settings</h3>
                        <p>Fine-tune your crop with our advanced settings. Choose your preferred output format, quality settings, and more to get exactly what you need.</p>
                    </div>
                </Step>

                <Step>
                    <div className="step-number">4</div>
                    <div className="step-content">
                        <h3>Download Your PDF</h3>
                        <p>Once you're satisfied with your crop, click the download button to get your perfectly cropped PDF. Your document is ready to use immediately.</p>
                    </div>
                </Step>
            </StepsContainer>

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

            <TipsSection>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#1f2937' }}>
                    Pro Tips for Better Results
                </h2>
                <TipsGrid>
                    <TipCard>
                        <h4>Use High-Resolution PDFs</h4>
                        <p>For the best results, start with high-quality PDFs. This ensures your cropped documents maintain their clarity and detail.</p>
                    </TipCard>
                    <TipCard>
                        <h4>Save Your Settings</h4>
                        <p>Create templates of your favorite crop settings to save time on future projects. Perfect for regular document processing tasks.</p>
                    </TipCard>
                    <TipCard>
                        <h4>Batch Processing</h4>
                        <p>Save time by processing multiple PDFs at once. Apply the same crop settings across multiple documents with just a few clicks.</p>
                    </TipCard>
                </TipsGrid>
            </TipsSection>
        </Container>
    )
} 