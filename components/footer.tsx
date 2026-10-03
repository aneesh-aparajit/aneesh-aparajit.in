"use client";

import { usePathname } from "next/navigation";
import { site, sheets, pad, sheetFor } from "@/lib/site";

export function Footer() {
  const current = sheetFor(usePathname());

  return (
    <footer className="foot">
      <span className="label">{site.name}</span>
      <span className="label">
        Sheet {pad(current.n)} of {pad(sheets.length)}
      </span>
    </footer>
  );
}
