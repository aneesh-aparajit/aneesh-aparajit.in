import type { Metadata } from "next";
import { Links } from "@/components/links";
import { SectionHead, CvList } from "@/components/lists";
import { site } from "@/lib/site";
import { experience, education, skills, achievements } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name}: backend engineer, ${site.role} at ${site.company}.`,
};

export default function Resume() {
  return (
    <>
      <section className="intro">
        <h1 className="title">Resume</h1>
        <p className="lede">
          {site.role} at {site.company}, working on the backend.
        </p>
        <Links />
      </section>

      <section className="section" aria-label="Experience">
        <SectionHead title="Experience" />
        <CvList items={experience} prefix="04" />
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
        <CvList items={education} prefix="04" start={experience.length} />
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
