// Everything a visitor reads about you that isn't a post or a project lives here.
// Edit freely; the pages read from this file.

import { flags } from "./flags";

export const site = {
  name: "Aneesh Aparajit",
  shortName: "Aneesh",
  role: "Software Engineer II",
  company: "Zeta",
  // The intro under "Hi, I'm Aneesh." Also used for search and link previews.
  statement:
    "Backend engineer at Zeta, where I teach ledgers to agree with each other. Mostly Java and Go, Kafka and Flink, and an unreasonable fondness for idempotency keys.",
  email: "aneeshaparajit.g@gmail.com",
  github: "https://github.com/aneesh-aparajit",
  // Paste your LinkedIn profile URL to turn on the LinkedIn link.
  linkedin: "https://www.linkedin.com/in/aneesh-aparajit/" as string | null,
  // Set once the domain is decided; used for absolute links in metadata.
  url: null as string | null,
};

// The pad: every enabled top-level page is one numbered sheet. Numbers are
// assigned in order, so turning a section off closes the gap.
const allSheets = [
  { href: "/", label: "Index", enabled: true },
  { href: "/work", label: "Work", enabled: true },
  { href: "/blogs", label: "Blogs", enabled: flags.blogs },
  { href: "/resume", label: "Resume", enabled: true },
];

export const sheets = allSheets.filter((s) => s.enabled).map((s, i) => ({ n: i + 1, href: s.href, label: s.label }));

export const pad = (n: number) => String(n).padStart(2, "0");

// The padded sheet number for a top-level page, e.g. sheetNo("/work") === "02".
export function sheetNo(href: string) {
  return pad(sheets.find((s) => s.href === href)?.n ?? 0);
}

export function sheetFor(pathname: string) {
  const match = [...sheets]
    .reverse()
    .find((s) => (s.href === "/" ? pathname === "/" : pathname === s.href || pathname.startsWith(`${s.href}/`)));
  return match ?? sheets[0];
}
