# Universal Web UI/UX Library — Codex Reference

Use this document as the default UI/UX sourcing policy for website projects.

The goal is **not** to assemble websites from random component libraries.
The goal is to use the best source for each job, then adapt the result to the project's own design system.

---

## 1. Core rule

**One project = one visual system.**

External libraries are sources for:
- functional primitives,
- interaction patterns,
- component structure,
- accessibility behavior,
- animation ideas,
- visual research.

They are **not** the final design language unless the project explicitly calls for their default styling.

Codex must prefer:
1. reuse of the project's existing components;
2. native HTML/CSS when simple;
3. one functional primitive system;
4. selective open-code components;
5. custom styling aligned to the project's tokens.

Do not install several overlapping component systems.

---

# 2. Universal stack

## A. Functional UI primitives — first choice

### shadcn/ui
Website: https://ui.shadcn.com/

Use for:
- buttons
- dialogs
- sheets/drawers
- dropdowns
- navigation menus
- accordions
- tabs
- selects
- forms
- popovers
- tooltips
- command menus
- carousels
- accessible interactive primitives

Why:
- open code copied into the repository;
- easy for Codex to inspect and customize;
- accessibility-conscious primitives;
- good foundation without forcing a visual theme.

Rule:
**Use shadcn for behavior, not for making every website look like shadcn.**

For new shadcn projects, prefer the current recommended primitive base unless the existing project already uses another one.
Never migrate an existing production app from Radix/Base UI/etc. only for aesthetic reasons.

Do not add shadcn to a simple static/PHP website just to create a normal button or navigation.

---

## B. Creative / marketing components — primary discovery source

### 21st.dev
Website: https://21st.dev/

Use for:
- hero sections
- creative navigation
- marketing cards
- image treatments
- animated sections
- typography layouts
- creative buttons
- background effects
- unusual but usable interaction patterns
- component inspiration for AI coding agents

21st is a registry/catalog, not one consistent component library.

Recommended libraries commonly discoverable through 21st include:
- Magic UI
- Kokonut UI
- Ruixen UI
- Motion Primitives
- Origin UI
- HextaUI
- other relevant shadcn-compatible registries

Codex workflow:
1. search 21st for the exact component type;
2. shortlist the simplest component that matches the project;
3. inspect dependencies;
4. copy only the required code;
5. remove unnecessary effects/dependencies;
6. restyle completely using project tokens;
7. test mobile, keyboard and reduced-motion behavior.

Do not combine five 21st components from five aesthetics without normalizing them.

---

## C. Editorial motion / creative interaction research

### Codrops
Website: https://tympanus.net/codrops/

Best for:
- editorial menus
- hover reveals
- image-on-hover navigation
- typography interactions
- page transitions
- creative grids
- scroll interactions
- restrained experimental motion
- portfolio / art / culture / fashion interaction ideas

Use Codrops primarily as:
**interaction research + implementation reference.**

Before shipping copied demo code:
- inspect its licensing/credits;
- simplify it;
- remove unnecessary WebGL/GSAP/Three.js if the effect can be reproduced with CSS;
- create touch/mobile fallbacks;
- respect `prefers-reduced-motion`.

Do not add WebGL or Three.js only because a demo looks impressive.

---

## D. Lightweight UI snippets

### Uiverse
Website: https://uiverse.io/

Use for:
- buttons
- loaders
- toggles
- checkboxes
- inputs
- simple hover effects
- small CSS micro-interactions

Useful when a small custom control is needed quickly.

Rules:
- prefer CSS-based elements with low dependency cost;
- remove excessive glow/neon effects unless the project calls for them;
- convert styling to the project's design tokens;
- verify semantics/accessibility after copying.

Uiverse UI elements are published under MIT according to the site.

---

### HyperUI
Website: https://hyperui.dev/

Use for:
- forms
- marketing sections
- basic cards
- headers
- footers
- content layouts
- Tailwind patterns

Best use:
take the **layout and semantic structure**, then replace the styling.

Do not use it when an existing component already solves the same problem.

---

# 3. Visual inspiration sources

These are **reference-only**, not code sources unless a specific asset explicitly permits reuse.

## Mobbin
https://mobbin.com/

Best for:
- product UX
- mobile/app flows
- onboarding
- forms
- navigation patterns
- real-world interaction patterns

