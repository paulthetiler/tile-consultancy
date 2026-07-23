import { clsx } from '@/lib/clsx';

/**
 * Mandatory on every published specimen: states honestly what the shown work is.
 * Real client reports are never published — showcased work is synthetic,
 * anonymised or redacted, and always labelled as such.
 */
export type Provenance = 'Synthetic exemplar' | 'Anonymised case' | 'Redacted extract';

export function ProvenanceChip({
  provenance,
  signal = false,
  className,
}: {
  provenance: string;
  signal?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        'inline-block border px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em]',
        signal ? 'border-signal text-signal' : 'border-hairline text-ink-40',
        className
      )}
    >
      {provenance}
    </span>
  );
}
