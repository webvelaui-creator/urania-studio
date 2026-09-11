import { MediaPlaceholder } from './media-placeholder';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  mediaLabel?: string;
  media?: ReactNode;
  fullBleedMedia?: boolean;
};

export function PageHero({ eyebrow, title, intro, mediaLabel, media, fullBleedMedia = false }: PageHeroProps) {
  const hasMedia = Boolean(media ?? mediaLabel);

  return (
    <section className={`page-hero${hasMedia ? '' : ' page-hero--copy'}${fullBleedMedia ? ' page-hero--full-media' : ''}`}>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {media ?? (mediaLabel ? <MediaPlaceholder label={mediaLabel} variant="hero" /> : null)}
    </section>
  );
}
