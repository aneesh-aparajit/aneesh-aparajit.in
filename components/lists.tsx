import Link from "next/link";
import { Arrow } from "./arrow";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import type { Project } from "@/lib/projects";
import { statusLabel } from "@/lib/projects";
import type { Achievement, CvItem } from "@/lib/resume";
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

// Anchor id for an entry, so compact home lists can link to it on its own page.
const anchor = (...parts: string[]) =>
  parts
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

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

// The project schedule: one ruled table row per project, like the schedule on a
// drawing. compact: the tagline only, for the home page; otherwise the summary,
// source links and any decision note, and each row is an anchor target.
export function ProjectSchedule({
  projects,
  compact = false,
}: {
  projects: Project[];
  compact?: boolean;
}) {
  return (
    <table className="schedule">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Project</th>
          <th scope="col">Status</th>
          <th scope="col" className="sch-stack">
            Stack
          </th>
          <th scope="col" className="sch-year">
            Year
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p, i) => (
          <tr key={p.slug} id={compact ? undefined : p.slug}>
            <td className="sch-n mono">{`${sheetNo("/projects")}.${i + 1}`}</td>
            <td className="sch-name">
              <Link href={`/projects/${p.slug}`}>{p.name}</Link>
              <p className="sch-desc">{compact ? p.tagline : p.summary}</p>
              {!compact && (p.repo || p.live) && (
                <p className="sch-links">
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
                </p>
              )}
              {!compact && p.decision && (
                <dl className="note">
                  <dt className="label">Decision</dt>
                  <dd>{p.decision.choice}</dd>
                  <dt className="label">Trade-off</dt>
                  <dd>{p.decision.tradeoff}</dd>
                </dl>
              )}
            </td>
            <td className="sch-status">
              <span className={`stamp label stamp-${p.status}`}>{statusLabel[p.status]}</span>
            </td>
            <td className="sch-stack label">{p.stack.join(" · ")}</td>
            <td className="sch-year mono">{p.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Awards and other recognition: a title with its year or figure, then one line of detail.
export function AchievementList({ items, prefix }: { items: Achievement[]; prefix?: string }) {
  return (
    <ol>
      {items.map((a, i) => (
        <li key={a.title} className="item">
          <h3 className="item-title">
            {prefix && <SheetNo n={`${prefix}.${i + 1}`} />}
            {a.title}
          </h3>
          {a.mark && <span className="item-meta mono">{a.mark}</span>}
          <p className="item-body">{a.detail}</p>
        </li>
      ))}
    </ol>
  );
}

// Three lines: organisation and tenure, role and location, then the summary (or the tagline when compact).
export function CvList({
  items,
  prefix,
  start = 0,
  compact = false,
  href,
}: {
  items: CvItem[];
  prefix: string;
  start?: number;
  compact?: boolean;
  // When set (compact lists), each organisation links to its entry on this page.
  href?: string;
}) {
  return (
    <ol>
      {items.map((x, i) => (
        <li key={`${x.org}-${x.title}`} id={compact ? undefined : anchor(x.org, x.title)} className="item">
          <h3 className="item-title">
            <SheetNo n={`${prefix}.${start + i + 1}`} />
            {href ? <Link href={`${href}#${anchor(x.org, x.title)}`}>{x.org}</Link> : x.org}
          </h3>
          <span className="item-meta mono">{x.when}</span>
          <p className="item-sub">
            <span>{x.title}</span>
            {x.place && <span className="item-place">{x.place}</span>}
          </p>
          {compact
            ? x.tagline && <p className="item-body">{x.tagline}</p>
            : x.summary && <p className="item-body">{x.summary}</p>}
        </li>
      ))}
    </ol>
  );
}
