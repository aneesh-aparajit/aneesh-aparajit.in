// Things shipped or started, newest first. Posts are added to the log automatically.
export type LogEntry = { date: string; kind: "Shipped" | "Started" | "Wrote"; text: string; href?: string };

export const log: LogEntry[] = [
  { date: "2026-10-04", kind: "Started", text: "This site, as a pad of computation sheets", href: "/work" },
];
