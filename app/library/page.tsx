import type { Metadata } from 'next';
import { InPreparation } from '@/components/site/InPreparation';

export const metadata: Metadata = { title: 'Technical library' };

export default function Page() {
  return (
    <InPreparation
      title="Technical library"
      note="A growing reference on the technical facts this work turns on — defect types, tolerances, standards and test methods — built from real casework. The seed set (tolerance tables first) arrives with the content engine."
    />
  );
}
