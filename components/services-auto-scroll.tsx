'use client';

import { useEffect } from 'react';

const DELAY_MS = 3_000;

export function ServicesAutoScroll() {
  useEffect(() => {
    let timer: number | undefined;
    let userHasScrolled = false;
    const initialScrollY = window.scrollY;

    const cancelAutoScroll = () => {
      userHasScrolled = true;
      window.clearTimeout(timer);
    };

    const scheduleScroll = () => {
      window.clearTimeout(timer);
      userHasScrolled = window.scrollY !== initialScrollY;
      timer = window.setTimeout(() => {
        if (userHasScrolled || window.scrollY !== initialScrollY) return;
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth';
        document.getElementById('services-list')?.scrollIntoView({ behavior, block: 'start' });
      }, DELAY_MS);
    };

    scheduleScroll();
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) scheduleScroll();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
        cancelAutoScroll();
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('wheel', cancelAutoScroll, { passive: true, once: true });
    window.addEventListener('touchstart', cancelAutoScroll, { passive: true, once: true });
    window.addEventListener('scroll', cancelAutoScroll, { passive: true, once: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('wheel', cancelAutoScroll);
      window.removeEventListener('touchstart', cancelAutoScroll);
      window.removeEventListener('scroll', cancelAutoScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
