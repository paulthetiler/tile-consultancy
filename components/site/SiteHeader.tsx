import Link from 'next/link';
import { brand, primaryNav } from '@/lib/site';
import { Container } from '@/components/primitives/Container';

/**
 * Calm header: wordmark, a five/six-item nav, and a quiet Contact link — no
 * filled buttons. Mobile menu is a JS-free <details> disclosure.
 */
export function SiteHeader() {
  const nav = primaryNav.filter((i) => i.href !== '/contact');
  return (
    <header className="border-b border-hairline">
      <Container className="flex items-center justify-between gap-6 py-5">
        <Link href="/" className="flex items-baseline gap-2" aria-label={`${brand.name} — home`}>
          <span className="font-grotesk text-[1.35rem] font-medium tracking-[-0.03em] text-ink">
            {brand.name}
          </span>
          {brand.isWorkingName ? (
            <span className="u-label text-ink-40" title="Placeholder pending naming & trademark clearance">
              working name
            </span>
          ) : null}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-caption text-ink-70 transition-colors duration-250 ease-settle hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-b border-ink pb-0.5 text-caption text-ink transition-colors duration-250 ease-settle hover:border-signal hover:text-signal"
          >
            Instruct us
          </Link>
        </nav>

        {/* Mobile nav */}
        <details className="group relative md:hidden">
          <summary className="u-label cursor-pointer list-none text-ink [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-40 mt-3 w-56 border border-hairline bg-paper-raised p-4">
            <nav aria-label="Primary (mobile)" className="flex flex-col gap-3">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-body-m text-ink-70 hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
