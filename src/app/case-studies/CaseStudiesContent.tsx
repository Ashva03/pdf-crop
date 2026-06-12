'use client';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CaseStudyCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .company {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .industry {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #e0e7ff;
    color: #4338ca;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .metric {
    text-align: center;

    .value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #4f46e5;
    }

    .label {
      font-size: 0.75rem;
      color: #6b7280;
      margin-top: 0.25rem;
    }
  }
`;

const StatsSection = styled.section`
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;

  .stat {
    .value {
      font-size: 3rem;
      font-weight: 800;
      color: #4f46e5;
      margin-bottom: 0.5rem;
    }

    .label {
      color: #6b7280;
      font-size: 1rem;
    }
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  border-radius: 12px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    background: white;
    color: #4f46e5;
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export default function CaseStudiesContent() {
  return (
    <div style={{ backgroundColor: '#f2f4f4' }}>
      <Container>
        <HeroSection>
          <Title>E-commerce Success Stories</Title>
          <Description>
            Discover how businesses like yours have transformed their operations with our PDF tools and shipping label solutions
          </Description>
        </HeroSection>

        <StatsSection>
          <StatsGrid>
            <div className="stat">
              <div className="value">10,000+</div>
              <div className="label">Active Users</div>
            </div>
            <div className="stat">
              <div className="value">50M+</div>
              <div className="label">Labels Created</div>
            </div>
            <div className="stat">
              <div className="value">95%</div>
              <div className="label">Customer Satisfaction</div>
            </div>
            <div className="stat">
              <div className="value">40%</div>
              <div className="label">Average Time Saved</div>
            </div>
          </StatsGrid>
        </StatsSection>

        <CaseStudiesGrid>
          <CaseStudyCard>
            <div className="company">Fashion Retailer</div>
            <span className="industry">E-commerce Fashion</span>
            <h3>Scaling from 100 to 10,000 Orders Daily</h3>
            <p>
              A growing fashion retailer faced challenges with manual label creation across multiple platforms. By implementing our automated label tools, they reduced processing time by 70% and eliminated label rejection errors.
            </p>
            <p>
              The retailer now processes 10,000 orders daily with a team of 5, compared to 15 previously. Platform compliance improved from 85% to 99.5%.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">70%</div>
                <div className="label">Time Saved</div>
              </div>
              <div className="metric">
                <div className="value">99.5%</div>
                <div className="label">Compliance Rate</div>
              </div>
            </div>
          </CaseStudyCard>

          <CaseStudyCard>
            <div className="company">Electronics Marketplace</div>
            <span className="industry">Consumer Electronics</span>
            <h3>Reducing Shipping Costs by 25%</h3>
            <p>
              An electronics marketplace was struggling with high shipping costs due to inefficient label formatting and carrier selection. Our optimization tools helped them implement dynamic carrier routing and proper label sizing.
            </p>
            <p>
              The result was a 25% reduction in shipping costs and improved delivery times by 2 days on average. Customer satisfaction scores increased by 15 points.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">25%</div>
                <div className="label">Cost Reduction</div>
              </div>
              <div className="metric">
                <div className="value">+15</div>
                <div className="label">CSAT Points</div>
              </div>
            </div>
          </CaseStudyCard>

          <CaseStudyCard>
            <div className="company">Home Decor Brand</div>
            <span className="industry">Home & Living</span>
            <h3>Achieving 99.9% On-Time Delivery</h3>
            <p>
              A home decor brand was experiencing delivery delays due to label errors and carrier rejections. Our platform-specific label tools ensured 100% compliance with all major e-commerce platforms.
            </p>
            <p>
              Within 3 months, they achieved 99.9% on-time delivery and reduced customer complaints by 80%. Return rates dropped from 8% to 3% due to accurate labeling.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">99.9%</div>
                <div className="label">On-Time Delivery</div>
              </div>
              <div className="metric">
                <div className="value">-62%</div>
                <div className="label">Return Rate</div>
              </div>
            </div>
          </CaseStudyCard>

          <CaseStudyCard>
            <div className="company">Multi-Platform Seller</div>
            <span className="industry">Multi-Category Retail</span>
            <h3>Managing 5 Platforms with One Tool</h3>
            <p>
              A seller operating across Flipkart, Amazon, Meesho, Snapdeal, and Myntra was overwhelmed by different label requirements. Our unified platform solution streamlined their entire labeling process.
            </p>
            <p>
              They reduced label creation time from 5 minutes per order to 30 seconds, enabling them to handle 3x more volume without adding staff. Platform-specific compliance is now automated.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">90%</div>
                <div className="label">Time Reduction</div>
              </div>
              <div className="metric">
                <div className="value">3x</div>
                <div className="label">Volume Increase</div>
              </div>
            </div>
          </CaseStudyCard>

          <CaseStudyCard>
            <div className="company">Handmade Crafts Store</div>
            <span className="industry">Arts & Crafts</span>
            <h3>From Manual to Automated Processing</h3>
            <p>
              A handmade crafts store was manually creating labels for 200 daily orders, taking 4-5 hours daily. Our batch processing tools transformed their operations completely.
            </p>
            <p>
              Label processing now takes 30 minutes daily, freeing up 4 hours for business development. The owner expanded to 500 daily orders without hiring additional staff.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">87%</div>
                <div className="label">Time Saved</div>
              </div>
              <div className="metric">
                <div className="value">2.5x</div>
                <div className="label">Order Growth</div>
              </div>
            </div>
          </CaseStudyCard>

          <CaseStudyCard>
            <div className="company">Book Distributor</div>
            <span className="industry">Books & Media</span>
            <h3>Eliminating Label Rejections</h3>
            <p>
              A book distributor faced frequent label rejections from Flipkart and Amazon, causing shipping delays and penalties. Our compliance-focused tools addressed every platform requirement.
            </p>
              <p>
              Label rejections dropped from 15% to less than 0.5%. Monthly penalties were eliminated entirely. The distributor saved ₹50,000 monthly in penalty costs alone.
            </p>
            <div className="metrics">
              <div className="metric">
                <div className="value">97%</div>
                <div className="label">Rejection Reduction</div>
              </div>
              <div className="metric">
                <div className="value">₹50K</div>
                <div className="label">Monthly Savings</div>
              </div>
            </div>
          </CaseStudyCard>
        </CaseStudiesGrid>

        <CTASection>
          <h2>Ready to Transform Your Operations?</h2>
          <p>
            Join thousands of e-commerce businesses who have improved their efficiency with our tools
          </p>
          <a href="/contact">Get Started Today</a>
        </CTASection>
      </Container>
    </div>
  );
}
