"use client";

import { usePathname } from "next/navigation";
import { site, sheets, pad, sheetFor } from "@/lib/site";

export function Footer() {
  const current = sheetFor(usePathname());

  return (
    <footer className="foot">
      <span className="label">{site.name}</span>
      <span className="label">
        {/* A page that isn't on the pad gets its status code for a sheet number. */}
        Sheet {current ? pad(current.n) : "404"} of {pad(sheets.length)}
      </span>
    </footer>
  );
}
