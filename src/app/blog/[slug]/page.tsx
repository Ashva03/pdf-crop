import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Script from "next/script";
import { getPostBySlug } from "@/lib/markdown";
import styled from "styled-components";
import Link from "next/link";
import Providers from "@/components/Providers";
import AdBanner from "@/components/AdBanner";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
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

        <AdBanner slotId="8472910398" />

        {/* Editorial Standards & Author Bio Card */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-gray-50 to-indigo-50/40 p-6 rounded-2xl border border-gray-200/80 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                PC
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg">Written by {post.author}</h4>
                <p className="text-gray-600 text-xs md:text-sm">Verified for E-Commerce Logistics & Shipping Label Guidelines</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Our guides are researched and verified by logistics practitioners and e-commerce packaging experts. We regularly audit carrier updates (Ekart, Amazon ATS, Delhivery, Blue Dart, DTDC, Shadowfax) and platform standards (Flipkart, Amazon, Meesho, Myntra) to ensure compliance, reduce barcode scan failures, and minimize RTO fees.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Explore Our Free Browser PDF Tools</h3>
            <p className="text-gray-600 text-sm mb-4">
              All documents are processed 100% locally in your web browser memory. Zero files uploaded to external servers.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/flipkart-label" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                Flipkart Label Cropper
              </Link>
              <Link href="/amazon-label" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                Amazon Label Cropper
              </Link>
              <Link href="/meesho-label" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                Meesho Label Cropper
              </Link>
              <Link href="/compress-pdf" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                Compress PDF
              </Link>
              <Link href="/merge-pdf" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                Merge PDF
              </Link>
              <Link href="/pdf-to-jpg" className="text-xs font-semibold bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 px-3 py-1.5 rounded-full transition-colors">
                PDF to JPG
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
