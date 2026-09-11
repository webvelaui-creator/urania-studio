'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { spaces } from '@/data/site-content';

export function SpaceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-selector" aria-label="Alege un spațiu Urania">
      <div className="space-selector__panels">
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
                onClick={() => setActiveIndex(index)}
                aria-pressed={active}
                aria-label={`Arată detalii pentru ${space.title}`}
              />
              <div className="space-selector__label">
                <span className="space-selector__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="space-selector__copy">
                  <p>{space.eyebrow}</p>
                  <h2>{space.title}</h2>
                  <p className="space-selector__description">{space.shortDescription}</p>
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
