import Link from 'next/link';
import { clsx } from '@/lib/clsx';

/**
 * Quiet call to action: text with a hairline underline that firms up on hover —
 * never a filled blob button. Restraint is the brand.
 */
export function TextLink({
  href,
  children,
  className,
  emphasis = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  emphasis?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center gap-2 border-b pb-1 text-body-m transition-colors duration-250 ease-settle',
        emphasis
          ? 'border-ink text-ink hover:border-signal hover:text-signal'
          : 'border-hairline text-ink hover:border-ink',
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="font-mono text-ink-40 transition-transform duration-250 ease-settle group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
