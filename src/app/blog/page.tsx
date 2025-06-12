"use client";

import { Metadata } from 'next';
import Link from 'next/link';
import styled from "styled-components";

export const metadata: Metadata = {
  title: 'Blog - PDF Cropper | E-commerce Shipping Label Management',
  description: 'Expert insights, guides, and best practices for e-commerce shipping label management across multiple platforms.',
};

const Container = styled.div`
  min-height: 100vh;
  background: #f2f4f4;
  padding-top: 64px; // Height of the navigation bar
`;

const Header = styled.header`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 10;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  max-width: 800px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogCardTitle = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ReadMore = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to E-commerce Shipping Label Standards',
    excerpt: 'Learn about the specific requirements and best practices for shipping labels across major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
    icon: '📦',
    slug: 'shipping-label-standards'
  },
  {
    id: 2,
    title: 'How to Optimize Your Shipping Workflow',
    excerpt: 'Discover proven strategies to streamline your order fulfillment process, reduce errors, and improve shipping efficiency.',
    icon: '⚡',
    slug: 'shipping-workflow-optimization'
  },
  {
    id: 3,
    title: 'E-commerce Shipping Best Practices 2024',
    excerpt: 'Stay updated with the latest shipping label management techniques and industry standards for successful e-commerce operations.',
    icon: '🚀',
    slug: 'shipping-best-practices-2024'
  },
  {
    id: 4,
    title: 'Understanding Different Shipping Label Formats',
    excerpt: 'A comprehensive guide to various shipping label formats and how to handle them effectively for different e-commerce platforms.',
    icon: '📄',
    slug: 'shipping-label-formats'
  },
  {
    id: 5,
    title: 'Common Shipping Label Mistakes to Avoid',
    excerpt: 'Learn about the most common shipping label errors and how to prevent them to ensure smooth order fulfillment.',
    icon: '⚠️',
    slug: 'shipping-label-mistakes'
  },
  {
    id: 6,
    title: 'Automating Your Shipping Label Process',
    excerpt: 'Explore how automation can help you save time and reduce errors in your shipping label management process.',
    icon: '🤖',
    slug: 'automating-shipping-labels'
  }
];

export default function BlogPage() {
  return (
    <Container>
      <Header>
        <Title>PDF Cropper Blog</Title>
        <Description>
          Expert insights, tips, and guides for managing your PDF documents
          effectively
        </Description>
      </Header>

      <MainContent>
        <BlogContainer>
          <BlogHeader>
            <BlogTitle>E-commerce Shipping Insights</BlogTitle>
            <BlogDescription>
              Expert guides, tips, and best practices for efficient shipping label management
              across multiple e-commerce platforms.
            </BlogDescription>
          </BlogHeader>

          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id}>
                <BlogImage>{post.icon}</BlogImage>
                <BlogContent>
                  <BlogCardTitle>{post.title}</BlogCardTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <ReadMore href={`/blog/${post.slug}`}>
                    Read More →
                  </ReadMore>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </BlogContainer>
      </MainContent>
    </Container>
  );
}
