import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { flags } from "@/lib/flags";
import { sheetNo } from "@/lib/site";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { getPost, getPosts, getPostSlugs, formatDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  // With blogs off, no post pages are generated and every slug 404s.
  return flags.blogs ? getPostSlugs().map((slug) => ({ slug })) : [];
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/blogs/[slug]">) {
  if (!flags.blogs) notFound();
  const { slug } = await params;
  const { default: Body } = await import(`@/content/blogs/${slug}.mdx`);
  const posts = await getPosts(); // newest first
  const i = posts.findIndex((p) => p.slug === slug);
  const post = posts[i];
  const newer = posts[i - 1];
  const older = posts[i + 1];

  return (
    <article>
      <header className="post-head">
        <Link href="/blogs" className="backlink">
          <Arrow /> Blogs
        </Link>
        <h1 className="title">{post.title}</h1>
        <p className="post-meta">
          <time className="mono" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="mono">
            Sheet {sheetNo("/blogs")}.{posts.length - i}
          </span>
          <span className="mono">{post.minutes} min read</span>
        </p>
      </header>

      <div className="prose">
        <Body />
      </div>

      {(older || newer) && (
        <nav className="turn" aria-label="More posts">
          {older && (
            <Link href={`/blogs/${older.slug}`}>
              <span className="label">Previous</span>
              <span>{older.title}</span>
            </Link>
          )}
          {newer && (
            <Link href={`/blogs/${newer.slug}`} className="next">
              <span className="label">Next</span>
              <span>{newer.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
