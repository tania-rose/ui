import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const services = [
  { slug: 'higiene-facial', key: 'hygiene' },
  { slug: 'botox', key: 'botox' },
  { slug: 'rellenos', key: 'fillers' },
  { slug: 'laser', key: 'laser' },
  { slug: 'peelings', key: 'peeling' },
  { slug: 'diagnostico', key: 'diagnosis' },
] as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const ts = await getTranslations('services');
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-32 md:pt-24">
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
            <a
              href={SITE.bookingUrl}
              className="rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {t('heroCta')}
            </a>
            <Link
              href={`${prefix}/#servicios`}
              className="rounded-full border border-[color:var(--color-border)] bg-white px-7 py-3.5 font-medium transition hover:border-[color:var(--color-primary)]"
            >
              {t('heroSecondary')}
            </Link>
          </div>

          {/* TODO (local): replace this trust row with extracted Google rating + real years + treatments count from GMB */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-[color:var(--color-foreground)]/70">
            <span>★ {t('trustRating', { rating: '4.9' })}</span>
            <span>{t('trustYears', { years: '8' })}</span>
            <span>{t('trustTreatments', { count: '12.000' })}</span>
          </div>
        </div>

        {/* TODO (local): replace this block with real hero photo extracted from epicalclinic.es + GMB */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[color:var(--color-secondary)]/30 md:block" aria-hidden>
          <div className="grid h-full place-items-center text-sm text-[color:var(--color-foreground)]/40">
            hero photo · public/images/hero.webp
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="servicios" className="border-t border-[color:var(--color-border)] bg-white/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('servicesTitle')}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground)]/70">{t('servicesSubtitle')}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`${prefix}/${s.slug}`}
                className="group rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 transition hover:border-[color:var(--color-primary)] hover:shadow-[0_8px_24px_-12px_rgba(236,72,153,0.25)]"
              >
                <div className="aspect-[4/3] w-full rounded-2xl bg-[color:var(--color-muted)]">
                  {/* TODO (local): add public/images/services/{slug}.webp */}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{ts(`${s.key}.name`)}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">{ts(`${s.key}.short`)}</p>
                <p className="mt-4 text-sm font-medium text-[color:var(--color-primary)]">
                  {ts(`${s.key}.priceFrom`) === '0' ? '—' : `${ts(`${s.key}.priceFrom`)}€`}
                  <span className="ml-2 text-[color:var(--color-foreground)]/40 transition group-hover:translate-x-0.5">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">{t('whyTitle')}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground)]/70">{t('whySubtitle')}</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <div className="mb-4 h-10 w-10 rounded-full bg-[color:var(--color-primary)]/10" aria-hidden />
                <h3 className="text-xl font-semibold">{t(`why${n}Title` as 'why1Title' | 'why2Title' | 'why3Title')}</h3>
                <p className="mt-2 text-[color:var(--color-foreground)]/70">
                  {t(`why${n}Body` as 'why1Body' | 'why2Body' | 'why3Body')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('finalCtaTitle')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{t('finalCtaBody')}</p>
          <a
            href={SITE.bookingUrl}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[color:var(--color-primary)] shadow-lg transition hover:opacity-95"
          >
            {t('finalCtaButton')}
          </a>
        </div>
      </section>
    </>
  );
}
