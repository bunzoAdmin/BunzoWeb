'use client';

import Link from 'next/link';
import { useCart } from '@/store/cart';

export function ProductDetailActions({ productId }: { productId: string }) {
  const qty = useCart((s) => s.items.find((i) => i.productId === productId)?.qty ?? 0);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);

  if (qty === 0) {
    return (
      <button
        onClick={() => add(productId)}
        className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3 rounded-lg font-bold"
      >
        Add to Cart
      </button>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center bg-brand-green text-white rounded-lg overflow-hidden">
        <button onClick={() => remove(productId)} className="px-4 py-2 hover:bg-brand-green-dark text-lg">−</button>
        <span className="px-4 font-bold">{qty}</span>
        <button onClick={() => add(productId)} className="px-4 py-2 hover:bg-brand-green-dark text-lg">+</button>
      </div>
      <Link
        href="/cart"
        className="border border-brand-green text-brand-green px-6 py-2 rounded-lg font-semibold hover:bg-brand-green hover:text-white"
      >
        Go to Cart
      </Link>
    </div>
  );
}
