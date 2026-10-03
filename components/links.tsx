import { site } from "@/lib/site";

// Contact links. LinkedIn shows as "soon" until its URL is set.
export function Links() {
  return (
    <p className="links">
      <a href={`mailto:${site.email}`}>Email</a>
      <a href={site.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      {site.linkedin ? (
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      ) : (
        <span className="soon">LinkedIn · soon</span>
      )}
    </p>
  );
}
