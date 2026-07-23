import { clsx } from '@/lib/clsx';
import { Container } from './Container';

/**
 * A page section with generous, consistent vertical rhythm — the primary lever
 * that makes the site feel considered. `invert` renders the graphite dark block
 * (built from the same tokens); `divide` adds a top hairline.
 */
export function Section({
  children,
  invert = false,
  divide = false,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  invert?: boolean;
  divide?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        'py-[clamp(4rem,2rem+9vw,9rem)]',
        divide && 'border-t border-hairline',
        invert && 'bg-graphite text-on-graphite',
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
