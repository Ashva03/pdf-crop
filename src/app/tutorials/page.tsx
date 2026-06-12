"use client";

// Move metadata to a separate file to avoid client/server component conflict
import Script from "next/script";
import styled from "styled-components";
import Link from "next/link";

const baseUrl = "https://pdfcrop.co.in";
const pageUrl = `${baseUrl}/tutorials`;
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
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

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

  .difficulty {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .difficulty-beginner {
    background: #dcfce7;
    color: #166534;
  }

  .difficulty-intermediate {
    background: #fef3c7;
    color: #92400e;
  }

  .difficulty-advanced {
    background: #fee2e2;
    color: #991b1b;
  }

  .duration {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
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
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

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
            <span className="difficulty difficulty-beginner">Beginner</span>
            <div className="duration">⏱️ 10 minutes</div>
            <h2>Getting Started with PDF Cropper</h2>
            <p>
              Learn the basics of PDF Cropper and how to get started with your
              first document. This comprehensive guide covers everything from
              uploading to exporting.
            </p>
            <FeatureList>
              <li>Uploading your first PDF file</li>
              <li>Understanding the user interface</li>
              <li>Basic cropping techniques and tools</li>
              <li>Saving and exporting cropped PDFs</li>
              <li>Common file formats and their uses</li>
            </FeatureList>
            <TutorialLink href="/tutorials/getting-started">
              Start Learning →
            </TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <span className="difficulty difficulty-intermediate">
              Intermediate
            </span>
            <div className="duration">⏱️ 15 minutes</div>
            <h2>Advanced Cropping Techniques</h2>
            <p>
              Master advanced cropping techniques and features to enhance your
              workflow and achieve professional results.
            </p>
            <FeatureList>
              <li>Precision cropping with pixel-perfect accuracy</li>
              <li>Batch processing multiple PDFs simultaneously</li>
              <li>Creating and using custom templates</li>
              <li>Quality settings and optimization</li>
              <li>Advanced cropping tools and shortcuts</li>
            </FeatureList>
            <TutorialLink href={fixedTutorialLinks.advancedFeatures}>
              Explore Features →
            </TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <span className="difficulty difficulty-beginner">Beginner</span>
            <div className="duration">⏱️ 8 minutes</div>
            <h2>Platform-Specific Label Creation</h2>
            <p>
              Learn how to create compliant shipping labels for major e-commerce
              platforms including Flipkart, Amazon, Meesho, and more.
            </p>
            <FeatureList>
              <li>Flipkart label requirements and creation</li>
              <li>Amazon FBA and FBM label formats</li>
              <li>Meesho and Snapdeal label specifications</li>
              <li>Myntra fashion label guidelines</li>
              <li>Platform compliance best practices</li>
            </FeatureList>
            <TutorialLink href="/flipkart-label">Create Labels →</TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <span className="difficulty difficulty-intermediate">
              Intermediate
            </span>
            <div className="duration">⏱️ 12 minutes</div>
            <h2>PDF Conversion Tools</h2>
            <p>
              Explore our comprehensive PDF conversion tools for transforming
              documents between different formats.
            </p>
            <FeatureList>
              <li>Converting images to PDF</li>
              <li>PDF to JPG conversion</li>
              <li>Merging multiple PDFs into one</li>
              <li>Compressing PDFs for file size optimization</li>
              <li>Editing PDF content and structure</li>
            </FeatureList>
            <TutorialLink href="/images-to-pdf">Convert Files →</TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <span className="difficulty difficulty-advanced">Advanced</span>
            <div className="duration">⏱️ 20 minutes</div>
            <h2>Workflow Automation</h2>
            <p>
              Discover tips and tricks for optimal PDF cropping and workflow
              efficiency to save time and increase productivity.
            </p>
            <FeatureList>
              <li>Setting up automated workflows</li>
              <li>File organization and naming conventions</li>
              <li>Quality optimization strategies</li>
              <li>Integration with other tools</li>
              <li>Common issues and troubleshooting</li>
            </FeatureList>
            <TutorialLink href={fixedTutorialLinks.bestPractices}>
              Learn More →
            </TutorialLink>
          </TutorialCard>

          <TutorialCard>
            <span className="difficulty difficulty-beginner">Beginner</span>
            <div className="duration">⏱️ 5 minutes</div>
            <h2>Troubleshooting Common Issues</h2>
            <p>
              Learn how to resolve common PDF cropping issues and get help when
              you need it.
            </p>
            <FeatureList>
              <li>File not uploading correctly</li>
              <li>Cropping tools not responding</li>
              <li>Export quality problems</li>
              <li>Browser compatibility issues</li>
              <li>Getting support and contacting us</li>
            </FeatureList>
            <TutorialLink href="/contact">Get Help →</TutorialLink>
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
                    Getting Started Guide
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/how-it-works">
                    How PDF Cropper Works
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/features">Feature Overview</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/faq">
                    Common Questions Answered
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Platform Labels</h3>
              <p>Guides for creating e-commerce shipping labels.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/flipkart-label">
                    Flipkart Label Guide
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/amazon-label">
                    Amazon Label Guide
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/meesho-label">
                    Meesho Label Guide
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/snapdeal-label">
                    Snapdeal Label Guide
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/myntra-label">
                    Myntra Label Guide
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>PDF Tools</h3>
              <p>Guides for PDF conversion and editing tools.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/images-to-pdf">
                    Images to PDF
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/pdf-to-jpg">PDF to JPG</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/merge-pdf">Merge PDFs</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/compress-pdf">Compress PDF</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/edit-pdf">Edit PDF</TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Advanced Features</h3>
              <p>In-depth guides for power users and automation.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/tutorials#batch-processing">
                    Batch Processing
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials#custom-templates">
                    Custom Templates
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials#quality-settings">
                    Quality Settings
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/tutorials#workflow-automation">
                    Workflow Automation
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>
          </CategoryGrid>
        </CategoriesSection>

        <CategoriesSection style={{ marginTop: "3rem" }}>
          <CategoryTitle>Learning Resources</CategoryTitle>
          <CategoryGrid>
            <CategoryCard>
              <h3>Blog Articles</h3>
              <p>In-depth articles on e-commerce and PDF management.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/blog">View All Blog Posts</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/blog/shipping-label-standards">
                    Shipping Label Standards
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/blog/shipping-cost-optimization">
                    Cost Optimization Guide
                  </TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Documentation</h3>
              <p>Technical documentation and API references.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/documentation">
                    Documentation Home
                  </TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/support">Support Center</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/contact">Contact Support</TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>

            <CategoryCard>
              <h3>Community</h3>
              <p>Connect with other users and get help.</p>
              <FeatureList>
                <li>
                  <TutorialLink href="/contact">Ask a Question</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/faq">FAQ Section</TutorialLink>
                </li>
                <li>
                  <TutorialLink href="/about">About Us</TutorialLink>
                </li>
              </FeatureList>
            </CategoryCard>
          </CategoryGrid>
        </CategoriesSection>
      </Container>
    </div>
  );
}
