"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BookOpen, ArrowRight, Crop, Layers, Sliders, Save, CheckCircle } from "lucide-react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.2);
`;

const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 1.25rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.7;
`;

const TutorialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TutorialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  }

  .badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: #eef2ff;
    color: #4f46e5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .level {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .level-beginner {
    background: #dcfce7;
    color: #166534;
  }

  .level-intermediate {
    background: #fef3c7;
    color: #92400e;
  }

  .level-advanced {
    background: #fee2e2;
    color: #991b1b;
  }

  h2 {
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    color: #475569;
    line-height: 1.65;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #4f46e5;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function TutorialsClient() {
  const tutorials = [
    {
      title: "Getting Started with PDF Cropper",
      description: "Learn how to upload PDFs, select custom crop coordinates, and process your first document.",
      href: "/tutorials/getting-started",
      level: "Beginner",
      levelClass: "level-beginner",
      icon: BookOpen,
    },
    {
      title: "Basic PDF Cropping Techniques",
      description: "Step-by-step guide to adjusting margins, selecting page boundaries, and cropping A4 documents.",
      href: "/tutorials/basic-cropping",
      level: "Beginner",
      levelClass: "level-beginner",
      icon: Crop,
    },
    {
      title: "Batch Processing Multi-Page PDFs",
      description: "Process multi-page PDFs simultaneously. Format entire order batches into standard A6 labels.",
      href: "/tutorials/batch-processing",
      level: "Intermediate",
      levelClass: "level-intermediate",
      icon: Layers,
    },
    {
      title: "Custom Templates & Offset Margins",
      description: "Configure custom offset margins to compensate for thermal printer border cutoffs.",
      href: "/tutorials/custom-templates",
      level: "Intermediate",
      levelClass: "level-intermediate",
      icon: Sliders,
    },
    {
      title: "Interface Overview & Tools Guide",
      description: "Explore the main controls, offset sliders, page selectors, and PDF preview container.",
      href: "/tutorials/interface-overview",
      level: "Beginner",
      levelClass: "level-beginner",
      icon: CheckCircle,
    },
    {
      title: "Quality Settings & Barcode Clarity",
      description: "Ensure vector barcode definitions maintain 300+ DPI sharpness for automated hub scanners.",
      href: "/tutorials/quality-settings",
      level: "Advanced",
      levelClass: "level-advanced",
      icon: Save,
    },
    {
      title: "Saving & Exporting PDF Documents",
      description: "Best practices for saving cropped PDFs and configuring thermal print drivers on Windows and Mac.",
      href: "/tutorials/saving-exporting",
      level: "Beginner",
      levelClass: "level-beginner",
      icon: Save,
    },
  ];

  return (
    <Container>
      <HeroSection>
        <Title>PDF Cropper Guides & Step-by-Step Tutorials</Title>
        <Description>
          Master PDF cropping, thermal label formatting, and document optimization with our comprehensive instructional guides.
        </Description>
      </HeroSection>

      <TutorialsGrid>
        {tutorials.map((tut, idx) => {
          const Icon = tut.icon;
          return (
            <TutorialCard key={idx}>
              <div className="badge-row">
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <span className={`level ${tut.levelClass}`}>{tut.level}</span>
              </div>
              <h2>{tut.title}</h2>
              <p>{tut.description}</p>
              <Link href={tut.href} className="link">
                Read Tutorial Guide <ArrowRight size={16} />
              </Link>
            </TutorialCard>
          );
        })}
      </TutorialsGrid>
    </Container>
  );
}
