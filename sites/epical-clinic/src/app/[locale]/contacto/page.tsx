import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SITE } from '@/lib/site';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold md:text-5xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-[color:var(--color-foreground)]/70">{t('subtitle')}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-[color:var(--color-border)] bg-white/60 p-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-primary)]">
                {t('addressLabel')}
              </h3>
              <p className="mt-1">{SITE.address.streetAddress}</p>
              <p>{SITE.address.postalCode} {SITE.address.addressLocality}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-primary)]">
                {t('phoneLabel')}
              </h3>
              <p className="mt-1">{SITE.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-primary)]">
                {t('emailLabel')}
              </h3>
              <p className="mt-1">{SITE.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--color-primary)]">
                {t('hoursLabel')}
              </h3>
              <p className="mt-1">{t('hoursWeek')}</p>
              <p>{t('hoursSat')}</p>
              <p>{t('hoursSun')}</p>
            </div>
          </div>

          <div className="aspect-square rounded-3xl bg-[color:var(--color-muted)]">
            {/* TODO (local): embed real Google Map iframe once GMB is resolved */}
            <div className="grid h-full place-items-center text-sm text-[color:var(--color-foreground)]/40">
              Google Map embed
            </div>
          </div>
        </div>

        <a
          href={SITE.bookingUrl}
          className="mt-10 inline-block rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white shadow-sm transition hover:opacity-90"
        >
          Reservar cita
        </a>
      </div>
    </section>
  );
}
