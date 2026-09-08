import { ContactCta } from '@/components/contact-cta';
import { MediaPlaceholder } from '@/components/media-placeholder';
import Link from 'next/link';

const entries = [
  {
    label: '01 / PROIECTUL',
    title: 'Servicii',
    description: 'Servicii și suport pentru proiecte culturale, artistice și evenimente.',
    cta: 'Descoperă serviciile',
    href: '/servicii/',
    media: 'SERVICE IMAGE',
  },
  {
    label: '02 / LOCUL',
    title: 'Spații de găzduire',
    description: 'Descoperă spațiile Urania și găsește cadrul potrivit pentru proiectul tău.',
    cta: 'Descoperă spațiile',
    href: '/spatii/',
    media: 'SPACE IMAGE',
  },
  {
    label: '03 / URANIA',
    title: 'În spatele scenei',
    description: 'O privire în universul Urania.',
    cta: 'Descoperă Urania',
    href: '/despre-urania/',
    media: 'BACKSTAGE IMAGE',
  },
];

export default function Home() {
  return (
    <main id="content">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Cluj-Napoca · Spațiu cultural independent</p>
          <h1 id="home-title">Un spațiu pentru voci, idei și imagini</h1>
          <p className="hero-intro">
            Urania Studio este un spațiu viu pentru întâlniri autentice dintre artiști,
            idei și public.
          </p>
          <p className="editorial-line">Un loc în care arta se trăiește de aproape.</p>
        </div>
        <MediaPlaceholder label="HERO IMAGE" variant="hero" />
      </section>

      <section className="entry-section" aria-labelledby="explore-title">
        <div className="section-heading">
          <p className="eyebrow">Alege direcția</p>
          <h2 id="explore-title">Descoperă Urania</h2>
        </div>
        <div className="entry-grid">
          {entries.map((entry) => (
            <Link className="entry-card" href={entry.href} key={entry.href}>
              <MediaPlaceholder label={entry.media} />
              <div className="card-copy">
                <p className="card-label">{entry.label}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <span className="text-link">
                  {entry.cta}<span aria-hidden="true"> ↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