Use when the project is an app, dashboard, SaaS product or complex workflow.

---

## Godly
https://godly.website/

Best for:
- creative websites
- high-end marketing
- typography
- page composition
- animation pacing
- contemporary art direction

---

## Land-book
https://land-book.com/

Best for:
- landing pages
- agency sites
- portfolios
- clean marketing layouts
- section composition

---

## Awwwards
https://www.awwwards.com/

Best for:
- art direction
- experimental sites
- premium presentation
- motion inspiration
- portfolio/cultural/fashion references

Important:
Do not blindly copy Awwwards interaction patterns.
Many award sites trade usability/performance for spectacle.

---

## Cosmos
https://www.cosmos.so/

Best for:
- moodboards
- typography references
- photography direction
- color/material inspiration
- visual research

---

# 4. Design and quality tools

## Frontend Design Skill

Use for:
- establishing the design direction;
- hierarchy;
- typography;
- spacing;
- composition;
- visual cohesion;
- translating a moodboard into UI.

Run/design with this mindset **before** randomly selecting components.

---

## make-interfaces-feel-better

Use for final interface polish:
- hover quality;
- active states;
- focus states;
- transition timing;
- small motion;
- responsive behavior;
- perceived quality;
- interaction feedback.

Use after the core UI works.

Never use polish tools to hide bad information architecture.

---

## Vercel Web Interface Guidelines
https://vercel.com/design/guidelines

Use as a QA standard for:
- accessibility
- performance
- interaction quality
- forms
- mobile behavior
- loading states
- layout stability
- browser/device behavior

Treat these as quality checks, not a visual style.

---

## Chrome DevTools / Chrome DevTools MCP

Use after implementation for:
- console errors
- responsive testing
- network analysis
- layout shift
- image sizing/loading
- runtime performance
- accessibility inspection
- interaction debugging

Do not declare a component finished only because it builds successfully.

---

# 5. Component sourcing decision tree

When Codex needs a component, use this order.

## Simple static element
Examples:
button, divider, text link, simple card, section heading.

→ Build directly with project CSS/Tailwind.

Do NOT install a library.

---

## Interactive primitive
Examples:
dialog, drawer, accessible dropdown, select, tabs, accordion.

→ Existing project primitive first.
→ Otherwise shadcn/ui when compatible.

---

## Creative marketing component
Examples:
hero, visual card, image reveal, creative navigation.

→ Search 21st.dev.
→ Adapt the selected implementation to the project's design system.

---

## Artistic interaction
Examples:
editorial hover menu, typographic reveal, transition concept.

→ Research Codrops.
→ Rebuild the simplest version required.

---

## Tiny visual micro-component
Examples:
loader, unusual checkbox, compact animated button.

→ Search Uiverse.
→ Adapt and accessibility-check.

---

## Standard Tailwind content/layout block
Examples:
contact form structure, simple footer, FAQ layout.

→ HyperUI can be used as a structural starting point.

---

## UX flow question
Examples:
mobile filter behavior, onboarding, search, checkout, settings.

→ Research Mobbin first.

---

## Visual/art-direction question
Examples:
hero composition, agency homepage, gallery feel, typography layout.

→ Research Godly + Land-book.
→ Use Awwwards selectively for more experimental references.
→ Use Cosmos for moodboard/material/photographic references.

---

# 6. Rules Codex must follow when taking external components

Before adding any external UI code:

1. Inspect the existing stack and component system.
2. Check whether an equivalent component already exists.
3. Check the source's license/usage terms.
4. Prefer copied/open code over a permanent runtime dependency when reasonable.
5. Add only the dependencies actually needed.
6. Do not import an entire library for one small effect.
7. Remove demo-only code.
8. Remove unused props, variants and animations.
9. Convert colors, fonts, spacing, radii and shadows to project design tokens.
10. Match the project's naming and file organization.
11. Preserve existing functionality/data contracts.
12. Maintain semantic HTML.
13. Ensure keyboard operation.
14. Provide visible focus states.
15. Ensure touch/mobile fallback for hover-based interactions.
16. Respect `prefers-reduced-motion`.
17. Test at mobile, tablet and desktop widths.
18. Check console/runtime errors.
19. Check performance impact.
20. Document the source when substantial code/logic was adapted.

