"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, sheets, pad, sheetFor } from "@/lib/site";
import { experience } from "@/lib/resume";
import { ThemeToggle } from "./theme-toggle";

// The title block: a ruled rail down the left of every sheet. It holds who this
// is, how to reach them, the sheet index and the theme switch. On phones it sits
// on top, and only the index page keeps the intro and facts.
export function TitleBlock() {
  const pathname = usePathname();
  const current = sheetFor(pathname);
  const home = pathname === "/";
  const Name = home ? "h1" : "p";
  const place = experience[0]?.place;

  return (
    <aside className={home ? "rail rail-home" : "rail"} aria-label="Title block">
      <div className="rail-who">
        <div className="rail-id">
          {/* Decorative: the name sits right beside it. */}
          <Image
            className="rail-avatar"
            src={site.avatar.src}
            alt=""
            width={144}
            height={144}
            sizes="(max-width: 60rem) 48px, 72px"
            priority
          />
          <Name className="rail-name">{home ? `${site.name}.` : <Link href="/">{site.name}.</Link>}</Name>
        </div>
        <p className="rail-lede">{site.statement}</p>
      </div>

      <dl className="rail-facts">
        <div className="rail-fact-role">
          <dt className="label">Role</dt>
          <dd>{site.role}</dd>
        </div>
        <div className="rail-fact-role">
          <dt className="label">At</dt>
          <dd>{place ? `${site.company}, ${place}` : site.company}</dd>
        </div>
        <div>
          <dt className="label">Write</dt>
          <dd>
            <a href={`mailto:${site.email}`}>Email</a>
          </dd>
        </div>
        <div>
          <dt className="label">Code</dt>
          <dd>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </dd>
        </div>
        <div>
          <dt className="label">Profile</dt>
          <dd>
            {site.linkedin ? (
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : (
              <span className="soon">LinkedIn · soon</span>
            )}
          </dd>
        </div>
      </dl>

      <div className="rail-cells">
        <nav className="rail-nav" aria-label="Sheets">
          {sheets.map((s) => (
            <Link key={s.href} href={s.href} aria-current={s.n === current?.n ? "page" : undefined}>
              <span className="label">{pad(s.n)}</span>
              <span>{s.label}</span>
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </aside>
  );
}
