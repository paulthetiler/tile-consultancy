import type { Metadata } from 'next';
import { InPreparation } from '@/components/site/InPreparation';

export const metadata: Metadata = { title: 'Expertise' };

export default function Page() {
  return (
    <InPreparation
      title="Expertise"
      note="The named people behind the reports — credentials, standards worked to, memberships and court experience. The most important page for solicitors instructing an expert witness."
    />
  );
}
