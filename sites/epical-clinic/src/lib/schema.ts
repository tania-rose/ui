import { SITE } from './site';

export function medicalClinicSchema(locale: 'es' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    name: SITE.name,
    url: `${SITE.url}${locale === 'es' ? '' : '/en'}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: SITE.sameAs,
    priceRange: '€€',
    medicalSpecialty: 'CosmeticSurgery',
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

export function serviceSchema(locale: 'es' | 'en', service: {
  name: string;
  description: string;
  slug: string;
  priceFrom?: number;
}) {
  const path = locale === 'es' ? '' : '/en';
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: `${SITE.url}${path}/${service.slug}`,
    provider: { '@type': 'MedicalClinic', name: SITE.name, url: SITE.url },
    ...(service.priceFrom && {
      offers: {
        '@type': 'Offer',
        price: service.priceFrom,
        priceCurrency: 'EUR',
      },
    }),
  };
}
