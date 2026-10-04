import type { Metadata } from "next";
import { SectionHead, ProjectList } from "@/components/lists";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Side projects, newest first.",
};

export default function Work() {
  return (
    <>
      <section className="intro">
        <h1 className="title">Work</h1>
        <p className="lede">
          Things I built when I probably should have been asleep. Models that learned in secret, crawlers that asked Reddit nicely, and tools that write the boring code so 3 a.m. me doesn&apos;t have to.
        </p>
      </section>

      <section className="section" aria-label="Projects">
        <SectionHead title="Projects" />
        <ProjectList projects={projects} notes />
      </section>
    </>
  );
}
