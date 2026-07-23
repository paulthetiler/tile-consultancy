import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { Reveal } from '@/components/primitives/Reveal';
import { TextLink } from '@/components/primitives/TextLink';
import { contact } from '@/lib/site';

/** A calm close — the door is open; we are not chasing anyone through it. */
export function ContactCta() {
  return (
    <Section divide>
      <SectionHead no="Plate 03" label="Instruct us" />
      <div className="grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="max-w-[18ch] text-display-l font-grotesk text-ink">
            A failed installation, or one you need checked.
          </h2>
        </Reveal>
        <Reveal className="flex flex-col justify-end gap-6">
          <p className="max-w-prose text-body-m text-ink-70">
            Tell us the situation and the deadline. We&rsquo;ll tell you what an inspection or
            investigation would involve, and what it would cost.
          </p>
          <div className="flex flex-col gap-3">
            <TextLink href="/contact" emphasis>
              Start an enquiry
            </TextLink>
            <a href={`mailto:${contact.email}`} className="font-mono text-caption text-ink-70 hover:text-ink">
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
