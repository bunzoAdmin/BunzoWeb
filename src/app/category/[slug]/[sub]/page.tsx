import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CatalogAPI } from '@/lib/api/endpoints';
import { ProductCard } from '@/components/ProductCard';
import { CategorySidebar } from '@/components/CategorySidebar';

interface Params {
  params: Promise<{ slug: string; sub: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, sub } = await params;
  const categories = await CatalogAPI.listCategories();
  const cat = categories.find((c) => c.slug === slug);
  const subcat = cat?.subcategories.find((s) => s.slug === sub);
  if (!cat || !subcat) return { title: 'Page not found' };
  return {
    title: `${subcat.name} — ${cat.name} delivered in 10 minutes`,
    description: `Buy ${subcat.name.toLowerCase()} online in Lusaka. 10-minute Bunzo delivery on ${cat.name.toLowerCase()}.`
  };
}

export async function generateStaticParams() {
  const categories = await CatalogAPI.listCategories();
  return categories.flatMap((c) =>
    c.subcategories.map((s) => ({ slug: c.slug, sub: s.slug }))
  );
}

export const revalidate = 300;

export default async function SubcategoryPage({ params }: Params) {
  const { slug, sub } = await params;
  const [categories, products] = await Promise.all([
    CatalogAPI.listCategories(),
    CatalogAPI.productsInCategory(slug)
  ]);
  const category = categories.find((c) => c.slug === slug);
  const subcat = category?.subcategories.find((s) => s.slug === sub);
  if (!category || !subcat) notFound();

  const items = products.filter((p) => p.subcategorySlug === sub);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
      <nav className="text-xs text-neutral-500 mb-3">
        <Link href="/" className="hover:text-brand-green">Home</Link>
        <span className="mx-1">/</span>
        <Link href={`/category/${category.slug}`} className="hover:text-brand-green">
          {category.name}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-neutral-700 font-medium">{subcat.name}</span>
      </nav>

      <div className="flex gap-4 md:gap-6 flex-col md:flex-row">
        <CategorySidebar
          categoryName={category.name}
          categorySlug={category.slug}
          subcategories={category.subcategories}
          activeSlug={subcat.slug}
        />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="mr-2">{subcat.emoji}</span>
            {subcat.name}
          </h1>
          <p className="text-sm text-neutral-500 mb-4">
            {items.length} item{items.length === 1 ? '' : 's'} · Delivered in 10 minutes
          </p>

          {items.length === 0 ? (
            <div className="bg-neutral-50 rounded-xl p-8 text-center text-neutral-500 text-sm">
              No products in this section yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
