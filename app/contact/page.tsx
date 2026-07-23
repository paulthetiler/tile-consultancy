import type { Metadata } from 'next';
import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { contact } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact' };

export default function Page() {
  return (
    <Section>
      <SectionHead no="—" label="Instruct us" />
      <h1 className="max-w-[18ch] text-display-l font-grotesk text-ink">
        Tell us the situation and the deadline.
      </h1>
      <p className="mt-6 max-w-prose text-body-m text-ink-70">
        A working enquiry form arrives in the next milestone. For now, the essentials:
      </p>
      <dl className="mt-8 space-y-3 font-mono text-body-s text-ink-70 u-tnum">
        <div className="flex gap-6">
          <dt className="u-label w-24 shrink-0 text-ink-40">Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`} className="text-ink hover:text-signal">
              {contact.email}
            </a>
          </dd>
        </div>
        <div className="flex gap-6">
          <dt className="u-label w-24 shrink-0 text-ink-40">Location</dt>
          <dd className="text-ink">{contact.location}</dd>
        </div>
      </dl>
    </Section>
  );
}
