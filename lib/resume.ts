export type CvItem = { when: string; title: string; org: string; body?: string; placeholder?: boolean };

export const experience: CvItem[] = [
  {
    when: "Start – Present",
    title: "Software Development Engineer 2",
    org: "Directi",
    body: "Placeholder. Add a start date and two or three lines on what you own and what you shipped.",
  },
  {
    when: "Dates",
    title: "Earlier role",
    org: "Company",
    body: "Placeholder. Add earlier roles or internships in lib/resume.ts, or delete this entry.",
    placeholder: true,
  },
];

export const education: CvItem[] = [
  {
    when: "Years",
    title: "Degree",
    org: "Institution",
    body: "Placeholder. Add your degree in lib/resume.ts.",
    placeholder: true,
  },
];
