import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { flags } from "@/lib/flags";
import { SectionHead, PostList } from "@/components/lists";
import { getPosts } from "@/lib/posts";

// With blogs off this route 404s, so it shouldn't claim the "Blogs" title either.
export const metadata: Metadata = flags.blogs
  ? { title: "Blogs", description: "Engineering notes and write-ups." }
  : { title: "Not found" };

export default async function Blogs() {
  if (!flags.blogs) notFound();
  const posts = await getPosts();

  return (
    <>
      <section className="intro">
        <h1 className="title">Blogs</h1>
        <p className="lede">Engineering notes: what I built or debugged, the alternatives, and what it cost.</p>
      </section>

      <section className="section" aria-label="Posts">
        <SectionHead title="All posts" />
        <PostList posts={posts} total={posts.length} />
      </section>
    </>
  );
}
