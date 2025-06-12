"use client";

import Link from 'next/link';
import styled from "styled-components";

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

const BlogCardContent = styled.div`
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
    excerpt: 'Learn about the shipping label requirements and standards for major e-commerce platforms including Flipkart, Amazon, Meesho, and Snapdeal.',
    icon: '📦',
    slug: 'shipping-label-standards',
  },
  {
    id: 2,
    title: 'E-commerce Shipping Label Best Practices',
    excerpt: 'Discover the best practices for creating and managing shipping labels to improve your e-commerce shipping efficiency and customer satisfaction.',
    icon: '✨',
    slug: 'shipping-label-best-practices',
  },
  {
    id: 3,
    title: 'How to Optimize Your PDF Shipping Labels',
    excerpt: 'Learn how to optimize your PDF shipping labels for better print quality and faster processing.',
    icon: '🔄',
    slug: 'optimize-pdf-labels',
  },
  {
    id: 4,
    title: 'How to Troubleshoot Common Shipping Label Issues for E-commerce',
    excerpt: 'A practical guide to identifying and fixing common shipping label problems for e-commerce sellers to improve delivery rates and customer satisfaction.',
    icon: '🔧',
    slug: 'shipping-label-troubleshooting',
  },
  {
    id: 5,
    title: 'The Impact of Shipping Label Accuracy on Customer Satisfaction',
    excerpt: 'Understanding how precise shipping labels contribute to faster deliveries and a better customer experience.',
    icon: '📈',
    slug: 'shipping-label-accuracy',
  },
  {
    id: 6,
    title: 'Step-by-Step: Automating Shipping Label Creation for Your Store',
    excerpt: 'A guide to integrating automated label solutions into your e-commerce workflow for efficiency.',
    icon: '🤖',
    slug: 'automating-label-creation',
  },
];

export default function BlogContent() {
  return (
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
            <BlogCardContent>
              <BlogCardTitle>{post.title}</BlogCardTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMore href={`/blog/${post.slug}`}>
                Read More →
              </ReadMore>
            </BlogCardContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
} 