---
name: Computation Pad
description: A drawing sheet on a pale blue-grey engineering computation pad, with a title-block rail beside the work.
colors:
  stock: "#e9eff5"
  stock-deep: "#dde6ef"
  grid: "rgb(79 106 136 / 0.16)"
  grid-major: "rgb(79 106 136 / 0.3)"
  rule: "#adc0d6"
  rule-strong: "#4f6a88"
  ink: "#1e2530"
  ink-soft: "#3a4553"
  ink-faint: "#525f73"
  blue: "#1c4f96"
  blue-wash: "#d3dff0"
  lamp-stock: "#10151d"
  lamp-stock-deep: "#161d27"
  lamp-grid: "rgb(143 156 176 / 0.08)"
  lamp-grid-major: "rgb(143 156 176 / 0.16)"
  lamp-rule: "#2d3a4c"
  lamp-rule-strong: "#5b7593"
  lamp-ink: "#dde5ef"
  lamp-ink-soft: "#b4c0cf"
  lamp-ink-faint: "#8f9cb0"
  lamp-blue: "#9cc0ea"
  lamp-blue-wash: "#1a2a40"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: "3rem"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.6
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-prose:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.09em"
  mono:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    fontFeature: "tnum"
  display-sm:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: "2.25rem"
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
  body-sm:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  mono-sm:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  hair: "0.25rem"
  item: "1rem"
  u: "1.5rem"
  u2: "3rem"
  u3: "4.5rem"
  u5: "7.5rem"
  column: "42rem"
  rail: "19.5rem"
  sheet: "87rem"
components:
  link:
    textColor: "{colors.blue}"
  rail-cell:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
  rail-cell-hover:
    backgroundColor: "{colors.stock-deep}"
  rail-cell-current:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.ink}"
  list-item:
    textColor: "{colors.ink}"
    padding: "1rem 0"
  section-head:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    padding: "0 0 0.625rem"
  code-block:
    backgroundColor: "{colors.stock-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
  inline-code:
    backgroundColor: "{colors.stock-deep}"
    rounded: "{rounded.none}"
    padding: "0.05em 0.3em"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    padding: "0.25rem 0.75rem"
---

# Design System: Computation Pad

## Overview

**Creative North Star: "The Computation Pad"**

The site is the classic minimal engineer page (name, intro, links and plain lists) set down on a sheet of engineering computation paper. The paper does the designing: pale blue-grey stock with a fine paper grain, a faint polar plot fixed behind the sheet, graphite ink, blue-black links with a thin underline, and hairline rules. Nothing else competes with it. Every structural mark is a 1px line. The sheet is laid out like a drawing: a title-block rail on the left says who this is and indexes the sheets, and the body on the right carries the work, with prose held to a 42rem measure.

Density is calm and editorial: generous vertical air measured in grid units, tight horizontal discipline. The memorable details are material rather than motion. The title block is a ruled rail of labelled fields that stays beside the work as you scroll, projects are listed as a ruled schedule, and every entry carries a sheet number the way an engineer numbers pages. Dark mode is the same pad under a desk lamp: deep blue-black stock with a dimmer polar plot and a pale grain. Print drops the paper and the rail and keeps the body.

The world deliberately refuses the showy frontend portfolio (hero, cards, motion) and the anonymous white template. It is plain on purpose, but it is drawn, not default.

**Key Characteristics:**
- A 13u title-block rail beside a 42u body; prose and project sheets keep a 42rem measure inside the body.
- A polar plot fixed to the viewport (rings every 1.5rem, a heavier ring every 7.5rem, spokes every 15°) that the sheet scrolls over, fading out past 18u, on a fractal-noise paper grain.
- Structure by 1px rules only: square corners, no shadows, no filled panels except code.
- Three voices of type: humanist sans for reading, condensed uppercase for labels, mono for numbers.
- One accent (blue-black ink) carried only by links, the current nav cell, focus and selection.
- No signature motion; only colour and underline transitions.

## Colors

Low-chroma blue-grey paper and graphite ink, with one blue-black ink for anything you can act on.

### Primary
- **Blue-Black Ink** (blue): links, link underlines (at 40% mix), the current index cell's label, focus rings, and text selection. It is the only chromatic ink.
- **Blue Wash** (blue-wash): the background of the current-page cell in the title-block rail. Nowhere else.

