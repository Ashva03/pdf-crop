import { writeFileSync } from "fs";
import { join } from "path";

// List of all pages in the application
const pages = [
  "/",
  "/features",
  "/how-it-works",
  "/pricing",
  "/blog",
  "/contact",
  "/support",
  "/faq",
  "/documentation",
  "/tutorials/quality-settings",
  "/tutorials/custom-templates",
  "/tutorials/document-scanning",
];

// Base URL of your website
const baseUrl = "https://pdf-crop.vercel.app"; // Replace with your actual domain

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  // Write sitemap to public directory
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), sitemap);
};

export default generateSitemap;
