'use client';

import { useEffect } from 'react';

const DELAY_MS = 3_000;

export function ServicesAutoScroll() {
  useEffect(() => {
    let timer: ReturnType<typeof window.setTimeout>;

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
    window.addEventListener('pageshow', scheduleScroll);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pageshow', scheduleScroll);
    };
  }, []);

  return null;
}