### Neutral
- **Pad Stock** (stock): the page and the title-block rail ground. Also the selection text colour and the browser theme colour.
- **Deep Stock** (stock-deep): the one tonal step down: rail-cell hover, schedule row hover, code blocks and inline code.
- **Minor Polar Line** (grid): 1px rings every 1.5rem on the polar plot. Alpha over stock, so it stays faint wherever it crosses.
- **Major Polar Line** (grid-major): 1px rings every 7.5rem and the 15° spokes.
- **Paper Grain** (`--grain`, not a colour role): a 180px SVG fractal-noise tile, ink-tinted at 9% alpha in light and pale at 6% under the lamp. It gives the stock tooth; it never carries information.
- **Hairline Rule** (rule): list-item and schedule-row separators, rail field dividers, footer rule, code borders, horizontal rules.
- **Strong Rule** (rule-strong): the rail outline, avatar frame, section-head underlines, the post-turn rule, blockquote and decision-note left rules, list markers, and the scrollbar thumb.
- **Graphite** (ink): headings and body text.
- **Soft Graphite** (ink-soft): ledes, item descriptions, blockquotes, mono metadata.
- **Faint Graphite** (ink-faint): labels, sheet numbers, place lines, "soon" placeholders and placeholder entries. Measured 5.3:1 on stock, 4.9:1 on deep stock.

### Lamp (dark theme)
The `lamp-*` tokens are the same roles under a desk lamp, applied only when `data-theme="dark"` is set on the root. Light is the default whatever the OS prefers; the Theme cell at the foot of the title-block rail switches modes, the choice is saved in localStorage, and a head script applies it before first paint. Roles map one to one: lamp-stock replaces stock, lamp-blue replaces blue, and so on. Never introduce a dark-only role.

### Named Rules
**The One Ink Rule.** Blue-black is reserved for interaction (links, current location, focus, selection). Static text, rules and labels stay in the blue-graphite family.

**The Paper Is the Palette Rule.** Every neutral is a step of the same pale blue-grey sheet or its graphite. No white, no grey, no second hue.

## Typography

**Body Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, system-ui)
**Label Font:** Barlow Condensed 600 (with Arial Narrow)
**Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace)

**Character:** A legibility-first humanist sans carries everything readable; a condensed uppercase face does the job of lettering on a title block; a matching mono sets every date and number in tabular figures.

### Hierarchy
- **Display** (700, 2rem on a 3rem line, -0.02em; 1.75rem on 2.25rem below 40rem): the page title and post title. Balanced wrapping. It is the largest type on the site.
- **Headline** (700, 1.375rem, 1.4): h2 inside post prose.
- **Title** (700, 1.0625rem): list-entry titles; prose h3 runs slightly larger (1.1875rem).
- **Body** (400, 1.0625rem, 1.6): interface text; ledes cap at 34em, item descriptions at 36em.
- **Body Prose** (400, 1.125rem, 1.75; 1.0625rem on phones): post bodies, with 1.25rem between blocks.
- **Label** (Barlow Condensed 600, 0.75rem on a 1rem line, 0.09em, uppercase): section heads, rail field names, schedule column heads, footer, decision-note terms, previous/next markers, stack lines.
- **Mono** (0.875rem, tabular figures): dates, years, sheet numbers, reading time, code.

### Named Rules
**The No Display Face Rule.** Titles are the body family at 700. There is no separate display typeface, and no type larger than 2rem.

**The Numbers Are Mono Rule.** Any date, sheet number or count is set in the mono with tabular figures.

## Layout

The spatial unit is **u = 1.5rem**. The page background is the grain tile on stock, with a polar plot on a fixed `body::after` behind everything: hard-stop repeating radial gradients for rings every u and every 5u, and a repeating conic gradient for spokes every 15°, all centred at `--polar-at` (72% 58% of the viewport). A radial mask keeps the plot solid to 18u from the centre and fades it out by 30u, so it reads as an instrument face lying under the sheet rather than wallpaper. Because it is fixed, the work scrolls across it. The polar plot replaced a full-bleed Cartesian line grid that read as busy, flat and dated; there is no longer a background grid for edges to register to, but every width and figure is still measured in whole u.

The sheet is 58u (87rem) of content plus 1u of padding each side, centred, with 2u top and 5u bottom. Inside it sit a 13u (19.5rem) title-block rail, a 3u gap and a 42u body. Every one of those widths is whole u and the sheet is centred on a grid line, so the sheet edges, the rail's right edge and the body's left edge all fall on whole-u positions from the centre. Below 90rem the sheet goes fluid.

Inside the body, posts and project sheets keep the 42rem reading measure; lists and the schedule use the full body width, with descriptions capped at 36em. Every sheet starts level with the top of the rail. Vertical rhythm between blocks is counted in units: sections start 3u below what precedes them (2.5u on phones), post prose starts 2u below the head, prose h2 sits 2.5u down. Inside lists, entries use 1rem padding and 0.25rem row gaps.

List entries are a two-column grid: title on the left, mono meta (date, year or figure) right-aligned on the same baseline row, and everything else spanning full width beneath. On the index sheet, Experience and Recognition sit side by side as a pair, 2u apart.

