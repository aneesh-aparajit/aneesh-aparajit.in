---
name: Computation Pad
description: One plain reading column drawn on a pale blue-grey engineering computation pad.
colors:
  stock: "#e9eff5"
  stock-deep: "#dde6ef"
  grid: "#dce5ef"
  grid-major: "#cddaea"
  rule: "#adc0d6"
  rule-strong: "#4f6a88"
  ink: "#1e2530"
  ink-soft: "#3a4553"
  ink-faint: "#525f73"
  blue: "#1c4f96"
  blue-wash: "#d3dff0"
  lamp-stock: "#10151d"
  lamp-stock-deep: "#161d27"
  lamp-grid: "#151b24"
  lamp-grid-major: "#1c2531"
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
components:
  link:
    textColor: "{colors.blue}"
  header-cell:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.25rem 1rem"
    height: "3rem"
  header-cell-hover:
    backgroundColor: "{colors.stock-deep}"
  header-cell-current:
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

The site is the classic minimal engineer page (one reading column of name, intro, links and plain lists) set down on a sheet of engineering computation paper. The paper does the designing: pale blue-grey stock, a faint full-bleed grid, graphite ink, blue-black links with a thin underline, and hairline rules. Nothing else competes with it. Content sits in a single 42rem column, and every structural mark is a 1px line.

Density is calm and editorial: generous vertical air measured in grid units, tight horizontal discipline. The memorable details are material rather than motion. The header is a ruled title-block strip of labelled cells, and each list entry carries a sheet number that hangs in the left margin outside the column, the way an engineer numbers pages. Dark mode is the same pad under a desk lamp: deep blue-black stock with a dim grid. Print drops the paper and the chrome and keeps the column.

The world deliberately refuses the showy frontend portfolio (hero, cards, motion) and the anonymous white template. It is plain on purpose, but it is drawn, not default.

**Key Characteristics:**
- One centred 42rem reading column; no multi-column layouts.
- Full-bleed 1.5rem minor grid with 7.5rem majors, registered to the column.
- Structure by 1px rules only: square corners, no shadows, no filled panels except code.
- Three voices of type: humanist sans for reading, condensed uppercase for labels, mono for numbers.
- One accent (blue-black ink) carried only by links, the current nav cell, focus and selection.
- No signature motion; only colour and underline transitions.

## Colors

Low-chroma blue-grey paper and graphite ink, with one blue-black ink for anything you can act on.

### Primary
- **Blue-Black Ink** (blue): links, link underlines (at 40% mix), the current header cell's label, focus rings, and text selection. It is the only chromatic ink.
- **Blue Wash** (blue-wash): the background of the current-page cell in the header strip. Nowhere else.

### Neutral
- **Pad Stock** (stock): the page and the header strip ground. Also the selection text colour and the browser theme colour.
- **Deep Stock** (stock-deep): the one tonal step down: header-cell hover, code blocks and inline code.
- **Minor Grid Line** (grid): 1px lines every 1.5rem across the whole viewport.
- **Major Grid Line** (grid-major): 1px lines every 7.5rem, drawn over the minor grid.
- **Hairline Rule** (rule): list-item separators, header cell dividers, footer rule, code borders, horizontal rules.
- **Strong Rule** (rule-strong): the header strip outline, section-head underlines, the post-turn rule, blockquote and decision-note left rules, list markers, and the scrollbar thumb.
- **Graphite** (ink): headings and body text.
- **Soft Graphite** (ink-soft): ledes, item descriptions, blockquotes, mono metadata.
- **Faint Graphite** (ink-faint): labels, sheet numbers, place lines, "soon" placeholders and placeholder entries. Measured 5.3:1 on stock, 4.9:1 on deep stock.

### Lamp (dark theme)
The `lamp-*` tokens are the same roles under a desk lamp, applied only when `data-theme="dark"` is set on the root. Light is the default whatever the OS prefers; the Theme cell at the end of the header strip switches modes, the choice is saved in localStorage, and a head script applies it before first paint. Roles map one to one: lamp-stock replaces stock, lamp-blue replaces blue, and so on. Never introduce a dark-only role.

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
- **Label** (Barlow Condensed 600, 0.75rem on a 1rem line, 0.09em, uppercase): section heads, header cell field names, footer, decision-note terms, previous/next markers, stack lines.
- **Mono** (0.875rem, tabular figures): dates, years, sheet numbers, reading time, code.

### Named Rules
**The No Display Face Rule.** Titles are the body family at 700. There is no separate display typeface, and no type larger than 2rem.

**The Numbers Are Mono Rule.** Any date, sheet number or count is set in the mono with tabular figures.

## Layout

The spatial unit is **u = 1.5rem**. The page background is a four-layer 1px grid: minor lines every u, major lines every 5u (7.5rem). The minor grid is positioned at `calc(50% + 0.75rem)` and the major at `calc(50% + 3.75rem)`, which puts a minor and a major line on the viewport centre and minor lines exactly on the 42rem column edges (centre ± 21rem). Registration holds whenever the viewport is wider than the full column box (45rem).

The column is 42rem of content plus 1u of padding each side, centred, with 2u (3rem) top and 5u bottom. Vertical rhythm between blocks is counted in units: intro and sections start 3u below what precedes them (2u and 2.5u on phones), post prose starts 2u below the head, prose h2 sits 2.5u down. Inside lists, entries use 1rem padding and 0.25rem row gaps.

List entries are a two-column grid: title on the left, mono meta (date or year) right-aligned on the same baseline row, and everything else spanning full width beneath.

