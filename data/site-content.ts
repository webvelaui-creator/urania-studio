export type ContentSection = {
  title: string;
  items: string[];
};

export type SiteItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  mediaLabel: string;
  image?: SiteImage;
  eyebrow: string;
  cta: string;
  metadata: { title: string; description: string };
  sections?: ContentSection[];
  features?: string[];
  partnerNote?: string;
  unknownDetails?: string[];
};

export type SiteImage = {
  src: string;
  alt: string;
  /** Keeps the same source useful in differently proportioned card and detail layouts. */
  objectPosition?: string;
};

export const navigation = [
  { label: 'Servicii', href: '/servicii/' },
  { label: 'Spații', href: '/spatii/' },
  { label: 'Despre Urania', href: '/despre-urania/' },
  { label: 'Contact', href: '/contact/' },
];

export const services: SiteItem[] = [
  {
    slug: 'productie-suport-tehnic',
    title: 'Producție & suport tehnic',
    eyebrow: 'Serviciu / 01',
    shortDescription:
      'Coordonare și suport tehnic pentru pregătirea și desfășurarea proiectelor.',
    longDescription:
      'Coordonare și suport tehnic pentru pregătirea și desfășurarea proiectelor, de la setup și repetiții până la eveniment.',
    mediaLabel: 'SERVICE IMAGE',
    image: { src: '/images/urania/carousel.webp', alt: 'Obiect teatral Urania', objectPosition: 'center' },
    cta: 'Cere detalii',
    features: [
      'Suport tehnic pentru repetiții și reprezentații',
      'Setup și coordonare tehnică',
      'Suport pentru proiecție',
      'Asistență pe durata evenimentului',
    ],
    metadata: {
      title: 'Producție & suport tehnic',
      description:
        'Coordonare și suport tehnic pentru repetiții, reprezentații și evenimente la Urania Studio.',
    },
  },
  {
    slug: 'sunet-lumina',
    title: 'Sunet & lumină',
    eyebrow: 'Serviciu / 02',
    shortDescription:
      'Soluții de sunet și lumină configurate în funcție de ritmul și nevoile proiectului.',
    longDescription:
      'De la soundcheck și microfonie până la lumini de scenă și ambientale, configurația este adaptată fiecărui proiect.',
    mediaLabel: 'SERVICE IMAGE',
    image: { src: '/images/urania/saxofon.webp', alt: 'Saxofon Urania', objectPosition: 'center' },
    cta: 'Cere ofertă',
    features: [
      'Sonorizare și microfonie',
      'Soundcheck',
      'Lumini de scenă',
      'Lumini ambientale',
      'Configurare adaptată proiectului',
    ],
    partnerNote:
      'Pentru proiectele care necesită o experiență tehnică extinsă, Urania Studio colaborează cu NECSSOUND, partener specializat în sunet și lumină.',
    metadata: {
      title: 'Sunet & lumină',
      description:
        'Sunet, microfonie și lumină pentru proiecte găzduite de Urania Studio, în colaborare cu NECSSOUND unde este necesar.',
    },
  },
  {
    slug: 'streaming-evenimente-hibride',
    title: 'Streaming & evenimente hibride',
    eyebrow: 'Serviciu / 03',
    shortDescription:
      'Infrastructură și coordonare pentru proiecte care conectează sala cu publicul online.',
    longDescription:
      'Suport pentru integrarea transmisiunii online în evenimente și proiecte hibride, configurat în raport cu formatul întâlnirii.',
    mediaLabel: 'SERVICE IMAGE',
    image: { src: '/images/urania/tv.webp', alt: 'Televizor vintage Urania', objectPosition: 'center' },
    cta: 'Cere ofertă',
    features: [
      'Infrastructură pentru streaming',
      'Coordonare tehnică',
      'Integrarea transmisiunii online',
      'Suport video și proiecție, unde este relevant',
      'Arhivare video, unde este aplicabilă',
    ],
    metadata: {
      title: 'Streaming & evenimente hibride',
      description:
        'Infrastructură și suport tehnic pentru streaming și evenimente hibride la Urania Studio.',
    },
  },
  {
    slug: 'documentare-foto-video',
    title: 'Documentare foto-video',
    eyebrow: 'Serviciu / 04',
    shortDescription:
      'Documentarea proiectelor și evenimentelor, disponibilă la cerere.',
    longDescription:
      'Documentare foto-video pentru proiecte și evenimente, disponibilă la cerere și stabilită în funcție de nevoile fiecărui format.',
    mediaLabel: 'SERVICE IMAGE',
    image: { src: '/images/urania/rola-film.webp', alt: 'Rolă de film Urania', objectPosition: 'center' },
    cta: 'Cere detalii',
    features: [
      'Documentare de eveniment la cerere',
      'Acoperire adaptată formatului',
      'Detalii stabilite înaintea proiectului',
    ],
    metadata: {
      title: 'Documentare foto-video',
      description:
        'Documentare foto-video la cerere pentru proiecte și evenimente găzduite de Urania Studio.',
    },
  },
  {
    slug: 'logistica-configurare',
    title: 'Logistică & configurare',
    eyebrow: 'Serviciu / 05',
    shortDescription:
      'Configurarea spațiului și suport logistic pentru o desfășurare firească a proiectului.',
    longDescription:
      'Adaptăm configurația și fluxul spațiului la tipul proiectului, păstrând o abordare practică și atentă la desfășurare.',
    mediaLabel: 'SERVICE IMAGE',
    image: { src: '/images/urania/scena.webp', alt: 'Scena Urania', objectPosition: 'center' },
    cta: 'Cere ofertă',
    features: [
      'Configurarea spațiului și a layoutului',
      'Scenă și setup, unde este aplicabil',
      'Organizarea fluxului',
      'Suport logistic',
      'Adaptarea configurației la proiect',
    ],
    metadata: {
      title: 'Logistică & configurare',
      description:
        'Configurarea spațiului, organizarea fluxului și suport logistic pentru proiecte la Urania Studio.',
    },
  },
];

