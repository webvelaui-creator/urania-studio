import { HeroIntro } from '@/components/hero-intro';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = createPageMetadata({
  title: 'Spațiu cultural și creativ în Cluj-Napoca',
  description:
    'Urania Studio găzduiește proiecte culturale, artistice și evenimente în Cluj-Napoca, cu spații flexibile și suport tehnic.',
  path: '/',
  image: '/images/urania/urania-hero.webp',
  imageAlt: 'Statuia Urania, simbolul Urania Studio',
});

const entries = [
  {
    label: '01 / PROIECTUL',
    title: 'Servicii',
    description: 'Servicii și suport pentru proiecte culturale, artistice și evenimente.',
    cta: 'Descoperă serviciile',
    href: '/servicii/',
    image: '/images/urania/carousel.webp',
  },
  {
    label: '02 / LOCUL',
    title: 'Spații de găzduire',
    description: 'Descoperă spațiile Urania și găsește cadrul potrivit pentru proiectul tău.',
    cta: 'Descoperă spațiile',
    href: '/spatii/',
    image: '/images/urania/scena.webp',
  },
  {
    label: '03 / URANIA',
    title: 'În spatele scenei',
    description: 'O privire în universul Urania.',
    cta: 'Descoperă Urania',
    href: '/despre-urania/',
    image: '/images/urania/rola-film.webp',
  },
];

export default function Home() {
  return (
    <main id="content">
      {/* HERO INTRO — DO NOT REMOVE HOOKS
          The artwork is a full-screen background layer; data-hero-goddess-wrapper opens
          slightly scaled up and `HeroIntro` eases it back to this resting size while
          data-urania-header / data-hero-top-ui / data-hero-main-ui fade in over it. It
          honours prefers-reduced-motion and leaves this state unchanged, so the markup
          below is also the finished, no-JavaScript layout. */}
      <HeroIntro />
      <section className="hero" data-urania-hero aria-labelledby="home-title">
        <div className="hero__atmosphere" data-hero-atmosphere aria-hidden="true" />
        <div className="hero__veil" data-hero-intro-veil aria-hidden="true" />
        <div className="hero__goddess" data-hero-goddess-wrapper>
          <Image
            src="/images/urania/urania-hero.webp"
            alt="Statuia Urania"
            width={2048}
            height={2048}
            sizes="(max-width: 800px) 100vw, 75vw"
            data-hero-goddess
            priority
            decoding="sync"
          />
        </div>
        <div className="hero__top-ui" data-hero-top-ui aria-hidden="true">
          <span className="hero__meta hero__meta--start">Spațiu cultural &amp; creativ</span>
          <span className="hero__meta hero__meta--end">Cluj-Napoca</span>
          <i className="hero__corner hero__corner--tl" />
          <i className="hero__corner hero__corner--tr" />
          <i className="hero__corner hero__corner--bl" />
          <i className="hero__corner hero__corner--br" />
        </div>
        <div className="hero__main-ui" data-hero-main-ui>
          <h1 id="home-title">Urania</h1>
          <p>Creative Studio</p>
        </div>
        <a className="hero__cue" href="#explore-title" data-hero-main-ui>
          <span>Derulează</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="entry-section" aria-labelledby="explore-title">
        <div className="section-heading">
          <p className="eyebrow">Alege direcția</p>
          <h2 id="explore-title">Descoperă Urania</h2>
        </div>
        <div className="entry-grid">
          {entries.map((entry) => (
            <Link className="entry-card" href={entry.href} key={entry.href}>
              <Card className="entry-card-surface" size="sm">
                <CardHeader className="entry-card-header">
                  <CardDescription className="card-label">{entry.label}</CardDescription>
                  <CardAction className="entry-card-index" aria-hidden="true">↗</CardAction>
                  <CardTitle className="entry-card-title">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent className="entry-card-content">
                  <p>{entry.description}</p>
                </CardContent>
                <CardFooter className="entry-card-footer">
                  <span className="text-link">{entry.cta}<span aria-hidden="true"> ↗</span></span>
                </CardFooter>
                <Image
                  className="entry-card-art"
                  src={entry.image}
                  alt=""
                  width={360}
                  height={360}
                  sizes="(max-width: 800px) 10rem, 15rem"
                  aria-hidden="true"
                />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
