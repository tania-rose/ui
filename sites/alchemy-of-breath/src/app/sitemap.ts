import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://alchemyofbreath.com';
const locales = ['es', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE}${locale === 'es' ? '' : `/${locale}`}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages: { es: BASE, en: `${BASE}/en` } },
  }));
}
