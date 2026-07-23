import { Container } from '@/components/primitives/Container';
import { Rule } from '@/components/primitives/Rule';

/** The assertion: mostly negative space, one line of typographic authority. */
export function Hero() {
  return (
    <header className="pt-[clamp(3.5rem,2rem+6vw,7rem)]">
      <Container>
        <div className="mb-[clamp(1.5rem,4vw,2.5rem)] flex items-center gap-4">
          <span className="u-label text-ink-40">Independent commercial tiling consultants</span>
          <Rule className="flex-1" />
          <span className="u-label text-ink-40">Fig. 00</span>
        </div>

        <h1 className="text-display-xl font-grotesk text-ink">
          We investigate,<br className="hidden md:inline" /> inspect and report<br className="hidden md:inline" /> on commercial tiling.
        </h1>

        <p className="mt-[clamp(1.5rem,3vw,2.25rem)] max-w-[42ch] text-body-l text-ink-70">
          When a commercial tiling installation fails or needs checking, we find out what&rsquo;s
          wrong, prove it, and set out the fix &mdash; independently, with the evidence behind every
          finding.
        </p>

        {/* Graticule — the instrument showing its scale, with a single red index. */}
        <div
          className="relative mt-[clamp(2.5rem,5vw,4.5rem)] h-[46px] border-t border-ink"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, var(--hairline) 0, var(--hairline) 1px, transparent 1px, transparent 20px)',
            backgroundSize: '20px 9px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'top left',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[18px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, var(--ink) 0, var(--ink) 1px, transparent 1px, transparent 100px)',
              opacity: 0.85,
            }}
          />
          <span className="absolute top-[-1px] h-[30px] w-px bg-signal" style={{ left: '61.8%' }}>
            <span className="absolute left-[-3px] top-[-4px] h-[7px] w-[7px] rounded-full bg-signal" />
          </span>
          <span
            className="absolute font-mono text-[0.6875rem] text-signal u-tnum"
            style={{ top: '24px', left: '61.8%', transform: 'translateX(-50%)' }}
          >
            &Delta; 2.4&nbsp;mm
          </span>
        </div>
      </Container>
    </header>
  );
}
