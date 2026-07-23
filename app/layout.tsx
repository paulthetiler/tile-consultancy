import type { Metadata, Viewport } from 'next';
import './globals.css';
import { brand } from '@/lib/site';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: `${brand.name} — ${brand.descriptor}`,
    template: `%s — ${brand.name}`,
  },
  description:
    'Independent commercial tiling consultants. We investigate failures, inspect installations, produce authoritative reports, and specify the remedial work — with the evidence behind every finding.',
  openGraph: {
    type: 'website',
    title: `${brand.name} — ${brand.descriptor}`,
    description:
      'Independent commercial tiling consultants. We investigate, inspect and report on commercial tiling.',
    siteName: brand.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f0ec' },
    { media: '(prefers-color-scheme: dark)', color: '#131419' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-caption focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
