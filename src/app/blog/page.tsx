"use client";

import styled from "styled-components";

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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: auto;
`;

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding E-commerce Shipping Label Standards",
      excerpt: "Learn about the different shipping label formats used by major e-commerce platforms and how to ensure compliance with their requirements.",
      date: "March 15, 2024",
      readTime: "8 min read",
      icon: "📦"
    },
    {
      title: "Optimizing Your Shipping Workflow: A Complete Guide",
      excerpt: "Discover proven strategies to streamline your order fulfillment process, from label printing to package preparation.",
      date: "March 10, 2024",
      readTime: "10 min read",
      icon: "⚡"
    },
    {
      title: "PDF Management Best Practices for E-commerce Sellers",
      excerpt: "Essential tips for organizing and managing shipping documents, invoices, and labels efficiently.",
      date: "March 5, 2024",
      readTime: "6 min read",
      icon: "📄"
    },
    {
      title: "Common Shipping Label Mistakes and How to Avoid Them",
      excerpt: "Learn about frequent errors in shipping label preparation and how to prevent them to ensure smooth delivery.",
      date: "February 28, 2024",
      readTime: "7 min read",
      icon: "⚠️"
    },
    {
      title: "The Impact of Proper Label Formatting on Delivery Success",
      excerpt: "How correctly formatted shipping labels can improve delivery rates and reduce shipping-related issues.",
      date: "February 20, 2024",
      readTime: "5 min read",
      icon: "📈"
    },
    {
      title: "E-commerce Shipping: A Platform-by-Platform Guide",
      excerpt: "Detailed comparison of shipping requirements across major e-commerce platforms in India.",
      date: "February 15, 2024",
      readTime: "12 min read",
      icon: "🛍️"
    }
  ];

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
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard key={index}>
              <BlogImage>{post.icon}</BlogImage>
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <BlogMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </MainContent>
    </Container>
  );
}
