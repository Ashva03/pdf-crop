import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdfcrop.co.in";
  const defaultDate = new Date("2026-10-25");

  // Base static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gdpr`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/data-security`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flipkart-label`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/amazon-label`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/meesho-label`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/snapdeal-label`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/myntra-label`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/getting-started`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/interface-overview`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/basic-cropping`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/advanced-cropping`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/batch-processing`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/custom-templates`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/quality-settings`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tutorials/saving-exporting`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/documentation`,
      lastModified: defaultDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: defaultDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compress-pdf`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/edit-pdf`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/images-to-pdf`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/merge-pdf`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pdf-to-jpg`,
      lastModified: defaultDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Dynamically load blog posts
  const blogRoutes: MetadataRoute.Sitemap = [];
  const registryPath = path.join(process.cwd(), "src", "content", "blog-registry.json");
  try {
    if (fs.existsSync(registryPath)) {
      const data = fs.readFileSync(registryPath, "utf8");
      const posts = JSON.parse(data);
      posts.forEach((post: any) => {
        blogRoutes.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.date ? new Date(post.date) : defaultDate,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      });
    }
  } catch (error) {
    console.error("Error reading blog registry for sitemap:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
