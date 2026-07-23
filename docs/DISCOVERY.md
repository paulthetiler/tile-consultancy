# Discovery — Phase 1

**Project:** Commercial tile & surface systems consultancy
**Stage:** Pre-build creative and technical discovery
**Prepared as:** Agency strategy document
**Date:** 2026

---

## How to read this document

This is not a wireframe pack and it is not a mood board. It is the argument for *why the site is the way it is* before a single component is built. Every downstream decision — the type scale, the restraint of the motion, the choice to shoot forensic macro detail instead of glossy architecture — traces back to one commercial fact established in the strategy section. If we agree on the strategy, the rest is execution. If we don't, we should reopen it now, because it is cheap to change a paragraph and expensive to change a codebase.

Where I think the brief points in a suboptimal direction, I say so and explain the reasoning. You asked to be challenged. There are four substantive challenges in here — on **naming**, on **why restraint is a commercial requirement rather than a taste preference**, on **photography direction**, and on **the primary conversion goal**. They are flagged inline as **⚠ Challenge**.

---

## 1. Brand strategy

### 1.1 The single strategic insight everything hangs on

The highest-value service this business offers is **expert witness and independent defect investigation**. That work is instructed by solicitors, loss adjusters, main contractors in dispute, and building owners with a problem that already has a legal or financial dimension. Under CPR Part 35, an expert's overriding duty is to the court, not to the party paying them. The commercial currency of the entire practice is *perceived independence and technical impartiality.*

This has a design consequence that is easy to miss and impossible to walk back:

> **A sales-heavy website actively destroys the credibility of the most profitable service line.**

A tradesman's site wants to look eager. This site must look like it does not need the work. The understatement in the brief is therefore not merely an aesthetic preference borrowed from Apple — it is a *functional requirement* of the business model. Restraint reads as authority; authority is the product. This is the north star, and I'll return to it repeatedly, because it resolves almost every argument we could have about tone, motion, colour and copy.

### 1.2 Positioning statement

> The independent technical authority on commercial tiling and hard-surface finishes. We inspect, investigate and report — so that contractors build right, owners hold assets with confidence, and disputes resolve on evidence.

### 1.3 What the brand is and is not

| The brand IS | The brand is NOT |
|---|---|
| A consultancy — sells judgement, evidence, reports | A contractor — sells labour and materials |
| Independent and instructable by any party | Aligned to any supply chain |
| Forensic, measured, evidence-led | Opinion-led or persuasive |
| Quiet, precise, confident | Loud, promotional, eager |
| A named authority (a person stands behind the reports) | An anonymous "team" |

### 1.4 Brand attributes (the five we design against)

1. **Independent** — no allegiance; the report is the product.
2. **Forensic** — measurement over impression; evidence over assertion.
3. **Precise** — every number has a tolerance; every claim has a source.
4. **Restrained** — says less, means more; never oversells.
5. **Authoritative** — the last word in the room, calmly delivered.

### 1.5 Brand voice

Plain, exact, unhurried. Short declarative sentences. No adjectives doing a verb's job. It should read like a well-written engineer's report, not marketing copy: *"We assess. We measure. We report. The findings stand on their own."* Numbers, standards and tolerances are used as texture — BS 5385, EN 12004, deflection ratios, moisture-content thresholds — because specificity is the sound of expertise. We never say "world-class," "passionate," or "bespoke solutions." We name the standard instead.

### 1.6 ⚠ Challenge — the name

The working name is "tile-consultancy." I'd push back on leading with the word *tile* in the brand mark, for three reasons, and then I'll argue *against my own pushback*, because the honest answer is more interesting than either extreme.

**The case against "tile" in the name:** it is the least premium word in the category. It carries DIY and trade-counter associations. Foster + Partners is not called "Building Company." Arup is not called "Engineering Ltd." The most authoritative firms name themselves after a *person* or an abstract quality, not a material.

**The case for keeping "tile":** narrow specialism is the moat. "We do everything in construction" reads as a generalist; "we are the people you call when tiling fails, and only that" reads as the definitive authority. Depth in one material is *more* credible, not less. And it is exactly what the client base searches for — a QS with a failing wet-room search does not type "surface systems consultant."

**Resolution.** Keep the specialism explicit but frame it upward. Recommended construction:

- **Wordmark:** a *personal or abstract name* (e.g. a surname, or a coined mark) — the authority signal.
- **Descriptor lockup:** *"Tiling & Surface Systems Consultants"* — the searchable, unambiguous specialism, set in a smaller technical style beneath the wordmark.

So the mark is premium and the descriptor is honest and findable. This gives us Apple's confidence (the name doesn't grovel) *and* the SEO/searcher clarity (the descriptor does the work). **Decision needed from you:** do we have a principal's surname to build the mark around, or do we coin an abstract mark? I recommend a surname if one exists — expert witness credibility is personal, and a named principal is worth more than any logo.

