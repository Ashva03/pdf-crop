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

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/hero-pattern.svg') center/cover;
    opacity: 0.1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const PlatformSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlatformCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PlatformIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PlatformTitle = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const PlatformDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #4f46e5;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #4f46e5;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const HowItWorksSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
`;

const StepsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const StepNumber = styled.div`
  background: #4f46e5;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

const TestimonialSection = styled.section`
  background: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Author = styled.p`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

export default function HomePage() {
  return (
    <>
      <HeroSection>
        <HeroTitle>E-commerce Shipping Label Management Made Easy</HeroTitle>
        <HeroSubtitle>
          Optimize your shipping labels for Flipkart, Amazon, Meesho, and Snapdeal with our powerful PDF cropping tool. Save time and ensure compliance with platform requirements.
        </HeroSubtitle>
        <CTAButton href="/flipkart-label">Get Started</CTAButton>
      </HeroSection>

      <PlatformSection>
        <SectionTitle>Supported Platforms</SectionTitle>
        <PlatformGrid>
          <PlatformCard>
            <PlatformIcon>🛍️</PlatformIcon>
            <PlatformTitle>Flipkart Labels</PlatformTitle>
            <PlatformDescription>
              Optimize your Flipkart shipping labels with our specialized cropping tool. Ensure perfect A6 size and clear barcode visibility.
            </PlatformDescription>
            <CTAButton href="/flipkart-label">Process Flipkart Label</CTAButton>
          </PlatformCard>

          <PlatformCard>
            <PlatformIcon>📦</PlatformIcon>
            <PlatformTitle>Amazon Labels</PlatformTitle>
            <PlatformDescription>
              Format your Amazon FBA and FBM labels correctly. Meet all Amazon's shipping label requirements with ease.
            </PlatformDescription>
            <CTAButton href="/amazon-label">Process Amazon Label</CTAButton>
          </PlatformCard>

          <PlatformCard>
            <PlatformIcon>🚚</PlatformIcon>
            <PlatformTitle>Meesho Labels</PlatformTitle>
            <PlatformDescription>
              Streamline your Meesho shipping label management. Ensure all required information is clearly visible.
            </PlatformDescription>
            <CTAButton href="/meesho-label">Process Meesho Label</CTAButton>
          </PlatformCard>

          <PlatformCard>
            <PlatformIcon>📨</PlatformIcon>
            <PlatformTitle>Snapdeal Labels</PlatformTitle>
            <PlatformDescription>
              Optimize your Snapdeal shipping labels for efficient processing and delivery tracking.
            </PlatformDescription>
            <CTAButton href="/snapdeal-label">Process Snapdeal Label</CTAButton>
          </PlatformCard>
        </PlatformGrid>
      </PlatformSection>

      <FeaturesSection>
        <SectionTitle>Why Choose Our Tool</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Fast Processing</FeatureTitle>
            <FeatureDescription>
              Process multiple labels in seconds with our optimized cropping algorithm.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>Platform-Specific</FeatureTitle>
            <FeatureDescription>
              Tailored solutions for each e-commerce platform's unique requirements.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>Secure Processing</FeatureTitle>
            <FeatureDescription>
              All processing is done locally in your browser. Your data never leaves your device.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>💡</FeatureIcon>
            <FeatureTitle>Easy to Use</FeatureTitle>
            <FeatureDescription>
              Simple drag-and-drop interface. No technical knowledge required.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Mobile Friendly</FeatureTitle>
            <FeatureDescription>
              Works seamlessly on all devices, from desktop to mobile.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔄</FeatureIcon>
            <FeatureTitle>Batch Processing</FeatureTitle>
            <FeatureDescription>
              Process multiple labels at once to save time and effort.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <TestimonialSection>
        <SectionTitle>What Our Users Say</SectionTitle>
        <TestimonialGrid>
          <TestimonialCard>
            <Quote>"PDF Cropper has revolutionized our shipping process. It's incredibly fast and ensures all our labels meet platform requirements. A must-have tool for any e-commerce business!"</Quote>
            <Author>Priya Sharma</Author>
            <Role>E-commerce Manager, Delhi</Role>
          </TestimonialCard>
          <TestimonialCard>
            <Quote>"I used to spend hours manually adjusting labels. Now, with PDF Cropper, it takes minutes. The batch processing feature is a lifesaver! Highly recommended."</Quote>
            <Author>Rajesh Kumar</Author>
            <Role>Online Seller, Mumbai</Role>
          </TestimonialCard>
          <TestimonialCard>
            <Quote>"The platform-specific tools are fantastic! We no longer worry about Flipkart or Amazon label rejections. The privacy-first approach is also a huge plus."</Quote>
            <Author>Anjali Singh</Author>
            <Role>Logistics Coordinator, Bengaluru</Role>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>

      <HowItWorksSection>
        <SectionTitle>How It Works</SectionTitle>
        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Upload Your Label</StepTitle>
              <StepDescription>
                Simply drag and drop your shipping label PDF or click to upload. Our tool supports all common PDF formats.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>Select Platform</StepTitle>
              <StepDescription>
                Choose your e-commerce platform (Flipkart, Amazon, Meesho, or Snapdeal) for platform-specific optimization.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Automatic Processing</StepTitle>
              <StepDescription>
                Our tool automatically crops and formats your label according to platform requirements.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Download & Print</StepTitle>
              <StepDescription>
                Download your optimized label and print it directly. Ready for shipping!
              </StepDescription>
            </StepContent>
          </Step>
        </StepsContainer>
      </HowItWorksSection>

      <CTASection>
        <CTATitle>Ready to Optimize Your Shipping Labels?</CTATitle>
        <CTADescription>
          Join thousands of e-commerce sellers who trust our tool for their shipping label management.
        </CTADescription>
        <CTAButton href="/flipkart-label">Start Processing Labels</CTAButton>
      </CTASection>
    </>
  );
}
