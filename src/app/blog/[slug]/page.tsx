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

  // Breadcrumb Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pdfcrop.co.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://pdfcrop.co.in/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://pdfcrop.co.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id={`blog-${post.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`blog-${post.slug}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          className="prose prose-indigo max-w-none leading-relaxed text-lg mb-10"
          style={{
            lineHeight: "1.8",
            fontSize: "1.075rem"
          }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Affiliate call-to-action box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="text-4xl bg-white p-3 rounded-full shadow-inner flex-shrink-0">🛒</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-orange-800 mb-1">Equip Your Shipping Station</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To achieve the best printing results, we highly recommend using a high-quality direct thermal printer and standard 4x6 self-adhesive sticker rolls. Shop printers, labels, and supplies directly on Amazon using our verified link.
            </p>
          </div>
          <a 
            href="https://amzn.to/4wzBAQ1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center font-bold rounded-full text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 whitespace-nowrap"
            style={{ padding: "12px 28px" }}
          >
            Shop on Amazon
          </a>
        </div>
      </article>
    </>
  );
}
