import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <section className="intro">
      <h1 className="title">Page not found.</h1>
      <p className="lede">
        I looked everywhere: the index, the cache, the dead-letter queue. This page was never written. Retrying
        won&apos;t help, though I respect the instinct.
      </p>
      <p className="links">
        <Link href="/">Back to the index</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
      </p>
    </section>
  );
}
