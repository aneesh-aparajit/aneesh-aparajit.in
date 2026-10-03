import type { Metadata } from "next";
import Link from "next/link";
import { Sheet, Row } from "@/components/sheet";
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
  const sheetNo = `03.${posts.length - i}`;
  const newer = posts[i - 1];
  const older = posts[i + 1];

  return (
    <Sheet>
      <Row mark={sheetNo} label="Post">
        <article>
          <Link href="/writing" className="backlink">
            <Arrow /> Writing
          </Link>
          <h1 className="page-title">{post.title}</h1>
          <div className="post-strip">
            <div className="cell">
              <span className="label">Date</span>
              <time className="cell-value" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <div className="cell">
              <span className="label">Sheet</span>
              <span className="cell-value">{sheetNo}</span>
            </div>
            <div className="cell">
              <span className="label">Read</span>
              <span className="cell-value">{post.minutes} min</span>
            </div>
          </div>

          <div className="prose" style={{ marginTop: "calc(var(--u) * 2)" }}>
            <Body />
          </div>
        </article>

        {(older || newer) && (
          <nav className="turn" aria-label="More sheets">
            {older ? (
              <Link href={`/writing/${older.slug}`} className="cell">
                <span className="label">Previous sheet</span>
                <span className="cell-value">{older.title}</span>
              </Link>
            ) : (
              <span className="cell" />
            )}
            {newer ? (
              <Link href={`/writing/${newer.slug}`} className="cell next">
                <span className="label">Next sheet</span>
                <span className="cell-value">{newer.title}</span>
              </Link>
            ) : (
              <span className="cell" />
            )}
          </nav>
        )}
      </Row>
    </Sheet>
  );
}