Breakpoints:
- **≥ 80rem:** the schedule shows its Stack column, and the index sheet's pair sits side by side.
- **60–80rem:** the Stack column drops out and the pair stacks.
- **≥ 60rem:** the rail is sticky 2u from the top (it scrolls inside itself if the window is shorter than it), and sheet numbers hang in the gap between rail and body, 4.75rem out from the body edge, right-aligned in a 3.5rem box (inline inside the pair, which has no margin to hang into).
- **< 60rem:** the sheet becomes one 42rem column with 1.25rem padding; the rail sits on top and stops following the page; its index and theme cells become one strip of label-over-value cells; sheet numbers sit inline before titles at 0.8125rem; schedule rows become blocks (number, stamp and year on one row, then the project, then the stack).
- **< 40rem:** titles drop to 1.75rem; decision notes stack; code blocks and figures bleed to the screen edges.

Print removes the grain and the polar plot, the rail, the footer and the skip link, leaving the body.

### Named Rules
**The Whole-Unit Rule.** Every width, gap and figure dimension is a whole number of u. The polar plot is the one background mark, and it stays behind the work: figures sit on a plain grained stock plate so its lines never run through a drawing.

## Elevation & Depth

The system is completely flat. There are no shadows anywhere. Depth is conveyed only by 1px rules of two weights (hairline and strong) and a single tonal step (deep stock) for hover and code. The grained stock reads as the paper surface and the polar plot as a faint instrument face beneath it; everything sits on it, nothing floats above it.

### Named Rules
**The Drawn Not Lifted Rule.** If something needs separation, rule it. Never lift it with a shadow, blur or overlay.

## Shapes

Every corner is square (0 radius). Lines are 1px, solid for structure and dashed for anything provisional (placeholder entries and empty states). List markers are squares in strong-rule slate blue. The one icon, a drawn arrow, uses square line caps at 1.6 stroke and rotates for direction (up-right for outbound links, rotated -135deg for the back link). The favicon and Apple touch icon are the owner's avatar, resized from the same image that heads the title-block rail.

## Components

