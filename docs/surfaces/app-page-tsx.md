---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/work/page.tsx","app/writing/page.tsx","app/resume/page.tsx"]
---

# Surface brief: site (home, work, writing, resume)

## Scope and mode

The whole site skeleton built in one visual world. The home page is **Persuade**: a recruiter decides whether to get in touch, and an engineer decides whether to read. Post pages are **Read**. Routes: `/` (index sheet), `/work`, `/writing`, `/writing/[slug]`, `/resume`.

## Audience, job, action

- Recruiters skim for 30 seconds. They should leave with "SDE 2 at Directi, builds X" and open the resume PDF or send an email.
- Engineers arrive on a post, read it, then check what else exists.
- Proof is real repos and posts. Until the owner supplies them, content is clearly marked placeholder; no invented employers, metrics or dates.

## Direction contract

THESIS: The site is a pad of worked engineering computation sheets, each page one sheet with its title block filled in. It refuses both the hero-plus-card-grid dev portfolio and the bare text page.

OWN-WORLD: Pale green computation-pad stock with a faint 5mm grid inside a ruled work area, plus a left margin column for numbers and notes. Every sheet opens with a ruled title block whose cells (NAME, ROLE, SHEET n OF N, DATE) carry small condensed uppercase labels. Text is graphite ink; links and marks are blue-black ink. Rules are hairlines in grid green. Shadows, gradients and rounded cards are not allowed, and every block sits on whole grid units. In dark mode the same pad sits under a desk lamp: deep green-black stock with a dimmed grid.

STORY: The visitor learns who this is and what they build, sees that they ship and write (numbered sheets, a dated log), then opens the resume, emails, or reads a post.

FIRST VIEWPORT: A full-width title block serves as the header, with its cells as nav: Index, Work, Writing, Resume, plus the sheet number. The margin column carries "01". The work area holds a 2–3 line plain statement of what the owner builds, at display size, on the grid. Directly beneath it, the action row of Resume PDF, Email, GitHub and LinkedIn is set as ruled title-block cells; this is the primary action. The sheet index starts at the fold edge.

SIGNATURE INTERACTION: Moving between pages tears the current sheet off the pad. A view transition lifts the outgoing sheet up and away with a slight rotation while the next sheet is already underneath. Hovering or focusing an index row draws a leader line from its margin number to the row. Both are cut under reduced motion.

FORM: Engineering computation pad, position 3 of 7 on the ordered grounded list; seed key 43e2700a.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises from declined challengers

- Signal Bench: every block lands on the 5mm grid.
- Minihompy Room: a dated sheet log on the home page shows recent writing and shipping.
- Annotated Code: project entries carry margin notes on leader lines naming a decision and its trade-off.
- Lotería Tabla: projects and posts are numbered and named together, never cropped or truncated.

## Unresolved

- Real projects, posts, resume PDF, LinkedIn URL and domain are still to come from the owner.
- Contact email is assumed to be the owner's Gmail until confirmed.
