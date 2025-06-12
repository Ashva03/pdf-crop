"use client";

import styled from 'styled-components';
import Link from 'next/link';

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 0 20px;
`;

const ArticleHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ArticleMeta = styled.div`
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

const ArticleContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #4f46e5;
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: #4a5568;
    }
  }

  blockquote {
    border-left: 4px solid #4f46e5;
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: #4a5568;
    font-style: italic;
  }
`;

interface BlogPostContentProps {
  title: string;
  content: React.ReactNode;
}

export default function BlogPostContent({ title, content }: BlogPostContentProps) {
  return (
    <ArticleContainer>
      <ArticleHeader>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleMeta>
          Published: {new Date().toLocaleDateString()} | 10 min read
        </ArticleMeta>
      </ArticleHeader>
      <ArticleContent>
        {content}
      </ArticleContent>
    </ArticleContainer>
  );
} 