import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SITE } from '@/lib/site';
import { courseSchema, faqSchema } from '@/lib/schema';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('offerTitle'),
    description: t('offerDescription'),
    alternates: {
      canonical: locale === 'es' ? '/offer' : `/${locale}/offer`,
      languages: { es: '/offer', en: '/en/offer' },
    },
    openGraph: { title: t('offerTitle'), description: t('offerDescription'), locale, type: 'website' },
  };
}

export default async function OfferPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('offer');

  const modules = t.raw('modules') as { day: string; title: string; body: string }[];
  const bonuses = t.raw('bonuses') as { name: string; value: number; body: string }[];
  const testimonials = t.raw('testimonials') as { quote: string; name: string; title: string }[];
  const faqs = t.raw('faqs') as { q: string; a: string }[];
  const price = t('price');
  const original = t('originalPrice');

  const totalBonusValue = bonuses.reduce((sum, b) => sum + b.value, 0);

  const course = courseSchema(locale as Locale, {
    name: t('headline'),
    description: t('subhead'),
    slug: 'offer',
    price: Number(price),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* Minimal logo bar */}
      <header className="border-b border-[color:var(--color-border)] bg-white/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
            {SITE.name}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/50">
            {locale === 'es' ? 'Oferta' : 'Offer'}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="pt-16 pb-12 md:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            {t('preHeadline')}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] md:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 text-lg text-[color:var(--color-foreground)]/75 md:text-xl">
            {t('subhead')}
          </p>

          <div className="neu mt-10 rounded-3xl bg-[color:var(--color-background)] p-6 md:p-8">
            <div className="flex flex-wrap items-end gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/60">
                  {t('priceLabel')}
                </p>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-semibold text-[color:var(--color-primary)]">
                    €{price}
                  </span>
                  <span className="text-lg text-[color:var(--color-foreground)]/40 line-through">
                    €{original}
                  </span>
                </div>
              </div>
              <a
                href={SITE.bookingUrl}
                className="ml-auto rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {t('ctaPrimary')}
              </a>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-foreground)]/60">
              {t('scarcityNote')}
            </p>
          </div>
        </section>

        {/* What's inside */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('insideTitle')}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground)]/70">{t('insideSubtitle')}</p>
          <ol className="mt-10 space-y-4">
            {modules.map((m) => (
              <li key={m.day} className="neu flex gap-5 rounded-2xl bg-[color:var(--color-background)] p-5 md:p-6">
                <span className="font-[family-name:var(--font-heading)] shrink-0 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--color-primary)] md:w-20">
                  {m.day}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-1 text-[color:var(--color-foreground)]/70">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Bonuses */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('bonusesTitle')}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {bonuses.map((b) => (
              <div key={b.name} className="neu rounded-2xl bg-[color:var(--color-background)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  €{b.value} {locale === 'es' ? 'valor' : 'value'}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-foreground)]/70">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack value */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('stackTitle')}</h2>
          <div className="neu mt-8 rounded-3xl bg-[color:var(--color-background)] p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-[color:var(--color-border)] py-3">
              <span>{t('stackLine1')}</span>
              <span className="text-lg font-medium text-[color:var(--color-foreground)]/40 line-through">
                €{Number(original) + totalBonusValue}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-lg font-medium">{t('stackLine2')}</span>
              <span className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[color:var(--color-primary)]">
                €{price}
              </span>
            </div>
            <a
              href={SITE.bookingUrl}
              className="mt-4 block w-full rounded-full bg-[color:var(--color-primary)] py-3.5 text-center font-medium text-white shadow-sm transition hover:opacity-90"
            >
              {t('ctaPrimary')}
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('testimonialsTitle')}</h2>
          <div className="mt-10 space-y-5">
            {testimonials.map((tx) => (
              <blockquote
                key={tx.name}
                className="neu rounded-2xl bg-[color:var(--color-background)] p-6"
              >
                <p className="text-lg italic text-[color:var(--color-foreground)]/85">
                  &ldquo;{tx.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-[color:var(--color-foreground)]/60">
                  — {tx.name}, {tx.title}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('aboutTitle')}</h2>
          <p className="mt-6 text-lg text-[color:var(--color-foreground)]/75">
            {t('aboutBody')}
          </p>
        </section>

        {/* Guarantee */}
        <section className="py-16">
          <div className="neu rounded-3xl border-2 border-[color:var(--color-accent)]/30 bg-[color:var(--color-background)] p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {locale === 'es' ? '30 días' : '30 days'}
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{t('guaranteeTitle')}</h2>
            <p className="mt-4 text-[color:var(--color-foreground)]/75">{t('guaranteeBody')}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[color:var(--color-border)] py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">{t('faqTitle')}</h2>
          <div className="mt-8 divide-y divide-[color:var(--color-border)] rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]">
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
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            {t('finalTitle')}
          </h2>
          <p className="mt-5 text-lg text-[color:var(--color-foreground)]/70">{t('finalBody')}</p>
          <a
            href={SITE.bookingUrl}
            className="mt-8 inline-block rounded-full bg-[color:var(--color-primary)] px-8 py-4 font-medium text-white shadow-lg transition hover:opacity-90"
          >
            {t('finalCta')}
          </a>
          <p className="mt-4 text-sm text-[color:var(--color-foreground)]/60">{t('scarcityNote')}</p>
        </section>
      </main>

      {/* Thin legal footer */}
      <footer className="border-t border-[color:var(--color-border)] bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-6 text-xs text-[color:var(--color-foreground)]/55">
          © {new Date().getFullYear()} {SITE.name} · {t('legal')}
        </div>
      </footer>
    </>
  );
}
