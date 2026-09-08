import type { Metadata } from 'next';
import { ContactCta } from '@/components/contact-cta';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Despre Urania',
  description: 'Urania Studio este un spațiu flexibil pentru expresie, întâlniri și experiențe culturale în Cluj-Napoca.',
  alternates: { canonical: '/despre-urania/' },
};

const statements = [
  'Un punct de întâlnire.',
  'Un laborator de idei.',
  'O scenă deschisă.',
  'Un loc în care arta, gândirea și oamenii se întâlnesc firesc.',
];

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="În spatele scenei"
        title="Urania nu este o sală clasică"
        intro="Nu este doar o scenă. Nu este doar o galerie. Este un spațiu flexibil pentru forme contemporane de expresie, întâlniri și experiențe culturale."
        mediaLabel="BACKSTAGE IMAGE"
      />

      <section className="manifesto">
        <p className="eyebrow">În ce credem</p>
        <div>
          <p className="manifesto-lead">
            Credem în arta trăită de aproape, în dialog și în proiecte care creează
            conexiuni reale între oameni.
          </p>
          <p>Susținem experimentul, curajul artistic și ideile care nu încap în tipare.</p>
        </div>
      </section>

      <section className="audience-grid" aria-label="Pentru cine este Urania">
        <p>Pentru artiști care caută <em>libertate.</em></p>
        <p>Pentru public care caută <em>experiențe culturale autentice.</em></p>
        <p>Pentru branduri care caută <em>un spațiu cu personalitate.</em></p>
        <p>Pentru comunități care vor <em>să se întâlnească altfel.</em></p>
      </section>

      <section className="about-gallery">
        <MediaPlaceholder label="BACKSTAGE IMAGE" variant="gallery" />
        <MediaPlaceholder label="LOCATION IMAGE" variant="gallery" />
      </section>

      <section className="urania-is" aria-labelledby="urania-is-title">
        <p className="eyebrow">Urania este</p>
        <h2 id="urania-is-title" className="sr-only">Urania este</h2>
        <ol>{statements.map((statement) => <li key={statement}>{statement}</li>)}</ol>
      </section>
      <ContactCta />
    </main>
  );
}
