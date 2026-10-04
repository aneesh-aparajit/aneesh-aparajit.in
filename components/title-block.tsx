"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, sheets, pad, sheetFor } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

// The header: name and nav set as one ruled title-block strip.
export function TitleBlock() {
  const current = sheetFor(usePathname());

  return (
    <header className="strip">
      <Link href="/" aria-current={current.n === 1 ? "page" : undefined}>
        <span className="label">Name</span>
        <span>{site.name}</span>
      </Link>
      {sheets.slice(1).map((s) => (
        <Link key={s.href} href={s.href} aria-current={s.n === current.n ? "page" : undefined}>
          <span className="label">{pad(s.n)}</span>
          <span>{s.label}</span>
        </Link>
      ))}
      <ThemeToggle />
    </header>
  );
}
