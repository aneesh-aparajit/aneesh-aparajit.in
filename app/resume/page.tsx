import type { Metadata } from "next";
import { Sheet, Row } from "@/components/sheet";
import { Actions } from "@/components/actions";
import { site } from "@/lib/site";
import { experience, education } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name}: ${site.role} at ${site.company}.`,
};

export default function Resume() {
  return (
    <Sheet>
      <Row mark="04" label="Resume">
        <h1 className="page-title">Resume</h1>
        <p className="lede">
          {site.role} at {site.company}. The full history is below, and the PDF has the same content.
        </p>
        <Actions only={["resume", "email", "linkedin"]} />
      </Row>

      <Row label="Experience">
        <h2 className="section-title">Experience</h2>
        <ol className="cv">
          {experience.map((x) => (
            <li key={`${x.org}-${x.title}`} className={`cv-item${x.placeholder ? " placeholder" : ""}`}>
              <span className="cv-when mono">{x.when}</span>
              <div>
                <h3 className="cv-what">{x.title}</h3>
                <p className="cv-where">{x.org}</p>
                {x.body && <p className="cv-body">{x.body}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Row>

      <Row label="Education">
        <h2 className="section-title">Education</h2>
        <ol className="cv">
          {education.map((x) => (
            <li key={`${x.org}-${x.title}`} className={`cv-item${x.placeholder ? " placeholder" : ""}`}>
              <span className="cv-when mono">{x.when}</span>
              <div>
                <h3 className="cv-what">{x.title}</h3>
                <p className="cv-where">{x.org}</p>
                {x.body && <p className="cv-body">{x.body}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Row>
    </Sheet>
  );
}
