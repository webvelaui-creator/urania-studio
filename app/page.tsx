import { ContactCta } from '@/components/contact-cta';
import { MediaPlaceholder } from '@/components/media-placeholder';
import Link from 'next/link';
import Image from 'next/image';

const entries = [
  {
    label: '01 / PROIECTUL',
    title: 'Servicii',
    description: 'Servicii și suport pentru proiecte culturale, artistice și evenimente.',
    cta: 'Descoperă serviciile',
    href: '/servicii/',
    image: { src: '/images/urania/Carousel_transparent.png', alt: 'Obiect teatral Urania' },
  },
  {
    label: '02 / LOCUL',
    title: 'Spații de găzduire',
    description: 'Descoperă spațiile Urania și găsește cadrul potrivit pentru proiectul tău.',
    cta: 'Descoperă spațiile',
    href: '/spatii/',
    image: { src: '/images/urania/Scena_transparent.png', alt: 'Scena — Black Box Urania' },
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
      {/* FUTURE HERO INTRO — DO NOT REMOVE HOOKS
          Mulerun will scale data-hero-goddess-wrapper into this final static position,
          reveal data-urania-header/data-hero-top-ui and data-hero-main-ui, respect
          prefers-reduced-motion, and leave this final state unchanged. */}
      <section className="hero" data-urania-hero aria-labelledby="home-title">
        <div className="hero__atmosphere" data-hero-atmosphere aria-hidden="true" />
        <div className="hero__goddess" data-hero-goddess-wrapper>
          <Image
            src="/images/urania/Urania-Heather-Picture_transparent.png"
            alt="Statuia Urania"
            width={2048}
            height={2048}
            sizes="(max-width: 800px) 92vw, 55vw"
            data-hero-goddess
            priority
            decoding="sync"
          />
        </div>
        <div className="hero__top-ui" data-hero-top-ui aria-hidden="true" />
        <div className="hero__main-ui" data-hero-main-ui>
          <h1 id="home-title">Urania</h1>
          <p>Creative Studio</p>
        </div>
      </section>

      <section className="entry-section" aria-labelledby="explore-title">
        <div className="section-heading">
          <p className="eyebrow">Alege direcția</p>
          <h2 id="explore-title">Descoperă Urania</h2>
        </div>
        <div className="entry-grid">
          {entries.map((entry) => (
            <Link className="entry-card" href={entry.href} key={entry.href}>
              <MediaPlaceholder label={entry.media ?? 'BACKSTAGE IMAGE'} image={entry.image} />
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
