'use client'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding-top: 64px; // Height of the navigation bar
`

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 10;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
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
`

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`

const FeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`

const DetailedFeatureSection = styled.section`
  margin-top: 4rem;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`

const DetailedFeature = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FeatureContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #4b5563;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`

const FeatureImageContainer = styled.div<{ $reverse?: boolean }>`
  position: relative;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  order: ${props => props.$reverse ? -1 : 1};
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  svg {
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    order: -1;
  }
`

export default function Features() {
  const features = [
    {
      icon: "✂️",
      title: "Precise Cropping",
      description: "Crop your PDFs with pixel-perfect precision using our advanced selection tools."
    },
    {
      icon: "📋",
      title: "Multiple Templates",
      description: "Choose from a variety of predefined templates or create your own custom settings."
    },
    {
      icon: "🔄",
      title: "Batch Processing",
      description: "Save time by processing multiple PDFs simultaneously with consistent settings."
    },
    {
      icon: "🔒",
      title: "Secure Processing",
      description: "All processing happens in your browser. Your files never leave your device."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Work seamlessly across all devices with our mobile-friendly interface."
    },
    {
      icon: "⚡",
      title: "Fast Processing",
      description: "Get your cropped PDFs instantly with our optimized processing engine."
    }
  ]

  const detailedFeatures = [
    {
      title: "Advanced Cropping Tools",
      description: "Our intelligent cropping tools allow you to select areas with pixel-perfect precision. Use snap-to-content feature for automatic edge detection, or manually adjust your selection with our intuitive controls.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M9 9h6v6H9z" />
          <path d="M8 4v16" />
          <path d="M16 4v16" />
          <path d="M4 8h16" />
          <path d="M4 16h16" />
        </svg>
      )
    },
    {
      title: "Smart Templates",
      description: "Save time with our smart templates system. Create and save custom templates for recurring crop patterns, or choose from our library of pre-built templates designed for common document types.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="6" height="6" />
          <rect x="14" y="4" width="6" height="6" />
          <rect x="4" y="14" width="6" height="6" />
          <rect x="14" y="14" width="6" height="6" />
          <path d="M7 4v16" strokeDasharray="2 2" />
          <path d="M17 4v16" strokeDasharray="2 2" />
          <path d="M4 7h16" strokeDasharray="2 2" />
          <path d="M4 17h16" strokeDasharray="2 2" />
        </svg>
      ),
      reverse: true
    },
    {
      title: "Batch Processing",
      description: "Process multiple PDFs at once with our efficient batch processing system. Apply the same crop settings to hundreds of documents with just a few clicks, saving you valuable time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="6" height="8" />
          <rect x="9" y="3" width="6" height="8" />
          <rect x="15" y="3" width="6" height="8" />
          <rect x="3" y="13" width="6" height="8" />
          <rect x="9" y="13" width="6" height="8" />
          <rect x="15" y="13" width="6" height="8" />
        </svg>
      )
    }
  ]

  return (
    <Container>
      <Header>
        <Title>Powerful Features</Title>
        <Description>
          Discover all the professional tools and features that make PDF Cropper the perfect solution for your document processing needs.
        </Description>
      </Header>

      <MainContent>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <DetailedFeatureSection>
          {detailedFeatures.map((feature, index) => (
            <DetailedFeature key={index}>
              <FeatureContent>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureContent>
              <FeatureImageContainer $reverse={feature.reverse}>
                {feature.icon}
              </FeatureImageContainer>
            </DetailedFeature>
          ))}
        </DetailedFeatureSection>
      </MainContent>
    </Container>
  )
} 