import type { Metadata } from "next";
import { SectionHead, ProjectList } from "@/components/lists";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects, with the engineering decisions behind them.",
};

export default function Work() {
  return (
    <>
      <section className="intro">
        <h1 className="title">Work</h1>
        <p className="lede">
          Things I have built, newest first.
        </p>
      </section>

      <section className="section" aria-label="Projects">
        <SectionHead title="Projects" />
        <ProjectList projects={projects} notes />
      </section>
    </>
  );
}