export const spaces: SiteItem[] = [
  {
    slug: 'scena-black-box',
    title: 'Scena — Black Box',
    eyebrow: 'Spațiu / 01',
    shortDescription:
      'O sală flexibilă, orientată spre scenă și public, pentru formate culturale, artistice și evenimente.',
    longDescription:
      'Spațiul principal Urania: o sală reconfigurabilă cu scenă și așezare adaptabilă, pregătită să găzduiască formate diverse fără a le impune un tipar.',
    mediaLabel: 'SPACE IMAGE',
    image: { src: '/images/urania/scena.webp', alt: 'Scena — Black Box Urania', objectPosition: 'center' },
    cta: 'Verifică disponibilitatea',
    sections: [
      { title: 'Artele spectacolului', items: ['Teatru independent', 'Performance contemporan', 'Teatru-dans', 'Stand-up', 'Improvizație', 'Poezie și lecturi performative', 'Cabaret'] },
      { title: 'Muzică & concerte', items: ['Concerte acustice și unplugged', 'Jam sessions', 'Tribute nights', 'Live sessions', 'Muzică și poezie', 'Listening sessions', 'Workshopuri muzicale'] },
      { title: 'Artă & lifestyle', items: ['Expoziții și vernisaje', 'Galerie pop-up', 'Performance art', 'Workshopuri și masterclass', 'Târguri și art fairs'] },
      { title: 'Educație', items: ['Conferințe', 'Lansări de carte', 'Cineclub', 'Programe pentru tineri creatori', 'Rezidențe artistice'] },
      { title: 'Corporate & private', items: ['Lansări de produse', 'Prezentări de brand', 'Conferințe restrânse', 'Team building creativ', 'Private cinema', 'Petreceri tematice', 'Afterwork și networking'] },
      { title: 'Alte formate', items: ['Filmări și shootinguri foto', 'Evenimente hibride', 'Live streaming', 'Living Library', 'Seri de vinil sau film', 'Proiecte experimentale'] },
    ],
    features: [
      'Scenă modulară și configurabilă',
      'Sală reconfigurabilă',
      'Sonorizare, lumini și microfonie',
      'Videoproiector și ecran de videoproiecție',
      'Blackout, unde este relevant',
      'Suport tehnic și logistic',
      'Posibilitate de streaming, unde este relevant',
    ],
    unknownDetails: ['Capacitate', 'Dimensiuni', 'Configurații finale'],
    metadata: {
      title: 'Scena — Black Box',
      description:
        'Spațiul principal Urania Studio: scenă și sală reconfigurabilă pentru proiecte culturale, artistice și evenimente.',
    },
  },
  {
    slug: 'underground-sound-room',
    title: 'Underground — Sound Room',
    eyebrow: 'Spațiu / 02',
    shortDescription:
      'Camera Urania orientată spre muzică, sunet, repetiții și lucru creativ audio.',
    longDescription:
      'Un spațiu concentrat, dedicat muzicii, sunetului, repetițiilor și sesiunilor creative în care ascultarea este punctul de plecare.',
    mediaLabel: 'SPACE IMAGE',
    image: { src: '/images/urania/vinil.webp', alt: 'Disc de vinil Urania', objectPosition: 'center' },
    cta: 'Cere detalii',
    sections: [
      { title: 'Potrivit pentru', items: ['Repetiții', 'Sesiuni muzicale', 'Lucru creativ audio', 'Proiecte centrate pe sunet'] },
    ],
    unknownDetails: ['Capacitate', 'Dimensiuni', 'Specificații acustice', 'Lista de echipamente'],
    metadata: {
      title: 'Underground — Sound Room',
      description:
        'Spațiu Urania Studio pentru muzică, sunet, repetiții și lucru creativ audio.',
    },
  },
  {
    slug: 'podcast-corner',
    title: 'Podcast Corner',
    eyebrow: 'Spațiu / 03',
    shortDescription:
      'Un cadru dedicat conversațiilor, interviurilor și conținutului audio-video.',
    longDescription:
      'Un spațiu dedicat conversațiilor, interviurilor și producției de conținut audio-video, cu o configurație care va fi definită împreună cu proiectul.',
    mediaLabel: 'SPACE IMAGE',
    image: { src: '/images/urania/microfon.webp', alt: 'Microfon vintage Urania', objectPosition: 'center' },
    cta: 'Cere detalii',
    sections: [
      { title: 'Potrivit pentru', items: ['Podcasturi', 'Interviuri', 'Conversații filmate', 'Conținut spoken-word'] },
    ],
    unknownDetails: ['Capacitate', 'Configurație', 'Lista de echipamente'],
    metadata: {
      title: 'Podcast Corner',
      description:
        'Spațiu Urania Studio pentru podcasturi, interviuri și conținut audio-video.',
    },
  },
];

export const contactTypes = [
  { value: 'spatiu', label: 'Închiriere spațiu' },
  { value: 'serviciu', label: 'Serviciu' },
  { value: 'colaborare', label: 'Colaborare' },
  { value: 'altceva', label: 'Altceva' },
];

export const contactDetails = {
  address: 'Strada Horea, nr. 4, Cluj-Napoca',
  phone: '+40 739 333 357',
  phoneHref: 'tel:+40739333357',
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getSpace(slug: string) {
  return spaces.find((space) => space.slug === slug);
}
