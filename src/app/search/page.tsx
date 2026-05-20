import { CatalogAPI } from '@/lib/api/endpoints';
import { ProductCard } from '@/components/ProductCard';

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export const dynamic = 'force-dynamic';

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const products = q ? await CatalogAPI.listProducts({ q }) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-2xl font-bold mb-2">Search results</h1>
      <p className="text-neutral-500 mb-6">
        {q ? <>Showing {products.length} result{products.length === 1 ? '' : 's'} for &ldquo;{q}&rdquo;</> : 'Type something to search'}
      </p>
      {q && products.length === 0 ? (
        <div className="text-center py-12 text-neutral-500">
          No products matched. Try a different keyword.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
