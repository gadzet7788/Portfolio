# DIKSHA — Master Build Plan

> **Project:** Personal portfolio website
> **Client:** Diksha
> **Deliverable:** Static, cinematic, scroll-driven portfolio (HTML / CSS / vanilla JS + GSAP, ScrollTrigger, Lenis)
> **Document type:** Creative brief + complete implementation instructions for Claude Code
> **Version:** 1.0 · 2026-09-15

---

## PART ONE: CREATIVE BRIEF

---

## 1. Website Overview

| | |
|---|---|
| **What it is** | A portfolio for a multidisciplinary operator who builds websites, designs campaigns, and organizes the systems that keep businesses running. |
| **Primary goal** | Turn visitors (business owners, hiring managers, agencies, wholesale/retail brands) into email conversations about collaboration, admin consulting, or technical support. |
| **Secondary goal** | Show that one person can credibly cover **Build**, **Promote**, and **Organize**, and that doing all three together is the advantage. |
| **Primary audience** | Small and mid-sized businesses, e-commerce and wholesale brands, founders who need a reliable technical-plus-operations partner, remote hiring teams. |
| **Format** | One long cinematic scroll made of "chapters", with a sticky nav and anchor links. |
| **Primary CTA** | `mailto:` link to start a conversation, plus a one-click "copy email" button. |
| **Success signal** | A visitor gets from hero to "Start a conversation" feeling that Diksha is calm, capable, modern, and easy to work with. |

**The big idea: _"Code. Campaigns. Clarity."_**
Three disciplines and one partner. The site is built like a short film in three acts (**The Developer**, **The Marketer**, **The Organizer**), each introduced by its own cinematic, scroll-scrubbed video scene and set between clean white editorial pages. The contrast between bright, minimal pages and dark, glowing film chapters shows the brand promise: technical depth delivered with everyday clarity.

---

## 2. Core Positioning

**Positioning statement**
> For growing businesses that are stretched between technology, marketing, and day-to-day operations, Diksha is the one calm, capable partner who builds the website, designs the campaign, and organizes the workflow, so the business runs smoother and looks sharper.

**Primary headline (hero)**
> **Code. Campaigns. Clarity.**

**Hero sub-headline**
> I help businesses run smoother and look sharper through modern web development, standout promotional design, and administrative systems that give teams their time back.

**One-liner (meta description / social)**
> Diksha: web developer, digital marketer, and technical administrator helping businesses streamline operations and elevate their digital presence.

**Improved "what I do" sentence**
> *Before:* "I help businesses streamline their daily operations and elevate their digital presence through efficient administrative support, engaging promotional designs, and modern web development."
> *After:* **"I make businesses run smoother and look sharper, from the code behind the website to the campaign in front of customers to the systems in between."**

**Messaging pillars**
1. **Range without the handoffs.** Development, marketing, and operations in one person means no briefings lost between three vendors.
2. **Technical, but human.** A background in customer service and team leadership means complex work gets explained clearly.
3. **Systems that last.** Everything is built to be maintained: documented code, reusable design assets, organized inventories.

**Proof points**
- Architected a digital inventory system covering **100+ products**.
- Designed targeted promotional materials for a **wholesale electronics** business.
- Developed and **deployed custom web projects** with Node.js, Git/GitHub, and modern hosting environments.
- **Diploma in Computer Information Systems.**
- **Retail supervisor** experience: customer service, scheduling, and team leadership.

**Words we use:** clear, calm, capable, streamlined, sharp, built, shipped, organized, modern, reliable.
**Words we avoid:** ninja, guru, rockstar, synergy, "passionate about", hustle.

---

## 3. Brand Personality

| Trait | Expressed as | Not |
|---|---|---|
| **Professional** | Precise grids, restrained palette, confident copy | Stiff, corporate, cold |
| **Clean / Minimal** | Generous whitespace, one accent, few elements per screen | Empty, sterile |
| **Welcoming** | Warm off-white paper, first-person voice, soft easing | Casual, jokey |
| **Subtly futuristic** | Mono labels, glowing-screen film scenes, precise micro-motion, grid lines | Sci-fi, neon, "hacker" |

**Voice:** First person, short sentences, active verbs. Confident without bragging. It should read like a thoughtful colleague explaining what they will do for you.

**Brand archetype:** *The Architect / The Caregiver blend.* Builds order out of complexity for the benefit of others.

---

## 4. Visual Direction

**Concept: "Daylight Office / Midnight Studio."**
The site alternates between two worlds:

- **Daylight** (editorial sections): crisp paper-white ground, slate ink, hairline grid rules, huge tight display type, and emerald used sparingly like a highlighter.
- **Midnight** (film chapters): deep navy-black, full-bleed scrubbed video, soft screen glow, and white kinetic type layered over the footage.

Section transitions between the two worlds use a **clip-path "shutter" wipe** (rounded rectangle expanding to full bleed) and a background colour tween, so it feels like walking from a bright office into a darkened edit suite.

**Visual motifs**
- **The Grid:** faint 12-column hairlines visible in Daylight sections (opacity 0.06), echoing structure and organization.
- **The Cursor Blink:** a small emerald block `▍` that appears after key headlines, a subtle nod to code.
- **Index numbers:** `01 / 02 / 03` and mono labels such as `[ BUILD ]` that give a systematic, catalogued feel.
- **Film grain:** an always-on, very subtle animated noise overlay (opacity 0.05 on light, 0.08 on dark).

**Reference mood:** Linear.app's precision, Apple product pages' scroll cinema, Awwwards "Site of the Day" editorial portfolios with oversized type.

---

## 5. Higgsfield Seedance 2.0 Asset Generation

### 5.1 Global generation settings

| Setting | Value |
|---|---|
| **Model** | Higgsfield **Seedance 2.0** |
| **Resolution** | **1080p** (1920×1080, 16:9) |
| **Duration** | **8–12 seconds** per clip (target 10s) |
| **Frame rate** | 24 fps (cinematic) |
| **Clip structure** | **3 separate clips**, one per core skill set (not continuous) |
| **Camera** | One single, slow, continuous move per clip, with no cuts. This is essential for smooth scroll-scrubbing. |
| **Audio** | None needed (site video is muted) |

