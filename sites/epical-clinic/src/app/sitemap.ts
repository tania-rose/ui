import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://epicalclinic.es';
const locales = ['es', 'en'] as const;
const paths = ['', '/higiene-facial', '/contacto'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE}${locale === 'es' ? '' : `/${locale}`}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: {
          es: `${BASE}${path}`,
          en: `${BASE}/en${path}`,
        },
      },
    }))
  );
}
