import { clsx } from '@/lib/clsx';

/**
 * The calibration step-wedge — a greyscale reference that signals the image
 * grade is true, nothing beautified. A recurring, ownable honesty device. The
 * steps are absolute greys (a real wedge is theme-independent).
 */
const STEPS = ['#ffffff', '#d9d9d9', '#b3b3b3', '#8c8c8c', '#666666', '#404040', '#1a1a1a', '#000000'];

export function CalibrationStrip({ className, width = 176 }: { className?: string; width?: number }) {
  return (
    <span
      className={clsx('flex h-4 border border-hairline', className)}
      style={{ width }}
      aria-hidden="true"
    >
      {STEPS.map((c) => (
        <span key={c} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </span>
  );
}
