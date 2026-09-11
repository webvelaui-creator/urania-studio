'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '@/data/site-content';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-urania-header>
      {/* Reading progress, driven by the --u-progress custom property in SiteMotion. */}
      <span className="header-progress" aria-hidden="true" />
      <Link className="wordmark" href="/" aria-label="Urania Studio — pagina principală">
        <span>Urania</span>
        <small>Studio / Cluj-Napoca</small>
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Închide meniul' : 'Deschide meniul'}</span>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="menu-button__line menu-button__line--top" d="M4 12H20" />
          <path className="menu-button__line menu-button__line--middle" d="M4 12H20" />
          <path className="menu-button__line menu-button__line--bottom" d="M4 12H20" />
        </svg>
      </button>
      <nav className="desktop-nav" aria-label="Navigație principală">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav
        id="mobile-navigation"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        aria-label="Navigație mobilă"
      >
        {navigation.map((item, index) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <small>0{index + 1}</small>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
