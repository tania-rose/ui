import { useTranslations } from 'next-intl';
import { SITE } from '@/lib/site';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">{SITE.name}</p>
            <p className="mt-1 max-w-sm text-[color:var(--color-foreground)]/70">{t('tagline')}</p>
          </div>
          <div className="text-[color:var(--color-foreground)]/70">
            <p>{SITE.address.streetAddress}</p>
            <p>{SITE.address.postalCode} {SITE.address.addressLocality}</p>
            <p className="mt-2">{SITE.phone}</p>
            <p>{SITE.email}</p>
          </div>
        </div>
        <p className="mt-8 text-[color:var(--color-foreground)]/60">
          © {year} {SITE.name}. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
