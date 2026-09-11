'use client';

import { useEffect } from 'react';

/** A quick visual beat before the interface arrives. */
const HOLD_MS = 1000;
/** Length of the settle. Must match the `reveal` transform transition in `globals.css`. */
const REVEAL_MS = 2000;
/** The intro never waits longer than this for the artwork to decode. */
const DECODE_TIMEOUT_MS = 700;

/**
 * Plays the opening sequence on the homepage. The artwork holds the screen on its own,
 * a little closer to the viewer, then eases back to its resting size while the header,
 * frame and wordmark come up over it. It stays a background layer throughout — nothing
 * is repositioned or resized in layout, so the movement is one uninterrupted transform.
 *
 * All framing is CSS, which means the first frame is correct before this ever runs; the
 * only job here is deciding when to move from `hold` to `reveal` to `done`. Armed by the
 * inline script in `app/layout.tsx`, and only for a cold load of `/` with motion allowed.
 */
export function HeroIntro() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.uraniaIntro !== 'hold') return;

    const image = document.querySelector<HTMLImageElement>('[data-hero-goddess]');
    if (!image) {
      root.dataset.uraniaIntro = 'done';
      return;
    }

    const timers: number[] = [];
    let cancelled = false;
    const later = (ms: number, run: () => void) => {
      timers.push(window.setTimeout(run, ms));
    };

    const settle = () => {
      if (cancelled || root.dataset.uraniaIntro !== 'hold') return;
      root.dataset.uraniaIntro = 'reveal';
      // A small buffer avoids releasing the hooks in the same frame as the transform ends.
      later(REVEAL_MS + 30, () => {
        if (cancelled) return;
        root.dataset.uraniaIntro = 'done';
      });
    };

    // Recorded so the bootstrap script in `app/layout.tsx` can optionally limit the
    // sequence to once per visit; it currently plays on every cold load of the homepage.
    try {
      sessionStorage.setItem('urania-intro', 'seen');
    } catch {
      // Private browsing can refuse storage — the sequence is unaffected.
    }

    window.scrollTo(0, 0);

    const decoded = image.complete
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          image.addEventListener('load', () => resolve(), { once: true });
          image.addEventListener('error', () => resolve(), { once: true });
          later(DECODE_TIMEOUT_MS, resolve);
        });

    void decoded.then(() => {
      if (cancelled) return;
      image.dataset.heroImageReady = 'true';
      later(HOLD_MS, settle);
    });

    // Any deliberate interaction starts the settle early; it is never cut short, so the
    // artwork keeps gliding instead of snapping to its resting size.
    window.addEventListener('wheel', settle, { passive: true, once: true });
    window.addEventListener('touchstart', settle, { passive: true, once: true });
    window.addEventListener('keydown', settle, { once: true });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener('wheel', settle);
      window.removeEventListener('touchstart', settle);
      window.removeEventListener('keydown', settle);
      root.dataset.uraniaIntro = 'done';
    };
  }, []);

  return null;
}
