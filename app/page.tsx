import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { Evidence } from '@/components/home/Evidence';
import { Reports } from '@/components/home/Reports';
import { ContactCta } from '@/components/home/ContactCta';
import { brand, contact } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: brand.name,
  description:
    'Independent commercial tiling consultants. We investigate failures, inspect installations, produce authoritative reports, and specify remedial work.',
  areaServed: 'GB',
  knowsAbout: [
    'Commercial tiling defects',
    'Tiling inspections',
    'Condition surveys',
    'Expert witness',
    'BS 5385',
    'Remedial specification',
  ],
  address: { '@type': 'PostalAddress', addressLocality: contact.location, addressCountry: 'GB' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhatWeDo />
      <Evidence />
      <Reports />
      <ContactCta />
    </>
  );
}
