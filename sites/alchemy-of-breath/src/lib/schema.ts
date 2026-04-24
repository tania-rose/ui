import { SITE } from './site';

export function organizationSchema(locale: 'es' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: `${SITE.url}${locale === 'es' ? '' : '/en'}`,
    email: SITE.email,
    sameAs: SITE.sameAs,
    founder: { '@type': 'Person', name: SITE.founder },
    description: SITE.tagline,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function courseSchema(locale: 'es' | 'en', course: {
  name: string;
  description: string;
  slug: string;
  price?: number;
  currency?: string;
}) {
  const path = locale === 'es' ? '' : '/en';
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${SITE.url}${path}/${course.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      sameAs: SITE.url,
    },
    ...(course.price && {
      offers: {
        '@type': 'Offer',
        price: course.price,
        priceCurrency: course.currency ?? 'EUR',
        category: 'Course',
      },
    }),
  };
}
