import { ViewTransition, type ReactNode } from "react";

// One page of the pad. On navigation the outgoing sheet tears off
// while the next one is already underneath.
export function Sheet({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="sheet-under" exit="tear-off" default="none">
      <main id="main" className="sheet">
        {children}
      </main>
    </ViewTransition>
  );
}

// A row of the sheet: a mark in the margin, the work beside it.
export function Row({
  mark,
  label,
  children,
}: {
  mark?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <section className="row" aria-label={label}>
      <span className="row-mark" aria-hidden="true">
        {mark}
      </span>
      <div className="row-body">{children}</div>
    </section>
  );
}
