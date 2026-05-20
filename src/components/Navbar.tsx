'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Search, User as UserIcon, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '@/store/cart';
import { useAuth } from '@/store/auth';

export function Navbar() {
  const totalCount = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const user = useAuth((s) => s.user);
  const [q, setQ] = useState('');

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-4 md:gap-6 flex-wrap">
        <Logo />

        <div className="hidden md:flex flex-col text-sm">
          <span className="font-bold">Delivery in 10 minutes</span>
          <span className="text-neutral-500 flex items-center gap-1 text-xs cursor-pointer">
            Home — Kabulonga, Lusaka <ChevronDown size={12} />
          </span>
        </div>

        <form
          action="/search"
          className="flex-1 min-w-[200px] order-3 md:order-none w-full md:w-auto"
        >
          <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-yellow">
            <Search size={18} className="text-neutral-500" />
            <input
              name="q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder='Search "milk"'
              className="bg-transparent outline-none ml-2 flex-1 text-sm"
            />
          </div>
        </form>

        <Link
          href="/login"
          className="flex items-center gap-1 text-sm font-semibold hover:text-brand-green"
        >
          <UserIcon size={18} />
          {user ? user.name ?? 'Account' : 'Login'}
        </Link>

        <Link
          href="/cart"
          className="bg-brand-green hover:bg-brand-green-dark text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 text-sm"
        >
          <ShoppingCart size={18} />
          My Cart
          <span className="bg-white text-brand-green rounded-full text-xs font-bold px-2 py-0.5 ml-1">
            {totalCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
