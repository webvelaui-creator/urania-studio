import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteMotion } from '@/components/site-motion';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { absoluteUrl, defaultSocialImage, JsonLd, siteUrl } from '@/lib/seo';
import './globals.css';

/**
 * Runs before first paint so the opening sequence and scroll reveals never flash their
 * finished state first. Both are opt-in: without JavaScript, or with reduced motion
 * requested, no flags are set and the site renders fully visible and static.
 * The timeout is a failsafe — if hydration never happens, content is released anyway.
 */
const MOTION_BOOTSTRAP = `(function(){try{
var r=document.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
r.classList.add('u-motion');
var home=location.pathname==='/'||location.pathname==='/index.html';
// Plays on every cold load of the homepage. To show it only once per visit, add:
// && sessionStorage.getItem('urania-intro') !== 'seen'
if(home)r.dataset.uraniaIntro='hold';
setTimeout(function(){
if(r.dataset.uraniaIntro==='hold')r.dataset.uraniaIntro='done';
if(!document.body||!document.body.dataset.motionReady)r.classList.remove('u-motion');
},2200);
}catch(e){}})();`;

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Urania Studio',
  title: {
    default: 'Urania Studio — spațiu cultural în Cluj-Napoca',
    template: '%s — Urania Studio',
  },
  description:
    'Spațiu multicultural și multidisciplinar pentru proiecte artistice, culturale și creative în Cluj-Napoca.',
  keywords: [
    'spațiu cultural Cluj-Napoca',
    'evenimente culturale Cluj',
    'închiriere spațiu evenimente Cluj',
    'producție tehnică evenimente',
    'Urania Studio',
  ],
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: '/',
    siteName: 'Urania Studio',
    title: 'Urania Studio — spațiu cultural în Cluj-Napoca',
    description:
      'Spațiu multicultural și multidisciplinar pentru proiecte artistice, culturale și creative în Cluj-Napoca.',
    images: [{ url: defaultSocialImage, alt: 'Statuia Urania, simbolul Urania Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urania Studio — spațiu cultural în Cluj-Napoca',
    description:
      'Spațiu multicultural și multidisciplinar pentru proiecte artistice, culturale și creative în Cluj-Napoca.',
    images: [defaultSocialImage],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl('/'),
      name: 'Urania Studio',
      inLanguage: 'ro-RO',
    },
    {
      '@type': 'LocalBusiness',
      '@id': absoluteUrl('/#organization'),
      name: 'Urania Studio',
      url: absoluteUrl('/'),
      image: absoluteUrl(defaultSocialImage),
      description:
        'Spațiu cultural și creativ pentru proiecte artistice, culturale și evenimente în Cluj-Napoca.',
      telephone: '+40 739 333 357',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Strada Horea, nr. 4',
        addressLocality: 'Cluj-Napoca',
        addressCountry: 'RO',
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // MOTION_BOOTSTRAP sets motion flags on <html> before React hydrates, so the
    // attribute difference against the server markup is expected here.
    <html lang="ro" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP }} />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <JsonLd data={organizationSchema} />
        <a className="skip-link" href="#content">Sari la conținut</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <SiteMotion />
      </body>
    </html>
  );
}
