---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/work/page.tsx","app/blogs/page.tsx","app/resume/page.tsx"]
---

# Surface brief: site (home, work, blogs, resume)

## Scope and mode

The whole site, built in one visual world. The home page is **Persuade**, but quietly: a recruiter decides whether to get in touch, and an engineer decides whether to read. Post pages are **Read**. Routes are `/`, `/work`, `/blogs`, `/blogs/[slug]` and `/resume`.

## Audience, job, action

- Recruiters skim for 30 seconds. They should leave with "backend engineer, SDE 2 at Directi" and email, or open the resume.
- Engineers arrive on a post, read it, then look at what else exists.
- Proof is real repos and posts. Until the owner supplies them, content is clearly marked as placeholder. Employers, metrics and dates are never invented.
- The owner is primarily a backend engineer. The design must stay plain and functional, so that no visitor reads it as a frontend showcase.

## Direction contract

THESIS: The classic minimal engineer site (one reading column of name, intro, links and plain lists), drawn on an engineering computation pad. It refuses both the showy frontend portfolio (hero, cards, motion) and the anonymous white template.

OWN-WORLD:
- A pale blue-grey computation-pad sheet with a faint full-bleed 1.5rem grid (major lines every 5 units). Ink is graphite; links are blue-black, with a thin underline.
- The header is one ruled title-block strip of labelled cells (NAME / 02 Work / 03 Blogs / 04 Resume; sheet numbers close up when blogs are turned off).
- Section headings are small condensed uppercase labels over a ruled line.
- Lists are separated by hairlines.
- Dates and sheet numbers are in Atkinson Mono. Sheet numbers hang in the left margin outside the column.
- There are no cards, shadows, gradients, rounded corners or display type.
- Dark mode is the same pad under a desk lamp: deep blue-black with a dim grid. Light is the default; a Theme cell at the end of the header strip switches to dark and remembers the choice.

STORY: Visitors learn who this is and that he is backend-first, see real writing and projects in plain lists, then email, open GitHub or the resume, or read a post.

FIRST VIEWPORT:
- A centred column about 42rem wide holds the ruled header strip, then "Hi, I'm Aneesh." at about 2rem.
- Below that is a one-sentence intro stating "backend engineer, SDE 2 at Directi", then an inline links row: Email, GitHub, LinkedIn and Resume PDF, with pending ones shown as "soon".
- The Blogs list begins at the fold when blogs are enabled; otherwise Projects does.
- There is no signature motion. The memorable thing is the paper itself plus the margin sheet numbers. Motion is limited to link and hover colour.

FORM:
- User-steered merge after a preview round. The structure comes from the category standard, and the material from the assigned Computation Pad direction (position 3 of 7).
- Seed key: 43e2700a.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- The owner still has to supply:
  - real projects
  - more posts
  - the resume PDF
  - the LinkedIn URL
  - the domain
  - experience dates
- Assumptions in the current build:
  - The contact email is the owner's Gmail.
  - The intro wording "I build the systems behind the product" is a draft for the owner to confirm.
