import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const classes = ['vinyasa', 'hatha', 'yin', 'meditation', 'restorative'] as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tc = await getTranslations('classes');
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
          {t('heroEyebrow')}
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[color:var(--color-foreground)]/75 md:text-xl">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={SITE.bookingUrl} className="rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white">
            {t('heroCta')}
          </a>
          <Link href={`${prefix}/#clases`} className="rounded-full border border-[color:var(--color-border)] bg-white px-7 py-3.5 font-medium">
            {t('heroSecondary')}
          </Link>
        </div>
      </section>

      <section id="clases" className="border-t border-[color:var(--color-border)] bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('classesTitle')}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground)]/70">{t('classesSubtitle')}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((slug) => (
              <div key={slug} className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6">
                <h3 className="text-xl font-semibold">{tc(`${slug}.name`)}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">
                  {tc(`${slug}.duration`)} · {tc(`${slug}.level`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('valuesTitle')}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <div className="mb-4 h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10" aria-hidden />
                <h3 className="text-xl font-semibold">
                  {t(`value${n}Title` as 'value1Title' | 'value2Title' | 'value3Title')}
                </h3>
                <p className="mt-2 text-[color:var(--color-foreground)]/70">
                  {t(`value${n}Body` as 'value1Body' | 'value2Body' | 'value3Body')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('finalCtaTitle')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{t('finalCtaBody')}</p>
          <a href={SITE.bookingUrl} className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[color:var(--color-primary)]">
            {t('finalCtaButton')}
          </a>
        </div>
      </section>
    </>
  );
}
