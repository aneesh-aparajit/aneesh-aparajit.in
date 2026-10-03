import Link from "next/link";
import { Sheet, Row } from "@/components/sheet";
import { Actions } from "@/components/actions";
import { Arrow } from "@/components/arrow";
import { site, sheets, pad } from "@/lib/site";
import { log } from "@/lib/log";
import { getPosts, formatDate } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();
  const entries = [
    ...posts.map((p) => ({ date: p.date, kind: "Wrote", text: p.title, href: `/writing/${p.slug}` })),
    ...log,
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Sheet>
      <Row mark="01" label="Introduction">
        <h1 className="statement">{site.statement}</h1>
        {site.statementIsDraft && (
          <p className="draft-note">
            <span className="label stamp">Draft</span>
            <span className="label">Placeholder statement: say what you build in lib/site.ts</span>
          </p>
        )}
        <Actions />
      </Row>

      <Row label="Index of sheets">
        <h2 className="section-title">On this pad</h2>
        <ol className="index">
          {sheets.slice(1).map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="index-row">
                <span className="index-n" aria-hidden="true">
                  {pad(s.n)}
                </span>
                <span className="index-title">{s.label}</span>
                <span className="index-blurb">{s.blurb}</span>
                <Arrow className="index-go" />
              </Link>
            </li>
          ))}
        </ol>
      </Row>

      <Row label="Log">
        <h2 className="section-title">Log</h2>
        <ol className="log">
          {entries.slice(0, 6).map((e) => (
            <li key={`${e.date}-${e.text}`}>
              <time className="mono" dateTime={e.date}>
                {formatDate(e.date)}
              </time>
              <span className="label log-kind">{e.kind}</span>
              <span>{e.href ? <Link href={e.href}>{e.text}</Link> : e.text}</span>
            </li>
          ))}
        </ol>
      </Row>
    </Sheet>
  );
}
