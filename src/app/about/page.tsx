"use client";
import React from "react";
import Head from "next/head";
import styled from "styled-components"; // Import styled-components
// If you have a common layout component, import it here
// import Layout from '../../components/Layout'; // Adjust the path as needed

// --- Styled Components (similar to Terms Page for consistency) ---
const AboutContainer = styled.main`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  line-height: 1.7;
`;

const H1 = styled.h1`
  color: var(--primary-color, #4f46e5);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color, #4f46e5);
  padding-bottom: 0.5rem;
`;

const H2 = styled.h2`
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
  color: #555;
`;
// --- End Styled Components ---

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - PDF Crop</title>
        <meta
          name="description"
          content="Learn more about PDF Crop, our mission, and how we simplify PDF editing."
        />
      </Head>
      {/* Optional: Wrap content in a Layout component if you have one */}
      {/* <Layout> */}
      <AboutContainer>
        {/* Use the styled container */}
        <H1>About PDF Crop</H1>
        <P>
          Welcome to PDF Crop! We are dedicated to providing a simple, fast, and
          efficient online tool for cropping PDF documents without the need for
          complex software installations.
        </P>
        <H2>Our Mission</H2>
        <P>
          Our mission is to make PDF editing accessible and straightforward for
          everyone. We understand that dealing with PDF documents can sometimes
          be cumbersome, especially when you just need to make a quick
          adjustment like cropping. PDF Crop was created to solve this specific
          problem with an intuitive, web-based solution.
        </P>
        <H2>Why PDF Crop?</H2>
        <P>
          In a digital world flooded with documents, being able to quickly
          modify PDFs is essential. Whether you need to remove unwanted margins
          for printing, adjust the layout for presentation, or extract a
          specific area from a page, PDF Crop provides the necessary tool right
          in your browser.
        </P>
        <P>
          We focus on:
          <ul>
            <li>
              <strong>Simplicity:</strong> An easy-to-use interface that
              requires no technical expertise.
            </li>
            <li>
              <strong>Speed:</strong> Fast processing to get your cropped PDFs
              ready in seconds.
            </li>
            <li>
              <strong>Accessibility:</strong> Use our tool from any device with
              an internet connection.
            </li>
            <li>
              <strong>Privacy:</strong> We respect your data. Uploaded files are
              processed securely and are not stored longer than necessary (Refer
              to our Privacy Policy for details).
            </li>
          </ul>
        </P>
        <H2>Who We Are</H2>
        <P>
          PDF Crop is a product of Ashva, a software development company that
          specializes in creating simple, fast, and efficient online tools for
          cropping PDF documents. PDF Crop was developed by Pinal Patoliya,
          Aniket Ramani, Sahil Vasoya, and Varship Pokal — a team passionate
          about creating useful web utilities.
        </P>
        <P>
          We are constantly working to improve PDF Crop and welcome your
          feedback. Our goal is to be the go-to online resource for quick and
          easy PDF cropping.
        </P>
        <P>Thank you for using PDF Crop!</P>
      </AboutContainer>
      {/* </Layout> */}
    </>
  );
};

export default AboutPage;
