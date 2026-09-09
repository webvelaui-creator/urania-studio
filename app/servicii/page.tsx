import { EditorialCard } from '@/components/editorial-card';
import { PageHero } from '@/components/page-hero';
import { services } from '@/data/site-content';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Servicii',
  description: 'Servicii și suport pentru proiecte culturale, artistice și evenimente la Urania Studio.',
  path: '/servicii/',
  image: '/images/urania/carousel.webp',
  imageAlt: 'Obiect teatral Urania',
});

export default function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Servicii / Urania Studio"
        title="Tot ce ai nevoie dincolo de spațiu"
        intro="Suport atent pentru ca proiectul să funcționeze — de la pregătire și configurație până la desfășurare și documentare."
      />
      <section className="listing-section" aria-label="Servicii disponibile">
        <div className="listing-grid">
          {services.map((service, index) => (
            <EditorialCard
              item={service}
              href={`/servicii/${service.slug}/`}
              index={index}
              key={service.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
