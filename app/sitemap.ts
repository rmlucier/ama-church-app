import type { MetadataRoute } from 'next';

const BASE = 'https://www.albionministers.org';

const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/events', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/churches', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/help', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/volunteer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/donate', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/night-of-treasures', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    changeFrequency,
    priority,
  }));
}
