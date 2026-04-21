import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`${prefix}/`} className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href={`${prefix}/`} className="text-sm hover:text-[color:var(--color-primary)]">
            {t('home')}
          </Link>
          <Link href={`${prefix}/#servicios`} className="text-sm hover:text-[color:var(--color-primary)]">
            {t('services')}
          </Link>
          <Link href={`${prefix}/higiene-facial`} className="text-sm hover:text-[color:var(--color-primary)]">
            {t('services')} · Higiene
          </Link>
          <Link href={`${prefix}/contacto`} className="text-sm hover:text-[color:var(--color-primary)]">
            {t('contact')}
          </Link>
        </nav>
        <a
          href={SITE.bookingUrl}
          className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-[color:var(--color-ring)]"
        >
          {t('book')}
        </a>
      </div>
    </header>
  );
}
