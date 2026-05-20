import type { MetadataRoute } from 'next';
import { CatalogAPI } from '@/lib/api/endpoints';

const BASE = 'https://bunzo.zm';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, products] = await Promise.all([
    CatalogAPI.listCategories(),
    CatalogAPI.listProducts()
  ]);

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1, changeFrequency: 'daily' },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/login`, priority: 0.4, changeFrequency: 'yearly' }
  ];

  const categoryUrls: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE}/category/${c.slug}`,
    priority: 0.9,
    changeFrequency: 'daily'
  }));

  const subcategoryUrls: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.subcategories.map((s) => ({
      url: `${BASE}/category/${c.slug}/${s.slug}`,
      priority: 0.85,
      changeFrequency: 'daily' as const
    }))
  );

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/product/${p.id}`,
    priority: 0.8,
    changeFrequency: 'weekly'
  }));

  return [...staticUrls, ...categoryUrls, ...subcategoryUrls, ...productUrls];
}
