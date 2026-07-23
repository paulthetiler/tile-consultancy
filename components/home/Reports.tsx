import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { Reveal } from '@/components/primitives/Reveal';
import { TextLink } from '@/components/primitives/TextLink';
import { ProvenanceChip } from '@/components/forensic/ProvenanceChip';
import { reportTypes } from '@/content/services';

const anatomy = [
  'Control sheet',
  'Instruction & scope',
  'Basis, access & limitations',
  'Method & instruments',
  'Standards applied',
  'Findings — the measured evidence',
  'Schedule of defects',
  'Analysis & cause',
  'Conclusions',
  'Declaration — CPR Part 35 (for expert reports)',
  'Appendices & evidence record',
];

export function Reports() {
  return (
    <Section divide>
      <SectionHead no="Plate 02" label="The report is the product — so we show it" />
      <div className="grid gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-5">
          <p className="max-w-prose text-body-m text-ink-70">
            Our reports are what a client actually pays for, so the site shows them: a real,
            browsable, annotated report you can look through before you instruct us. The
            document-control cover is the first signal of care &mdash; this is a controlled document,
            not a letter.
          </p>
          <span className="u-label text-ink-40">The reports we produce</span>
          <div className="flex flex-wrap gap-1.5">
            {reportTypes.map((t) => (
              <ProvenanceChip key={t} provenance={t} signal={t.includes('CPR')} />
            ))}
          </div>
          <div className="pt-2">
            <TextLink href="/reports" emphasis>
              Examine a report
            </TextLink>
          </div>
        </Reveal>

        <Reveal>
          <span className="u-label text-ink-40">What&rsquo;s in a report</span>
          <ol className="mt-4">
            {anatomy.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-b border-hairline py-2.5 last:border-b-0"
              >
                <span className="u-label text-ink-40">{String(i + 1).padStart(2, '0')}</span>
                <span className={item.includes('CPR') ? 'text-body-s text-signal' : 'text-body-s text-ink'}>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
