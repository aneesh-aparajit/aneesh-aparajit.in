"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const KEY = "theme";

// Runs in <head> before first paint so a saved dark choice never flashes light.
export const themeScript = `try{if(localStorage.getItem("${KEY}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

// Server-only: the script ships in the HTML and runs before first paint. On the
// client it renders nothing, so React never creates a <script> element (which it
// warns about and would not execute anyway); React 19 skips the extra <head> node
// during hydration.
export function ThemeScript() {
  if (typeof window !== "undefined") return null;
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

function read(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

// A title-block cell that flips the page between daylight and lamplight.
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, read, () => "light" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Private mode or blocked storage: the switch still works for this visit.
    }
  }

  return (
    <button type="button" onClick={toggle} aria-label={`Switch to ${next} theme`}>
      <span className="label">Theme</span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
