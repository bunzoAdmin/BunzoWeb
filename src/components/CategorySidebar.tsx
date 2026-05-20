'use client';

import Link from 'next/link';
import type { Subcategory } from '@/types';

interface Props {
  categoryName: string;
  categorySlug: string;
  subcategories: Subcategory[];
  activeSlug: string;
}

export function CategorySidebar({ categorySlug, subcategories, activeSlug }: Props) {
  return (
    <>
      {/* Desktop: vertical sticky sidebar */}
      <aside className="hidden md:block w-[180px] flex-shrink-0">
        <div className="sticky top-[88px] bg-neutral-50 rounded-r-xl overflow-hidden">
          <ul>
            {subcategories.map((sc) => {
              const active = sc.slug === activeSlug;
              return (
                <li key={sc.id}>
                  <Link
                    href={`/category/${categorySlug}/${sc.slug}`}
                    className={`relative flex flex-col items-center gap-1 px-3 py-4 text-center transition-colors ${
                      active ? 'bg-white' : 'hover:bg-white/60'
                    }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow" />
                    )}
                    <span className="text-3xl">{sc.emoji}</span>
                    <span
                      className={`text-[11px] leading-tight ${
                        active ? 'font-bold text-brand-dark' : 'text-neutral-600'
                      }`}
                    >
                      {sc.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Mobile: horizontal scrolling chip bar */}
      <nav className="md:hidden sticky top-[68px] bg-white z-30 -mx-4 px-4 py-2 border-b border-neutral-200 overflow-x-auto">
        <ul className="flex gap-2 whitespace-nowrap">
          {subcategories.map((sc) => {
            const active = sc.slug === activeSlug;
            return (
              <li key={sc.id}>
                <Link
                  href={`/category/${categorySlug}/${sc.slug}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${
                    active
                      ? 'bg-brand-green-light border-brand-green text-brand-green'
                      : 'bg-white border-neutral-200 text-neutral-700'
                  }`}
                >
                  <span className="text-base">{sc.emoji}</span>
                  {sc.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
