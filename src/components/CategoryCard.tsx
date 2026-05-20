import Link from 'next/link';
import type { Category } from '@/types';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="bg-neutral-50 rounded-xl p-5 text-center border border-transparent hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-yellow transition-all"
    >
      <div className="text-5xl">{category.emoji}</div>
      <p className="mt-3 font-semibold text-sm">{category.name}</p>
      <p className="text-[11px] text-neutral-500 mt-1">{category.productCount} items</p>
    </Link>
  );
}
