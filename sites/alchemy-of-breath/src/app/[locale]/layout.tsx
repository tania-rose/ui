import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { organizationSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    alternates: {
      canonical: locale === 'es' ? '/' : `/${locale}`,
      languages: { es: '/', en: '/en' },
    },
    openGraph: { title: t('homeTitle'), description: t('homeDescription'), locale, type: 'website' },
  };
}

function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`${prefix}/`} className="font-[family-name:var(--font-heading)] text-xl font-semibold">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href={`${prefix}/`} className="text-sm hover:text-[color:var(--color-primary)]">{t('home')}</Link>
          <Link href={`${prefix}/#courses`} className="text-sm hover:text-[color:var(--color-primary)]">{t('courses')}</Link>
          <Link href={`${prefix}/#about`} className="text-sm hover:text-[color:var(--color-primary)]">{t('about')}</Link>
        </nav>
        <a
          href={SITE.bookingUrl}
          className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
        >
          {t('book')}
        </a>
      </div>
    </header>
  );
}

function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[color:var(--color-foreground)]/70">
        <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[color:var(--color-foreground)]">
          {SITE.name}
        </p>
        <p className="mt-1 max-w-sm">{t('tagline')}</p>
        <p className="mt-6">© {year} {SITE.name}. {t('rights')}</p>
      </div>
    </footer>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const schema = organizationSchema(locale as Locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
