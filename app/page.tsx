import { Links } from "@/components/links";
import { SectionHead, PostList, ProjectList, CvList } from "@/components/lists";
import { site, sheetNo } from "@/lib/site";
import { flags } from "@/lib/flags";
import { getPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { experience } from "@/lib/resume";

export default async function Home() {
  const posts = flags.blogs ? await getPosts() : [];

  return (
    <>
      <section className="intro">
        <h1 className="title">Hi, I&apos;m {site.shortName}.</h1>
        <p className="lede">{site.statement}</p>
        <Links />
      </section>

      {flags.blogs && (
        <section className="section" aria-label="Blogs">
          <SectionHead title="Blogs" more={posts.length > 3 ? { href: "/blogs", label: "All posts" } : undefined} />
          <PostList posts={posts.slice(0, 3)} total={posts.length} compact />
        </section>
      )}

      <section className="section" aria-label="Projects">
        <SectionHead title="Projects" more={{ href: "/work", label: "All projects" }} />
        <ProjectList projects={projects.slice(0, 3)} compact />
      </section>

      <section className="section" aria-label="Experience">
        <SectionHead title="Experience" more={{ href: "/resume", label: "Full resume" }} />
        <CvList items={experience} prefix={sheetNo("/resume")} compact href="/resume" />
      </section>
    </>
  );
}
