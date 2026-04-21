import { SITE } from './site';

export function studioSchema(locale: 'es' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness', 'SportsActivityLocation'],
    name: SITE.name,
    url: `${SITE.url}${locale === 'es' ? '' : '/en'}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: { '@type': 'PostalAddress', ...SITE.address },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: SITE.sameAs,
    priceRange: '€',
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
