"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { toolInfoRegistry } from "@/content/tool-info";

const Container = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #374151;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.h2`
  font-size: 2rem;
  color: #1f2937;
  font-weight: 800;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #111827;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const List = styled.ol`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.7;
`;

const TipBox = styled.div`
  background: #fdf2f8;
  border-left: 4px solid #db2777;
  padding: 1.25rem;
  border-radius: 0 10px 10px 0;
  margin: 1.5rem 0;
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 0;
`;

const FaqQuestion = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  margin-top: ${(props) => (props.$isOpen ? "0.75rem" : "0")};
  line-height: 1.7;
  color: #4b5563;
  font-size: 0.975rem;
`;

const RelatedGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const RelatedLink = styled(Link)`
  background: #f3f4f6;
  color: #4f46e5;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
    color: white;
  }
`;

interface ToolContentSectionProps {
  toolId: string;
}

export default function ToolContentSection({ toolId }: ToolContentSectionProps) {
  const data = toolInfoRegistry[toolId];
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  if (!data) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Structured Data (FAQ Schema)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Structured Data (Breadcrumb Schema)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pdfcrop.co.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": data.title,
        "item": `https://pdfcrop.co.in/${toolId}`,
      },
    ],
  };

  return (
    <Container>
      {/* Dynamic script injection for FAQ and Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Extended Intro */}
      <Section>
        <HeaderTitle>About {data.title}</HeaderTitle>
        <Paragraph>{data.extendedIntro}</Paragraph>
      </Section>

      {/* 2. When to Use */}
      <Section>
        <HeaderTitle>When Should You Use This Tool?</HeaderTitle>
        <Paragraph>{data.whenToUse}</Paragraph>
      </Section>

      {/* 3. Key Benefits */}
      <Section>
        <HeaderTitle>Benefits of Using Our Tool</HeaderTitle>
        <Grid>
          {data.benefits.map((benefit, idx) => (
            <Card key={idx}>
              <CardTitle>{benefit.title}</CardTitle>
              <Paragraph style={{ margin: 0, fontSize: "0.95rem" }}>
                {benefit.description}
              </Paragraph>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* 4. Step-by-Step Instructions */}
      <Section>
        <HeaderTitle>How to Use {data.title}</HeaderTitle>
        <List>
          {data.steps.map((step, idx) => (
            <ListItem key={idx}>
              <strong>{step.title}:</strong> {step.description}
            </ListItem>
          ))}
        </List>
      </Section>

      {/* 5. Tips & Best Practices */}
      <Section>
        <HeaderTitle>Tips & Best Practices</HeaderTitle>
        <TipBox>
          <strong style={{ display: "block", marginBottom: "0.5rem", color: "#9d174d" }}>
            Pro Tips for Online Sellers:
          </strong>
          <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
            {data.tips.map((tip, idx) => (
              <li key={idx} style={{ marginBottom: "0.5rem", color: "#be185d", fontSize: "0.95rem" }}>
                {tip}
              </li>
            ))}
          </ul>
        </TipBox>
      </Section>

      {/* 6. FAQ Accordion */}
      <Section>
        <HeaderTitle>Frequently Asked Questions</HeaderTitle>
        <div style={{ marginTop: "1rem" }}>
          {data.faqs.map((faq, idx) => {
            const isOpen = !!openFaqs[idx];
            return (
              <FaqItem key={idx}>
                <FaqQuestion onClick={() => toggleFaq(idx)}>
                  <span>{faq.question}</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: "300" }}>{isOpen ? "−" : "+"}</span>
                </FaqQuestion>
                <FaqAnswer $isOpen={isOpen}>{faq.answer}</FaqAnswer>
              </FaqItem>
            );
          })}
        </div>
      </Section>

      {/* 7. Related Tools */}
      <Section style={{ borderTop: "1px solid #e5e7eb", paddingTop: "2rem" }}>
        <HeaderTitle style={{ border: "none", marginBottom: "0.5rem" }}>Related PDF Utilities</HeaderTitle>
        <Paragraph style={{ fontSize: "0.95rem", margin: 0 }}>
          Explore our other browser-side utilities built to simplify document administration:
        </Paragraph>
        <RelatedGrid>
          {data.relatedTools.map((link, idx) => (
            <RelatedLink key={idx} href={link.href}>
              {link.title}
            </RelatedLink>
          ))}
        </RelatedGrid>
      </Section>
    </Container>
  );
}
