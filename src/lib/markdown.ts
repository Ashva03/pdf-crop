import fs from "fs";
import path from "path";

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  icon: string;
  contentHtml: string;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const blogDir = path.join(process.cwd(), "src", "content", "blog");
    const filePath = path.join(blogDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");

    // Simple robust Frontmatter parser
    const fmMatch = fileContent.match(/^---([\s\S]*?)---([\s\S]*)$/);
    if (!fmMatch) return null;

    const fmRaw = fmMatch[1];
    const bodyRaw = fmMatch[2];

    const metadata: Record<string, any> = {};
    fmRaw.split("\n").forEach((line) => {
      const parts = line.split(":");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        let value = parts.slice(1).join(":").trim();
        // Remove surrounding quotes if any
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        if (key === "tags") {
          try {
            metadata[key] = JSON.parse(value);
          } catch {
            metadata[key] = [];
          }
        } else {
          metadata[key] = value;
        }
      }
    });

    // Simple markdown body parser to HTML
    let html = bodyRaw
      .replace(/^#\s+(.+)$/gm, "<h1>$1</h1>")
      .replace(/^##\s+(.+)$/gm, "<h2>$1</h2>")
      .replace(/^###\s+(.+)$/gm, "<h3>$1</h3>")
      .replace(/^\s*\*\s+(.+)$/gm, "<li>$1</li>")
      .replace(/^\s*\-\s+(.+)$/gm, "<li>$1</li>")
      .replace(/^\s*\d+\.\s+(.+)$/gm, "<li>$1</li>")
      // Wrap sequential <li> tags in <ul>
      .replace(/((?:<li>[\s\S]*?<\/li>\s*)+)/g, "<ul>$1</ul>")
      .split("\n\n")
      .map((p) => {
        const trimmed = p.trim();
        if (!trimmed) return "";
        if (trimmed.startsWith("<h") || trimmed.startsWith("<ul") || trimmed.startsWith("---")) {
          return trimmed;
        }
        return `<p>${trimmed.replace(/\n/g, "<br />")}</p>`;
      })
      .join("");

    return {
      title: metadata.title || "",
      description: metadata.description || "",
      author: metadata.author || "Admin",
      date: metadata.date || "",
      category: metadata.category || "Shipping",
      tags: metadata.tags || [],
      slug: slug,
      icon: metadata.icon || "📝",
      contentHtml: html,
    };
  } catch (error) {
    console.error("Error reading blog post:", error);
    return null;
  }
}
