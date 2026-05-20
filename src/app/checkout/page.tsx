'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/store/cart';
import { useAuth } from '@/store/auth';
import { CatalogAPI, OrdersAPI, PaymentsAPI } from '@/lib/api/endpoints';
import { PaymentMethods } from '@/components/PaymentMethods';
import { plainZMW } from '@/lib/currency';
import type { PaymentMethod, Product, Address } from '@/types';

export default function CheckoutPage() {
  const router = useRouter();
  const cart = useCart();
  const user = useAuth((s) => s.user);

  const [products, setProducts] = useState<Product[]>([]);
  const [payment, setPayment] = useState<PaymentMethod>('airtel_money');
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [address, setAddress] = useState<Address>(
    user?.addresses[0] ?? {
      label: 'Home',
      line1: '',
      city: 'Lusaka',
      province: 'Lusaka'
    }
  );

  useEffect(() => {
    CatalogAPI.listProducts().then(setProducts);
  }, []);

  const lines = cart.items
    .map((i) => {
      const product = products.find((p) => p.id === i.productId);
      if (!product) return null;
      return { product, qty: i.qty, lineTotal: product.price * i.qty };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 200 ? 0 : 15;
  const total = subtotal + deliveryFee;

  async function placeOrder() {
    setError(null);
    if (!user) {
      router.push('/login?next=/checkout');
      return;
    }
    if (!address.line1) {
      setError('Please enter a delivery address.');
      return;
    }
    setPlacing(true);
    try {
      const order = await OrdersAPI.place(cart.items, payment, address);

      if (payment === 'airtel_money') {
        await PaymentsAPI.airtelMoney(order.id, user.phone, order.total);
      } else if (payment === 'mtn_momo') {
        await PaymentsAPI.mtnMomo(order.id, user.phone, order.total);
      } else {
        await PaymentsAPI.cod(order.id);
      }

      cart.clear();
      router.push(`/orders?placed=${order.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to place order');
    } finally {
      setPlacing(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-20">
        <p className="text-neutral-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-[1fr_360px] gap-8">
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">Delivery Address</h2>
          <div className="space-y-3">
            <input
              className="w-full border border-neutral-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              placeholder="House / Plot / Street (e.g., Plot 42, Kabulonga Road)"
              value={address.line1}
              onChange={(e) => setAddress({ ...address, line1: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border border-neutral-200 rounded-lg p-3 text-sm"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                className="border border-neutral-200 rounded-lg p-3 text-sm"
                placeholder="Province"
                value={address.province}
                onChange={(e) => setAddress({ ...address, province: e.target.value })}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Payment Method</h2>
          <PaymentMethods value={payment} onChange={setPayment} />
        </section>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}
      </div>

      <aside className="border border-neutral-200 rounded-lg p-5 h-fit sticky top-24">
        <h3 className="font-bold mb-4">Order Summary</h3>
        <div className="space-y-1 mb-3">
          {lines.map((l) => (
            <div key={l.product.id} className="flex justify-between text-sm">
              <span className="text-neutral-600">
                {l.product.name} × {l.qty}
              </span>
              <span>{plainZMW(l.lineTotal)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-200 my-3" />
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{plainZMW(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery</span>
          <span>{deliveryFee === 0 ? 'FREE' : plainZMW(deliveryFee)}</span>
        </div>
        <div className="border-t border-neutral-200 my-3" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{plainZMW(total)}</span>
        </div>
        <button
          onClick={placeOrder}
          disabled={placing}
          className="w-full mt-5 bg-brand-green hover:bg-brand-green-dark disabled:bg-neutral-300 text-white font-bold py-3 rounded-lg"
        >
          {placing ? 'Placing order…' : `Place Order · ${plainZMW(total)}`}
        </button>
      </aside>
    </div>
  );
}
