import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { getPost, getPosts, getPostSlugs, formatDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const { default: Body } = await import(`@/content/writing/${slug}.mdx`);
  const posts = await getPosts(); // newest first
  const i = posts.findIndex((p) => p.slug === slug);
  const post = posts[i];
  const newer = posts[i - 1];
  const older = posts[i + 1];

  return (
    <article>
      <header className="post-head">
        <Link href="/writing" className="backlink">
          <Arrow /> Writing
        </Link>
        <h1 className="title">{post.title}</h1>
        <p className="post-meta">
          <time className="mono" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="mono">Sheet 03.{posts.length - i}</span>
          <span className="mono">{post.minutes} min read</span>
        </p>
      </header>

      <div className="prose">
        <Body />
      </div>

      {(older || newer) && (
        <nav className="turn" aria-label="More posts">
          {older && (
            <Link href={`/writing/${older.slug}`}>
              <span className="label">Previous</span>
              <span>{older.title}</span>
            </Link>
          )}
          {newer && (
            <Link href={`/writing/${newer.slug}`} className="next">
              <span className="label">Next</span>
              <span>{newer.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
