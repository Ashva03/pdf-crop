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
      title: "Advanced PDF Cropping Techniques",
      excerpt:
        "Learn how to use advanced features for precise PDF cropping in various business scenarios.",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: "✂️",
    },
    {
      title: "Optimizing PDFs for E-commerce",
      excerpt:
        "Best practices for preparing product documentation and catalogs using our PDF tools.",
      date: "March 12, 2024",
      readTime: "4 min read",
      icon: "🛍️",
    },
    {
      title: "Batch Processing Guide",
      excerpt:
        "A comprehensive guide to processing multiple PDFs efficiently using our batch tools.",
      date: "March 10, 2024",
      readTime: "6 min read",
      icon: "📚",
    },
    {
      title: "PDF Security Best Practices",
      excerpt:
        "Essential tips for maintaining document security while using PDF processing tools.",
      date: "March 8, 2024",
      readTime: "7 min read",
      icon: "🔒",
    },
    {
      title: "Document Automation Tips",
      excerpt:
        "Streamline your workflow with these document automation strategies and tools.",
      date: "March 5, 2024",
      readTime: "5 min read",
      icon: "⚡",
    },
    {
      title: "PDF Accessibility Guide",
      excerpt:
        "Making your PDFs accessible to everyone with our comprehensive tools and tips.",
      date: "March 1, 2024",
      readTime: "8 min read",
      icon: "♿",
    },
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
