// Move metadata to a separate file to avoid client/server component conflict
import { Metadata } from "next";
import Script from "next/script";
import styled from "styled-components";
import Link from "next/link";

const baseUrl = "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/tutorials`;
const pageTitle = "PDF Cropper Tutorials & Guides | Learn How to Use";
const pageDescription =
  "Master PDF Cropper with our step-by-step video tutorials and guides. Learn basic to advanced techniques for cropping, editing, and optimizing your PDF documents.";

// Generate structured data for the tutorials page
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PDF Cropper Tutorials",
    description: pageDescription,
    url: pageUrl,
    itemListElement: [
      {
        "@type": "HowTo",
        name: "Getting Started with PDF Cropper",
        description:
          "Learn the basics of PDF Cropper and how to get started with your first document.",
        url: `${baseUrl}/tutorials/getting-started`,
      },
      {
        "@type": "HowTo",
        name: "Advanced PDF Cropping Techniques",
        description:
          "Master advanced cropping techniques and features to enhance your workflow.",
        url: `${baseUrl}/tutorials/advanced-features`,
      },
      {
        "@type": "HowTo",
        name: "PDF Cropping Best Practices",
        description:
          "Discover tips and tricks for optimal PDF cropping and workflow efficiency.",
        url: `${baseUrl}/tutorials/best-practices`,
      },
    ],
  };
}

// Metadata is now in a separate file

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

const TutorialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TutorialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #4f46e5;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const TutorialLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CategoriesSection = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h2`
  color: #4f46e5;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

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
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    color: #4b5563;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

// Fix broken links by implementing these pages or updating the links
const fixedTutorialLinks = {
  advancedFeatures: "/tutorials#advanced-features",
  bestPractices: "/tutorials#best-practices",
  optimization: "/tutorials#optimization",
  outputFormats: "/tutorials#output-formats",
};

// Mark the component as a client component
("use client");

export default function TutorialsPage() {
  const structuredData = generateStructuredData();

  return (
    <div style={{ backgroundColor: "#f2f4f4" }}>
      <Script
        id="tutorials-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="worker"
      />
      <h1 className="sr-only">PDF Cropper Tutorials & Guides</h1>
      <Container>
        <HeroSection>
          <Title>Video Tutorials & Guides</Title>
          <Description>
            Learn how to use PDF Cropper effectively with our comprehensive
            tutorials and guides.
          </Description>
        </HeroSection>

        <TutorialsGrid>
          <TutorialCard>
            <h2>Getting Started</h2>
            <p>
              Learn the basics of PDF Cropper and how to get started with your
              first document.
            </p>
            <FeatureList>
              <li>Uploading your first PDF</li>
              <li>Basic cropping techniques</li>
              <li>Saving and exporting</li>
              <li>Understanding the interface</li>
            </FeatureList>
            <TutorialLink href="/tutorials/getting-started">
              Start Learning →
            </TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <h2>Advanced Features</h2>
            <p>
              Master advanced cropping techniques and features to enhance your
              workflow.
            </p>
            <FeatureList>
              <li>Batch processing</li>
              <li>Custom templates</li>
              <li>Quality settings</li>
              <li>Advanced cropping tools</li>
            </FeatureList>
            <TutorialLink href={fixedTutorialLinks.advancedFeatures}>
              Explore Features →
            </TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <h2>Best Practices</h2>
            <p>
              Discover tips and tricks for optimal PDF cropping and workflow
              efficiency.
            </p>
            <FeatureList>
              <li>File organization</li>
              <li>Quality optimization</li>
              <li>Workflow automation</li>
              <li>Common issues and solutions</li>
            </FeatureList>
            <TutorialLink href={fixedTutorialLinks.bestPractices}>
              Learn More →
            </TutorialLink>
          </TutorialCard>
        </TutorialsGrid>

        <CategoriesSection>
          <CategoryTitle>Browse by Category</CategoryTitle>
          <CategoryGrid>
            <CategoryCard>
              <h3>Basic Tutorials</h3>
              <p>Essential guides for beginners and new users.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/tutorials/getting-started">
                    Getting Started
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials/interface-overview">
                    Interface Overview
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials/basic-cropping">
                    Basic Cropping
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Advanced Features</h3>
              <p>In-depth guides for power users.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/tutorials/advanced-cropping">
                    Advanced Cropping
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials/batch-processing">
                    Batch Processing
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials/custom-templates">
                    Custom Templates
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Quality & Output</h3>
              <p>Guides for optimizing quality and output settings.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/tutorials#quality-settings">
                    Quality Settings
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href={fixedTutorialLinks.outputFormats}>
                    Output Formats
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href={fixedTutorialLinks.optimization}>
                    Optimization Tips
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>
          </CategoryGrid>
        </CategoriesSection>
      </Container>
    </div>
  );
}
