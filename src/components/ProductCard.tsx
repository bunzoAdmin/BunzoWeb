'use client';

import Link from 'next/link';
import { useCart } from '@/store/cart';
import { plainZMW } from '@/lib/currency';
import type { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  const qty = useCart((s) => s.items.find((i) => i.productId === product.id)?.qty ?? 0);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const discount = Math.round((1 - product.price / product.mrp) * 100);

  return (
    <div className="rounded-xl border border-neutral-200 p-3 bg-white hover:shadow-card-hover transition-shadow flex flex-col">
      <Link href={`/product/${product.id}`} className="block">
        <div className="bg-neutral-50 rounded-lg flex items-center justify-center py-5 text-6xl">
          {product.emoji}
        </div>
      </Link>
      <p className="text-[11px] text-neutral-500 mt-3 font-semibold">
        {product.deliveryMins} MINS
      </p>
      <Link
        href={`/product/${product.id}`}
        className="text-sm font-medium mt-1 line-clamp-2 min-h-[40px] hover:text-brand-green"
      >
        {product.name}
      </Link>
      <p className="text-xs text-neutral-500 mt-0.5">{product.weight}</p>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <span className="font-bold">{plainZMW(product.price)}</span>
          {discount > 0 && (
            <span className="text-xs text-neutral-500 line-through ml-1">
              {plainZMW(product.mrp)}
            </span>
          )}
        </div>
        {qty === 0 ? (
          <button
            onClick={() => add(product.id)}
            className="text-brand-green border border-brand-green bg-brand-green-light px-4 py-1.5 rounded-md font-bold text-sm hover:bg-brand-green hover:text-white transition-colors"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center bg-brand-green text-white rounded-md overflow-hidden">
            <button
              onClick={() => remove(product.id)}
              className="px-2 py-1 hover:bg-brand-green-dark"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="px-2 font-bold text-sm">{qty}</span>
            <button
              onClick={() => add(product.id)}
              className="px-2 py-1 hover:bg-brand-green-dark"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
