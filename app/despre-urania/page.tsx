import { MediaPlaceholder } from '@/components/media-placeholder';
import { CircularStories } from '@/components/circular-stories';
import { LoopingVideo } from '@/components/looping-video';
import { PageHero } from '@/components/page-hero';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Despre Urania',
  description: 'Urania Studio este un spațiu flexibil pentru expresie, întâlniri și experiențe culturale în Cluj-Napoca.',
  path: '/despre-urania/',
});

const statements = [
  'Un punct de întâlnire.',
  'Un laborator de idei.',
  'O scenă deschisă.',
  'Un loc în care arta, gândirea și oamenii se întâlnesc firesc.',
];

// Add the future file under `public/videos/` and set its path here.
const ABOUT_HERO_VIDEO: string | null = null;

const studioStories = [
  {
    category: 'Proiecte / scenă',
    title: 'Formate live care aduc publicul aproape',
    description: 'De la reprezentații și performance, la concerte intime și seri de conversație, Urania oferă un cadru care se adaptează fiecărui proiect.',
    image: '/images/urania/scena.webp',
    imageAlt: 'Scena Urania Studio',
  },
  {
    category: 'Proiecte / sunet',
    title: 'Sunet și ritm pentru idei care se aud',
    description: 'Construim configurații pentru sesiuni muzicale, repetiții, listening sessions și întâlniri în care sunetul devine parte din experiență.',
    image: '/images/urania/vinil.webp',
    imageAlt: 'Disc de vinil Urania Studio',
  },
  {
    category: 'Proiecte / conținut',
    title: 'Conversații care rămân cu tine',
    description: 'Podcasturi, interviuri și conținut audio-video găsesc aici un cadru concentrat, atent la voce, imagine și oamenii din fața camerei.',
    image: '/images/urania/microfon.webp',
    imageAlt: 'Microfon Urania Studio',
  },
];

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="În spatele scenei"
        title="Urania nu este o sală clasică"
        intro="Nu este doar o scenă. Nu este doar o galerie. Este un spațiu flexibil pentru forme contemporane de expresie, întâlniri și experiențe culturale."
        media={<LoopingVideo src={ABOUT_HERO_VIDEO} label="Atmosfera Urania Studio" />}
        fullBleedMedia
      />

      <section className="studio-journal" aria-labelledby="studio-journal-title">
        <div className="studio-journal__heading">
          <p className="eyebrow">Jurnal Urania</p>
          <h2 id="studio-journal-title">Ce construim împreună</h2>
          <p>O selecție de formate, direcții și momente care dau ritm studioului.</p>
        </div>
        <CircularStories stories={studioStories} />
      </section>

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
    </main>
  );
}
