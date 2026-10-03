// Everything a visitor reads about you that isn't a post or a project lives here.
// Edit freely; the pages read from this file.

export const site = {
  name: "Aneesh Aparajit",
  shortName: "Aneesh",
  role: "SDE 2",
  company: "Directi",
  // The one statement a recruiter reads first. Make it specific to what you build.
  statement:
    "Software engineer at Directi. I build software end to end, and I write down how it works.",
  // Shows a visible draft marker under the statement until you rewrite it.
  statementIsDraft: true,
  email: "aneeshaparajit.g@gmail.com",
  github: "https://github.com/aneesh-aparajit",
  // Paste your LinkedIn profile URL to show the LinkedIn link.
  linkedin: null as string | null,
  // Drop your resume at public/resume.pdf to enable the download link.
  resumePdf: "/resume.pdf",
  // Set once the domain is decided; used for absolute links in metadata.
  url: null as string | null,
};

// The pad: every top-level page is one numbered sheet.
export const sheets = [
  { n: 1, href: "/", label: "Index", blurb: "Who I am and what I build" },
  { n: 2, href: "/work", label: "Work", blurb: "Projects, with the decisions behind them" },
  { n: 3, href: "/writing", label: "Writing", blurb: "Engineering notes and write-ups" },
  { n: 4, href: "/resume", label: "Resume", blurb: "Experience, education, and a PDF" },
] as const;

export const pad = (n: number) => String(n).padStart(2, "0");