---

## 2. Site architecture

Deliberately shallow and small. A credibility instrument does not need forty pages; it needs eight that are perfect. Depth signals a content farm; restraint signals a practice.

```
/                         Home — the narrative and the proof
/services                 Services overview (the eight capabilities, gridded)
  /services/[slug]        One page per service line (see IA)
/approach                 Method — how an inspection/investigation actually runs
/sectors                  Who we serve & typical instructions (contractors, developers…)
/expertise                The principal(s): credentials, standards, memberships, CV
/reports                  Sample work — redacted case studies / defect library
/insights                 Editorial: technical notes, standards explainers (SEO engine)
  /insights/[slug]        Article
/contact                  Instruct us / request an inspection
```

Utility & trust pages (footer, low-prominence): `/privacy`, `/terms`, `/accessibility`, `/complaints` (regulatory hygiene signals maturity), `/expert-witness-terms` (CPR Part 35 statement — a strong trust cue for legal instructors).

**Why these and not others.** No blog-for-the-sake-of-it, no "testimonials" page (we thread proof in-context instead), no "why choose us" page (the entire site is the answer). Each URL earns its place by either (a) answering a real instruction question, (b) carrying SEO intent, or (c) discharging a trust obligation.

---

## 3. Information architecture

### 3.1 The eight capabilities, organised

The brief lists eight services. Presented flat, they read as a menu. Grouped into three *modes of engagement*, they read as a practice with a method. This grouping becomes the spine of the Services page and the mental model for the whole site:

**I. Assess** — *establishing the current state*
- Commercial tile inspections
- Condition surveys
- Progress inspections

**II. Investigate** — *establishing cause and liability*
- Defect investigations
- Quality assurance
- Expert witness services

**III. Specify** — *establishing the route to resolution*
- Technical reporting
- Remedial specifications

Note the narrative logic: *Assess → Investigate → Specify* mirrors the actual arc of an engagement and of a dispute (what is the state → why did it happen → what now). It also lets a visitor self-identify: a developer doing due diligence lands in **Assess**; a solicitor lands in **Investigate**; a contractor with a failed handover lands in **Specify**.

### 3.2 Service page template (every `/services/[slug]` shares this skeleton)

1. **Definition** — one sentence: what this service is, in plain terms.
2. **When it's instructed** — the trigger situations (so the reader recognises themselves).
3. **What we do** — the method, as numbered, verifiable steps.
4. **Standards applied** — the specific BS/EN references relevant to this service.
5. **Deliverable** — exactly what you receive (a report format, a schedule, a certificate).
6. **Typical instructing parties** — cross-link to sectors.
7. **Related capabilities** — lateral links (keeps depth-of-visit up without a mega-menu).
8. **Instruct / enquire** — a quiet, single call to action.

Consistency across the eight is itself a brand signal: it says *we have a system.*

### 3.3 Global navigation

Primary nav, five items maximum: **Services · Approach · Expertise · Insights · Contact.** (Sectors and Reports are reached in-context and via footer — protecting the five-item ceiling that keeps the header calm.) A single, understated **"Instruct us"** action sits at the right of the header, styled as a quiet text link with a rule, not a filled button.

---

## 4. User journeys

Four primary personas, each with a different emotional starting state. The site must serve all four without ever raising its voice.

