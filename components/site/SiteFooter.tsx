import Link from 'next/link';
import { brand, contact, footerLinks } from '@/lib/site';
import { Container } from '@/components/primitives/Container';
import { CalibrationStrip } from '@/components/forensic/CalibrationStrip';

export function SiteFooter() {
  return (
    <footer className="border-t border-ink">
      <Container className="py-[clamp(3rem,6vw,5rem)]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-grotesk text-[1.35rem] font-medium tracking-[-0.03em] text-ink">
                {brand.name}
              </span>
              {brand.isWorkingName ? <span className="u-label text-ink-40">working name</span> : null}
            </div>
            <p className="mt-3 max-w-[34ch] text-body-s text-ink-70">{brand.descriptor}.</p>
            <p className="mt-1 max-w-[34ch] text-body-s text-ink-70">
              We take measurements, not sides.
            </p>
            <dl className="mt-6 space-y-1 font-mono text-caption text-ink-70">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="hover:text-ink">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd>{contact.location}</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h2 className="u-label text-ink-40">{col.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-body-s text-ink-70 hover:text-ink">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CalibrationStrip width={140} />
            <span className="u-label text-ink-40">Independent · evidence-led</span>
          </div>
          <p className="u-label text-ink-40">
            © {new Date().getFullYear()} {brand.name} · Placeholder site
          </p>
        </div>
      </Container>
    </footer>
  );
}
