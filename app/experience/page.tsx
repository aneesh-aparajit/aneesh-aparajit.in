import type { Metadata } from "next";
import { Links } from "@/components/links";
import { SectionHead, CvList } from "@/components/lists";
import { site, sheetNo } from "@/lib/site";
import { experience, education, skills, achievements } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Experience",
  description: `${site.name}: backend engineer, ${site.role} at ${site.company}.`,
};

export default function Experience() {
  return (
    <>
      <section className="intro">
        <h1 className="title">Experience</h1>
        <p className="lede">
          Where I have been and what I built there. Mostly backend, sometimes a search index, occasionally a model, always a retry policy.
        </p>
        <Links />
      </section>

      <section className="section" aria-label="Roles">
        <SectionHead title="Roles" />
        <CvList items={experience} prefix={sheetNo("/experience")} />
      </section>

      <section className="section" aria-label="Skills">
        <SectionHead title="Skills" />
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group} style={{ display: "contents" }}>
              <dt className="label">{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" aria-label="Education">
        <SectionHead title="Education" />
        <CvList items={education} prefix={sheetNo("/experience")} start={experience.length} />
      </section>

      <section className="section" aria-label="Achievements">
        <SectionHead title="Achievements" />
        <ul className="plain-list">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