---

# 7. Dependency policy

Codex must avoid dependency inflation.

Prefer, in order:

1. CSS / native browser APIs
2. existing project utilities
3. existing animation library
4. Motion when the project genuinely needs component animation
5. GSAP for complex timeline/scroll motion that CSS/Motion cannot reasonably handle
6. WebGL / Three.js only when the creative concept explicitly requires it

Never introduce:
- GSAP for a simple opacity transition;
- Three.js for a decorative hover;
- a second icon library for one icon;
- another form library if the existing form system is adequate;
- another component framework on top of the current one.

---

# 8. Visual consistency rule

External components must look as though they were designed for the project.

Normalize:
- typography
- color
- spacing
- grid
- border radius
- borders
- shadows
- icons
- animation duration/easing
- button height
- form field height
- focus states

Do not leave recognizable default styles from multiple libraries.

---

# 9. Recommended project structure

For projects where it fits the stack:

```text
src/
  components/
    ui/          # functional primitives
    shared/      # shared site components
    sections/    # page-level reusable sections
  styles/
    tokens.css   # colors, typography, spacing, motion tokens
  lib/
  data/

docs/
  DESIGN_SYSTEM.md
  UI_SOURCES.md
```

`UI_SOURCES.md` should record substantial third-party component inspiration/code:
- component
- source
- original URL
- license checked
- dependencies added
- modifications made

---

# 10. Standard Codex instruction block

Paste this into website tasks when appropriate:

```text
UI/UX SOURCING POLICY

Do not design every component from scratch and do not install a monolithic UI kit by default.

Use the following resource hierarchy:

1. Existing project components first.
2. Native HTML/CSS/Tailwind for simple UI.
3. shadcn/ui for accessible functional primitives when compatible with the stack.
4. 21st.dev for creative/open-code marketing components and interaction ideas.
5. Codrops for editorial interaction, navigation, image reveal, hover and transition research.
6. Uiverse for small CSS UI elements and micro-interactions.
7. HyperUI for simple Tailwind layout/form structures.
8. Mobbin for proven UX/product-flow references.
9. Godly and Land-book for modern website/art-direction references.
10. Awwwards for selective experimental inspiration only.
11. Cosmos for visual moodboard, typography, photography and material references.
12. Use Vercel Web Interface Guidelines as a quality/accessibility/performance standard.
13. Use Chrome DevTools for responsive/runtime/performance verification.
14. Apply Frontend Design Skill principles before component selection.
15. Use make-interfaces-feel-better principles for final interaction polish.

IMPORTANT:
- Use external libraries as sources, not as competing design systems.
- One project must retain one coherent visual language.
- Never mix multiple component libraries visually.
- Check licensing before using third-party code/assets.
- Prefer the simplest implementation with the fewest dependencies.
- Adapt every imported component to the project's design tokens.
- Preserve accessibility, mobile behavior, performance and existing functionality.
- Hover-only information must have a touch/mobile equivalent.
- Respect prefers-reduced-motion.
- Do not add GSAP, WebGL or Three.js unless the effect genuinely requires them.
- Never copy a reference website's brand, assets, text or exact composition.
```

---

# 11. Recommended default stack by project type

## Creative / cultural / portfolio
Primary:
- 21st.dev
- Codrops
- Godly
- Land-book
- Cosmos

Foundation:
- shadcn only where functional primitives are needed

Polish:
- make-interfaces-feel-better

QA:
- Vercel Guidelines
- Chrome DevTools

---

## Business / service website
Primary:
- native components
- shadcn
- 21st.dev selectively
- HyperUI selectively
- Land-book

Avoid excessive motion.

---

## SaaS / dashboard / application
Primary:
- shadcn/ui
- Mobbin
- 21st.dev for selected polished patterns

QA:
- Vercel Guidelines
- DevTools

Prioritize predictability and accessibility over visual experimentation.

---

## High-end campaign / experimental website
Primary:
- Codrops
- 21st.dev
- Godly
- Awwwards
- Cosmos

Use experimental motion only after:
- information architecture;
- mobile behavior;
- accessibility;
- performance budget

are stable.

---

# 12. Final principle

**Research widely. Implement selectively. Normalize everything.**

A good website should not reveal which component libraries were used.
It should look like one coherent product designed for one specific brand.

