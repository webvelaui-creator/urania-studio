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
        <span>{open ? 'Închide' : 'Meniu'}</span>
        <i aria-hidden="true" />
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
