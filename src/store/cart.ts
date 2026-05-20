'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  add: (productId: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  totalCount: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId) =>
        set((s) => {
          const existing = s.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.productId === productId ? { ...i, qty: i.qty + 1 } : i
              )
            };
          }
          return { items: [...s.items, { productId, qty: 1 }] };
        }),
      remove: (productId) =>
        set((s) => {
          const existing = s.items.find((i) => i.productId === productId);
          if (!existing) return s;
          if (existing.qty <= 1) {
            return { items: s.items.filter((i) => i.productId !== productId) };
          }
          return {
            items: s.items.map((i) =>
              i.productId === productId ? { ...i, qty: i.qty - 1 } : i
            )
          };
        }),
      setQty: (productId, qty) =>
        set((s) => ({
          items:
            qty <= 0
              ? s.items.filter((i) => i.productId !== productId)
              : s.items.map((i) => (i.productId === productId ? { ...i, qty } : i))
        })),
      clear: () => set({ items: [] }),
      totalCount: () => get().items.reduce((n, i) => n + i.qty, 0)
    }),
    { name: 'bunzo-cart' }
  )
);
