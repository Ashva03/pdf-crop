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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
`

const PricingCard = styled.div<{ $featured?: boolean }>`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${props => props.$featured ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px rgba(0, 0, 0, 0.05)'};
  transition: all 0.3s ease;
  border: ${props => props.$featured ? '2px solid #4f46e5' : '1px solid #e5e7eb'};
  transform: ${props => props.$featured ? 'scale(1.05)' : 'none'};
  display: flex;
  flex-direction: column;

  &:hover {
    transform: ${props => props.$featured ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

const PlanContent = styled.div`
  flex: 1;
`

const PlanName = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`

const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #4f46e5;
  margin-bottom: 1.5rem;

  span {
    font-size: 1.25rem;
    font-weight: normal;
    color: #6b7280;
  }
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
`

const Feature = styled.li`
  color: #4b5563;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "✓";
    color: #4f46e5;
    font-weight: bold;
  }
`

const StyledButton = styled.button<{ $primary?: boolean }>`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$primary ? '#4f46e5' : 'transparent'};
  color: ${props => props.$primary ? 'white' : '#4f46e5'};
  border: ${props => props.$primary ? 'none' : '2px solid #4f46e5'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "0",
      period: "month",
      features: [
        "Up to 50 PDF crops per month",
        "Basic templates",
        "Standard support",
        "Single page processing"
      ]
    },
    {
      name: "Pro",
      price: "29",
      period: "month",
      features: [
        "Unlimited PDF crops",
        "Advanced templates",
        "Priority support",
        "Multi-page processing",
        "Batch processing",
        "Custom templates"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      features: [
        "Everything in Pro",
        "API access",
        "24/7 support",
        "Custom integration",
        "Team management",
        "Advanced analytics"
      ]
    }
  ]

  return (
    <Container>
      <Header>
        <Title>Simple, Transparent Pricing</Title>
        <Description>
          Choose the perfect plan for your PDF processing needs
        </Description>
      </Header>

      <MainContent>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index} $featured={plan.featured}>
              <PlanContent>
                <PlanName>{plan.name}</PlanName>
                <Price>
                  ${plan.price}<span>/{plan.period}</span>
                </Price>
                <FeaturesList>
                  {plan.features.map((feature, idx) => (
                    <Feature key={idx}>{feature}</Feature>
                  ))}
                </FeaturesList>
              </PlanContent>
              <StyledButton $primary={plan.featured}>
                {plan.featured ? 'Get Started' : 'Try Free'}
              </StyledButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </MainContent>
    </Container>
  )
} 