### 4.1 The Main Contractor / Project Manager — *"handover is being rejected"*
- **State:** under time and cost pressure; possibly defensive.
- **Entry:** Google ("tiling defect report," "lippage tolerance BS 5385") or referral.
- **Path:** Insight article (answers their immediate technical question, builds trust) → Services/Defect investigations → Approach (reassurance it's rigorous and fast) → Contact.
- **Job to be done:** get an independent, unarguable assessment quickly to unblock a project or defend a position.

### 4.2 The Developer / Building Owner — *"is this asset sound?"*
- **State:** cautious, doing due diligence, protecting value.
- **Entry:** referral, direct, or search ("commercial condition survey tiling").
- **Path:** Home → Sectors → Services/Condition surveys → Expertise (who stands behind this) → Reports (proof) → Contact.
- **Job:** de-risk a purchase, a lease, or a portfolio.

### 4.3 The Solicitor / Loss Adjuster — *"I need an expert I can put in front of a tribunal"*
- **State:** evaluating credibility and independence; risk-averse.
- **Entry:** direct, referral, expert-witness directory.
- **Path:** Expertise (CV, credentials, court experience) → Expert witness services → CPR Part 35 statement → Reports → Contact.
- **Job:** instruct a credible, court-compliant expert who won't get taken apart in cross-examination. **This persona reads the fewest pages and matters the most per visit.** The Expertise page is effectively a landing page for them.

### 4.4 The Architect / QS — *"I need a specification I can rely on"*
- **State:** technical, detail-oriented, quality-focused.
- **Entry:** search or referral.
- **Path:** Insights → Services/Remedial specifications or QA → Approach → Contact.
- **Job:** get authoritative technical input into a live project.

**Cross-cutting design implication:** every persona needs to reach *proof of credibility* within one or two clicks from wherever they land. Credentials, standards and sample work are never more than a click away — but they are pulled toward the visitor contextually, not shoved forward.

---

## 5. Homepage narrative

The homepage is a scroll with a thesis. It should read top-to-bottom like the opening of a well-argued report: a calm assertion, then the evidence. No carousel, no "welcome to our website," no stacked feature cards. Seven movements:

**1 — Assertion (hero).** Near-full-height, mostly negative space. One line of typographic authority and a one-line qualifier. No stock hero image of a building. If imagery appears, it is a single restrained forensic detail or nothing at all.
> *The independent authority on commercial tiling.*
> *Inspection, investigation and technical reporting for the people who build, own and adjudicate.*

**2 — Credibility strip.** A quiet horizontal band of proof: years in practice, inspections completed, standards worked to, court instructions — set as data, in a monospaced technical style, not as bragging. Restraint is the flex.

**3 — What we do (the three modes).** *Assess · Investigate · Specify.* Three columns on a strict grid, each with the definition and its capabilities. This is the IA made visible. Editorial, not card-y.

**4 — Method preview.** A short, numbered account of how an engagement runs — the "Approach" page trailer. Signals rigour and process.

**5 — Evidence.** One or two redacted case excerpts or a single forensic image with an annotated caption. This is where the *forensic photography* direction earns its keep — a macro image of a defect with measurement annotations says more than a paragraph.

**6 — The principal.** A single, restrained portrait and a short authority statement naming the person, credentials and standing. Expert witness credibility is personal; the site must have a face and a name.

**7 — Quiet close.** Not a "get in touch today!" banner. A calm line — *"Instruct us"* — with the essential contact facts. The door is open; we are not chasing anyone through it.

The emotional target for the scroll: the visitor should finish it feeling that they have met a serious, unhurried, expensive professional who is completely in command of the subject — and feel slightly *reassured* to have found them.

---

## 6. Visual design direction

### 6.1 The reference triangulation

The brief names Apple × Foster + Partners × Arup × Leica. Each contributes one specific thing, and it's worth being precise about *what* we take from each so the direction doesn't collapse into generic minimalism:

- **Apple** → confidence through negative space and typographic scale; the courage to let one idea own a whole viewport.
- **Foster + Partners** → the architectural grid; structure you can feel even when you can't see it; considered document/portfolio layout.
- **Arup** → the engineering-report aesthetic; data as texture; diagrams, figures, captions, numbered method.
- **Leica** → **the metrology aesthetic** — precision instruments, calibration, the single iconic red used *functionally*, the sense that everything is measured. This is the most under-exploited and most distinctive of the four, and I want to lean on it hardest.

### 6.2 The unifying concept — *"The Instrument"*

The design metaphor is a **precision measuring instrument**: calibrated, gridded, annotated, tolerant to fractions of a millimetre. Not "a building." Not "a construction site." An *instrument*. This single idea drives colour (near-monochrome with one functional signal accent), type (a precise grotesque plus a technical mono for data), motion (mechanical, exact, never bouncy), and photography (forensic, annotated, measured). It keeps us from drifting into either "luxury minimalism cliché" or "construction template."

### 6.3 Layout language

- Massive whitespace as structure, not decoration — space *is* the confidence.
- A visible-when-you-look-for-it grid: content aligns to a strict column system, with the occasional exposed rule, coordinate label, or figure number to hint at the underlying structure (the "instrument" showing its graticule).
- Editorial asymmetry over centred symmetry — text sets left, ranged against generous right-hand space, like a report.
- Rules (thin hairlines) instead of boxes. We divide space with lines, not cards. **No rounded blob cards** (per brief — and it's the right call; rounded cards are the single biggest "template" tell).
- Every section labelled like a figure: small monospaced overlines — *"01 / Assess"*, *"Fig. 3 — Lippage at threshold"* — carrying the technical-document texture.

---

## 7. Typography recommendations

Typography carries the majority of the brand here, because we're deliberately image-light. Three-voice system:

**Voice 1 — Display & headings (the authority voice): a refined neo-grotesque.**
Recommended direction: a precise, slightly warm grotesque with excellent large-size presence. Candidates, in order of preference and licensing pragmatism:
- **Söhne** (Klim) or **Neue Haas Grotesk** — the definitive engineered grotesques; expensive, worth it.
- **Suisse Int'l** — Swiss precision, slightly more character.
- Open-source / free fallback that doesn't embarrass: **Inter** (heavily used, so risk of ubiquity) or better, **Geist Sans** — clean, modern, free, and pairs naturally with the Next.js/Vercel stack.

**Voice 2 — Editorial body / long-form reports (the report voice): consider a serif.**
For Insights articles and any long technical prose, a high-quality serif signals *authored expertise* and improves reading comfort at length. Candidates: **Lyon**, **Freight Text**, or free: **Source Serif 4** / **Newsreader**. This is optional but recommended — a serif in the report contexts creates a meaningful distinction between "UI/marketing" and "authored technical content," which reinforces the consultancy positioning.

**Voice 3 — Data & annotations (the instrument voice): a technical monospace.**
This is the signature detail. Figure numbers, specimen references, coordinates, tolerances, the credibility-strip statistics, section overlines — all set in mono. It is the typographic embodiment of the metrology metaphor and it's what will make the site feel *unlike* any competitor. Candidates: **Söhne Mono**, **Commit Mono**, **Geist Mono** (free, stack-native), **JetBrains Mono**.

**Type scale (modular, ratio ~1.25 major-third, tuned per breakpoint).** Indicative desktop:

| Token | Use | Size (rem) | Weight | Leading |
|---|---|---|---|---|
| `display-xl` | Hero line | 4.5–6.0 (fluid) | 400–500 | 1.02 |
| `display-l` | Section heads | 3.0 | 400–500 | 1.05 |
| `heading-m` | Sub-heads | 1.75 | 500 | 1.15 |
| `heading-s` | Card/service titles | 1.25 | 500 | 1.25 |
| `body-l` | Lead paragraphs | 1.25 | 400 | 1.6 |
| `body-m` | Default body | 1.0625 | 400 | 1.65 |
| `caption` | Captions, meta | 0.875 | 400 | 1.5 |
| `mono-label` | Overlines, data | 0.75–0.8125 | 400 | 1.4, +0.06em tracking, uppercase |

**Principles:** tight leading on display (confidence), generous leading on body (readability at length), wide tracking + uppercase only on the mono labels. Fluid type via `clamp()` so the hero scales cleanly from mobile to 4K. Never more than these steps — a small scale, ruthlessly applied, is what "systematic" feels like.

---

## 8. Colour system

**⚠ Note on the brief:** it says avoid "bright gradients" — agreed, absolutely. The system below is near-monochrome by design, with exactly *one* functional accent used with extreme discipline.

### 8.1 Philosophy
Paper and ink, plus a single instrument signal. The accent is never decorative — it behaves like the red index line on a measuring tool: it marks, it points, it annotates, and it appears on perhaps 1–2% of any given screen. Discipline with the accent is the whole game; the moment it becomes a "brand colour" splashed on buttons and banners, we've become a template.

### 8.2 Neutrals (the 95% of the palette)

Warm-neutral, not cold clinical white — warmth reads as considered and expensive; pure `#FFFFFF` reads as unstyled default.

| Token | Hex (indicative) | Role |
|---|---|---|
| `paper` | `#F7F6F3` | Primary background (warm off-white) |
| `paper-raised` | `#FFFFFF` | Cards/surfaces where minimal elevation is needed |
| `ink` | `#16161A` | Primary text (near-black, not pure black — softer, more premium) |
| `ink-70` | `#4A4A50` | Secondary text |
| `ink-40` | `#8A8A90` | Tertiary / meta |
| `hairline` | `#E3E1DC` | Rules and dividers |
| `graphite` | `#22242A` | Dark-section background (for one or two inverted sections) |

### 8.3 The signal accent

| Token | Hex (indicative) | Role |
|---|---|---|
| `signal` | `#C8102E` *(instrument red)* | Functional accent only — annotation markers, active states, key data points, focus rings |

**Alternative if red feels too Leica-derivative:** a precise technical blue (`#1F4FD8`, "blueprint") or a deep ink-teal. I recommend **red**, held to metrology use, because it is the braver and more memorable choice and directly honours the Leica reference — but it demands the discipline described above. **Decision needed.**

### 8.4 Dark mode
A genuine inverted theme (graphite ground, paper-coloured text) — not an afterthought. The inverted sections on the homepage double as a preview of it. Full dark mode is *recommended but can be Phase 2* if it threatens the launch date; the token system below is built to support it from day one either way.

### 8.5 Accessibility
Every text/background pairing meets **WCAG 2.2 AA** minimum (4.5:1 body, 3:1 large text); we target **AAA** for body copy where the warm palette allows it. The signal accent is *never* the sole carrier of meaning (colour-blind safe): it always co-occurs with a label, icon or position.

---

## 9. Spacing system

A single 8-point base unit, with a 4-point half-step for fine typographic adjustment. Everything — margins, gaps, padding, type leading targets — resolves to this grid. This is the "pixel-perfect spacing" the brief demands, made mechanical so it can't drift.

**Scale (rem, root 16px):**
`0 · 0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8 · 12 · 16 · 24`
→ tokens `space-0 … space-24` (values in multiples of the 8px base; the 0.25/0.75 steps are the 4px half-unit for optical fixes only).

**Layout grid:** 12 columns, generous gutters, a hard **max content width ~1200–1280px**, and — critically — a *wide* outer margin so content never touches the viewport edge on desktop. The whitespace lives in the margins and in the vertical rhythm between sections.

**Vertical rhythm (section spacing):** large and consistent. Section padding of `space-16`/`space-24` (128–192px) on desktop, scaling down responsively. The generosity of vertical space between sections is the primary lever that makes the site *feel* expensive; when in doubt, add space.

**Responsive spacing:** section rhythm scales with viewport via fluid clamps so the *proportions* hold from mobile to desktop rather than collapsing to cramped mobile defaults.

---

## 10. Component inventory

Component-driven, small, composable. Grouped by layer. Nothing here is a rounded card.

**Primitives / foundations**
- `Type` tokens (display, heading, body, caption, mono-label)
- `Grid` / `Container` / `Section` (enforces the 12-col grid + section rhythm)
- `Hairline` / `Rule` (horizontal & vertical dividers)
- `Overline` (mono section label — `01 / Assess`, `Fig. 3`)
- `Button` / `TextLink` (quiet: text + rule, not filled blobs)

**Content**
- `Hero` (full-height typographic assertion; optional single forensic image)
- `CredibilityStrip` (mono data row — years, inspections, standards, instructions)
- `ModeBlock` (Assess / Investigate / Specify — the three-column editorial block)
- `ServiceIndex` (the eight capabilities on the grid)
- `ServiceHeader` + `MethodList` (numbered steps) + `StandardsList` + `DeliverableCard`
- `FigureImage` (forensic image + monospaced annotated caption + figure number)
- `CaseExcerpt` (redacted case study block)
- `PrincipalBlock` (portrait + authority statement + credentials)
- `Pullquote` / `StatementLine` (large-type editorial assertion)
- `SectorCard` (who we serve — restrained, rule-divided, not blob)
- `InsightCard` / `InsightList` (editorial index)
- `StandardTag` (mono chip: `BS 5385-3`)

**Wayfinding & shell**
- `Header` (5-item nav + quiet "Instruct us")
- `Footer` (sitemap, trust/regulatory links, contact, CPR statement link)
- `Breadcrumb` (mono, understated — for deep pages)
- `TableOfContents` (for long Insight/report pages)

**Interactive / forms**
- `EnquiryForm` / `InstructForm` (calm, multi-field, no aggressive validation theatre)
- `Field` / `Fieldset` primitives
- `Disclosure` (accordion for FAQs/standards — accessible, no bounce)

**Utility**
- `SEO`/`Meta` head component, `JsonLd` (structured data), `SkipLink`, `VisuallyHidden`, `ThemeToggle` (if dark mode ships).

Each component ships with: defined props, a default state, responsive behaviour, focus/keyboard handling, and a note on the *one* motion it's allowed (see §11).

---

## 11. Animation philosophy

**One sentence:** motion should feel like a precision instrument settling — mechanical, exact, decisive, and mostly invisible. If a visitor *notices* an animation, it's probably wrong.

**Principles**
1. **Reveal, don't perform.** The only routinely allowed motion is a restrained fade-and-rise on scroll entry (opacity 0→1, translateY ~12–16px), staggered subtly across a group. No parallax carnival, no scroll-jacking.
2. **Mechanical easing, never bouncy.** Custom cubic-bezier with a firm settle (e.g. `cubic-bezier(0.16, 1, 0.3, 1)` — fast out, precise in). **No spring overshoot, no elastic.** Overshoot is the opposite of "measured."
3. **Fast and short.** Durations 200–500ms. Micro-interactions ≤200ms. Nothing lingers.
4. **Purposeful only.** Motion earns its place by directing attention or confirming an action (link underline draw, focus ring, form state). Decoration is not a reason.
5. **The signature moment, used once or twice.** A single, precise "measurement" gesture — e.g. a hairline that *draws* across the hero on load, or an annotation that snaps to a figure — as the one place the "instrument" idea animates. Scarcity makes it feel intentional.
6. **Respect `prefers-reduced-motion` completely.** Reduced-motion users get instant, no-transform reveals — not a degraded experience, an equally-considered one.
7. **Performance-gated.** Motion never blocks LCP, never runs on the critical path, and is disabled/simplified on low-power signals. Framer Motion used sparingly and code-split; most reveals can be CSS/IntersectionObserver to keep JS light.

---

## 12. Photography direction

**⚠ Challenge — the biggest creative divergence from a naive read of the brief.**

The brief says "architectural photography." I'd argue that glossy architectural photography (wide shots of finished buildings, dramatic façades) is a **trap** for this business, because:

1. It's generic — every construction and property site uses it. It signals nothing specific.
2. It's *not what this business does.* This firm doesn't design buildings; it examines surfaces at close range and finds what's wrong.
3. The real, ownable, un-fakeable visual asset of a forensic consultancy is **the forensic detail itself.**

**Recommended direction: forensic / metrological photography.** Two registers:

**Register A — The Evidence (hero of the photographic language).**
Macro and close-detail imagery of the actual subject matter, shot like scientific documentation:
- Defect detail: lippage at a threshold, grout failure, efflorescence, tenting, delamination, cracked tiles, movement-joint failure — shot sharp, evenly lit, high detail.
- **Annotated** — with monospaced callouts, measurement lines, figure numbers, tolerances. The annotation is the design; it turns a photo into evidence and directly expresses the "instrument" concept.
- Moisture readings, deflection, thermographic/IR imagery where relevant — the instruments *in use*.
This register is unique to this firm, impossible for competitors to copy convincingly (it requires real expertise to produce), and it *is* the proof. It should carry the homepage evidence section and every service/case page.

**Register B — The Practice (used sparingly, for humanity/context).**
- The principal, shot as a serious portrait (Leica-like: sharp, honest, unglamorous, natural light) — for the Expertise/Principal contexts. This matters: expert credibility is personal.
- Occasional wide *context* shots of commercial interiors (hotel bathrooms, retail floors, plant rooms, station concourses) — but restrained, desaturated, architectural in the Arup sense (space and structure), never in the estate-agent sense (glossy and staged).

**Treatment:** consistent, slightly desaturated, cool-neutral grade; natural light; high sharpness/detail (precision); generous negative space in composition so images sit calmly in the layout; no heavy filters, no dramatic gradients.

**Interim/launch reality:** if a real forensic library doesn't exist yet, we (a) commission a focused shoot of a handful of representative defects and one principal portrait — small budget, huge return — and (b) in the meantime, lean *harder* on typography and let sections be image-free rather than filling them with stock. **Empty is more premium than generic stock.** Never a stock hard-hat handshake.

---

## 13. Iconography direction

The brief says avoid "generic icons everywhere." Agreed. Icons are a template tell when overused.

**Recommended approach: near-zero decorative iconography.** Replace the instinct-to-iconify with:
- **Numbers and figure labels** (mono) for steps and sections — `01`, `02`, `Fig. 4`.
- **Hairline diagrams** where a concept genuinely needs a picture — precise, single-weight line drawings in the "engineering figure" register (a section detail, a joint diagram, a moisture-path schematic). These are *illustrations-as-evidence*, not UI decoration, and they reinforce the Arup engineering-drawing feel.
- A **tiny, strictly functional UI icon set** only where usability requires it — a single hairline weight, matched to the type, custom or from a restrained set (e.g. a refined line set), used *only* for: menu/close, external link, chevron/disclosure, and a couple of form/contact affordances. Nothing more.

**Rule:** if an icon is decorative, it's deleted. If it's functional, it's a hairline, single-weight, and matches the type's optical weight. The strongest "icon system" for this brand is *no icon system* — just numbers, rules, and the occasional precise technical diagram.

---

## 14. Design system foundations

Tokens-first, so the visual language is enforced by the system rather than by memory. Delivered as a small set of TypeScript design tokens feeding Tailwind's theme.

**Token layers**
- **Colour:** the §8 palette as semantic tokens (`--color-paper`, `--color-ink`, `--color-signal` …), with a light and (optional) dark map. Semantic, not literal — components reference `surface`/`text-primary`, not hex.
- **Type:** family, size, weight, leading, tracking tokens (§7); a `Text`/`Heading` primitive that only accepts scale tokens (no arbitrary sizes in components — this is how the scale stays disciplined).
- **Space:** the 8pt scale (§9) as the *only* spacing source; arbitrary pixel values disallowed by lint/convention.
- **Layout:** container widths, grid columns, gutter, section-rhythm tokens.
- **Motion:** duration and easing tokens (§11); one `Reveal` component wrapping the approved motion so no ad-hoc animation creeps in.
- **Elevation/border:** hairline tokens, radius token pinned near-`0` (a system-level guard against blob-drift), focus-ring token.

**Governance**
- Documented in a lightweight living style reference (a `/styleguide` route in dev, or Storybook if the budget supports it — I'd start with a single in-repo styleguide route to avoid Storybook overhead at this scale).
- One source of truth: tokens in code → Tailwind theme → components. No parallel Figma-only values that drift from code.
- **Definition of done for any component:** uses only tokens; responsive; keyboard-accessible; focus-visible; reduced-motion honoured; AA contrast; documented props.

---

## 15. SEO strategy

SEO here is *credibility capture*, not volume chasing. The audience is small, high-value and intent-driven. We win by owning the exact technical questions our buyers ask, and by being unimpeachably fast and well-structured.

**15.1 Intent map (the queries that matter).** Not "tiling" (that's contractor volume we don't want). Instead the *problem* and *authority* queries:
- Defect/standard queries: "tile lippage tolerance BS 5385", "why do commercial tiles crack", "efflorescence causes tiling", "movement joint failure tiling".
- Instruction queries: "tiling expert witness UK", "commercial tiling defect report", "tiling condition survey commercial", "independent tiling inspection".
- These map directly onto the **Insights** engine (technical explainers = the top-of-funnel authority content) and the **Services** pages (bottom-of-funnel instruction intent).

**15.2 Content-as-SEO.** The Insights library is the growth engine: each article answers one real technical question definitively (a proper standards explainer), earns links from the trade/professional web, and routes to the relevant service. Quality over cadence — a handful of definitive pieces beat a content mill, and definitive-ness is on-brand.

**15.3 Technical SEO (table stakes, done properly).**
- Server-rendered (Next.js SSR/SSG) — content in the initial HTML, not hydrated-in.
- Per-page `title`/`description`, canonical URLs, semantic heading hierarchy, descriptive alt text on every forensic image.
- **Structured data (JSON-LD):** `Organization` / `ProfessionalService`, `Person` (the principal, with credentials — powerful for expert-witness E-E-A-T), `Article` for insights, `BreadcrumbList`, `FAQPage` where relevant.
- `sitemap.xml`, `robots.txt`, clean canonical URL structure, Open Graph / Twitter cards with a restrained branded template.
- Core Web Vitals as a hard budget (see §17) — Google rewards it and it's on-brand anyway.

**15.4 E-E-A-T is the whole strategy.** For a YMYL-adjacent professional-authority site, *Experience, Expertise, Authoritativeness, Trust* is the ranking story: a named, credentialed principal (Person schema + Expertise page), citations to real standards, real (redacted) case work, clear contact and regulatory pages, and inbound links from professional bodies/directories. Every trust page in §2 is also an SEO asset.

**15.5 Local/directory presence.** Expert-witness directories, professional-body listings (e.g. relevant tiling/building-surveying institutions), and a properly-marked-up business profile — low effort, high credibility-and-SEO return for this niche.

---

## 16. Content strategy

**16.1 Principle.** Every word is written like report prose: precise, plain, evidence-led, un-adjectival. The copy *is* a demonstration of the expertise. If the writing is loose, the expertise reads as loose.

**16.2 Voice rules (for whoever writes the copy).**
- Lead with the fact, not the pitch. ("We assess against BS 5385." not "We're passionate about quality.")
- Name standards, tolerances, and methods — specificity is the proof.
- Short sentences. One idea each. Whitespace in the prose as in the layout.
- Never "we": prefer the plainest possible construction. Reserve first person for the principal's authored voice on Expertise/Insights.
- No superlatives, no urgency, no "trusted by industry leaders" filler.

**16.3 Content inventory (what actually needs writing).**
- Home narrative copy (7 movements, §5).
- 8 service pages to the §3.2 template.
- Approach/method page — the flagship process piece.
- Expertise page — the principal's CV, credentials, memberships, court experience, standards worked to. **The single most important page for the highest-value persona.**
- 3–5 Sector blurbs.
- 3–6 redacted case studies / defect-library entries (real evidence, anonymised).
- 6–12 foundational Insight articles (the SEO/authority seed set).
- Trust/regulatory pages incl. the CPR Part 35 statement.
- Microcopy: form labels, empty states, error states, meta descriptions — all held to the same voice.

**16.4 Content governance.** A short written style guide (this section, expanded) so the voice survives contact with future contributors. The forensic tone is fragile; it must be protected.

---

## 17. Technical architecture

**17.1 Stack (confirming the brief, with specifics).**
- **Next.js (App Router)** on **TypeScript**, **static-first** (SSG/ISR) — the site is mostly stable content, so pre-render everything and serve it from the edge. Server Components for the content shell; client JS only where genuinely needed (forms, theme toggle, the sparing motion).
- **Tailwind CSS** driven by the §14 design tokens (extend the theme from the token source; avoid arbitrary values).
- **Framer Motion** — code-split, used only for the approved reveals/signature moment; prefer CSS + IntersectionObserver for routine reveals to keep the bundle light.
- **Content:** start with typed content in the repo (MDX for Insights, typed data modules for services/sectors) to avoid CMS overhead at launch; design the data layer so a headless CMS (Sanity/Contentful/Payload) can slot in later *if* the client will self-author. **⚠ Recommendation:** don't buy a CMS before there's a person who'll use it — MDX-in-repo is faster, cheaper, and perfectly premium at this scale. Revisit at Phase 2.
- **Forms:** a serverless route (or a service like Resend/Formspark) with server-side validation, spam protection (honeypot + rate limit, no clunky CAPTCHA), and a plain, dignified confirmation.
- **Hosting:** Vercel (native Next.js, edge, preview deploys) — or equivalent edge host.
- **Analytics:** privacy-first, cookieless (Plausible/Vercel Analytics) — no cookie-banner clutter, on-brand restraint, GDPR-clean.

**17.2 Performance budget (hard targets, not aspirations).**
- Lighthouse ≥ **95** across Performance / Accessibility / Best Practices / SEO on the key templates.
- LCP < 2.0s, CLS < 0.05, INP < 200ms on a mid-tier mobile.
- Ship near-zero render-blocking JS on content pages; self-host fonts with `font-display: swap` and preloaded subsets; responsive/AVIF-WebP images via `next/image`; motion off the critical path.
- Performance is a *brand attribute* here (precision, restraint), so it's a launch gate, not a nice-to-have.

**17.3 Accessibility (built in, per brief).**
- **WCAG 2.2 AA** as the baseline, verified: semantic HTML, one `h1`/page, logical heading order, keyboard-navigable everything, visible focus, skip links, ARIA only where semantics fall short, `prefers-reduced-motion` honoured, AA+ contrast (§8), forms with associated labels and clear error messaging. Accessibility audited on every template before launch (axe + manual keyboard/screen-reader pass).

**17.4 Engineering quality.**
- Strict TypeScript, ESLint + Prettier, a spacing/token lint discipline, component-level tests for the interactive pieces, and CI that runs lint + typecheck + Lighthouse-CI budget on every PR. Conventional commits. Preview deploy per PR for visual review.

---

## 18. Build roadmap

Phased so we're never far from something real, and so the expensive-to-change decisions (strategy, tokens) are locked before the cheap-to-change ones (copy, images) pile on top.

**Phase 0 — Sign-off (this document).**
Agree strategy, name direction (§1.6), accent colour (§8.3), and the photography direction (§12). *These four decisions gate everything else — resolve them before build.*

**Phase 1 — Foundations (design system in code).**
Repo scaffold (Next + TS + Tailwind), design tokens (colour/type/space/motion), core primitives (`Type`, `Grid`, `Section`, `Rule`, `Overline`, `Button`, `Reveal`), a `/styleguide` route, CI + performance/a11y budgets wired from day one. *Outcome: the visual language exists and is enforced before any page is built.*

**Phase 2 — Homepage + shell.**
Header, footer, and the full homepage narrative (§5) as the vertical slice that proves the whole language. This is the design-approval milestone — get the home page right and every other page is assembly.

**Phase 3 — Core templates.**
Services index + the eight service pages (shared template), Approach, Expertise (with Person schema), Sectors, Contact/Instruct with working form. *Outcome: the full instruction journey works end to end.*

**Phase 4 — Content engine.**
Insights (MDX pipeline, article template, index), Reports/case studies, seed 6–12 authority articles and 3–6 redacted cases. *Outcome: the SEO/authority engine is live.*

**Phase 5 — Polish, proof, launch.**
Real forensic photography + principal portrait integrated, the signature motion moment, full a11y + Lighthouse audit against the §17 budget, structured data, sitemap/robots, meta/OG templates, trust/regulatory pages, cross-browser/device QA. Launch gate = budgets green.

**Phase 6 — Post-launch (optional, demand-led).**
Dark mode (if deferred), headless CMS (only if self-authoring is real), analytics review, and an Insights publishing cadence. Iterate on evidence, not opinion.

---

## Decisions I need from you before Phase 1

1. **Name (§1.6)** — is there a principal's surname to build the mark around, or do we coin an abstract mark? *(I recommend a surname.)*
2. **Signal accent (§8.3)** — instrument red (my recommendation) or technical blue?
3. **Photography (§12)** — do you accept the forensic-over-architectural direction, and is there budget for a small commissioned defect + portrait shoot?
4. **Serif for long-form (§7, Voice 2)** — in or out for the report/Insights contexts?
5. **CMS (§17.1)** — confirm MDX-in-repo for launch, CMS deferred to demand?

Answer those five and we can begin Phase 1 with nothing left ambiguous.
