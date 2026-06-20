import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CatalogAPI } from '@/lib/api/endpoints';
import { ProductCard } from '@/components/ProductCard';
import { CategorySidebar } from '@/components/CategorySidebar';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const categories = await CatalogAPI.listCategories();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: 'Category not found' };
  return {
    title: `${cat.name} — Delivered in 15 minutes`,
    description: `Buy ${cat.name.toLowerCase()} online in Lusaka with 15-minute Bunzo delivery.`
  };
}

export async function generateStaticParams() {
  const categories = await CatalogAPI.listCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export const revalidate = 300;

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const [categories, products] = await Promise.all([
    CatalogAPI.listCategories(),
    CatalogAPI.productsInCategory(slug)
  ]);
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const firstSub = category.subcategories[0]?.slug ?? '';

  // Group products by subcategory for the "all" view
  const groups = category.subcategories.map((sc) => ({
    sub: sc,
    items: products.filter((p) => p.subcategorySlug === sc.slug)
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
      <nav className="text-xs text-neutral-500 mb-3">
        <Link href="/" className="hover:text-brand-green">Home</Link>
        <span className="mx-1">/</span>
        <span className="text-neutral-700 font-medium">{category.name}</span>
      </nav>

      <div className="flex gap-4 md:gap-6 flex-col md:flex-row">
        <CategorySidebar
          categoryName={category.name}
          categorySlug={category.slug}
          subcategories={category.subcategories}
          activeSlug={firstSub}
        />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Buy {category.name} Online
          </h1>

          {groups.map(({ sub, items }) =>
            items.length === 0 ? null : (
              <section key={sub.id} className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-bold">
                    <span className="mr-2">{sub.emoji}</span>
                    {sub.name}
                  </h2>
                  <Link
                    href={`/category/${category.slug}/${sub.slug}`}
                    className="text-sm text-brand-green font-semibold hover:underline"
                  >
                    see all ›
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                  {items.slice(0, 5).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </div>
    </div>
  );
}