Breakpoints:
- **≥ 52rem:** sheet numbers hang in the left margin, 4.75rem out from the column edge, right-aligned in a 3.5rem box.
- **< 52rem:** sheet numbers sit inline before the title as smaller mono prefixes (0.8125rem).
- **< 40rem:** column padding drops to 1.25rem; the header strip becomes a full-width name cell over three equal nav cells; decision notes stack; code blocks bleed to the screen edges.

Print removes the grid background, the header strip, the footer and the skip link, leaving the column.

### Named Rules
**The Registered Grid Rule.** The grid is not wallpaper: its minor lines meet the column edges. Any change to column width or grid offset must keep the column edges on grid lines.

## Elevation & Depth

The system is completely flat. There are no shadows anywhere. Depth is conveyed only by 1px rules of two weights (hairline and strong) and a single tonal step (deep stock) for hover and code. The grid background reads as the paper surface; everything sits on it, nothing floats above it.

### Named Rules
**The Drawn Not Lifted Rule.** If something needs separation, rule it. Never lift it with a shadow, blur or overlay.

## Shapes

Every corner is square (0 radius). Lines are 1px, solid for structure and dashed for anything provisional (placeholder entries and empty states). List markers are squares in strong-rule slate blue. The one icon, a drawn arrow, uses square line caps at 1.6 stroke and rotates for direction (up-right for outbound links, rotated -135deg for the back link). The favicon and Apple touch icon are the owner's avatar, resized from the same image used in the intro and the header's Name cell.

## Components

### Links
Thin, quiet, always identifiable.
- **Default:** blue-black text with a 1px underline at 0.22em offset, underline coloured at 40% blue.
- **Hover:** the underline goes to full colour (160ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`). Colour does not change.
- **Focus:** 2px solid blue outline at 2px offset (applies site-wide).
- **Outbound with arrow:** inline-flex with a 0.3em gap before the drawn arrow.
- **Pending:** a link not yet available renders as faint-graphite text ending in "· soon", not as a disabled link.

### Navigation: Title-Block Strip
The header is one ruled strip, like the title block on a drawing sheet.
- **Structure:** a 1px strong-rule outline; cells divided by hairline rules; first cell takes the remaining width, nav cells size to content.
- **Cell:** a label (field name or two-digit sheet number) stacked over a value; minimum height 2u (3rem); 0.25rem by 1rem padding. The first cell's value is bold.
- **Hover:** deep stock background (160ms).
- **Current page:** blue-wash background and blue label (not applied to the name cell).
- **Focus:** the outline is pulled inside the cell (-3px offset).
- **Phones:** the name cell spans the full width above three equal nav cells.

### Intro Avatar
The home intro carries one square image on the right: the owner's avatar, framed like a print clipped to the pad, with 0.25rem of paper inside a 1px strong rule and square corners. It spans the intro's rows at 6u wide on desktop and sits beside the title at 3u on phones. The same image also appears at 1.75rem inside the header strip's Name cell on every page, framed by a 1px hairline and marked decorative because the name sits beside it. It is the only raster on the site; nothing else gets an image, a frame or a shadow.

### Section Head
A label over a strong rule: Barlow label on the left, an optional "all" link (0.9375rem) aligned on the right baseline, 0.625rem gap to the rule.

### List Entry (signature)
The repeated unit for posts, projects and experience entries.
- **Shape:** no box; a hairline rule below each entry, 1rem vertical padding.
- **Content:** bold title (with link in blue when it leads somewhere), mono meta at top right, soft-graphite description below.
- **Sheet number:** a mono number in the form page.index hangs in the left margin (see Layout).
- **Variants:** post entry (title, date, summary); project entry (adds a status stamp after the title, a stack label line and outbound arrow links, and optionally a decision note); experience/education entry (organisation with date range; role or degree with place in faint graphite, set as one full-width row; then an optional summary sentence on the Experience page, or a one-line tagline in compact lists).
- **Placeholder:** dashed bottom rule and faint graphite text, so unconfirmed content is visibly provisional.

### Status Stamp
Project entries carry a stamp after the title, like the issue status on a drawing: a Barlow label inside a 1px rule with 0 0.375rem padding and square corners. There are four states and none of them is negative: **In progress** (commits still landing) has a dashed strong rule and soft-graphite text, following the dashed-means-provisional rule; **Released** (published for others to install) has a solid strong rule and soft-graphite text; **Complete** and **Study** (built to learn) have a hairline rule and faint-graphite text. Stamps never take blue. Statuses come from the repository history, never from guesswork.

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
- **Do** keep the minor grid registered to the column edges when changing column width or grid offset.
- **Do** separate content with 1px rules: hairline between entries, strong under section heads and around the strip.
- **Do** set every date, count and sheet number in the mono with tabular figures.
- **Do** mark unconfirmed content with dashed rules and faint graphite rather than hiding it.
- **Do** give every new colour role a lamp counterpart in both dark-theme blocks.
- **Do** keep motion to colour and underline transitions at 160ms on the ease-out curve.

### Don't:
- **Don't** add rounded corners, shadows, or soft colour gradients. The only gradients in the system are the hard-stop 1px grid lines.
- **Don't** box list entries into cards or filled panels; filled backgrounds are limited to the header strip's states and code.
- **Don't** introduce a display typeface or type larger than 2rem.
- **Don't** use blue-black for anything that is not interactive or the current location.
- **Don't** add entrance, scroll or hover motion beyond colour and underline transitions.
- **Don't** put a label above a page or post title; labels name fields, sections and sheet positions, never introduce headlines.
