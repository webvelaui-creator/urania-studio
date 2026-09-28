import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { getSpace, spaces } from '@/data/site-content';
import { absoluteUrl, createPageMetadata, JsonLd } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return spaces.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const space = getSpace(slug);
  if (!space) return {};
  return createPageMetadata({
    title: space.metadata.title,
    description: space.metadata.description,
    path: `/spatii/${space.slug}/`,
    image: space.image?.src,
    imageAlt: space.image?.alt,
  });
}

export default async function SpaceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const space = getSpace(slug);
  if (!space) notFound();
  const path = `/spatii/${space.slug}/`;
  const detailTitle = space.slug === 'scena-black-box' ? 'Black Box' : space.title;
  const galleryImages = space.slug === 'scena-black-box'
    ? [
      { src: '/images/urania/black-box-lights-off.jpg', alt: 'Scena Black Box Urania cu luminile stinse', objectPosition: 'center' },
      { src: '/images/urania/black-box-lights-on.jpg', alt: 'Scena Black Box Urania iluminată pentru eveniment', objectPosition: 'center' },
      { src: '/images/urania/black-box-stage-disco.png', alt: 'Scena Black Box cu lumini roșii și albastre', objectPosition: 'center' },
      { src: '/images/urania/black-box-audience.png', alt: 'Scena Black Box pregătită pentru public', objectPosition: 'center' },
      { src: '/images/urania/black-box-golden-stage.png', alt: 'Scena Black Box cu instalație luminoasă aurie', objectPosition: 'center' },
    ]
    : [];
  const spaceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        name: `${space.title} — Urania Studio`,
        description: space.metadata.description,
        url: absoluteUrl(path),
        image: space.image ? absoluteUrl(space.image.src) : undefined,
        containedInPlace: { '@id': absoluteUrl('/#organization') },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Strada Horea, nr. 4',
          addressLocality: 'Cluj-Napoca',
          addressCountry: 'RO',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Spații', item: absoluteUrl('/spatii/') },
          { '@type': 'ListItem', position: 3, name: space.title, item: absoluteUrl(path) },
        ],
      },
    ],
  };

  return (
    <main id="content" className="detail-page detail-page--space">
      <JsonLd data={spaceSchema} />
      <section className="detail-hero">
        <div className="detail-heading">
          <Link className="back-link" href="/spatii/">← Toate spațiile</Link>
          <p className="eyebrow">{space.eyebrow}</p>
          <h1>{detailTitle}</h1>
          <p className="detail-intro">{space.longDescription}</p>
        </div>
        {space.slug === 'scena-black-box' ? (
          <div className="detail-hero__video-card">
            <video autoPlay muted loop playsInline preload="auto" aria-label="Tur video al sălii Black Box">
              <source src="/videos/black-box-ambience.mp4" type="video/mp4" />
            </video>
          </div>
        ) : <MediaPlaceholder label={space.mediaLabel} image={space.image} variant="hero" />}
      </section>

      <section className="gallery-block" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="sr-only">Galerie</h2>
        {galleryImages.length
          ? galleryImages.map((image) => <MediaPlaceholder image={image} key={image.src} label="GALLERY IMAGE" variant="gallery" />)
          : <><MediaPlaceholder label="GALLERY IMAGE" variant="gallery" /><MediaPlaceholder label="GALLERY IMAGE" variant="gallery" /></>}
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

    </main>
  );
}
