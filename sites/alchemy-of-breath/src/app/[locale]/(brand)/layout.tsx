'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { SITE } from '@/lib/site';

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

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
