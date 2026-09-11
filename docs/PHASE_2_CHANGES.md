# Phase 2 — motion, atmosphere and interface polish

Phase 1's markup and content are unchanged in structure. Everything below is additive:
the static layout is still the baseline that no-JavaScript and reduced-motion visitors get.

## 1. Opening sequence (homepage)

`components/hero-intro.tsx` + the `[data-urania-intro]` block in `app/globals.css`.

Three states run in order:

| State    | What is on screen                                                        |
| -------- | ------------------------------------------------------------------------ |
| `hold`   | The Urania artwork alone, full screen, a little closer to the viewer. Page scroll is locked. |
| `reveal` | The artwork glides back to its resting size while header, frame marks and wordmark come up over it. |
| `done`   | Hooks released — identical to the static, no-JavaScript hero.             |

Design notes:

- **The artwork never leaves the background and never changes size in layout.** The hero is
  a full-screen stage: the artwork is an absolutely positioned layer covering it, and the
  interface sits on top. The sequence is one transform on that layer, `scale(1.16)` easing
  to `scale(1)` over 2.6 s. There is no repositioning, no re-measuring and no handover
  between positioning schemes — which is exactly what keeps the movement continuous.
- **The framing is CSS, not JavaScript.** The opening frame is therefore correct at first
  paint rather than waiting on hydration; `HeroIntro` only decides when to move from
  `hold` to `reveal` to `done`. There is never a blank or half-built first frame.
- The artwork rests at `min(108vh, 132vw)` of square canvas, of which the statue covers
  about 80% — so the figure stands roughly 86% of the screen height and stays the dominant
  element. On narrow screens the canvas is allowed to run wider than the viewport
  (`min(92vh, 168vw)`) rather than shrink the statue.
- Timings: ~900 ms hold (waiting on image decode, hard-capped at 2.4 s), 2600 ms settle
  plus a small buffer before the hooks are released, so the last pixels never snap. Any
  wheel, touch or key event starts the settle early — it is never cut short.
- Two sizing traps worth knowing if this is edited. An absolutely positioned grid child is
  laid out inside its *grid area*, so the layer needs `grid-area: 1 / 1` or it collapses
  into a zero-height implicit row. And an item wider than its container overflows to one
  side unless the *track* is centred too, hence `place-content` alongside `place-items`.
- Armed by the inline `MOTION_BOOTSTRAP` script in `app/layout.tsx`, which runs before
  first paint. It plays on every cold load of `/`; the comment there shows the one-line
  change to limit it to once per visit. Client-side navigation back to `/` never replays it.
- A 6 s failsafe in the same script releases the page if hydration never happens.

## 2. Scroll motion

`components/site-motion.tsx`. One `IntersectionObserver` eases sections in, with a 90 ms
stagger across repeated items (cards, list rows, gallery cells). Also drives the header's
condensed scrolled state and the reading-progress rule under the header.

The hidden "before" state lives in CSS behind `.u-motion`, set pre-paint by the bootstrap
script, so reveals never flash. JavaScript only ever *adds* the `u-in` class. Reveals are
held back while the opening sequence is in `hold`.

## 3. Hero layout

Phase 1 gave the artwork a grid row of its own, which resolved to the artwork's intrinsic
height: the hero ran past the fold, the statue's base was cropped and the scroll cue sat
off-screen. Sizing that row was a fix but a poor one — it left the statue small.

The hero is now a full-screen stage instead. It is `100svh` tall and pulls itself up by
the header's height (`--header-h`), so it sits under the translucent sticky header and the
artwork is centred in the *screen* rather than in the space below the bar. That is what
makes the opening frame and the resting frame the same composition. The wordmark sits low
over the artwork with a full-width scrim behind it for contrast; the meta labels and corner
marks are offset by `--header-h` so they clear the header.

## 4. Imagery

18.4 MB of PNG became 1.2 MB of WebP (hero 1.7 MB → 305 KB). Source PNGs moved to
`design/source-artwork/` so they stay with the project without being deployed — see
`design/README.md` for regeneration commands.

The homepage's third card now uses the film-reel artwork instead of a `MEDIA / PHASE 02`
placeholder. Remaining placeholders on inner pages are untouched and still await Phase 2
photography.

## 5. Interface polish

Film-grain overlay, warm breathing hero gradient, corner frame marks and animated scroll
cue; condensed header with progress rule; arch-topped cards with image zoom, glow and
animated CTA underlines; sweep-fill buttons; bronze scrollbars and selection colour;
focus-visible retained throughout; hover states on feature rows and format panels; input
focus rings; staggered mobile menu; `text-wrap: balance`/`pretty` on headings and copy.

## 6. Housekeeping

`.next/` and `.vinext/` were in the previous zip although both are git-ignored build
caches. The cached font CSS inside `.vinext/` held absolute `C:/Users/...` paths, which
broke webfont loading on any other machine. Both directories are excluded from this
delivery and regenerate on `dev`/`build`.

`vite.config.ts` gained one opt-in setting: `DEV_ALLOWED_HOSTS`. Vite's dev server rejects
requests whose `Host` header it does not recognise, which blocks previewing through a
tunnel or reverse proxy. Set it only when you need that — `DEV_ALLOWED_HOSTS=.example.dev
npm run dev`, a leading dot covering subdomains. Unset, which is the normal case, Vite's
protection is untouched. It has no effect on `build`.

## Verified

`vinext build` passes; `oxlint` and `tsc --noEmit` are clean. The homepage and all four
inner routes return 200 with no console errors and no failed requests. Checked at 1440×900
and 390×844, plus `prefers-reduced-motion: reduce` (sequence never arms, nothing hidden,
artwork already at its resting size) and JavaScript disabled (full static layout).

The settle was verified by sampling the artwork's measured size across the sequence rather
than by eye: 1128 px of canvas at hold, easing through 994 px to 972 px at rest, with the
vertical centre fixed at 479 px throughout — i.e. a pure, centred scale.

Requires Node >= 22.13 as declared in `package.json` — Node 20 cannot run the toolchain.
