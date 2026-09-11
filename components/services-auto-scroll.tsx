'use client';

import { useEffect } from 'react';

const DELAY_MS = 5_000;

export function ServicesAutoScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };

    for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
      window.addEventListener(event, cancel, { once: true, passive: true, signal: controller.signal });
    }

    const timer = window.setTimeout(() => {
      if (cancelled || window.scrollY > 8) return;
      document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return null;
}
