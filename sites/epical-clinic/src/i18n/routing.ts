import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: {
    mode: 'as-needed',
  },
});

export type Locale = (typeof routing.locales)[number];
