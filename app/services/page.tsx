import type { Metadata } from 'next';
import { InPreparation } from '@/components/site/InPreparation';

export const metadata: Metadata = { title: 'Services' };

export default function Page() {
  return (
    <InPreparation
      title="Services"
      note="Individual service pages — defect investigations, inspections, condition surveys, expert witness, technical reporting and remedial specifications — arrive in the next milestone, each to a shared template: definition, when it's instructed, method, standards applied, and the deliverable."
    />
  );
}
