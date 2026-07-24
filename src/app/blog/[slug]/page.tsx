import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Script from "next/script";
import { getPostBySlug } from "@/lib/markdown";
import styled from "styled-components";
import Link from "next/link";
import Providers from "@/components/Providers";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const registryPath = path.join(process.cwd(), "src", "content", "blog-registry.json");
  try {
    if (fs.existsSync(registryPath)) {
      const data = fs.readFileSync(registryPath, "utf8");
      const posts = JSON.parse(data);
      return posts.map((post: any) => ({
        slug: post.slug,
      }));
    }
  } catch (error) {
    console.error("Error generating static params:", error);
  }
  return [];
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | PDF Cropper Blog`,
    description: post.description,
    alternates: {
      canonical: `https://pdfcrop.co.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://pdfcrop.co.in/blog/${post.slug}`,
      type: "article",
      siteName: "PDF Cropper",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PDF Cropper",
      url: "https://pdfcrop.co.in",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pdfcrop.co.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Script
        id={`blog-${post.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Wrapper to handle client-side rendering styles for Markdown content */}
      <article className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-700">
        <header className="mb-8 border-b pb-6">
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm mb-4 inline-block">
            ← Back to All Articles
          </Link>
          <div className="flex gap-2 mb-3">
            <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span>By <strong>{post.author}</strong></span>
            <span>•</span>
            <span>Published on {post.date}</span>
          </div>
        </header>

        {/* Dynamic HTML renderer with premium styled container styles */}
        <section 
          className="prose prose-indigo max-w-none leading-relaxed text-lg"
          style={{
            lineHeight: "1.8",
            fontSize: "1.075rem"
          }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </>
  );
}
