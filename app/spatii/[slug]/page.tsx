import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ContactCta } from '@/components/contact-cta';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { getSpace, spaces } from '@/data/site-content';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return spaces.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const space = getSpace(slug);
  if (!space) return {};
  return {
    title: space.metadata.title,
    description: space.metadata.description,
    alternates: { canonical: `/spatii/${space.slug}/` },
  };
}

export default async function SpaceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const space = getSpace(slug);
  if (!space) notFound();

  return (
    <main id="content">
      <section className="detail-hero">
        <div className="detail-heading">
          <Link className="back-link" href="/spatii/">← Toate spațiile</Link>
          <p className="eyebrow">{space.eyebrow}</p>
          <h1>{space.title}</h1>
          <p className="detail-intro">{space.longDescription}</p>
        </div>
        <MediaPlaceholder label={space.mediaLabel} variant="hero" />
      </section>

      <section className="gallery-block" aria-labelledby="gallery-title">
        <div><p className="eyebrow">Spațiul în imagini</p><h2 id="gallery-title">Galerie</h2></div>
        <MediaPlaceholder label="GALLERY IMAGE" variant="gallery" />
        <MediaPlaceholder label="GALLERY IMAGE" variant="gallery" />
      </section>

      {space.sections?.length ? (
        <section className="hosting-section" aria-labelledby="hosting-title">
          <div className="section-heading">
            <p className="eyebrow">Formate posibile</p>
            <h2 id="hosting-title">Ce poate găzdui</h2>
          </div>
          <div className="format-grid">
            {space.sections.map((section, index) => (
              <article key={section.title}>
                <p className="card-label">{String(index + 1).padStart(2, '0')}</p>
                <h3>{section.title}</h3>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {space.features?.length ? (
        <section className="detail-content facilities-section">
          <div className="detail-index"><p className="eyebrow">Configurație</p><span>Elemente confirmate, adaptate proiectului.</span></div>
          <div><h2>Facilități</h2><ul className="feature-list">{space.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
        </section>
      ) : null}

      <ContactCta type="spatiu" interest={space.slug} label={space.cta} />
    </main>
  );
}
