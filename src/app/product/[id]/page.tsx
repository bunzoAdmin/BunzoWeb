import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CatalogAPI } from '@/lib/api/endpoints';
import { ProductDetailActions } from './ProductDetailActions';
import { plainZMW } from '@/lib/currency';

interface Params {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  try {
    const p = await CatalogAPI.getProduct(id);
    return {
      title: `${p.name} — ${p.weight}`,
      description: `Buy ${p.name} (${p.weight}) at ${plainZMW(p.price)} on Bunzo. Delivered in ${p.deliveryMins} minutes in Lusaka.`
    };
  } catch {
    return { title: 'Product not found' };
  }
}

export const revalidate = 300;

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  let product;
  try {
    product = await CatalogAPI.getProduct(id);
  } catch {
    notFound();
  }

  const discount = Math.round((1 - product.price / product.mrp) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-2 gap-10">
      <div className="bg-neutral-50 rounded-2xl flex items-center justify-center text-[200px] aspect-square">
        {product.emoji}
      </div>
      <div>
        <p className="text-xs font-semibold text-brand-green">
          {product.deliveryMins} MINS DELIVERY
        </p>
        <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
        <p className="text-neutral-500 mt-1">{product.weight}</p>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="text-3xl font-bold">{plainZMW(product.price)}</span>
          {discount > 0 && (
            <>
              <span className="text-neutral-500 line-through">{plainZMW(product.mrp)}</span>
              <span className="bg-brand-green-light text-brand-green text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </span>
            </>
          )}
        </div>
        <p className="text-xs text-neutral-500 mt-1">Inclusive of all taxes</p>

        <div className="mt-6">
          <ProductDetailActions productId={product.id} />
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-6">
          <h3 className="font-semibold mb-2">Why shop on Bunzo?</h3>
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>⚡ Delivered to your door in 10 minutes</li>
            <li>🛡️ Quality assured by our team</li>
            <li>💸 Pay with Airtel Money, MTN MoMo or cash</li>
            <li>↩️ Easy returns on damaged items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
