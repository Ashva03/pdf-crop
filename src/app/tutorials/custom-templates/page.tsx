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

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
`

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`

const TemplateCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;

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

export default function CustomTemplatesPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Custom Templates</Title>
                <Description>
                    Learn how to create and use custom templates to streamline your PDF cropping workflow.
                </Description>
            </HeroSection>

            <ContentSection>
                <TutorialStep>
                    <h2>Creating Templates</h2>
                    <p>To create a new template:</p>
                    <ul>
                        <li>Set up your desired crop settings</li>
                        <li>Click the "Save as Template" button</li>
                        <li>Give your template a descriptive name</li>
                        <li>Add tags for easy organization</li>
                        <li>Save the template for future use</li>
                    </ul>
                    <img src="/tutorials/create-template.jpg" alt="Creating Templates" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Template Management</h2>
                    <p>Organize and manage your templates effectively:</p>
                    <TemplateGrid>
                        <TemplateCard>
                            <h3>Template Library</h3>
                            <p>Access all your saved templates in one place</p>
                        </TemplateCard>
                        <TemplateCard>
                            <h3>Categories</h3>
                            <p>Organize templates by type or purpose</p>
                        </TemplateCard>
                        <TemplateCard>
                            <h3>Search & Filter</h3>
                            <p>Quickly find the template you need</p>
                        </TemplateCard>
                    </TemplateGrid>
                    <TipBox>
                        <h3>Pro Tip</h3>
                        <p>Use descriptive names and tags to make your templates easy to find later.</p>
                    </TipBox>
                </TutorialStep>

                <TutorialStep>
                    <h2>Using Templates</h2>
                    <p>Apply templates to your PDFs:</p>
                    <ul>
                        <li>Select a template from your library</li>
                        <li>Apply it to your current PDF</li>
                        <li>Make adjustments if needed</li>
                        <li>Save the modified template if desired</li>
                    </ul>
                    <img src="/tutorials/apply-template.jpg" alt="Applying Templates" />
                </TutorialStep>

                <TutorialStep>
                    <h2>Advanced Template Features</h2>
                    <p>Take advantage of these advanced template capabilities:</p>
                    <TemplateGrid>
                        <TemplateCard>
                            <h3>Template Variables</h3>
                            <p>Create dynamic templates with adjustable parameters</p>
                        </TemplateCard>
                        <TemplateCard>
                            <h3>Template Sharing</h3>
                            <p>Share your templates with team members</p>
                        </TemplateCard>
                        <TemplateCard>
                            <h3>Template Import/Export</h3>
                            <p>Transfer templates between devices or users</p>
                        </TemplateCard>
                    </TemplateGrid>
                </TutorialStep>

                <NavigationLinks>
                    <Link href="/tutorials/batch-processing">← Previous: Batch Processing</Link>
                    <Link href="/tutorials/quality-settings">Next: Quality Settings →</Link>
                </NavigationLinks>
            </ContentSection>
        </Container>
    )
} 