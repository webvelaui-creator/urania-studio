import type { MetadataRoute } from 'next';
import { services, spaces } from '@/data/site-content';
import { absoluteUrl } from '@/lib/seo';

const lastModified = new Date('2026-09-09');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/servicii/'), lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/spatii/'), lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/despre-urania/'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contact/'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const servicePages = services.map(({ slug }) => ({
    url: absoluteUrl(`/servicii/${slug}/`),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const spacePages = spaces.map(({ slug }) => ({
    url: absoluteUrl(`/spatii/${slug}/`),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...spacePages];
}
