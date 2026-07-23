import type { Metadata } from 'next';
import { InPreparation } from '@/components/site/InPreparation';

export const metadata: Metadata = { title: 'Reports' };

export default function Page() {
  return (
    <InPreparation
      title="Reports"
      note="A browsable archive of specimen reports and annotated findings — shown as synthetic exemplars, honestly labelled. Real client reports are never published."
    />
  );
}
