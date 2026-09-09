import { EditorialCard } from '@/components/editorial-card';
import { PageHero } from '@/components/page-hero';
import { spaces } from '@/data/site-content';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Spații de găzduire',
  description: 'Descoperă cele trei spații Urania Studio și cadrul potrivit pentru proiectul tău.',
  path: '/spatii/',
  image: '/images/urania/scena.webp',
  imageAlt: 'Scena Black Box Urania',
});

export default function SpacesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Spații / Urania Studio"
        title="Spații diferite pentru proiecte diferite"
        intro="Trei cadre cu ritmuri distincte, gândite pentru scenă, sunet și conversație."
      />
      <section className="listing-section" aria-label="Spații disponibile">
        <div className="listing-grid listing-grid-three">
          {spaces.map((space, index) => (
            <EditorialCard item={space} href={`/spatii/${space.slug}/`} index={index} key={space.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
