import Image from "next/image";
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
      <section className="intro intro-with-photo">
        <h1 className="title">{site.name}.</h1>
        <p className="lede">{site.statement}</p>
        <Links />
        <Image
          className="avatar"
          src={site.avatar.src}
          alt={site.avatar.alt}
          width={460}
          height={460}
          sizes="(max-width: 40rem) 72px, 144px"
          priority
        />
      </section>

      {flags.blogs && (
        <section className="section" aria-label="Blogs">
          <SectionHead title="Blogs" more={posts.length > 3 ? { href: "/blogs", label: "All posts" } : undefined} />
          <PostList posts={posts.slice(0, 3)} total={posts.length} compact />
        </section>
      )}

      <section className="section" aria-label="Projects">
        <SectionHead title="Projects" more={{ href: "/projects", label: "All projects" }} />
        <ProjectList projects={projects.slice(0, 3)} compact />
      </section>

      <section className="section" aria-label="Experience">
        <SectionHead title="Experience" more={{ href: "/experience", label: "Full experience" }} />
        <CvList items={experience} prefix={sheetNo("/experience")} compact href="/experience" />
      </section>
    </>
  );
}
