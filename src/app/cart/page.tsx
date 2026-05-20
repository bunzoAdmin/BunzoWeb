'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';
import { CatalogAPI } from '@/lib/api/endpoints';
import { plainZMW } from '@/lib/currency';
import type { Product } from '@/types';

export default function CartPage() {
  const items = useCart((s) => s.items);
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    CatalogAPI.listProducts().then(setProducts);
  }, []);

  const lines = items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      if (!product) return null;
      return { product, qty: i.qty, lineTotal: product.price * i.qty };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 200 ? 0 : 15;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">My Cart</h1>

      {lines.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-neutral-500 mb-4">Your cart is empty.</p>
          <Link href="/" className="bg-brand-green text-white px-5 py-3 rounded-lg font-semibold">
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-3">
            {lines.map((l) => (
              <div
                key={l.product.id}
                className="flex items-center gap-4 border border-neutral-200 rounded-lg p-3"
              >
                <div className="text-4xl bg-neutral-50 rounded-md p-2">{l.product.emoji}</div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{l.product.name}</p>
                  <p className="text-xs text-neutral-500">{l.product.weight}</p>
                  <p className="text-sm font-bold mt-1">{plainZMW(l.product.price)}</p>
                </div>
                <div className="flex items-center bg-brand-green text-white rounded-md overflow-hidden">
                  <button onClick={() => remove(l.product.id)} className="px-3 py-1 hover:bg-brand-green-dark">−</button>
                  <span className="px-3 font-bold text-sm">{l.qty}</span>
                  <button onClick={() => add(l.product.id)} className="px-3 py-1 hover:bg-brand-green-dark">+</button>
                </div>
                <p className="w-20 text-right font-semibold">{plainZMW(l.lineTotal)}</p>
              </div>
            ))}
          </div>

          <aside className="border border-neutral-200 rounded-lg p-5 h-fit sticky top-24">
            <h3 className="font-bold mb-4">Bill Details</h3>
            <Row label="Subtotal" value={plainZMW(subtotal)} />
            <Row label="Delivery fee" value={deliveryFee === 0 ? 'FREE' : plainZMW(deliveryFee)} />
            <div className="border-t border-neutral-200 my-3" />
            <Row label="Grand Total" value={plainZMW(total)} bold />
            {subtotal < 200 && (
              <p className="text-xs text-brand-green mt-2">
                Add {plainZMW(200 - subtotal)} more for FREE delivery!
              </p>
            )}
            <Link
              href="/checkout"
              className="block text-center bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 rounded-lg mt-4"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between text-sm py-1 ${bold ? 'font-bold text-base' : ''}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
