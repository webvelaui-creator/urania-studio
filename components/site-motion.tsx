'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Blocks that ease in as they enter the viewport. */
const BLOCKS = ['main > section:not([data-urania-hero])'];

/** Repeating items that ease in one after another inside a revealed block. */
const ITEMS = [
  '.entry-grid > *',
  '.listing-grid-three > *',
  '.audience-grid > p',
  '.urania-is li',
  '.format-grid > article',
  '.feature-list li',
  '.about-gallery > *',
  '.gallery-block > *',
];

/** Service cards begin their reveal just before they reach the lower edge of the viewport. */
const SERVICE_ITEMS = ['.listing-grid > *'];

/**
 * Adds the site's motion layer: scroll-linked header state, a reading progress rule, and
 * staggered reveals for content blocks.
 *
 * The hidden "before" state lives in CSS behind the `u-motion` class, which the inline
 * script in `app/layout.tsx` sets before first paint. That keeps the reveal flash-free while
 * leaving the site fully visible when JavaScript or motion is unavailable. This component
 * only ever adds the `u-in` class that plays each reveal.
 */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    // Tells the layout failsafe that the motion layer is alive and reveals will happen.
    document.body.dataset.motionReady = 'true';

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        root.style.setProperty('--u-progress', progress.toFixed(4));
        root.dataset.scrolled = window.scrollY > 16 ? 'true' : 'false';
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (!root.classList.contains('u-motion')) {
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (frame) cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('u-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
    );

    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('u-in');
          serviceObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px 8% 0px', threshold: 0.01 },
    );

    const observe = (selector: string, stagger: boolean, targetObserver = observer) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((node, index) => {
        if (node.classList.contains('u-in')) return;
        if (stagger) node.style.setProperty('--u-i', String(index % 6));
        targetObserver.observe(node);
      });
    };

    const start = () => {
      BLOCKS.forEach((selector) => observe(selector, false));
      ITEMS.forEach((selector) => observe(selector, true));
      SERVICE_ITEMS.forEach((selector) => observe(selector, true, serviceObserver));
    };

    // While the opening sequence holds the artwork on screen, nothing else may reveal —
    // a tall viewport could otherwise pull the next section into view behind the photo.
    let introWatcher: MutationObserver | undefined;
    if (root.dataset.uraniaIntro === 'hold') {
      introWatcher = new MutationObserver(() => {
        if (root.dataset.uraniaIntro === 'hold') return;
        introWatcher?.disconnect();
        start();
      });
      introWatcher.observe(root, { attributeFilter: ['data-urania-intro'] });
    } else {
      start();
    }

    return () => {
      introWatcher?.disconnect();
      observer.disconnect();
      serviceObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
