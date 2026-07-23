import { clsx } from '@/lib/clsx';

/** A hairline divider. We divide space with lines, not boxes. */
export function Rule({ className }: { className?: string }) {
  return <hr className={clsx('h-px border-0 bg-hairline', className)} aria-hidden="true" />;
}
