import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

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
  metadataBase: new URL('https://urania-studio.luchitza.chatgpt.site'),
  title: {
    default: 'Urania Studio — spațiu cultural în Cluj-Napoca',
    template: '%s — Urania Studio',
  },
  description:
    'Spațiu multicultural și multidisciplinar pentru proiecte artistice, culturale și creative în Cluj-Napoca.',
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#content">Sari la conținut</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
