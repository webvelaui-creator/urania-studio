import { SpaceSelector } from '@/components/space-selector';
import { createPageMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';

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
      <section className="spaces-showcase" aria-label="Spații disponibile">
        <div className="spaces-showcase__heading">
          <div>
            <div className="spaces-showcase__title-row">
              <Link className="spaces-showcase__back" href="/" aria-label="Înapoi la pagina principală">
                <Image src="/images/left-arrow.png" alt="" width={16} height={16} />
              </Link>
              <h1>Spații</h1>
            </div>
          </div>
          <p>Trei cadre cu ritmuri distincte, gândite pentru scenă, sunet și conversație.</p>
        </div>
        <SpaceSelector />
      </section>
    </main>
  );
}
