import fs from "node:fs";
import path from "node:path";
import { site } from "@/lib/site";
import { Arrow } from "./arrow";

export function hasResumePdf() {
  return fs.existsSync(path.join(process.cwd(), "public", site.resumePdf));
}

// The contact strip, set as title-block cells.
export function Actions({ only }: { only?: ("resume" | "email" | "github" | "linkedin")[] }) {
  const show = (k: string) => !only || only.includes(k as never);
  const pdf = hasResumePdf();

  return (
    <div className="actions">
      {show("resume") &&
        (pdf ? (
          <a className="cell primary" href={site.resumePdf} download>
            <span className="label">Resume</span>
            <span className="cell-value">
              Download PDF <Arrow className="down" />
            </span>
          </a>
        ) : (
          <div className="cell pending" title="Add public/resume.pdf to enable">
            <span className="label">Resume</span>
            <span className="cell-value">PDF coming soon</span>
          </div>
        ))}
      {show("email") && (
        <a className={`cell${pdf ? "" : " primary"}`} href={`mailto:${site.email}`}>
          <span className="label">Email</span>
          <span className="cell-value">{site.email}</span>
        </a>
      )}
      {show("github") && (
        <a className="cell" href={site.github} target="_blank" rel="noreferrer">
          <span className="label">GitHub</span>
          <span className="cell-value">
            aneesh-aparajit <Arrow />
          </span>
        </a>
      )}
      {show("linkedin") && !site.linkedin && (
        <div className="cell pending" title="Set linkedin in lib/site.ts to enable">
          <span className="label">LinkedIn</span>
          <span className="cell-value">Profile coming soon</span>
        </div>
      )}
      {show("linkedin") && site.linkedin && (
        <a className="cell" href={site.linkedin} target="_blank" rel="noreferrer">
          <span className="label">LinkedIn</span>
          <span className="cell-value">
            Profile <Arrow />
          </span>
        </a>
      )}
    </div>
  );
}
