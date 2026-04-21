export const SITE = {
  name: 'Epical Clinic',
  url: 'https://epicalclinic.es',
  // TODO (local): replace with real booking URL or GHL funnel URL
  bookingUrl: '{{BOOKING_URL}}',
  // TODO (local): fetch from GMB after web-builder skill runs on your machine
  address: {
    streetAddress: 'Calle Velázquez 00',
    addressLocality: 'Madrid',
    postalCode: '28001',
    addressCountry: 'ES',
  },
  phone: '+34 000 000 000',
  email: 'info@epicalclinic.es',
  geo: { latitude: 40.4237, longitude: -3.6885 },
  sameAs: [
    'https://www.instagram.com/epicalclinic',
    'https://g.page/epicalclinic',
  ],
  hours: [
    { day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '10:00', close: '20:00' },
    { day: ['Saturday'], open: '10:00', close: '14:00' },
  ],
} as const;
