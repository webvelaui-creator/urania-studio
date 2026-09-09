import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { getService, services } from '@/data/site-content';
import { absoluteUrl, createPageMetadata, JsonLd } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.metadata.title,
    description: service.metadata.description,
    path: `/servicii/${service.slug}/`,
    image: service.image?.src,
    imageAlt: service.image?.alt,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const path = `/servicii/${service.slug}/`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.metadata.description,
        url: absoluteUrl(path),
        image: service.image ? absoluteUrl(service.image.src) : undefined,
        provider: { '@id': absoluteUrl('/#organization') },
        areaServed: { '@type': 'City', name: 'Cluj-Napoca' },
        inLanguage: 'ro-RO',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Servicii', item: absoluteUrl('/servicii/') },
          { '@type': 'ListItem', position: 3, name: service.title, item: absoluteUrl(path) },
        ],
      },
    ],
  };

  return (
    <main id="content">
      <JsonLd data={serviceSchema} />
      <section className="detail-hero">
        <div className="detail-heading">
          <Link className="back-link" href="/servicii/">← Toate serviciile</Link>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="detail-intro">{service.longDescription}</p>
        </div>
        <MediaPlaceholder label={service.mediaLabel} image={service.image} variant="hero" />
      </section>

      <section className="detail-content">
        <div className="detail-index">
          <p className="eyebrow">Ce putem susține</p>
          <span>Un cadru tehnic adaptat proiectului, fără promisiuni standardizate.</span>
        </div>
        <div>
          <h2>În jurul proiectului tău</h2>
          <ul className="feature-list">
            {service.features?.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          {service.partnerNote ? <aside className="partner-note"><p className="eyebrow">Partener tehnic</p><p>{service.partnerNote}</p></aside> : null}
        </div>
      </section>
    </main>
  );
}