### Links
Thin, quiet, always identifiable.
- **Default:** blue-black text with a 1px underline at 0.22em offset, underline coloured at 40% blue.
- **Hover:** the underline goes to full colour (160ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`). Colour does not change.
- **Focus:** 2px solid blue outline at 2px offset (applies site-wide).
- **Outbound with arrow:** inline-flex with a 0.3em gap before the drawn arrow.
- **Pending:** a link not yet available renders as faint-graphite text ending in "· soon", not as a disabled link.

### Title-Block Rail
The title block of the drawing, set down the left side of every sheet in place of a top header.
- **Structure:** a 1px strong-rule outline on stock, in four fields divided by hairline rules: who (avatar and name, then the statement in soft graphite at 0.9375rem), facts (a label/value list: Role, At, Write, Code, Profile), the sheet index, and the theme cell.
- **Name:** bold 1.5rem. On the index sheet it is the page's h1; on every other sheet it is a plain line linking home, and the sheet's own title is the h1.
- **Index cells:** one row each, a two-digit sheet-number label in a 2u column beside the sheet name, minimum height 2u. Index itself is listed as sheet 01.
- **Theme cell:** the last row, label left and value right.
- **Hover:** deep stock background (160ms). **Current page:** blue-wash background and blue label. **Focus:** the outline is pulled inside the cell (-3px offset).
- **Phones:** the rail sits on top. Inner sheets keep only avatar and name; the index sheet also keeps the statement and the contact links (Role and At drop, since the statement says them). Index and theme cells become one strip of equal cells, label over value.

### Avatar
The owner's avatar heads the rail on every sheet, framed like a print clipped to the pad: 3u square with 0.1875rem of paper inside a 1px strong rule and square corners (3rem on phones). It is marked decorative because the name sits beside it. It is the only raster on the site; nothing else gets an image, a frame or a shadow. Project figures are line drawings, not images (see Project Figure).

### Section Head
A label over a strong rule: Barlow label on the left, an optional "all" link (0.9375rem) aligned on the right baseline, 0.625rem gap to the rule.

### Project Schedule (signature)
Projects are listed as a ruled table, like the schedule on a drawing: columns No., Project, Status, Stack and Year under label-face column heads and a hairline. Each row holds the sheet number in faint mono; the project name in bold blue linking to its sheet, with its description beneath (the tagline on the index sheet; the summary, source links and any decision note on the Projects sheet); the status stamp; the stack as a label line; and the year in mono, right-aligned. Rows are divided by hairlines and take a faint deep-stock wash on hover. On the Projects sheet each row is an anchor target.

### List Entry
The repeated unit for posts, experience and recognition entries.
- **Shape:** no box; a hairline rule below each entry, 1rem vertical padding.
- **Content:** bold title (with link in blue when it leads somewhere), mono meta at top right, soft-graphite description below.
- **Sheet number:** a mono number in the form page.index hangs in the gap beside the rail (see Layout).
- **Variants:** post entry (title, date, summary); recognition entry (title, with a year or figure as the meta only when the fact states one, then one line of detail); experience/education entry (organisation with date range; role or degree with place in faint graphite, set as one full-width row; then an optional summary sentence on the Experience page, or a one-line tagline in compact lists).
- **Placeholder:** dashed bottom rule and faint graphite text, so unconfirmed content is visibly provisional.

### Status Stamp
Project schedule rows carry a stamp in their Status column (and project sheets in their meta row), like the issue status on a drawing: a Barlow label inside a 1px rule with 0 0.375rem padding and square corners. There are four states and none of them is negative: **In progress** (commits still landing) has a dashed strong rule and soft-graphite text, following the dashed-means-provisional rule; **Released** (published for others to install) has a solid strong rule and soft-graphite text; **Complete** and **Study** (built to learn) have a hairline rule and faint-graphite text. Stamps never take blue. Statuses come from the repository history, never from guesswork.

### Project Sheet
Each project has its own sheet at `/projects/<slug>`, reached from the project's title in any list. It follows the post layout: back link, title, a meta row (status stamp, year, sheet number), the tagline as lede, the project figure, the summary in prose, then a Specification section (a grouped term list of status with its meaning, stack and source links, plus the decision note when there is one) and a Previous/Next turn through the projects.

### Project Figure
The one visual on a project sheet: a schematic of how the project works, drawn as inline SVG in the pad's own inks, like a figure on a computation sheet.
- **Grid:** drawn in units of u and exactly 28u (the 42rem column) wide, matching the column. The drawing sits on a plain plate of stock and grain, so the polar plot never crosses it. Lines are offset half a pixel and use non-scaling strokes, so every line stays 1px.
- **Marks:** boxes in strong rule with no fill; wires and open chevron arrowheads in faint graphite; deep stock is the only fill (tokens, table header cells, a chosen value). Dashed boxes are designed but not built, and a cross marks something the design refuses.
- **Type:** box titles in the body face at 700, sublabels and annotations in the label face, numbers in the mono.
- **Caption:** a hairline rule, then "Fig. NN.N" as a label beside a soft-graphite sentence; it stacks on phones.
- **Phones:** the drawing keeps a 34rem minimum width and scrolls sideways, bled to the screen edges like code blocks.
- **Honesty:** a figure draws only what the project's summary states. No invented numbers, sample data or components.

### Decision Note
A two-column definition list hung off a 1px strong left rule: label terms on the left, soft-graphite answers on the right, 0.9375rem at 1.5 line height. Stacks to one column on phones.

### Grouped Term List
A two-column definition list with label terms and soft-graphite descriptions, closed by a hairline rule.

### Prose
Post body: square bullets and decimal numbers with strong-rule markers; blockquotes as a 1u indent behind a strong left rule in soft graphite; inline code on deep stock with a hairline border; code blocks on deep stock with a hairline border and 1rem by 1.25rem padding, full bleed on phones; horizontal rules as hairlines with 2u of space.

### Post Turn
Previous/next navigation under a strong rule: two columns, each a label over an underlined title; "next" sits right-aligned in the second column.

### Footer
A hairline rule, then two labels: the name on the left, "Sheet NN of NN" on the right.

## Do's and Don'ts

### Do:
- **Do** measure vertical spacing in units of 1.5rem (u, 2u, 3u, 5u).
- **Do** keep every width, gap and figure dimension in whole u, and keep figures on their plain stock plate.
- **Do** separate content with 1px rules: hairline between entries, strong under section heads and around the rail.
- **Do** set every date, count and sheet number in the mono with tabular figures.
- **Do** mark unconfirmed content with dashed rules and faint graphite rather than hiding it.
- **Do** give every new colour role a lamp counterpart in both dark-theme blocks.
- **Do** keep motion to colour and underline transitions at 160ms on the ease-out curve.

### Don't:
- **Don't** add rounded corners, shadows, or soft colour gradients. The only gradients in the system are the hard-stop 1px lines of the polar plot and the mask that fades it out.
- **Don't** box list entries into cards or filled panels; filled backgrounds are limited to the rail's cell states, schedule row hover and code.
- **Don't** introduce a display typeface or type larger than 2rem.
- **Don't** use blue-black for anything that is not interactive or the current location.
- **Don't** add entrance, scroll or hover motion beyond colour and underline transitions.
- **Don't** put a label above a page or post title; labels name fields, sections and sheet positions, never introduce headlines.
