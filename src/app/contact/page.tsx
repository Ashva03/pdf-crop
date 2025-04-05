'use client'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding-top: 64px; // Height of the navigation bar
`

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`

const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 10;
`

const ContactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  text-align: center;
`

const EmailDisplay = styled.div`
  font-size: 1.5rem;
  color: #4f46e5;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    font-weight: 600;
  }
`

const EmailButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export default function Contact() {
  const email = "ashvainfotech3@gmail.com";

  return (
    <Container>
      <Header>
        <Title>Contact Us</Title>
        <Description>
          Have questions? We&apos;d love to hear from you. Send us an email and we&apos;ll respond as soon as possible.
        </Description>
      </Header>

      <MainContent>
        <ContactCard>
          <EmailDisplay>
            <span>📧</span>
            <span>{email}</span>
          </EmailDisplay>
          <EmailButton href={`mailto:${email}`}>
            Send Email
          </EmailButton>
        </ContactCard>
      </MainContent>
    </Container>
  )
} 