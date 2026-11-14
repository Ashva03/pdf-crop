import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://pdfcrop.co.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/features",
        "/how-it-works",
        "/documentation",
        "/support",
        "/case-studies",
        "/tutorials/getting-started",
        "/tutorials/interface-overview",
        "/tutorials/basic-cropping",
        "/tutorials/advanced-cropping",
        "/tutorials/batch-processing",
        "/tutorials/custom-templates",
        "/tutorials/quality-settings",
        "/tutorials/saving-exporting",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
