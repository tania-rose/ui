import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SITE } from '@/lib/site';
import { faqSchema, courseSchema } from '@/lib/schema';
import type { Locale } from '@/i18n/routing';

const courses = ['live', 'retreat', 'facilitator', 'intro'] as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tc = await getTranslations('courses');
  const tf = await getTranslations('faq');

  const before = t.raw('before') as string[];
  const after = t.raw('after') as string[];
  const steps = t.raw('steps') as { title: string; body: string }[];
  const results = t.raw('results') as { stat: string; label: string }[];
  const faqs = tf.raw('items') as { q: string; a: string }[];

  const liveCourse = {
    name: tc.raw('live.name') as string,
    price: tc.raw('live.price') as number,
  };
  const courseSchemaJson = courseSchema(locale as Locale, {
    name: liveCourse.name,
    description: t('heroSubtitle'),
    slug: '#courses',
    price: liveCourse.price,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* Hero (problem state) */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-primary)]">{t('heroEyebrow')}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">{t('heroTitle')}</h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-foreground)]/75 md:text-xl">{t('heroSubtitle')}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={SITE.bookingUrl} className="rounded-full bg-[color:var(--color-primary)] px-7 py-3.5 font-medium text-white shadow-sm transition hover:opacity-90">
            {t('heroCta')}
          </a>
          <a href="#path" className="rounded-full border border-[color:var(--color-border)] bg-white px-7 py-3.5 font-medium hover:border-[color:var(--color-primary)]">
            {t('heroSecondary')}
          </a>
        </div>
      </section>

      {/* Before / After */}
      <section id="path" className="border-y border-[color:var(--color-border)] bg-white/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('beforeAfterTitle')}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="neu rounded-3xl bg-[color:var(--color-background)] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/50">{t('beforeLabel')}</p>
              <ul className="mt-4 space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-destructive)]/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="neu rounded-3xl bg-gradient-to-br from-[color:var(--color-primary)]/10 to-[color:var(--color-accent)]/10 p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">{t('afterLabel')}</p>
              <ul className="mt-4 space-y-3">
                {after.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('howTitle')}</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground)]/70">{t('howSubtitle')}</p>
          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="neu grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--color-background)] font-semibold text-[color:var(--color-primary)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1 text-[color:var(--color-foreground)]/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-[color:var(--color-border)] bg-white/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('resultsTitle')}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="neu rounded-3xl bg-[color:var(--color-background)] p-8 text-center">
                <p className="font-[family-name:var(--font-heading)] text-5xl font-semibold text-[color:var(--color-primary)]">{r.stat}</p>
                <p className="mt-2 text-[color:var(--color-foreground)]/70">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{locale === 'es' ? 'Cursos y sesiones' : 'Courses & sessions'}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courses.map((slug) => {
              const price = tc.raw(`${slug}.price`) as number;
              return (
                <div key={slug} className="neu rounded-3xl bg-[color:var(--color-background)] p-6">
                  <h3 className="text-xl font-semibold">{tc.raw(`${slug}.name`) as string}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-foreground)]/60">{tc.raw(`${slug}.duration`) as string}</p>
                  <p className="mt-4 text-sm font-medium text-[color:var(--color-primary)]">
                    {price === 0 ? (locale === 'es' ? 'Gratis' : 'Free') : `${price}€`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[color:var(--color-border)] bg-white/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">{tf('title')}</h2>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('finalCtaTitle')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{t('finalCtaBody')}</p>
          <a href={SITE.bookingUrl} className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[color:var(--color-primary)] shadow-lg transition hover:opacity-95">
            {t('finalCtaButton')}
          </a>
        </div>
      </section>
    </>
  );
}
