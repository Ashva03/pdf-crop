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

export default function GettingStartedPage() {
  return (
    <Container>
      <HeroSection>
        <Title>Getting Started</Title>
        <Description>
          Learn how to use PDF Cropper effectively with our step-by-step guide.
        </Description>
      </HeroSection>

      <ContentSection>
        <TutorialStep>
          <h2>Upload Your PDF</h2>
          <p>Start by uploading your PDF file:</p>
          <ul>
            <li>Click the &quot;Upload PDF&quot; button</li>
            <li>Select your PDF file from your device</li>
            <li>Wait for the file to load</li>
          </ul>
          <Image
            src="/tutorials/upload-pdf.jpg"
            alt="Upload PDF"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </TutorialStep>

        <TutorialStep>
          <h2>View Your PDF</h2>
          <p>Once uploaded, you&apos;ll see your PDF displayed:</p>
          <ul>
            <li>Use the page controls to navigate</li>
            <li>Zoom in/out as needed</li>
            <li>Pan around the document</li>
          </ul>
          <Image
            src="/tutorials/view-pdf.jpg"
            alt="View PDF"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </TutorialStep>

        <TutorialStep>
          <h2>Start Cropping</h2>
          <p>Begin the cropping process:</p>
          <ul>
            <li>Click &quot;Select Area to Crop&quot;</li>
            <li>Draw your crop area</li>
            <li>Adjust the selection as needed</li>
          </ul>
          <Image
            src="/tutorials/start-cropping.jpg"
            alt="Start Cropping"
            width={800}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </TutorialStep>

        <NavigationLinks>
          <Link href="/tutorials/interface-overview">← Previous: Interface Overview</Link>
          <Link href="/tutorials/basic-cropping">Next: Basic Cropping →</Link>
        </NavigationLinks>
      </ContentSection>
    </Container>
  )
} 