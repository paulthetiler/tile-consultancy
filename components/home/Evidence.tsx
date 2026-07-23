import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { Reveal } from '@/components/primitives/Reveal';
import { SpecimenFigure } from '@/components/forensic/SpecimenFigure';
import { ToleranceReadout } from '@/components/forensic/ToleranceReadout';
import { ProvenanceChip } from '@/components/forensic/ProvenanceChip';

export function Evidence() {
  return (
    <Section divide>
      <SectionHead no="Plate 01" label="The evidence — proof, not adjectives" />
      <div className="grid gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-5">
          <p className="max-w-prose text-body-m text-ink-70">
            Every defect is measured, photographed, and checked against the standard &mdash; pass or
            fail. That single annotated finding is what the whole site is built from: it appears in
            the report, in a zoomable viewer, and here.
          </p>
          <p className="max-w-prose text-body-m text-ink-70">
            The photography is shot like evidence, not a brochure: sharp macro, a low{' '}
            <span className="text-ink">raking light</span> to reveal the defect, a scale in the
            frame, the instrument&rsquo;s reading legible, and a calibration strip proving the image
            is true to tone. The measurement mark-up is the design.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <ProvenanceChip provenance="Synthetic exemplar" />
            <ProvenanceChip provenance="Anonymised case" />
            <ProvenanceChip provenance="Redacted extract" />
          </div>
          <p className="u-label text-ink-40">
            Real client reports are never published &mdash; showcased work is labelled for what it is.
          </p>
        </Reveal>

        <Reveal>
          <figure className="m-0 border border-hairline bg-paper-raised p-[clamp(1rem,3vw,2rem)]">
            <div className="overflow-x-auto">
              <SpecimenFigure />
            </div>
            <ToleranceReadout measured="2.4 mm" permissible="≤ 1.0 mm · BS 5385-3" conforming={false} />
            <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="u-label text-ink-40">Plate 01</span>
              <span className="u-label text-ink-40">Ref TCS-2431 / 07</span>
              <ProvenanceChip provenance="Synthetic exemplar" />
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
