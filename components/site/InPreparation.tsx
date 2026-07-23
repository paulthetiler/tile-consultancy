import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { TextLink } from '@/components/primitives/TextLink';

/** Placeholder for routes arriving in later milestones — keeps the shell navigable. */
export function InPreparation({ title, note }: { title: string; note: string }) {
  return (
    <Section>
      <SectionHead no="—" label="In preparation" />
      <h1 className="max-w-[16ch] text-display-l font-grotesk text-ink">{title}</h1>
      <p className="mt-6 max-w-prose text-body-m text-ink-70">{note}</p>
      <div className="mt-10">
        <TextLink href="/">Back to the homepage</TextLink>
      </div>
    </Section>
  );
}
