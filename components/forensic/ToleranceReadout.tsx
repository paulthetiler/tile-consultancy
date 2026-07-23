import { clsx } from '@/lib/clsx';

/**
 * Measured value vs permissible vs verdict — the canonical way a finding is
 * stated. The signal red fires ONLY here, on a non-conforming reading. The
 * verdict is carried by the WORD (colour-blind safe); red only accompanies it.
 */
export function ToleranceReadout({
  measured,
  permissible,
  conforming,
  className,
}: {
  measured: string;
  permissible: string;
  conforming: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'mt-5 border-t border-hairline pt-4 font-mono text-body-s u-tnum',
        className
      )}
    >
      <div className="flex justify-between gap-4 leading-loose text-ink-70">
        <span className="u-label">Measured</span>
        <span className="text-ink">{measured}</span>
      </div>
      <div className="flex justify-between gap-4 leading-loose text-ink-70">
        <span className="u-label">Permissible</span>
        <span className="text-ink">{permissible}</span>
      </div>
      <span
        className={clsx(
          'mt-2 inline-block border px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em]',
          conforming ? 'border-ink-40 text-ink-70' : 'border-signal text-signal'
        )}
      >
        {conforming ? 'Conforming' : 'Non-conforming'}
      </span>
    </div>
  );
}
