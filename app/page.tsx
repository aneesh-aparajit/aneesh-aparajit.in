import { SectionHead, PostList, ProjectSchedule, CvList, AchievementList } from "@/components/lists";
import { sheetNo } from "@/lib/site";
import { flags } from "@/lib/flags";
import { getPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { experience, achievements } from "@/lib/resume";

// The name, intro and contact links live in the title-block rail; the index
// sheet is the schedule of work.
export default async function Home() {
  const posts = flags.blogs ? await getPosts() : [];

  return (
    <>
      <section className="section section-first" aria-label="Projects">
        <SectionHead title="Project schedule" more={{ href: "/projects", label: `All ${projects.length} projects` }} />
        <ProjectSchedule projects={projects.slice(0, 5)} compact />
      </section>

      {flags.blogs && (
        <section className="section" aria-label="Blogs">
          <SectionHead title="Blogs" more={posts.length > 3 ? { href: "/blogs", label: "All posts" } : undefined} />
          <PostList posts={posts.slice(0, 3)} total={posts.length} compact />
        </section>
      )}

      <div className="pair">
        <section className="section" aria-label="Experience">
          <SectionHead title="Experience" more={{ href: "/experience", label: "Full experience" }} />
          <CvList items={experience} prefix={sheetNo("/experience")} compact href="/experience" />
        </section>
        <section className="section" aria-label="Recognition">
          <SectionHead title="Recognition" />
          <AchievementList items={achievements} />
        </section>
      </div>
    </>
  );
}
