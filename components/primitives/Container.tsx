import { clsx } from '@/lib/clsx';

/** Centered content column: hard ~1180px measure with fluid outer gutters. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-content px-[clamp(1.25rem,4vw,4.5rem)]',
        className
      )}
    >
      {children}
    </div>
  );
}
