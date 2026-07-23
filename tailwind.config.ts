import type { Config } from 'tailwindcss';

/**
 * Design tokens feed the theme. Colours resolve to CSS custom properties
 * (defined per-theme in app/globals.css) so light/dark are one source of truth.
 * Type scale, spacing and motion are declared here as named tokens — components
 * reference tokens, never arbitrary values.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    // A small, ruthlessly-applied type scale.
    fontSize: {
      'display-xl': ['clamp(2.5rem, 1.2rem + 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
      'display-l': ['clamp(1.75rem, 1.1rem + 2.4vw, 2.75rem)', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
      'heading-m': ['clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      'heading-s': ['1.25rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      'body-l': ['clamp(1.125rem, 1rem + 0.6vw, 1.4rem)', { lineHeight: '1.5', letterSpacing: '-0.012em' }],
      'body-m': ['1.0625rem', { lineHeight: '1.65' }],
      'body-s': ['0.9375rem', { lineHeight: '1.55' }],
      caption: ['0.875rem', { lineHeight: '1.5' }],
      label: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.16em' }],
    },
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-raised': 'var(--paper-raised)',
        ink: {
          DEFAULT: 'var(--ink)',
          70: 'var(--ink-70)',
          40: 'var(--ink-40)',
        },
        hairline: {
          DEFAULT: 'var(--hairline)',
          2: 'var(--hairline-2)',
        },
        graphite: 'var(--graphite)',
        'on-graphite': 'var(--on-graphite)',
        signal: 'var(--signal)',
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: {
        content: '1180px',
        prose: '62ch',
      },
      letterSpacing: {
        label: '0.16em',
      },
      transitionTimingFunction: {
        settle: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
    },
  },
  plugins: [],
};

export default config;
