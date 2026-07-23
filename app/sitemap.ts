import type { MetadataRoute } from 'next';

const base = 'https://example.com';
const routes = ['', '/services', '/approach', '/reports', '/expertise', '/library', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
