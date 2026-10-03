import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
};

export type Post = PostMeta & { slug: string; minutes: number };

const dir = path.join(process.cwd(), "content", "writing");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function readingMinutes(slug: string): number {
  const raw = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf8");
  const prose = raw.replace(/^export const[\s\S]*?\n\};?\n/m, "").replace(/```[\s\S]*?```/g, "");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export async function getPost(slug: string): Promise<Post> {
  const mod = await import(`@/content/writing/${slug}.mdx`);
  return { ...(mod.meta as PostMeta), slug, minutes: readingMinutes(slug) };
}

// Newest first.
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(getPost));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
