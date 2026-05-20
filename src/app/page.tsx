import { CatalogAPI } from '@/lib/api/endpoints';
import { Hero } from '@/components/Hero';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';

// Revalidate the home page every 5 minutes — fast for SEO, fresh enough for a catalog.
export const revalidate = 300;

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    CatalogAPI.listCategories(),
    CatalogAPI.listProducts()
  ]);

  const featured = products.slice(0, 12);

  return (
    <>
      <Hero />

      <section id="categories" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { e: '⚡', t: '10-Minute Delivery', d: 'Dark stores across Lusaka' },
            { e: '🥬', t: 'Fresh Daily', d: 'Sourced from local markets' },
            { e: '💸', t: 'Mobile Money', d: 'Airtel Money & MTN MoMo' },
            { e: '🏷️', t: 'Best Prices', d: 'Daily deals on essentials' }
          ].map((b) => (
            <div key={b.t} className="bg-neutral-50 rounded-xl p-5 text-center">
              <div className="text-4xl">{b.e}</div>
              <p className="font-semibold mt-2 text-sm">{b.t}</p>
              <p className="text-xs text-neutral-500 mt-1">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
