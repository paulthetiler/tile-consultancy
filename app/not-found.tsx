import { Section } from '@/components/primitives/Section';
import { SectionHead } from '@/components/primitives/SectionHead';
import { TextLink } from '@/components/primitives/TextLink';

export default function NotFound() {
  return (
    <Section>
      <SectionHead no="404" label="Not found" />
      <h1 className="max-w-[16ch] text-display-l font-grotesk text-ink">
        Off the datum.
      </h1>
      <p className="mt-6 max-w-prose text-body-m text-ink-70">
        The page you asked for isn&rsquo;t here.
      </p>
      <div className="mt-10">
        <TextLink href="/">Back to the homepage</TextLink>
      </div>
    </Section>
  );
}
