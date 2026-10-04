"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, sheets, pad, sheetFor } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

// The header: name and nav set as one ruled title-block strip.
export function TitleBlock() {
  const current = sheetFor(usePathname());

  return (
    <header className="strip">
      <Link href="/" className="strip-name" aria-current={current.n === 1 ? "page" : undefined}>
        {/* Decorative: the name sits right beside it. */}
        <Image className="strip-avatar" src={site.avatar.src} alt="" width={64} height={64} sizes="28px" />
        <span className="strip-name-text">
          <span className="label">Name</span>
          <span>{site.name}</span>
        </span>
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
