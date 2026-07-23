import type { Metadata } from 'next';
import { InPreparation } from '@/components/site/InPreparation';

export const metadata: Metadata = { title: 'Approach' };

export default function Page() {
  return (
    <InPreparation
      title="Approach"
      note="How an inspection or investigation actually runs — the method, as numbered, verifiable steps, and the instruments used to measure each finding."
    />
  );
}
