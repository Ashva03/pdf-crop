"use client";

import Link from "next/link";
import styled from "styled-components";

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.75rem;
  color: #111827;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
`;

const BlogDescription = styled.p`
  font-size: 1.15rem;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.08);
    border-color: #c7d2fe;
  }
`;

const BlogImage = styled.div`
  height: 220px;
  background: linear-gradient(135deg, #e0e7ff 0%, #e0f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

const BlogCardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BlogCardTitle = styled.h2`
  font-size: 1.35rem;
  color: #1f2937;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.975rem;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid #f3f4f6;
  padding-top: 1.25rem;
`;

const ReadMore = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: #4338ca;
  }
`;

const CategoryTag = styled.span`
  background: #eef2f6;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

interface Post {
  id: number;
  title: string;
  excerpt: string;
  icon: string;
  slug: string;
  category: string;
  date: string;
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle>E-commerce Shipping & Logistics Guides</BlogTitle>
        <BlogDescription>
          Read the latest tips, operational guidelines, and troubleshooting articles from industry experts to scale your storefront's fulfillment.
        </BlogDescription>
      </BlogHeader>

      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post.id}>
            <BlogImage>{post.icon}</BlogImage>
            <BlogCardContent>
              <BlogCardTitle>{post.title}</BlogCardTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <CardFooter>
                <CategoryTag>{post.category}</CategoryTag>
                <ReadMore href={`/blog/${post.slug}`}>
                  Read Article <span style={{ transition: "transform 0.2s" }}>→</span>
                </ReadMore>
              </CardFooter>
            </BlogCardContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}
