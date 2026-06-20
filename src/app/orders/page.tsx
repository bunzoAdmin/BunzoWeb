'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { OrdersAPI } from '@/lib/api/endpoints';
import { plainZMW } from '@/lib/currency';
import type { Order } from '@/types';

const STATUS_LABEL: Record<Order['status'], string> = {
  placed: 'Placed',
  packing: 'Being packed',
  out_for_delivery: 'Out for delivery',
  delivered: 'Delivered',
  cancelled: 'Cancelled'
};

function OrdersList() {
  const search = useSearchParams();
  const placedId = search.get('placed');
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    OrdersAPI.list().then(setOrders);
  }, []);

  return (
    <>
      {placedId && (
        <div className="bg-brand-green-light border border-brand-green text-brand-green p-4 rounded-lg mb-6">
          🎉 Order <strong>{placedId}</strong> placed successfully! It will arrive in ~15 minutes.
        </div>
      )}

      {orders === null ? (
        <p className="text-neutral-500">Loading orders…</p>
      ) : orders.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-neutral-500 mb-4">You have no orders yet.</p>
          <Link href="/" className="bg-brand-green text-white px-5 py-3 rounded-lg font-semibold">
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="border border-neutral-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold">Order {o.id}</p>
                  <p className="text-xs text-neutral-500">
                    {new Date(o.placedAt).toLocaleString('en-ZM')}
                  </p>
                </div>
                <span className="bg-brand-green-light text-brand-green text-xs font-bold px-3 py-1 rounded">
                  {STATUS_LABEL[o.status]}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {o.items.map((i) => `${i.product.name} × ${i.qty}`).join(', ')}
              </p>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-neutral-500">
                  {o.payment === 'airtel_money'
                    ? 'Airtel Money'
                    : o.payment === 'mtn_momo'
                      ? 'MTN MoMo'
                      : 'Cash on Delivery'}
                </span>
                <span className="font-bold">{plainZMW(o.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function OrdersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <Suspense fallback={<p className="text-neutral-500">Loading orders…</p>}>
        <OrdersList />
      </Suspense>
    </div>
  );
}
