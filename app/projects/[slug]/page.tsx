import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { ProjectFigure } from "@/components/figures";
import { SectionHead } from "@/components/lists";
import { projects, statusLabel, statusNote } from "@/lib/projects";
import { sheetNo } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: p.tagline };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug); // newest first
  if (i < 0) notFound();
  const p = projects[i];
  const newer = projects[i - 1];
  const older = projects[i + 1];
  // Same number the entry carries on the Projects sheet.
  const n = `${sheetNo("/projects")}.${i + 1}`;

  return (
    <article className="project-sheet">
      <header className="post-head">
        <Link href="/projects" className="backlink">
          <Arrow /> Projects
        </Link>
        <h1 className="title">{p.name}</h1>
        <p className="post-meta">
          <span className={`stamp label stamp-${p.status}`}>{statusLabel[p.status]}</span>
          {p.year && <span className="mono">{p.year}</span>}
          <span className="mono">Sheet {n}</span>
        </p>
        <p className="lede">{p.tagline}</p>
      </header>

      <ProjectFigure slug={p.slug} n={n} />

      <div className="prose project-prose">
        <p>{p.summary}</p>
      </div>

      <section className="section project-spec" aria-label="Specification">
        <SectionHead title="Specification" />
        <dl className="skills">
          <dt className="label">Status</dt>
          <dd>
            {statusLabel[p.status]}: {statusNote[p.status]}.
          </dd>
          <dt className="label">Stack</dt>
          <dd>{p.stack.join(" · ")}</dd>
          {(p.repo || p.live) && (
            <>
              <dt className="label">Source</dt>
              <dd className="spec-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Repository <Arrow />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <Arrow />
                  </a>
                )}
              </dd>
            </>
          )}
        </dl>
        {p.decision && (
          <dl className="note">
            <dt className="label">Decision</dt>
            <dd>{p.decision.choice}</dd>
            <dt className="label">Trade-off</dt>
            <dd>{p.decision.tradeoff}</dd>
          </dl>
        )}
      </section>

      <nav className="turn" aria-label="More projects">
        {older && (
          <Link href={`/projects/${older.slug}`}>
            <span className="label">Previous</span>
            <span>{older.name}</span>
          </Link>
        )}
        {newer && (
          <Link href={`/projects/${newer.slug}`} className="next">
            <span className="label">Next</span>
            <span>{newer.name}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
