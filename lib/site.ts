// Everything a visitor reads about you that isn't a post or a project lives here.
// Edit freely; the pages read from this file.

export const site = {
  name: "Aneesh Aparajit",
  shortName: "Aneesh",
  role: "Software Engineer II",
  company: "Zeta",
  // The intro under "Hi, I'm Aneesh." Say plainly what you build.
  statement:
    "Backend engineer at Zeta. I build payment, wallet and identity systems, and I write about how they work.",
  email: "aneeshaparajit.g@gmail.com",
  github: "https://github.com/aneesh-aparajit",
  // Paste your LinkedIn profile URL to turn on the LinkedIn link.
  linkedin: "https://www.linkedin.com/in/aneesh-aparajit/" as string | null,
  // Set once the domain is decided; used for absolute links in metadata.
  url: null as string | null,
};

// The pad: every top-level page is one numbered sheet.
export const sheets = [
  { n: 1, href: "/", label: "Index" },
  { n: 2, href: "/work", label: "Work" },
  { n: 3, href: "/writing", label: "Writing" },
  { n: 4, href: "/resume", label: "Resume" },
] as const;

export const pad = (n: number) => String(n).padStart(2, "0");

export function sheetFor(pathname: string) {
  const match = [...sheets]
    .reverse()
    .find((s) => (s.href === "/" ? pathname === "/" : pathname === s.href || pathname.startsWith(`${s.href}/`)));
  return match ?? sheets[0];
}
