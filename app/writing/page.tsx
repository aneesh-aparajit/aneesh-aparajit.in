import type { Metadata } from "next";
import Link from "next/link";
import { Sheet, Row } from "@/components/sheet";
import { getPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Engineering notes and write-ups.",
};

export default async function Writing() {
  const posts = await getPosts();

  return (
    <Sheet>
      <Row mark="03" label="Writing">
        <h1 className="page-title">Writing</h1>
        <p className="lede">Engineering notes: what I built or debugged, the alternatives, and what it cost.</p>

        {posts.length === 0 ? (
          <p className="empty">No sheets filed yet. The first write-up is on its way.</p>
        ) : (
          <ol className="posts">
            {posts.map((p, i) => (
              <li key={p.slug}>
                <Link href={`/writing/${p.slug}`} className="post-row">
                  <span className="index-n" aria-hidden="true">
                    03.{posts.length - i}
                  </span>
                  <time className="mono" dateTime={p.date}>
                    {formatDate(p.date)}
                  </time>
                  <span>
                    <span className="post-title">{p.title}</span>
                    <span className="post-summary" style={{ display: "block" }}>
                      {p.summary}
                    </span>
                  </span>
                  <span className="mono">{p.minutes} min</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </Row>
    </Sheet>
  );
}
