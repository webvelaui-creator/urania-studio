'use client';

import { useEffect } from 'react';

const DELAY_MS = 3_000;

export function ServicesAutoScroll() {
  useEffect(() => {
    let timer: number | undefined;

    const scheduleScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
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
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null;
}
