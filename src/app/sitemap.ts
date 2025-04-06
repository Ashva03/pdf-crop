import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdfcrope.ashvainfo.co.in";

  // Define all your routes with SEO-friendly paths
  const routes = [
    "",
    "/tutorials",
    "/tutorials/quality-settings",
    "/tutorials/crop-pdf",
    "/tutorials/compress-pdf",
    "/tutorials/merge-pdf",
    "/tutorials/split-pdf",
    "/tutorials/rotate-pdf",
    "/tutorials/convert-pdf",
    "/tutorials/extract-pdf",
    "/tutorials/protect-pdf",
    "/tutorials/optimize-pdf",
    "/tutorials/watermark-pdf",
    "/tutorials/sign-pdf",
    "/tutorials/ocr-pdf",
    "/tutorials/repair-pdf",
    "/tutorials/compare-pdf",
    "/tutorials/annotate-pdf",
    "/tutorials/forms-pdf",
    "/tutorials/redact-pdf",
    "/tutorials/compress-images",
    "/tutorials/convert-images",
    "/tutorials/resize-images",
    "/tutorials/optimize-images",
    "/tutorials/watermark-images",
    "/tutorials/rotate-images",
    "/tutorials/crop-images",
    "/tutorials/merge-images",
    "/tutorials/split-images",
    "/tutorials/convert-documents",
    "/tutorials/compress-documents",
    "/tutorials/merge-documents",
    "/tutorials/split-documents",
    "/tutorials/rotate-documents",
    "/tutorials/convert-documents",
    "/tutorials/extract-documents",
    "/tutorials/protect-documents",
    "/tutorials/optimize-documents",
    "/tutorials/watermark-documents",
    "/tutorials/sign-documents",
    "/tutorials/ocr-documents",
    "/tutorials/repair-documents",
    "/tutorials/compare-documents",
    "/tutorials/annotate-documents",
    "/tutorials/forms-documents",
    "/tutorials/redact-documents",
  ];

  // Generate sitemap entries with SEO-friendly priorities
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
