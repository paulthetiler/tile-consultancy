import { clsx } from '@/lib/clsx';

/**
 * The technical-document section header: a monospaced plate/figure number in
 * signal red, a hairline that spans the gap, and a quiet label. Numbering reads
 * as figure/plate references, the vernacular of a real report.
 */
export function SectionHead({
  no,
  label,
  className,
}: {
  no: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={clsx('mb-[clamp(2rem,4vw,3rem)] flex items-baseline gap-5', className)}>
      <span className="u-label shrink-0 text-signal">{no}</span>
      <hr className="h-px flex-1 self-center border-0 bg-hairline" aria-hidden="true" />
      <span className="u-label text-ink-40">{label}</span>
    </div>
  );
}
