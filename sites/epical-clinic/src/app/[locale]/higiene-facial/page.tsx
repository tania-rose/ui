import { getTranslations, setRequestLocale } from 'next-intl/server';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('hygieneTitle'),
    description: t('hygieneDescription'),
    alternates: {
      canonical: locale === 'es' ? '/higiene-facial' : `/${locale}/higiene-facial`,
      languages: { es: '/higiene-facial', en: '/en/higiene-facial' },
    },
  };
}

export default async function HygienePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('hygiene');
  const ts = await getTranslations('services');

  const forWho = t.raw('forWho') as string[];
  const steps = t.raw('steps') as { title: string; body: string }[];
  const faqs = t.raw('faqs') as { q: string; a: string }[];
  const price = ts.raw('hygiene.priceFrom') as number;
  const name = ts.raw('hygiene.name') as string;

  const svcSchema = serviceSchema(locale as 'es' | 'en', {
    name,
    description: t('heroSubtitle'),
    slug: 'higiene-facial',
    priceFrom: price,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero */}
      <section className="border-b border-[color:var(--color-border)] bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{t('heroTitle')}</h1>
            <p className="mt-5 text-lg text-[color:var(--color-foreground)]/75">{t('heroSubtitle')}</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
              {t('priceLine', { price: String(price) })}
            </p>
            <a
              href={SITE.bookingUrl}
              className="mt-8 inline-block rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {t('bookCta')}
            </a>
          </div>
          <div className="aspect-[4/5] rounded-3xl bg-[color:var(--color-muted)]">
            {/* TODO (local): real treatment photo at public/images/services/higiene-facial.webp */}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('forWhoTitle')}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {forWho.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-[color:var(--color-muted)] px-5 py-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-[color:var(--color-border)] bg-white/60 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('stepsTitle')}</h2>
          <ol className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-primary)] font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-[color:var(--color-foreground)]/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('faqTitle')}</h2>
          <div className="mt-8 divide-y divide-[color:var(--color-border)] rounded-3xl border border-[color:var(--color-border)] bg-white/60">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                  {faq.q}
                  <span className="text-[color:var(--color-primary)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[color:var(--color-foreground)]/75">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="border-t border-[color:var(--color-border)] bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('heroTitle')}</h2>
          <a
            href={SITE.bookingUrl}
            className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[color:var(--color-primary)] shadow-lg transition hover:opacity-95"
          >
            {t('bookCta')}
          </a>
        </div>
      </section>
    </>
  );
}
