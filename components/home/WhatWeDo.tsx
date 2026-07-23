import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { Reveal } from '@/components/primitives/Reveal';
import { services } from '@/content/services';

export function WhatWeDo() {
  return (
    <Section>
      <SectionHead no="Plate 00" label="What we do" />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.no} delay={i * 60}>
            <div className="border-t border-ink pt-4">
              <span className="u-label text-ink-40">{s.no}</span>
              <h3 className="mt-2 text-heading-s font-grotesk text-ink">{s.verb}</h3>
              <p className="mt-3 text-body-s text-ink-70">{s.summary}</p>
              <p className="mt-3 text-caption text-ink-40">{s.covers.join(' · ')}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-[clamp(2.5rem,5vw,4rem)] max-w-prose text-body-m text-ink-70">
          We install nothing and hold no allegiance. Every finding is measured, referenced to a
          standard, and documented &mdash; so it stands up in a handover meeting, or a tribunal.
        </p>
      </Reveal>
    </Section>
  );
}
