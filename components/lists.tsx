import Link from "next/link";
import { Arrow } from "./arrow";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import type { Project } from "@/lib/projects";
import type { CvItem } from "@/lib/resume";
import { sheetNo } from "@/lib/site";

export function SectionHead({
  title,
  more,
}: {
  title: string;
  more?: { href: string; label: string };
}) {
  return (
    <div className="section-head">
      <h2 className="label">{title}</h2>
      {more && <Link href={more.href}>{more.label}</Link>}
    </div>
  );
}

// The sheet number: hangs in the margin on wide screens, sits inline on phones.
function SheetNo({ n }: { n: string }) {
  return (
    <span className="item-n mono" aria-hidden="true">
      {n}
    </span>
  );
}

// Posts, newest first. Sheet numbers count up from the oldest.
// compact: title and date only, for the home page.
export function PostList({
  posts,
  total,
  compact = false,
}: {
  posts: Post[];
  total: number;
  compact?: boolean;
}) {
  if (posts.length === 0) {
    return (
      <p className="empty">No posts yet. The first write-up is on its way.</p>
    );
  }
  return (
    <ol>
      {posts.map((p, i) => (
        <li key={p.slug} className="item">
          <h3 className="item-title">
            <SheetNo n={`${sheetNo("/blogs")}.${total - i}`} />
            <Link href={`/blogs/${p.slug}`}>{p.title}</Link>
          </h3>
          <time className="item-meta mono" dateTime={p.date}>
            {formatDate(p.date)}
          </time>
          {!compact && <p className="item-body">{p.summary}</p>}
        </li>
      ))}
    </ol>
  );
}

export function ProjectList({
  projects,
  notes = false,
  compact = false,
}: {
  projects: Project[];
  notes?: boolean;
  compact?: boolean;
}) {
  return (
    <ol>
      {projects.map((p, i) => (
        <li key={p.slug} className="item">
          <h3 className="item-title">
            <SheetNo n={`${sheetNo("/work")}.${i + 1}`} />
            {p.name}
          </h3>
          {p.year && <span className="item-meta mono">{p.year}</span>}
          {!compact && <p className="item-body">{p.summary}</p>}
          {!compact && (
            <div className="item-stack">
              <span className="label">{p.stack.join(" · ")}</span>
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
            </div>
          )}
          {notes && p.decision && (
            <dl className="note">
              <dt className="label">Decision</dt>
              <dd>{p.decision.choice}</dd>
              <dt className="label">Trade-off</dt>
              <dd>{p.decision.tradeoff}</dd>
            </dl>
          )}
        </li>
      ))}
    </ol>
  );
}

// Three lines: organisation and tenure, role and location, then a one-line summary (dropped when compact).
export function CvList({
  items,
  prefix,
  start = 0,
  compact = false,
}: {
  items: CvItem[];
  prefix: string;
  start?: number;
  compact?: boolean;
}) {
  return (
    <ol>
      {items.map((x, i) => (
        <li key={`${x.org}-${x.title}`} className="item">
          <h3 className="item-title">
            <SheetNo n={`${prefix}.${start + i + 1}`} />
            {x.org}
          </h3>
          <span className="item-meta mono">{x.when}</span>
          <p className="item-sub">
            <span>{x.title}</span>
            {x.place && <span className="item-place">{x.place}</span>}
          </p>
          {!compact && x.summary && <p className="item-body">{x.summary}</p>}
        </li>
      ))}
    </ol>
  );
}
