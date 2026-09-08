import { MediaPlaceholder } from './media-placeholder';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  mediaLabel?: string;
};

export function PageHero({ eyebrow, title, intro, mediaLabel }: PageHeroProps) {
  return (
    <section className={`page-hero${mediaLabel ? '' : ' page-hero--copy'}`}>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {mediaLabel ? <MediaPlaceholder label={mediaLabel} variant="hero" /> : null}
    </section>
  );
}
