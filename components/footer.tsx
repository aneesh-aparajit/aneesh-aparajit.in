import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="foot">
      <span className="foot-mark label" aria-hidden="true">
        End
      </span>
      <div className="foot-body">
        <span>{site.name}</span>
        <span className="label">Built with Next.js</span>
      </div>
      <div className="foot-links">
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {site.linkedin && (
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </footer>
  );
}
