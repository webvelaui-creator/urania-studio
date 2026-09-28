import { CircularStories } from '@/components/circular-stories';
import { FacebookPostGallery } from '@/components/facebook-post-gallery';
import { LoopingVideo } from '@/components/looping-video';
import { PageHero } from '@/components/page-hero';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Despre Urania',
  description: 'Urania Studio este un spațiu flexibil pentru expresie, întâlniri și experiențe culturale în Cluj-Napoca.',
  path: '/despre-urania/',
});

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

const facebookPosts = [
  {
    title: 'DOR.',
    paragraphs: [
      'Un film de Irina Patranjan.',
      'Înaintea scenariului, cadrelor, luminilor, există o stare. O stare ce aduce imaginații în aceeași poveste, pe care Urania Studio o construiește.',
      'Printr-un proces. Oameni, cadre, unghiuri, sunet, intenții — totul trebuie să funcționeze împreună. Ca să se facă un film.',
      'Povestea începe în curând. Foto: Aida Ilie.',
    ],
    photos: [
      '/images/facebook/dor/dor-01.jpg',
      '/images/facebook/dor/dor-02.jpg',
      '/images/facebook/dor/dor-03.jpg',
      '/images/facebook/dor/dor-04.jpg',
    ],
    href: 'https://web.facebook.com/profile.php?id=61586391453182&locale=ro_RO',
  },
  {
    title: 'ARMED MYTHS',
    paragraphs: [
      'Uneori, un film începe cu o idee. Alteori, cu un pariu.',
      'ARMED MYTHS, realizat de Urania Studio, participă la Sofia Coppola Short Film Award pe platforma Decentralized Pictures.',
      'Dacă vreți să susțineți o echipă independentă din România, vă invităm să urmăriți filmul, iar dacă simțiți că merită, să îl votați și să îl distribuiți.',
      'Fiecare vot și fiecare distribuire ne ajută să ducem acest film mai departe. Vă mulțumim! ❤️',
    ],
    photos: [
      '/images/facebook/armed-myths/armed-myths.jpg',
    ],
    href: 'https://web.facebook.com/permalink.php?story_fbid=122120385489213048&id=61586391453182',
  },
  {
    title: 'Lansare de carte – „Ghidul micului actor”',
    paragraphs: [
      'Urania Black Box, spațiul dedicat al Urania Studio, a devenit un veritabil punct de întâlnire pentru artiști din diverse domenii, găzduind evenimente creative și culturale într-un cadru versatil. De-a lungul timpului, am susținut atât proiecte artistice, cât și lansări de carte care aduc valoare comunității.',
      'Un astfel de moment a fost lansarea volumului „Ghidul micului actor”, semnat de Patricia Brad, care a adus împreună personalități marcante din România și a creat un dialog autentic între artiști și public. Continuăm să deschidem acest spațiu pentru evenimente care inspiră, conectează și dezvoltă scena culturală.',
      'La final, vă invităm să descoperiți câteva fotografii surprinse de Andrei Niculescu în cadrul lansării.',
    ],
    photos: [
      '/images/facebook/ghidul-micului-actor/ghidul-01.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-02.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-03.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-04.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-05.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-06.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-07.jpg',
      '/images/facebook/ghidul-micului-actor/ghidul-08.jpg',
    ],
    href: 'https://web.facebook.com/permalink.php?story_fbid=122104509393213048&id=61586391453182',
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

      <section className="studio-journal" aria-label="Proiecte Urania">
        <CircularStories stories={studioStories} />
      </section>

      <FacebookPostGallery posts={facebookPosts} />
    </main>
  );
}
