import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ContactCta } from '@/components/contact-cta';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { getService, services } from '@/data/site-content';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: { canonical: `/servicii/${service.slug}/` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main id="content">
      <section className="detail-hero">
        <div className="detail-heading">
          <Link className="back-link" href="/servicii/">← Toate serviciile</Link>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="detail-intro">{service.longDescription}</p>
        </div>
        <MediaPlaceholder label={service.mediaLabel} variant="hero" />
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
      <ContactCta type="serviciu" interest={service.slug} label={service.cta} />
    </main>
  );
}
