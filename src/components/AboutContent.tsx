"use client";

import styled from "styled-components";
import Link from "next/link";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const AboutContentStyled = styled.div`
  color: #374151;
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    color: #1f2937;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.75rem;
    }
  }
`;

export default function AboutContent() {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About Us</AboutTitle>
      </AboutHeader>
      <AboutContentStyled>
        <p>
          <strong>PDF Cropper</strong> was founded to solve a real problem for
          e-commerce sellers: making shipping label management fast, accurate,
          and stress-free. Our mission is to empower sellers with easy-to-use
          tools that save time, reduce errors, and improve delivery rates.
        </p>

        <h2>Our Story</h2>
        <p>
          We noticed that many sellers struggled with label formatting,
          platform-specific requirements, and wasted time on manual cropping.
          PDF Cropper was built to automate and simplify this process, so you
          can focus on growing your business.
        </p>
        <p>
          Starting as a solution for our own e-commerce operations, we quickly
          realized that thousands of sellers face the same challenges. Each
          e-commerce platform has unique label requirements - different sizes,
          barcode placements, and formatting standards. Manually adjusting
          labels for each platform was time-consuming and error-prone.
        </p>
        <p>
          That's when we decided to create PDF Cropper - a comprehensive tool
          that understands the nuances of each platform and automatically
          formats labels correctly. Today, we serve thousands of sellers across
          India and beyond, helping them streamline their shipping operations.
        </p>
        <p>
          Our journey began in 2024 when our founder, an experienced e-commerce
          seller himself, faced repeated rejections from shipping carriers due
          to improperly formatted labels. After countless hours of manual
          adjustments and missed delivery deadlines, he knew there had to be a
          better way. What started as a simple script to automate Flipkart label
          cropping has evolved into a comprehensive platform supporting multiple
          e-commerce marketplaces.
        </p>
        <p>
          We've grown from a one-person operation to a dedicated team of
          developers, designers, and e-commerce experts who understand the
          challenges sellers face daily. Our team brings together diverse
          experience from leading e-commerce companies, logistics firms, and
          software development to create tools that genuinely solve real-world
          problems.
        </p>

        <h2>What Makes Us Unique?</h2>
        <ul>
          <li>
            <strong>Platform-Specific Solutions:</strong> We offer dedicated
            tools for Flipkart, Amazon, Meesho, Snapdeal, and Myntra, each
            optimized for that platform's specific requirements.
          </li>
          <li>
            <strong>Batch Processing:</strong> Process hundreds of labels
            simultaneously, saving hours of manual work.
          </li>
          <li>
            <strong>Privacy-First Approach:</strong> All processing happens
            locally in your browser. Your files never leave your device,
            ensuring complete privacy and security.
          </li>
          <li>
            <strong>100% Free:</strong> We believe in providing value without
            barriers. Our tools are completely free with no hidden fees or
            premium tiers.
          </li>
          <li>
            <strong>User-Driven Development:</strong> We continuously update our
            tools based on real user feedback and changing platform
            requirements.
          </li>
          <li>
            <strong>Comprehensive PDF Tools:</strong> Beyond label cropping, we
            offer PDF conversion, merging, compression, and editing tools to
            meet all your document needs.
          </li>
        </ul>

        <h2>Our Values</h2>
        <p>At PDF Cropper, we're guided by a few core principles:</p>
        <ul>
          <li>
            <strong>Simplicity:</strong> We believe powerful tools should be
            easy to use. No technical knowledge required.
          </li>
          <li>
            <strong>Reliability:</strong> Your shipping labels are critical to
            your business. We ensure our tools are accurate and dependable.
          </li>
          <li>
            <strong>Innovation:</strong> We stay ahead of platform changes and
            continuously improve our tools.
          </li>
          <li>
            <strong>Accessibility:</strong> Our tools work on any device -
            desktop, tablet, or mobile - so you can process labels anywhere.
          </li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower e-commerce sellers with tools that simplify
          their daily operations. We believe that technology should remove
          barriers, not create them. By automating tedious tasks like label
          formatting, we free up your time to focus on what truly matters -
          growing your business, serving your customers, and expanding your
          product offerings.
        </p>
        <p>
          We're committed to making professional-grade PDF tools accessible to
          everyone, regardless of their technical expertise or budget. Every
          seller deserves access to tools that help them compete effectively in
          the marketplace.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where every e-commerce seller, regardless of size
          or location, has access to powerful, easy-to-use tools that level the
          playing field. We aim to become the go-to platform for PDF management
          in the e-commerce industry, continuously expanding our offerings to
          meet the evolving needs of online sellers.
        </p>
        <p>
          Our long-term vision includes supporting more e-commerce platforms
          globally, adding advanced features like automated quality checks,
          integration with popular shipping carriers, and providing analytics to
          help sellers optimize their shipping operations.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team consists of passionate individuals who bring diverse
          expertise to the table:
        </p>
        <ul>
          <li>
            <strong>Development Team:</strong> Experienced software engineers
            specializing in web technologies, PDF processing, and user interface
            design.
          </li>
          <li>
            <strong>E-commerce Experts:</strong> Former sellers and logistics
            professionals who understand the real-world challenges of online
            retail.
          </li>
          <li>
            <strong>Customer Support:</strong> Dedicated support staff ready to
            help you with any questions or issues.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Rigorous testing ensures our
            tools work flawlessly across all platforms and devices.
          </li>
        </ul>

        <h2>Who We Serve</h2>
        <p>PDF Cropper is designed for:</p>
        <ul>
          <li>E-commerce sellers managing multiple platforms</li>
          <li>Logistics coordinators handling high-volume shipments</li>
          <li>Small businesses looking to streamline operations</li>
          <li>Anyone who needs reliable PDF cropping and editing tools</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          We are committed to providing the best possible experience for
          e-commerce sellers. Our team works tirelessly to ensure our tools are
          up-to-date with the latest platform requirements and user needs.
        </p>
        <p>
          If you have feedback, suggestions, or encounter any issues, please
          don't hesitate to{" "}
          <Link
            href="/contact"
            style={{
              color: "#4f46e5",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            contact us
          </Link>
          . We're here to help and always appreciate hearing from our users!
        </p>
        <p>
          Thank you for choosing PDF Cropper. We're honored to be part of your
          e-commerce journey.
        </p>
      </AboutContentStyled>
    </AboutContainer>
  );
}
