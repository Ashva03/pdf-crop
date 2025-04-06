'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

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

export default function BasicCroppingPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Basic Cropping</Title>
        <Description>
          Learn the fundamentals of PDF cropping with our easy-to-use tools.
        </Description>
      </HeroSection>

      <ContentSection>
        <TutorialStep>
          <h2>Getting Started</h2>
          <p>Follow these simple steps to crop your PDF:</p>
          <ul>
            <li>Upload your PDF file</li>
            <li>Select the area you want to crop</li>
            <li>Preview your selection</li>
            <li>Download your cropped PDF</li>
          </ul>
          <Image
            src="/tutorials/basic-steps.jpg"
            alt="Basic Cropping Steps"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </TutorialStep>

        <TutorialStep>
          <h2>Selection Tools</h2>
          <p>Use these basic selection tools:</p>
          <ul>
            <li>Rectangle selection for standard crops</li>
            <li>Drag to adjust selection size</li>
            <li>Click and drag to move selection</li>
            <li>Use corner handles to resize</li>
          </ul>
          <Image
            src="/tutorials/selection-tools.jpg"
            alt="Selection Tools"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </TutorialStep>

        <TutorialStep>
          <h2>Tips & Tricks</h2>
          <p>Make the most of basic cropping:</p>
          <ul>
            <li>Hold Shift while dragging for perfect squares</li>
            <li>Use arrow keys for precise adjustments</li>
            <li>Double-click to reset selection</li>
            <li>Use the preview window to check your crop</li>
          </ul>
          <Image
            src="/tutorials/basic-tips.jpg"
            alt="Basic Cropping Tips"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <TipBox>
            <h3>Pro Tip</h3>
            <p>Start with a larger selection and refine it gradually for better results.</p>
          </TipBox>
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/getting-started">← Previous: Getting Started</Link>
          <Link href="/tutorials/advanced-cropping">Next: Advanced Cropping →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  )
} 