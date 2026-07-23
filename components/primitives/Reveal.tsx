'use client';

import { useEffect, useRef, useState } from 'react';
import { clsx } from '@/lib/clsx';

/**
 * The one approved routine motion: a restrained fade-and-rise on scroll entry,
 * mechanically eased. Honours prefers-reduced-motion completely (content is
 * simply present, fully rendered). Uses IntersectionObserver, not a motion
 * library, to keep the critical path light.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        'motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-settle',
        shown
          ? 'translate-y-0 opacity-100'
          : 'motion-safe:translate-y-[14px] motion-safe:opacity-0',
        className
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
