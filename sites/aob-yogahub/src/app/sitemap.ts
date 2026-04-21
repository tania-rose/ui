import type { MetadataRoute } from 'next';

const BASE = 'https://aobyogahub.com';
const locales = ['es', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE}${locale === 'es' ? '' : `/${locale}`}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages: { es: `${BASE}`, en: `${BASE}/en` } },
  }));
}
