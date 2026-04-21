export const SITE = {
  name: 'AoB YogaHub',
  // TODO (local): replace with real domain once deployed
  url: 'https://aobyogahub.com',
  // TODO (local): replace with real booking URL (Mindbody, Acuity, GHL funnel)
  bookingUrl: '{{BOOKING_URL}}',
  // TODO (local): fill from GMB once the design-system-generator + web-builder skills run on your machine
  address: {
    streetAddress: '—',
    addressLocality: '—',
    postalCode: '—',
    addressCountry: 'ES',
  },
  phone: '+34 000 000 000',
  email: 'hola@aobyogahub.com',
  geo: { latitude: 0, longitude: 0 },
  sameAs: [
    'https://www.instagram.com/aobyogahub',
  ],
  hours: [
    { day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '21:00' },
    { day: ['Saturday', 'Sunday'], open: '09:00', close: '14:00' },
  ],
} as const;
