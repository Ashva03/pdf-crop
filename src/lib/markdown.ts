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

function parseMarkdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const output: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" | null = null;
  let inTable = false;
  let tableRows: string[][] = [];

  function flushList() {
    if (inList) {
      output.push(listType === "ol" ? "</ol>" : "</ul>");
      inList = false;
      listType = null;
    }
  }

  function flushTable() {
    if (inTable && tableRows.length > 0) {
      let tableHtml = `<div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden text-sm md:text-base">`;
      const headerRow = tableRows[0];
      tableHtml += `<thead class="bg-gray-100 text-gray-800 font-bold border-b border-gray-200"><tr>`;
      for (const cell of headerRow) {
        tableHtml += `<th class="p-3 border-r border-gray-200 last:border-r-0">${formatInline(cell)}</th>`;
      }
      tableHtml += `</tr></thead><tbody>`;
      for (let i = 1; i < tableRows.length; i++) {
        const row = tableRows[i];
        const bg = i % 2 === 0 ? "bg-gray-50/60" : "bg-white";
        tableHtml += `<tr class="${bg} border-b border-gray-100 last:border-b-0 hover:bg-indigo-50/30 transition-colors">`;
        for (const cell of row) {
          tableHtml += `<td class="p-3 border-r border-gray-100 last:border-r-0 text-gray-700">${formatInline(cell)}</td>`;
        }
        tableHtml += `</tr>`;
      }
      tableHtml += `</tbody></table></div>`;
      output.push(tableHtml);
      inTable = false;
      tableRows = [];
    }
  }

  function formatInline(text: string): string {
    return text
      // Bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-indigo-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-indigo-600 hover:text-indigo-800 underline font-semibold transition-colors">$1</a>');
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      flushTable();
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      if (/^\|[\s\-:|]+\|$/.test(trimmed)) {
        continue;
      }
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      inTable = true;
      tableRows.push(cells);
      continue;
    } else {
      flushTable();
    }

    if (/^---$|^___$|^\*\*\*$/.test(trimmed)) {
      flushList();
      output.push('<hr class="my-8 border-t border-gray-200" />');
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushList();
      const quoteText = formatInline(trimmed.slice(2));
      output.push(`<blockquote class="border-l-4 border-indigo-500 pl-4 py-2 my-4 bg-indigo-50/40 text-gray-700 italic rounded-r">${quoteText}</blockquote>`);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      output.push(`<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3 tracking-tight">${formatInline(trimmed.slice(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      output.push(`<h2 class="text-2xl font-extrabold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100 tracking-tight">${formatInline(trimmed.slice(3))}</h2>`);
      continue;
    }
    if (trimmed.startsWith("# ")) {
      flushList();
      output.push(`<h1 class="text-3xl font-extrabold text-gray-900 mt-6 mb-4 tracking-tight">${formatInline(trimmed.slice(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      if (!inList || listType !== "ul") {
        flushList();
        inList = true;
        listType = "ul";
        output.push('<ul class="list-disc pl-6 my-4 space-y-2 text-gray-700">');
      }
      output.push(`<li class="leading-relaxed">${formatInline(trimmed.slice(2))}</li>`);
      continue;
    }

    const olMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (olMatch) {
      if (!inList || listType !== "ol") {
        flushList();
        inList = true;
        listType = "ol";
        output.push('<ol class="list-decimal pl-6 my-4 space-y-2 text-gray-700">');
      }
      output.push(`<li class="leading-relaxed">${formatInline(olMatch[2])}</li>`);
      continue;
    }

    flushList();
    output.push(`<p class="my-4 text-gray-700 leading-relaxed text-base md:text-lg">${formatInline(trimmed)}</p>`);
  }

  flushList();
  flushTable();

  return output.join("\n");
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const blogDir = path.join(process.cwd(), "src", "content", "blog");
    const filePath = path.join(blogDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");

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

    const html = parseMarkdownToHtml(bodyRaw);

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
