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

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const SupportCard = styled.div`
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
`

const SupportLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: #4f46e5;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`

const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #4338ca;
  }
`

const SupportList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin-bottom: 0.75rem;
    color: #4b5563;

    &::before {
      content: "•";
      color: #4f46e5;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`

export default function SupportPage() {
    return (
        <Container>
            <HeroSection>
                <Title>Support Center</Title>
                <Description>
                    We're here to help! Choose from our support options or contact us directly.
                </Description>
            </HeroSection>

            <SupportGrid>
                <SupportCard>
                    <h2>Help Center</h2>
                    <p>Find answers to common questions and learn how to use PDF Cropper effectively.</p>
                    <SupportList>
                        <li><SupportLink href="/faq">FAQ</SupportLink></li>
                        <li><SupportLink href="/tutorials">Video Tutorials</SupportLink></li>
                        <li><SupportLink href="/documentation">User Guides</SupportLink></li>
                        <li><SupportLink href="/tips">Tips & Tricks</SupportLink></li>
                    </SupportList>
                </SupportCard>

                <SupportCard>
                    <h2>Contact Support</h2>
                    <p>Get in touch with our support team for personalized assistance.</p>
                    <SupportList>
                        <li>Email: support@pdfcropper.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Business Hours: Mon-Fri, 9AM-5PM EST</li>
                        <li>Live Chat: Available during business hours</li>
                    </SupportList>
                </SupportCard>

                <SupportCard>
                    <h2>Community</h2>
                    <p>Join our community of users and share your experiences.</p>
                    <SupportList>
                        <li><SupportLink href="/forum">User Forum</SupportLink></li>
                        <li><SupportLink href="/blog">Blog</SupportLink></li>
                        <li><SupportLink href="/social">Social Media</SupportLink></li>
                        <li><SupportLink href="/feedback">Submit Feedback</SupportLink></li>
                    </SupportList>
                </SupportCard>
            </SupportGrid>

            <ContactForm>
                <h2>Contact Us</h2>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="">Select a subject</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing Questions</option>
                        <option value="feature">Feature Request</option>
                        <option value="other">Other</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </FormGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </Container>
    )
} 