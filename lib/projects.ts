export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  year: string;
  repo?: string;
  live?: string;
  // The margin note: one engineering decision and what it cost.
  decision?: { choice: string; tradeoff: string };
  // Placeholder entries render as visibly unfilled sheets. Remove the flag once real.
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "www",
    name: "www",
    summary:
      "This site: a portfolio and engineering blog laid out like a pad of computation sheets.",
    stack: ["Next.js", "TypeScript", "MDX"],
    year: "2026",
    repo: "https://github.com/aneesh-aparajit/www",
    decision: {
      choice: "Next.js with every page statically generated.",
      tradeoff:
        "More framework than a static site strictly needs, in exchange for MDX posts and room to grow.",
    },
  },
  {
    slug: "placeholder-1",
    name: "Your next project",
    summary:
      "Placeholder. Add a real project in lib/projects.ts: what it does, who used it, and what was hard.",
    stack: ["Stack"],
    year: "Year",
    decision: {
      choice: "The one decision worth explaining.",
      tradeoff: "What it cost, and why it was still right.",
    },
    placeholder: true,
  },
  {
    slug: "placeholder-2",
    name: "Another project",
    summary: "Placeholder. Link the repository so readers can inspect the code.",
    stack: ["Stack"],
    year: "Year",
    placeholder: true,
  },
];
