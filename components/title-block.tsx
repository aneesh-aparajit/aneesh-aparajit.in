"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, sheets, pad } from "@/lib/site";

function currentSheet(pathname: string) {
  const match = [...sheets].reverse().find((s) =>
    s.href === "/" ? pathname === "/" : pathname === s.href || pathname.startsWith(`${s.href}/`),
  );
  return match ?? sheets[0];
}

// revised: the newest date on the pad; postDates: slug to date, so a post sheet shows its own date.
export function TitleBlock({ revised, postDates }: { revised: string; postDates: Record<string, string> }) {
  const pathname = usePathname();
  const sheet = currentSheet(pathname);
  const slug = pathname.startsWith("/writing/") ? pathname.slice("/writing/".length) : null;
  const date = (slug && postDates[slug]) || revised;

  return (
    <header className="titleblock">
      <Link href="/" className="cell cell-name" aria-label={`${site.name}, home`}>
        <span className="label">Name</span>
        <span className="cell-value">{site.name}</span>
      </Link>
      <div className="cell cell-role">
        <span className="label">Role</span>
        <span className="cell-value">
          {site.role}, {site.company}
        </span>
      </div>
      <nav aria-label="Sheets" style={{ display: "contents" }}>
        {sheets.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="cell cell-nav"
            aria-current={s.n === sheet.n ? "page" : undefined}
          >
            <span className="label">{pad(s.n)}</span>
            <span className="cell-value">{s.label}</span>
          </Link>
        ))}
      </nav>
      <div className="cell cell-sheet">
        <span className="label">Sheet</span>
        <span className="cell-value">
          {pad(sheet.n)} of {pad(sheets.length)}
        </span>
      </div>
      <div className="cell cell-date">
        <span className="label">Date</span>
        <time className="cell-value" dateTime={date}>
          {date}
        </time>
      </div>
    </header>
  );
}