### 5.2 Identity reference (character consistency)

> **Reference image:** `Media/diksha-reference.jpg` (in the project root's `Media` folder; use the actual filename and extension found there)
>
> Attach this image as the **identity / character reference for every generation** in which Diksha appears (Scenes 1 and 3, plus the hands and partial profile in Scene 2). Face, hair, skin tone, and build must match the reference exactly across all three clips.

**Consistency rules for all three prompts**
- **Wardrobe (locked across all clips):** tailored deep-navy blazer over a crisp white top, minimal jewelry. *(Change this if you prefer, but keep it identical in every clip.)*
- **Color grade:** cool slate shadows, clean white highlights, and a subtle emerald-green accent light. No orange/teal blockbuster grade.
- **Signature details (from reference):** black cat-eye glasses and long dark hair worn back with a slim black headband. Keep both in every clip.
- **Mood:** calm, focused confidence. Diksha is working, not posing for a stock photo.
- **Lens feel:** 35–50mm, shallow depth of field, soft bokeh.
- **Negative prompt (use on all):** `cheesy stock photo, exaggerated smile, looking at camera, text artifacts, garbled screen text, extra fingers, distorted hands, fast camera movement, cuts, shaky cam, neon cyberpunk, oversaturated, lens flare overload, warped face, identity drift`

### 5.3 File delivery

| Scene | Master export | Site file (desktop, scrub) | Site file (mobile, loop) | Poster |
|---|---|---|---|---|
| 1 · The Developer | `developer_master.mp4` | `assets/video/developer.mp4` | `assets/video/developer-mobile.mp4` | `assets/img/poster-developer.webp` |
| 2 · The Marketer | `marketer_master.mp4` | `assets/video/marketer.mp4` | `assets/video/marketer-mobile.mp4` | `assets/img/poster-marketer.webp` |
| 3 · The Organizer | `organizer_master.mp4` | `assets/video/organizer.mp4` | `assets/video/organizer-mobile.mp4` | `assets/img/poster-organizer.webp` |

Masters are kept outside `/assets` (for example in `/source-video`, excluded from deploy). Encoding commands are in §24.6.

---

## 6. Three Cinematic Scenes

### SCENE 1: THE DEVELOPER  ·  *Act I: Build*
**Purpose on site:** Opens the "Build" chapter (Web Development & Technical Support).
**Camera:** Slow, steady dolly push-in from a wide shot to a medium close-up over 10 seconds.
**Scroll use:** Scrubbed. The push-in plays forward as the user scrolls, so it feels like the scroll moves the camera.

**Seedance 2.0 prompt**
```
Cinematic 1080p shot, 10 seconds, single continuous slow dolly push-in, no cuts.
A calm, focused person (exact identity from reference image: black cat-eye glasses, long dark hair with a
slim black headband) in a tailored deep-navy blazer over a white top
sits at a clean, minimal modern desk in a dark room at night, writing code for a web application.
Two slim monitors softly glow, casting cool white and faint emerald-green light across the face and hands;
the screens show abstract, blurred lines of code and a clean website layout (no legible text).
A mechanical keyboard, a small plant, and a matte ceramic mug on the desk. Deep navy shadows,
soft volumetric haze, shallow depth of field, gentle bokeh from distant city lights through a window.
The camera begins wide, behind and beside the subject, and pushes slowly toward a three-quarter profile
as they type with quiet confidence, screen light reflecting softly in the glasses. Premium, minimal, subtly futuristic. Photorealistic, film grain, 24fps.
```

### SCENE 2: THE MARKETER  ·  *Act II: Promote*
**Purpose on site:** Opens the "Promote" chapter (Digital Marketing & Promotional Design).
**Camera:** Slow overhead (top-down) sweeping arc that rotates about 30° while descending slightly.
**Scroll use:** Scrubbed, with kinetic headline words timed to appear as each poster "comes alive."

**Seedance 2.0 prompt**
```
Cinematic 1080p shot, 10 seconds, single continuous slow overhead sweeping camera move, rotating gently
about 30 degrees while slowly descending, no cuts. Top-down view of a sleek dark matte desk.
At center, a thin modern tablet displays vibrant digital promotional posters for tech accessories
(wireless earbuds, a smartwatch, a phone charger) that come to life one after another with smooth
motion-graphic animation: products rotate, light sweeps across them, bold abstract shapes slide in.
The subject's hands (identity and skin tone from reference image, deep-navy blazer cuffs visible) hold a stylus
and tap the screen; a partial profile with black cat-eye glasses briefly enters the edge of frame. Around the tablet: printed
colour swatches, a closed laptop, a small tech accessory. Deep navy surroundings, the tablet's glow is the key light,
accents of emerald green and clean white. No legible text on posters. Premium product-marketing aesthetic,
shallow depth of field, photorealistic, film grain, 24fps.
```

### SCENE 3: THE ORGANIZER  ·  *Act III: Organize*
**Purpose on site:** Opens the "Organize" chapter (Administrative Organization & Workflow Optimization).
**Camera:** Slow lateral pan (truck left to right) with slight parallax through glass.
**Scroll use:** Scrubbed. The pan moves horizontally in step with the chapter's kinetic type.

**Seedance 2.0 prompt**
```
Cinematic 1080p shot, 10 seconds, single continuous slow lateral camera pan from left to right, no cuts,
subtle foreground parallax through a glass partition. A bright, professional, well-lit modern office
with soft daylight, white walls, light oak and slate-grey furniture. A confident person (exact identity from
reference image: black cat-eye glasses, long dark hair with a slim black headband) in a tailored deep-navy
blazer over a white top stands at a large modern wall display,
reviewing a clean corporate organization chart and digital workflow tracker: connected nodes, kanban
columns, progress bars, with minimal emerald-green highlights (no legible text). They gesture calmly to
move a card between columns, then glance down at a tablet in hand, composed and in control.
Clean, orderly, welcoming, subtly futuristic. Shallow depth of field, soft natural light,
photorealistic, gentle film grain, 24fps.
```

> **Why these work for scrubbing:** each clip has one slow, uninterrupted camera move and no cuts or fast action, so scrubbing forward and backward feels like a physical camera the user controls.

---

## 7. Website Structure

```
┌─ 00  Preloader ─────────── name counter 0→100, shutter reveal
├─ ⎯   Nav (sticky) ──────── wordmark · Work · Services · Story · [Let's talk]
├─ 01  Hero ──────────────── kinetic "Code. Campaigns. Clarity." + triptych video slats
├─ 02  Stats Strip ───────── animated counters + infinite marquee
├─ 03  Mission ───────────── scroll-highlighted manifesto paragraph
├─ 04  Three Pillars ─────── 3 pinned film chapters (Developer / Marketer / Organizer), scrubbed video
├─ 05  Services ──────────── "What I take off your plate": expandable service rows
├─ 06  How We Work ───────── engagement models + process strip
├─ 07  Featured Work ─────── 3 case studies, horizontal scroll gallery
├─ 08  Story ─────────────── timeline: Diploma → Retail Leader → Remote Digital → Now
├─ 09  Final CTA ─────────── giant "Let's make it run smoother." + email
└─ 10  Footer ────────────── wordmark, links, local time, back-to-top
```

**Rhythm:** Daylight (Hero, Stats, Mission) → **Midnight** (Pillars) → Daylight (Services, How We Work, Work) → Daylight-to-Dusk (Story) → **Midnight** (CTA, Footer).

---

## 8. Hero Section

**Layout (desktop)**
- Full viewport (`100svh`), paper background, visible grid lines.
- Top-left mono label: `[ PORTFOLIO — 2026 ]`. Top-right: `Available for new projects ●` with a pulsing emerald dot.
- **Display headline**, three stacked lines, each about 14vw, weight 600, tracking -0.05em:
  ```
  Code.
  Campaigns.
  Clarity.▍
  ```
  The final cursor block blinks in emerald.
- **Triptych slats:** three tall rounded "pills" set inline with the typography. Each shows a muted, looping, low-res preview of one scene (Developer, Marketer, Organizer), falling back to a designed poster. On hover, a slat widens and its label appears.
- Bottom row: sub-headline (max 38ch) on the left; primary CTA `Start a conversation →` and secondary `See the work` on the right; a `Scroll` indicator with an animated hairline.

**Copy**
- Label: `DIKSHA · DEVELOPER · MARKETER · ORGANIZER`
- H1: **Code. Campaigns. Clarity.**
- Sub: *I help businesses run smoother and look sharper through modern web development, standout promotional design, and administrative systems that give teams their time back.*

**Motion**
1. After the preloader, each headline line rises from a masked baseline (`yPercent: 110 → 0`), character-staggered at 0.02s with `expo.out` over 1.2s.
2. The slats scale in from `scaleY: 0` (transform-origin bottom) with a 0.1s stagger.
3. **On scroll:** the headline lines drift apart horizontally (alternating ±8vw, scrubbed) while the hero gently parallaxes and fades. The dark "doorway" expansion happens at the Pillars entry (§11).

---

## 9. Animated Stats Strip

A full-width band directly below the hero, separated by hairline rules top and bottom.

| Counter | Label |
|---|---|
| **100+** | Products organized into a digital inventory system |
| **03** | Disciplines, one point of contact |
| **01** | Partner instead of three vendors |
| **∞** | Hours given back to your team *(rendered as a looping-draw SVG infinity)* |

> Suggested extra stats to add once confirmed: number of web projects deployed, campaigns delivered, years of experience. The HTML uses `data-count` attributes, so values are one-line edits.

**Below the counters:** an infinite, scroll-velocity-reactive marquee in large outline type:
`WEB DEVELOPMENT ✦ PROMOTIONAL DESIGN ✦ WORKFLOW SYSTEMS ✦ TECHNICAL SUPPORT ✦ NODE.JS ✦ GITHUB ✦ DIGITAL MARKETING ✦ INVENTORY ARCHITECTURE ✦`

**Motion:** counters tween from 0 when 60% in view (`power3.out`, 2s, tabular numerals, so the width doesn't jitter). The marquee's base speed is multiplied by scroll velocity, and its direction flips when scrolling up.

---

## 10. Mission Section

**Layout:** Left-aligned editorial block, display size about 4.4vw. Mono label `[ 01 — WHY I EXIST ]`.

**Copy (manifesto)**
> **Technology should feel like a tailwind, not a tangle.**
>
> Most businesses don't need more tools. They need someone who can make the tools work together. I close the gap between technical complexity and everyday efficiency by turning messy workflows into clear systems, products into campaigns people notice, and ideas into websites that actually ship. The goal is simple: **a business that runs smoothly and grows confidently.**

**Motion:** Word-by-word scroll highlight. Every word starts at `opacity: 0.15` and scrubs to full ink as the paragraph passes through the viewport. The phrases *tailwind*, *clear systems*, and *grows confidently* highlight in emerald.

---

## 11. Three Pillars Section (Cinematic Film Chapters)

**The centerpiece.** Three pinned chapters, each about 300vh of scroll distance.

**Entry transition:** A rounded rectangle containing the Developer film starts inset in the center of a paper-white screen. As the user scrolls, its `clip-path: inset()` expands to full bleed, the border radius goes to 0, and the page background tweens to Midnight `#070B14`.

**Chapter anatomy (repeat ×3)**
```
┌───────────────────────────────────────────────┐
│ [ 01 / BUILD ]                    00:04 / 00:10│  ← mono HUD: index + live scrub timecode
│                                               │
│   (full-bleed scrubbed video, dark vignette)  │
│                                               │
│  THE                                           │
│  DEVELOPER                                     │  ← huge kinetic title, per-letter reveal
│                                               │
│  Websites & web apps that are fast, clean,     │  ← body appears at ~40% progress
│  and actually deployed.                        │
│  ● Node.js  ● Git/GitHub  ● Modern hosting     │  ← tag chips appear at ~60%
│ ━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░ │  ← emerald progress bar
└───────────────────────────────────────────────┘
```

**Chapter copy**

**01 · BUILD: The Developer**
*Web Development & Technical Support*
> Websites and web apps that are fast, maintainable, and actually live. I write clean code, manage it properly in Git, and deploy it to modern hosting, then stay on hand when something needs fixing.
Tags: `HTML · CSS · JavaScript` · `Node.js` · `Git & GitHub` · `Deployment & Hosting` · `Technical Support`

**02 · PROMOTE: The Marketer**
*Digital Marketing & Promotional Design*
> Promotional design that makes products hard to scroll past. From wholesale electronics promotions to social campaigns, I design materials that are on-brand, on-message, and built to sell.
Tags: `Product Promotions` · `Social Graphics` · `Campaign Assets` · `Digital Marketing`

**03 · ORGANIZE: The Organizer**
*Administrative Organization & Workflow Optimization*
> Systems that give your team its hours back. I turn scattered spreadsheets, inboxes, and inventories into structured workflows that are documented, trackable, and easy to hand over.
Tags: `Inventory Systems` · `Workflow Design` · `Documentation` · `Admin Operations`

**Motion (per chapter, timeline scrubbed to pin progress)**
| Progress | Event |
|---|---|
| 0–100% | `video.currentTime = progress × duration` (lerped, see §20) |
| 0–15% | "THE" slides up, then each letter of the role word rises with stagger |
| 35–50% | Body copy unmasks |
| 55–70% | Tag chips pop in (`back.out(1.6)`) |
| 85–100% | Title exits upward with blur; video dims; next chapter's wipe begins |

**Chapter-to-chapter transition:** a horizontal emerald "scan line" sweeps across the frame, then the next film is revealed beneath it with a `clip-path` wipe.

**Exit transition (after chapter 3):** the background tweens back to paper white, returning the viewer to Daylight.

---

## 12. Services Section ("What I take off your plate")

**Layout:** Mono label `[ 03 — SERVICES ]`, heading **"One partner. Three ways to help."**, then an accordion list of large rows with full-width hairlines.

| # | Row title | Expanded deliverables |
|---|---|---|
| 01 | **Web Development** | Portfolio & business websites · Landing pages · Node.js projects · Git/GitHub setup & version control · Deployment & hosting configuration |
| 02 | **Technical Support** | Website maintenance & fixes · Tool & account setup · Troubleshooting · Documentation for non-technical teams |
| 03 | **Promotional Design** | Product promo graphics · Catalogue & wholesale sell sheets · Social media campaign assets · Brand-consistent templates |
| 04 | **Digital Marketing** | Campaign planning · Content calendars · Product launch materials · Performance-minded creative |
| 05 | **Admin & Workflow Systems** | Digital inventory architecture · Spreadsheet & tracker systems · Process mapping · Operations organization |

**Interaction:** Hovering a row (desktop) shows a floating preview card that follows the cursor with lerp, containing a pillar glyph and colour. Clicking expands the row with a height tween, and the `+` rotates to `×`. The row title gets a slight text-shift and an emerald index number.

**CTA under list:** *"Not sure which one you need? That's what the first conversation is for."* followed by `Let's talk →`

---

## 13. Story Section

**Layout:** Two columns. Left column holds a sticky, large phase number and label; right column holds a vertical timeline whose progress line draws as you scroll. The background slowly tweens from paper to a light slate (`#EEF1F5`), which reads as "dusk".

**Heading:** **"From the shop floor to the source code."**

**Chapters**
1. **Foundation: Diploma in Computer Information Systems**
   *"I started where the logic lives: databases, systems, networks, and code. It gave me the technical backbone for everything that followed."*
2. **Leadership: Retail Supervisor**
   *"On the floor, I learned what no textbook teaches: how to lead a team, calm a frustrated customer, and keep an operation running when everything happens at once."*
3. **Transition: Remote Digital Marketing & Technical Administration**
   *"I brought those two worlds together remotely, designing promotional materials for wholesale electronics, building inventory systems for 100+ products, and keeping digital operations organized."*
4. **Now: Developer, Marketer, Organizer**
   *"Today I combine web development with Node.js and GitHub, product marketing design, and workflow optimization, giving businesses one partner who understands the whole picture."*

**Pull quote (large, after timeline):**
> *"I speak both languages: technical and human. That's the gap I close."*

**Motion:** Each chapter reveals by line mask while the sticky phase number (`01`–`04`) rolls to the active chapter. The timeline dot pulses emerald when active, and the line draws with a scrubbed `scaleY`.

---

## 14. Product / Service / Community Section → "How we work together"

Since this is a service portfolio, the "product" block is packaged as a clear **engagement model** that makes starting feel easy.

**Heading:** **"Simple to start. Easy to keep going."**

Three cards in a horizontal row (stacked on mobile):

| Card | Title | Description | Best for |
|---|---|---|---|
| A | **Project** | A defined build: a website, a campaign asset suite, or an inventory system. Fixed scope, clear timeline. | Launches, rebuilds, one-off systems |
| B | **Ongoing Support** | A reliable partner on call for site updates, design requests, and admin tasks each month. | Growing teams without in-house tech/marketing |
| C | **Consulting** | A focused session to audit your workflows, tools, or digital presence and map what to fix first. | Businesses that feel messy but don't know where to start |

**Process strip beneath (4 steps, mono numbered):** `01 Conversation` → `02 Plan` → `03 Build & Design` → `04 Hand-over & Support`

**Interaction:** Cards tilt slightly in 3D toward the cursor (max 4°), with an emerald radial highlight that follows the pointer inside the card. Process steps connect with a line that draws on scroll.

---

## 15. Featured Work / Content Section

**Heading:** **"Selected work."** with the mono label `[ 05 — CASE STUDIES ]`

**Layout:** Pinned **horizontal scroll gallery** on desktop, where vertical scroll translates the track along X. Each card is about 64vw wide, with a large media area and a caption row. On mobile it becomes a vertical stack.

**Case studies**

**01 · Wholesale Electronics: Promotional Campaign Suite**
- *Discipline:* Promote
- *Summary:* Designed targeted marketing materials for a wholesale electronics business, including product promotions for tech accessories built to catch retailer attention and move inventory.
- *Deliverables:* Product promo graphics · Sell sheets · Social assets
- *Media slot:* `assets/img/work-electronics.webp`

**02 · 100+ Product Digital Inventory System**
- *Discipline:* Organize
- *Summary:* Architected a comprehensive digital inventory system covering 100+ products, giving the team one structured, searchable source of truth.
- *Deliverables:* Data structure · Categorization system · Tracking workflow · Documentation
- *Media slot:* `assets/img/work-inventory.webp`

**03 · Custom Web Projects: Built & Deployed**
- *Discipline:* Build
- *Summary:* Developed and deployed custom web projects using Node.js and GitHub-based workflows on modern hosting environments, taking them from local code to live URL.
- *Deliverables:* Development · Version control · Deployment · Hosting setup
- *Media slot:* `assets/img/work-web.webp`

> **Placeholder policy:** until real screenshots are supplied, each media slot renders a **designed CSS mock-up** (a stylized promo poster grid, an inventory table UI, and a browser window with a deploy terminal) so the site looks finished. Replacing a mock with an image is a one-line change.

**Interaction:** The custom cursor becomes a `View` disc over cards. Media inside cards has an inner parallax. Card titles use a char-scramble effect on hover (brief mono glyph shuffle before resolving), a subtle futuristic touch. A progress counter `01 / 03` updates in the corner.

---

## 16. Final CTA Section

**Background:** Midnight `#070B14` with a very slow drifting emerald radial glow and grain.

**Copy**
- Mono label: `[ 07 — LET'S TALK ]`
- Giant kinetic headline (about 11vw), two lines:
  **Let's make it run**
  **smoother.▍**
- Sub: *Have a website to build, a product to promote, or a workflow that needs untangling? Tell me what's slowing you down, and let's fix it together.*
- Primary: large pill button **`Start a conversation →`** (`mailto:` with a prefilled subject "Let's work together")
- Secondary: the email address displayed large and underlined, with a **copy-to-clipboard** button that shows a "Copied ✓" toast.
- Tertiary links: `LinkedIn` · `GitHub`

**Motion:** The headline characters rise on enter and the headline scales from 0.9 to 1 as it scrolls into place. The button is magnetic and has a fill-wipe hover.

---

## 17. Footer

- Giant outline wordmark **DIKSHA** spanning the full width (about 22vw). Its stroke fills with emerald on hover, from left to right.
- Three columns: **Navigate** (Work, Services, Story, Contact) · **Connect** (Email, LinkedIn, GitHub) · **Status** (`Available for new projects ●`, live local time via `Intl.DateTimeFormat`).
- Bottom bar: `© 2026 Diksha. Built by hand with HTML, CSS & JavaScript.` · `Back to top ↑` (smooth Lenis scroll).

---

## PART TWO: DESIGN SYSTEM

---

## 18. Complete Visual Style Guide

### 18.1 Color palette

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F7F8F6` | Primary light background (warm-neutral white) |
| `--white` | `#FFFFFF` | Cards, raised surfaces |
| `--ink` | `#0B1220` | Primary text on light (navy-black) |
| `--navy` | `#0F1E3A` | Deep navy: structural dark, buttons, hover fills |
| `--midnight` | `#070B14` | Film chapter & CTA backgrounds |
| `--slate-700` | `#334155` | Secondary text |
| `--slate-500` | `#64748B` | Muted text, mono labels |
| `--slate-300` | `#CBD5E1` | Borders on dark |
| `--slate-200` | `#E2E8F0` | Hairlines on light |
| `--dusk` | `#EEF1F5` | Story section tint |
| `--emerald` | `#10B981` | **Accent:** highlights, cursor blink, progress, dots (use on dark or as fills) |
| `--emerald-ink` | `#047857` | Accessible emerald for text on light backgrounds (AA contrast) |
| `--emerald-glow` | `rgba(16,185,129,.18)` | Glows, radial highlights |

**Usage ratio:** 70% paper/white · 20% ink/navy/midnight · 8% slate · **2% emerald**. Emerald is used like a highlighter and never for large fills except the CTA hover.

### 18.2 Layout & spacing
- **Grid:** 12 columns, `--gutter: clamp(16px, 2vw, 32px)`, `--margin: clamp(20px, 5vw, 96px)`.
- **Spacing scale (fluid):** `--s1: .5rem`, `--s2: 1rem`, `--s3: 1.5rem`, `--s4: 2.5rem`, `--s5: 4rem`, `--s6: clamp(5rem, 10vw, 10rem)`, `--s7: clamp(8rem, 16vw, 16rem)`.
- **Radius:** `--r-sm: 8px`, `--r-md: 16px`, `--r-lg: 28px`, `--r-pill: 999px`.
- **Hairlines:** `1px solid var(--slate-200)` (light) / `rgba(255,255,255,.12)` (dark).

### 18.3 Components
- **Primary button:** navy pill with white text and 18px/28px padding. On hover, an emerald fill wipes up from the bottom, the text turns ink, and the arrow shifts 4px. Magnetic.
- **Secondary button:** text with an animated underline (scaleX 0→1 from left on hover).
- **Mono label:** `[ 01 — LABEL ]` in JetBrains Mono, 12px, uppercase, 0.12em tracking, slate-500.
- **Tag chip:** 1px hairline pill with a mono 12px label and a 6px emerald dot.
- **Status dot:** 8px emerald circle with a pulsing ring (`scale 1→2.4`, `opacity .6→0`, 2s infinite).

### 18.4 Grain
Fixed full-screen overlay with an inline SVG `feTurbulence` noise (`baseFrequency .8`, `numOctaves 4`) as a data-URI background. It uses `pointer-events:none` and animates with a `steps(6)` translate jitter. Opacity 0.05 on light, 0.08 on dark.

---

## 19. Typography

**Font stack (Google Fonts)**
| Role | Family | Weights | Fallback |
|---|---|---|---|
| **Display & headings** | **Inter Tight** | 500, 600, 700 | `"Helvetica Neue", Arial, sans-serif` |
| **Editorial accent** | **Instrument Serif** (italic) | 400 italic | `Georgia, serif` |
| **Body** | **Inter** | 400, 500 | `system-ui, sans-serif` |
| **Mono / HUD / labels** | **JetBrains Mono** | 400, 500 | `ui-monospace, Menlo, monospace` |

The Instrument Serif italic is used for one word per headline for warmth, e.g. "Code. Campaigns. *Clarity.*", "Selected *work.*", "Let's make it run *smoother.*"

**Type scale (fluid `clamp`)**
| Token | Size | Line-height | Tracking | Use |
|---|---|---|---|---|
| `--t-mega` | `clamp(4rem, 14vw, 16rem)` | 0.86 | -0.055em | Hero lines, footer wordmark |
| `--t-xxl` | `clamp(3.25rem, 11vw, 12rem)` | 0.88 | -0.05em | Chapter titles, CTA |
| `--t-xl` | `clamp(2.5rem, 6vw, 6rem)` | 0.95 | -0.04em | Section headings |
| `--t-lg` | `clamp(1.75rem, 3.6vw, 3.5rem)` | 1.1 | -0.03em | Manifesto, case titles |
| `--t-md` | `clamp(1.25rem, 1.8vw, 1.6rem)` | 1.35 | -0.01em | Leads, sub-headlines |
| `--t-body` | `clamp(1rem, 1.05vw, 1.125rem)` | 1.6 | 0 | Body |
| `--t-mono` | `0.75rem` | 1.4 | 0.12em | Labels, HUD |

**Rules:** Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs, and `font-variant-numeric: tabular-nums` on counters and timecodes. Load fonts with `display=swap` and `preconnect`.

---

## 20. Animation Direction

**Principles**
1. **Calm precision.** Movements are slow, confident, and eased. Nothing bounces except tag chips.
2. **Scroll is the camera.** Major motion is tied to scroll (scrubbed); micro-interactions are time-based.
3. **Mask, don't fade.** Text reveals rise from overflow-hidden masks rather than simple opacity fades.
4. **One hero move per screen.** Avoid competing animations.

**Eases**
| Name | Value | Use |
|---|---|---|
| `expo.out` | GSAP | Text reveals, entrances |
| `power3.inOut` | GSAP | Shutter wipes, clip-path transitions |
| `back.out(1.6)` | GSAP | Tag chips only |
| `none` | GSAP | Scrubbed timelines (smoothing handled by `scrub: 1`) |
| CSS `--ease-out` | `cubic-bezier(.16,1,.3,1)` | Hover states |

**Durations:** micro 0.25s · hover 0.45s · reveal 1.0–1.4s · preloader ~2.2s total.

**Kinetic typography catalogue**
| Effect | Where | How |
|---|---|---|
| Masked char rise | Hero, chapter titles, CTA | Custom splitter wraps chars in `.char` inside `.line-mask`; `yPercent 110→0`, stagger 0.02 |
| Line drift | Hero on scroll | Alternate lines translate X ±8vw, scrubbed |
| Word highlight | Mission | Words opacity 0.15→1, scrubbed across paragraph |
| Char scramble | Work card titles, nav hover | Replace chars with random glyphs from `01<>/{}#_` then resolve over 0.5s |
| Velocity skew | Marquee | `skewX` proportional to scroll velocity, clamped, spring back |
| Outline fill | Footer wordmark | `background-clip:text` gradient position tween |
| Cursor blink | End of hero H1 & CTA | CSS `steps(1)` opacity 1s infinite, emerald |

**Preloader (~2.2s)**
1. Paper screen; mono counter `000 → 100` bottom-left; wordmark `DIKSHA` letters rise in.
2. At 100, a navy panel slides up and away (`yPercent 0→-100`, `power3.inOut`, 0.9s), revealing the hero while the hero intro timeline starts with overlap.
3. Skip the preloader on repeat visits in the same session (`sessionStorage`).

**Video scrub smoothing**
Don't set `currentTime` directly from ScrollTrigger. Store the `targetTime` and, in the GSAP ticker, `current += (target - current) * 0.12`; only assign `video.currentTime` when `|delta| > 0.01`. This avoids decoder thrash and gives an organic camera glide.

---

## 21. Interaction Design

- **Custom cursor (pointer: fine only):** an 8px dot (instant) plus a 36px hairline ring (lerp 0.15). States: `hover-link` (ring scales, fills emerald-glow), `view` (ring becomes an 88px disc with "View" label). It inverts over dark sections.
- **Magnetic elements:** buttons, nav CTA, and social links pull toward the cursor by up to 30% of the offset and spring back with `elastic.out(1,.4)`.
- **Nav:** hides on scroll down and shows on scroll up (translateY). It becomes a frosted glass bar (`backdrop-filter: blur(14px) saturate(140%)`) after 80px. Colors invert automatically over dark sections via `data-theme`. Active anchor has an emerald dot.
- **Hero slats:** hovering widens the slat and shows its label (`Build`, `Promote`, `Organize`). Clicking scrolls to that chapter.
- **Service rows:** cursor-following preview card; accordion expand.
- **Engagement cards:** 3D tilt plus pointer-tracked radial glow (CSS variables `--mx`/`--my`).
- **Copy email:** clipboard API with a "Copied ✓" toast. It falls back to selecting the text if clipboard access is blocked.
- **Focus states:** 2px emerald outline with 3px offset on every interactive element. The keyboard path is fully navigable, and a skip-link to `#main` is included.
- **Reduced motion (`prefers-reduced-motion: reduce`):** disable Lenis, the preloader, scrubbing, pinning, marquee motion, custom cursor, and magnetism. All content becomes statically visible, and videos show posters.

---

## 22. Scroll Behavior

- **Smooth scroll:** Lenis (`lerp: 0.09`, `smoothWheel: true`, `syncTouch: false`) driven by the GSAP ticker: `gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`, `lenis.on('scroll', ScrollTrigger.update)`.
- **Anchor links:** intercepted and routed through `lenis.scrollTo(target, { offset: -40, duration: 1.6 })`.
- **Pinned sections & approximate scroll lengths (desktop)**
  | Section | Pin | Scroll distance |
  |---|---|---|
  | Pillars entry shutter | scrubbed | ~100vh |
  | Chapter 1 / 2 / 3 | yes | ~300vh each |
  | Services | no | natural |
  | Featured Work (horizontal) | yes | track width − viewport |
  | Story timeline | sticky column | natural |
  | Final CTA | no | natural |
- **Scrub values:** `scrub: 1` for text/transform timelines and a ticker lerp for video.
- **Theme switching:** each `<section data-theme="light|dark">` toggles `body[data-theme]` on enter/enterBack (start `top 50%`) to tween background, nav, and cursor colors.
- **Refresh:** `ScrollTrigger.refresh()` after fonts load (`document.fonts.ready`) and after video `loadedmetadata`; debounce on resize.
- **Scroll progress:** a 2px emerald bar at the very top of the viewport, `scaleX` tied to total progress.

---

## 23. Mobile Behavior

**Breakpoints:** `≤ 600px` phone · `601–1024px` tablet · `> 1024px` desktop. Mobile-first CSS.

| Feature | Desktop | Mobile / touch |
|---|---|---|
| Smooth scroll | Lenis | Native scroll (Lenis `syncTouch:false`) |
| Video | Scroll-scrubbed 1080p all-intra | **Autoplay muted loop** `-mobile.mp4` (720p, 9:16 crop), IntersectionObserver play/pause |
| Chapter pin length | 300vh | No pin; each chapter is a full-height card with toggle reveals |
| Hero slats | Inline in headline | One row of three short slats beneath the headline |
| Hero type | 14vw | ~17vw |
| Featured work | Horizontal pin | Vertical stack of full-width cards |
| Story | Sticky two-column | Single column; line draws on scroll |
| Services preview card | Cursor-follow | Hidden; accordion only |
| Custom cursor / magnetic / tilt | On | Off (`@media (hover:none)`) |
| Nav | Inline links | Hamburger opens a full-screen panel with a staggered giant-links reveal |
| Marquee | Velocity reactive | Constant slow speed |

Other mobile rules:
- Use `100svh` for full-height sections.
- Tap targets are at least 44×44px.
- Grain opacity is reduced to 0.04.
- `ScrollTrigger.config({ ignoreMobileResize: true })`.
- Use `gsap.matchMedia()` to build and revert separate desktop and mobile animation sets cleanly.

---

## PART THREE: TECHNICAL IMPLEMENTATION (for Claude Code)

---

## 24. Technical Implementation

### 24.1 Hard requirements
- **Static site only:** `index.html`, `style.css`, `script.js`, `/assets`.
- **Only HTML, CSS, vanilla JavaScript.** No React, Next.js, build tools, or frameworks.
- **CDN libraries (pinned versions, `defer`):** GSAP core, ScrollTrigger, Lenis (via jsDelivr), followed by `script.js`. Verify the latest stable versions at build time and pin them.
- All asset paths are **relative** (`assets/video/developer.mp4`).
- The site must **look complete without the generated videos**: designed CSS "film" placeholders render when a video file is missing.
- The site must **degrade gracefully if CDNs fail**: all content visible, no stuck hidden states.

### 24.2 File structure
```
Portfolio Website/
├── BUILD-PLAN.md
├── index.html
├── style.css
├── script.js
├── Media/
│   └── diksha-reference.jpg        ← identity reference for Higgsfield (not deployed)
└── assets/
    ├── video/
    │   ├── developer.mp4            ← desktop scrub (1080p, all-intra)
    │   ├── developer-mobile.mp4     ← mobile loop (720p, 9:16)
    │   ├── marketer.mp4
    │   ├── marketer-mobile.mp4
    │   ├── organizer.mp4
    │   └── organizer-mobile.mp4
    ├── img/
    │   ├── poster-developer.webp
    │   ├── poster-marketer.webp
    │   ├── poster-organizer.webp
    │   ├── work-electronics.webp    ← optional real screenshots
    │   ├── work-inventory.webp
    │   ├── work-web.webp
    │   └── og-image.jpg             ← 1200×630 social card
    └── icons/
        └── favicon.svg
```

### 24.3 `index.html` structure
```html
<body data-theme="light">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="grain" aria-hidden="true"></div>
  <div class="preloader" aria-hidden="true">…</div>
  <div class="cursor" aria-hidden="true">…</div>
  <div class="progress" aria-hidden="true"></div>
  <header class="nav">…</header>
  <main id="main">
    <section class="hero"     id="top"      data-theme="light">…</section>
    <section class="stats"                  data-theme="light">…</section>
    <section class="mission"  id="mission"  data-theme="light">…</section>
    <section class="pillars"  id="pillars"  data-theme="dark">
      <article class="chapter" data-video="developer">…</article>
      <article class="chapter" data-video="marketer">…</article>
      <article class="chapter" data-video="organizer">…</article>
    </section>
    <section class="services" id="services" data-theme="light">…</section>
    <section class="engage"   id="engage"   data-theme="light">…</section>
    <section class="work"     id="work"     data-theme="light">…</section>
    <section class="story"    id="story"    data-theme="light">…</section>
    <section class="cta"      id="contact"  data-theme="dark">…</section>
  </main>
  <footer class="footer" data-theme="dark">…</footer>
</body>
```

**Video element pattern**
```html
<video class="chapter__video" muted playsinline preload="none"
       data-src-desktop="assets/video/developer.mp4"
       data-src-mobile="assets/video/developer-mobile.mp4"
       data-poster="assets/img/poster-developer.webp"></video>
```
JS assigns `src` based on `matchMedia('(min-width:1025px) and (hover:hover)')` and loads lazily when the chapter is near. On `error`, the video is hidden and the designed CSS placeholder beneath it remains.

### 24.4 `style.css` organization
1. Tokens: colors, type scale, spacing, radii, eases (§18–19)
2. Base: reset, html/body, `::selection` (emerald), grain overlay, skip-link, `:focus-visible`
3. Layout: `.container`, grid-lines overlay
4. Components: `.btn`, `.label`, `.chip`, `.status-dot`, `.cursor`, `.nav`, `.preloader`, `.progress`, `.toast`
5. Sections: `.hero` … `.footer` (in page order)
6. Utilities: `.line-mask`, `.char`, `.word`, `.visually-hidden`
7. Responsive: mobile-first, `min-width: 601px` & `1025px`
8. Motion: `prefers-reduced-motion` overrides

- Pre-animation hidden states are applied only under `html.js-ready` (added by script.js once GSAP has loaded), so content is never stuck invisible.
- `will-change` only on actively animated elements.

### 24.5 `script.js` architecture
```
0.  CONFIG (email, social links, breakpoints, reduced-motion flag)
1.  Utilities: splitText (chars/words, preserves aria-label), scramble, lerp, clamp, debounce, qs/qsa
2.  Smooth scroll: Lenis + GSAP ticker sync + anchor interception
3.  Preloader → Promise → hero intro
4.  Cursor & magnetic (desktop only)
5.  Nav: hide/show, theme inversion, mobile menu (focus trap, Esc to close)
6.  Hero: intro timeline, line drift, slat hover/click
7.  Stats: counters, velocity marquee
8.  Mission: word highlight scrub
9.  Pillars: shutter entry, per-chapter pinned timelines, VideoScrubber, HUD timecode
10. Services: accordion, cursor preview
11. Engage: tilt + glow, process line
12. Work: horizontal pin gallery, scramble titles, counter
13. Story: timeline line draw, active chapter, phase number
14. CTA & Footer: kinetic headline, copy email, local time, back-to-top
15. Theme switching & progress bar
16. Boot: document.fonts.ready → init → ScrollTrigger.refresh(); gsap.matchMedia() desktop/mobile/reduced sets
```

**VideoScrubber (core)**
```js
class VideoScrubber {
  constructor(video) {
    this.v = video; this.target = 0; this.current = 0; this.ready = false;
    video.addEventListener('loadedmetadata', () => { this.ready = true; });
    video.addEventListener('error', () => video.classList.add('is-missing'));
    gsap.ticker.add(this.tick);
  }
  setProgress(p) { if (this.ready) this.target = p * (this.v.duration - 0.05); }
  tick = () => {
    const d = this.target - this.current;
    if (!this.ready || Math.abs(d) < 0.01) return;
    this.current += d * 0.12;
    this.v.currentTime = this.current;
  };
}
```
iOS/Safari priming: on the first `pointerdown`/`touchstart`, call `video.play().then(() => video.pause())` once per video.

### 24.6 Video & image encoding (performance)
**Desktop scrub (all-intra, so every frame is a keyframe and seeking is instant):**
```bash
ffmpeg -i developer_master.mp4 -an -vf "scale=1920:-2,fps=24" -c:v libx264 -preset slow -crf 24 -g 1 -keyint_min 1 -pix_fmt yuv420p -movflags +faststart assets/video/developer.mp4
```
Target is ≤ 12MB per 10s clip. If larger, raise CRF to 26 or scale to 1600px.

**Mobile loop (9:16 crop, normal GOP):**
```bash
ffmpeg -i developer_master.mp4 -an -vf "crop=ih*9/16:ih,scale=720:-2,fps=24" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart assets/video/developer-mobile.mp4
```
Adjust the crop x-offset per scene so the subject stays in frame (e.g. `crop=ih*9/16:ih:(iw-ow)*0.4:0`).

**Posters (first frame, WebP):**
```bash
ffmpeg -i assets/video/developer.mp4 -frames:v 1 -vf scale=1920:-2 -quality 80 assets/img/poster-developer.webp
```

**Optional image-sequence alternative** (if video scrubbing stutters on a target browser): export ~120 frames per clip at 1600px WebP q70 into `assets/seq/developer/0001.webp…`, draw to a `<canvas>` by frame index, and preload progressively (every 4th frame first, then fill gaps).

### 24.7 Performance budget & rules
| Metric | Target |
|---|---|
| LCP | < 2.0s (hero text is the LCP element, not video) |
| CLS | < 0.02 (reserve all media aspect ratios) |
| Initial JS (excl. CDN) | < 30KB |
| Initial page weight (before videos) | < 600KB |
| Frame rate while scrolling | 60fps on a mid-range laptop |

- Load chapter videos lazily and set `src` only when approaching.
- Animate only `transform`, `opacity`, `clip-path`, and `filter` (sparingly).
- The cursor, scrubbers, and marquee share the single GSAP ticker.
- Images get `loading="lazy"`, `decoding="async"`, and explicit dimensions.
- Pause all non-visible video, and pause loops on `visibilitychange`.

### 24.8 Accessibility & SEO
- Semantic landmarks: one `h1`, headings in order. Split text keeps the original string in `aria-label` on the parent, with `aria-hidden` on generated spans.
- Decorative videos use `aria-hidden="true"`, and each chapter has a text equivalent (its heading and body).
- Contrast is AA minimum. Use `--emerald-ink` for emerald text on light.
- Include JSON-LD `Person` schema (name, jobTitle, knowsAbout).
- All interactive elements are reachable by keyboard.

### 24.9 Build order for Claude Code
1. Create the file structure and `assets/` folders; add `favicon.svg`.
2. Write `index.html` with **all final copy** from §8–§17 (semantic, readable without JS).
3. Write `style.css`: tokens → base → components → sections → responsive → reduced-motion.
4. Build placeholder visuals: CSS "film" scenes for the three chapters (dark navy with emerald glow, code/poster/workflow motifs) and designed mock-ups for the three work cards.
5. Write `script.js` modules in the order in §24.5; boot via `gsap.matchMedia()`.
6. Wire the video system with fallback-to-placeholder; test with missing files.
7. Test with a local static server at 1440px, 1024px, 768px, and 390px, and with reduced motion enabled.
8. Performance pass against the budget above.
9. When the Higgsfield clips are generated, drop them in with the §24.6 encodes. No code changes needed.

### 24.10 Content to confirm / replace before launch
- [ ] Real contact email (`CONFIG.email` and the `mailto:` links)
- [ ] LinkedIn and GitHub URLs
- [ ] Surname / full name for SEO title (optional)
- [x] Reference image in `Media/diksha-reference.jpg` (close-up selfie; for best identity lock, optionally add a second front-facing, evenly lit, shoulders-up photo)
- [ ] Real screenshots for the 3 case studies (optional; mock-ups provided)
- [ ] Any extra quantified stats (number of projects, years, campaigns)
- [ ] Generated video clips (§5–6)

---

*End of Master Build Plan.*
