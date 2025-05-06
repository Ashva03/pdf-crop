"use client";

import Link from "next/link";
import styled from "styled-components";

// Initialize PDF.js worker - remove this since we're not using it
// if (typeof window !== 'undefined') {
//   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// }

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding-top: 64px; // Height of the navigation bar
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 72px;
  width: 100%;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/pattern-bg.svg'); 
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeroSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const PlatformsSection = styled.section`
  padding: 3rem 2rem;
  background: #fff;
  
  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    color: #1f2937;
    font-size: 2.25rem;
    font-weight: 700;
  }
`;

const PlatformGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PlatformCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #f0f0f0;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .platform-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .platform-content {
    padding: 1.5rem;
    flex: 1;
  }
  
  h3 {
    color: #1f2937;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  p {
    color: #6b7280;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  .platform-link {
    display: inline-block;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    margin-top: auto;
    transition: all 0.2s ease;
    
    &:hover {
      background: linear-gradient(135deg, #4338ca 0%, #6d28d9 100%);
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
  
  h2 {
    color: #1f2937 !important;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.25rem;
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 449px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
    color: #4f46e5;
  }

  h3 {
    color: #1f2937;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
  }
`;

const HowItWorks = styled.section`
  padding: 5rem 0;
  background: #ffffff;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #1f2937;
    font-size: 2.25rem;
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const StepsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .step-number {
    background: #4f46e5;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .step-content {
    flex: 1;

    h3 {
      color: #1f2937;
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    background: #e5e7eb;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #4f46e5;
  border: 2px solid #4f46e5;
  
  &:hover {
    background: #f5f5ff;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  margin-top: 3rem;
  
  h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .cta-button {
    background: white;
    color: #4f46e5;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: #f8fafc;
      transform: translateY(-2px);
    }
  }
  
  .cta-button-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export default function HomePage() {
    return (
        <Container>
            <Header>
                <HeroSection>
                    <Title>PDF Label Cropping Made Simple</Title>
                    <Description>
                        Easily crop shipping labels from PDF files for Flipkart, Meesho, Amazon,
                        and more. Save time with our fast, accurate online tool designed for e-commerce sellers.
                    </Description>
                    <div>
                        <Link href="/flipkart-label" passHref>
                            <Button as="a">Get Started</Button>
                        </Link>
                        <Link href="/features" passHref>
                            <SecondaryButton as="a">Learn More</SecondaryButton>
                        </Link>
                    </div>
                </HeroSection>
            </Header>

            <MainContent>
                <PlatformsSection>
                    <h2>Platform Labels</h2>
                    <PlatformGrid>
                        <PlatformCard>
                            <div className="platform-content">
                                <svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#2874F0" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" />
                                    <path fill="#FFF" d="M27 19h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-1 8h-4v-6h4v6z" />
                                    <path fill="#FFF" d="M19 19h-3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-1 8h-1v-6h1v6zM32 19h-3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm-1 8h-1v-6h1v6z" />
                                </svg>
                                <h3>Flipkart Label</h3>
                                <p>Crop Flipkart PDF shipping labels from A4 to A6 size. Ideal for shipping and logistics management.</p>
                                <Link href="/flipkart-label" className="platform-link">
                                    Use Tool
                                </Link>
                            </div>
                        </PlatformCard>

                        <PlatformCard>
                            <div className="platform-content">
                                <svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#f43397" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" />
                                    <path fill="#FFF" d="M32 21h-4v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2h-4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V23c0-1.1-.9-2-2-2zm-10-2c0-1.1.9-2 2-2s2 .9 2 2v2h-4v-2zm8 12H18v-6h12v6z" />
                                </svg>
                                <h3>Meesho Label</h3>
                                <p>Process Meesho shipping labels quickly and easily. Get properly formatted labels for efficient shipping.</p>
                                <Link href="/meesho-label" className="platform-link">
                                    Use Tool
                                </Link>
                            </div>
                        </PlatformCard>

                        <PlatformCard>
                            <div className="platform-content">
                                <svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#FFB300" d="M13.992 40h26.016C42.207 40 44 38.207 44 35.992V13H4v22.992A4.004 4.004 0 0 0 8.008 40h5.984z" />
                                    <path fill="#FFD54F" d="M4 13h40V8.008A4.004 4.004 0 0 0 39.992 4H8.008A4.004 4.004 0 0 0 4 8.008V13z" />
                                    <path fill="#FFF" d="M34 28.875c-3.383 0-5.973-1.18-8.695-2.434C22.582 24.887 19.13 23 14 23c-1.657 0-3 1.343-3 3s1.343 3 3 3c3.477 0 5.918 1.242 8.66 2.578C25.332 33.2 28.695 35 34 35c1.657 0 3-1.343 3-3s-1.343-3.125-3-3.125z" />
                                </svg>
                                <h3>Amazon Label</h3>
                                <p>Process Amazon FBA/FBM shipping labels with SKU extraction. Print SKU information directly on labels.</p>
                                <Link href="/amazon-label" className="platform-link">
                                    Use Tool
                                </Link>
                            </div>
                        </PlatformCard>

                        <PlatformCard>
                            <div className="platform-content">
                                <svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#e40046" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" />
                                    <path fill="#FFF" d="M33 17H15c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V19c0-1.1-.9-2-2-2zm-9 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                                </svg>
                                <h3>Snapdeal Label</h3>
                                <p>Format Snapdeal shipping labels to the correct dimensions. Streamline your shipping process.</p>
                                <Link href="/snapdeal-label" className="platform-link">
                                    Use Tool
                                </Link>
                            </div>
                        </PlatformCard>
                    </PlatformGrid>
                </PlatformsSection>

                <FeaturesSection>
                    <h2>Why Use Our Tools</h2>
                    <FeaturesGrid>
                        <FeatureCard>
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3>Fast Processing</h3>
                            <p>Our tools process PDF files in seconds, saving you valuable time during your shipping workflow.</p>
                        </FeatureCard>

                        <FeatureCard>
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <h3>Secure & Private</h3>
                            <p>All processing happens in your browser. Your files are never uploaded to our servers.</p>
                        </FeatureCard>

                        <FeatureCard>
                            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3>Platform Optimized</h3>
                            <p>Our tools are specifically designed for each e-commerce platform's label requirements.</p>
                        </FeatureCard>
                    </FeaturesGrid>
                </FeaturesSection>

                <HowItWorks>
                    <h2>How It Works</h2>
                    <StepsContainer>
                        <Step>
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Choose Your Platform</h3>
                                <p>Select the e-commerce platform you need labels for – Flipkart, Meesho, Amazon, or Snapdeal.</p>
                            </div>
                        </Step>

                        <Step>
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Upload Your PDF</h3>
                                <p>Upload the label PDF file you downloaded from your seller platform.</p>
                            </div>
                        </Step>

                        <Step>
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Choose Options</h3>
                                <p>Select the processing options based on your needs (crop size, SKU information, etc.).</p>
                            </div>
                        </Step>

                        <Step>
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Process & Download</h3>
                                <p>Process the file and download or print your perfectly formatted shipping labels.</p>
                            </div>
                        </Step>
                    </StepsContainer>
                </HowItWorks>

                <CTASection>
                    <h2>Ready to Streamline Your Shipping Process?</h2>
                    <p>Join thousands of sellers who use our tools to save time and improve their shipping workflow.</p>
                    <div className="cta-buttons">
                        <Link href="/flipkart-label" className="cta-button">
                            Get Started Now
                        </Link>
                        <Link href="/features" className="cta-button cta-button-secondary">
                            Learn More
                        </Link>
                    </div>
                </CTASection>
            </MainContent>
        </Container>
    );
}
