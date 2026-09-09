import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const siteUrl = new URL('https://urania-studio.luchitza.chatgpt.site');
export const defaultSocialImage = '/images/urania/urania-hero.webp';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  imageAlt = 'Urania Studio, spațiu cultural în Cluj-Napoca',
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'ro_RO',
      url: path,
      siteName: 'Urania Studio',
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
