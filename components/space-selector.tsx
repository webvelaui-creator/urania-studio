'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { spaces } from '@/data/site-content';

export function SpaceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [armedIndex, setArmedIndex] = useState<number | null>(null);
  const router = useRouter();

  function handlePanelTap(index: number, slug: string) {
    const isPhoneLayout = window.matchMedia('(max-width: 700px)').matches;

    if (!isPhoneLayout) {
      setActiveIndex(index);
      return;
    }

    if (armedIndex === index) {
      router.push(`/spatii/${slug}/`);
      return;
    }

    setActiveIndex(index);
    setArmedIndex(index);
  }

  return (
    <div className="space-selector" aria-label="Alege un spațiu Urania">
      <div className="space-selector__panels" data-active-index={activeIndex}>
        {spaces.map((space, index) => {
          const active = index === activeIndex;

          return (
            <article
              className={`space-selector__panel${active ? ' is-active' : ''}`}
              key={space.slug}
            >
              <Image
                className="space-selector__image"
                src={space.image?.src ?? ''}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, 65vw"
                style={{ objectPosition: space.image?.objectPosition ?? 'center' }}
              />
              <div className="space-selector__shade" aria-hidden="true" />
              <button
                className="space-selector__trigger"
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => handlePanelTap(index, space.slug)}
                aria-pressed={active}
                aria-label={armedIndex === index ? `Atinge încă o dată pentru a deschide ${space.title}` : `Arată detalii pentru ${space.title}`}
              />
              <div className="space-selector__label">
                <span className="space-selector__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="space-selector__copy">
                  <p>{space.eyebrow}</p>
                  <h2>{space.title}</h2>
                  <p className="space-selector__description">{space.shortDescription}</p>
                  <span className="space-selector__touch-hint" aria-hidden="true">Atinge încă o dată pentru a intra</span>
                  <Link className="space-selector__link" href={`/spatii/${space.slug}/`} tabIndex={active ? 0 : -1}>
                    Descoperă spațiul <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="space-selector__dots" role="tablist" aria-label="Spații Urania">
        {spaces.map((space, index) => (
          <button
            aria-label={space.title}
            aria-selected={activeIndex === index}
            className={activeIndex === index ? 'is-active' : ''}
            key={space.slug}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
