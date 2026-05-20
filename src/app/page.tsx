import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bunzo — Grocery Delivery App | Bunzo Technologies Limited',
  description:
    'Bunzo is a 10-minute grocery delivery service in Zambia, operated by Bunzo Technologies Limited. Download the app to get fresh groceries delivered to your doorstep in Lusaka.'
};

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">

      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-brand-green uppercase tracking-widest mb-3">
          Bunzo Technologies Limited
        </p>
        <h1 className="text-5xl font-extrabold text-neutral-900 mb-4">
          Groceries delivered<br className="hidden sm:block" /> in 10 minutes
        </h1>
        <p className="text-lg text-neutral-600 max-w-xl mx-auto">
          Bunzo is Zambia&apos;s fast grocery delivery app — fresh essentials, household items
          and daily needs delivered to your doorstep across Lusaka.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '⚡', title: '10-Minute Delivery', body: 'Order from our nearest dark store and receive your groceries in minutes.' },
          { icon: '🛒', title: 'Wide Selection', body: 'Fresh produce, dairy, household essentials and more — all in one app.' },
          { icon: '💸', title: 'Easy Payments', body: 'Pay with Airtel Money, MTN Mobile Money, or Cash on Delivery.' }
        ].map((f) => (
          <div key={f.title} className="bg-neutral-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h2 className="font-bold text-neutral-900 mb-2">{f.title}</h2>
            <p className="text-sm text-neutral-600">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-brand-dark text-white rounded-2xl p-8 md:p-12 text-center mb-16">
        <h2 className="text-2xl font-bold text-brand-yellow mb-2">App Coming Soon</h2>
        <p className="text-neutral-300 mb-6 max-w-md mx-auto">
          The Bunzo app will be available on the App Store and Google Play. Enter your number
          to be notified at launch.
        </p>
        <p className="text-sm text-neutral-400">
          Questions? Email us at{' '}
          <a href="mailto:support@bunzodelivery.com" className="text-brand-yellow underline">
            support@bunzodelivery.com
          </a>
        </p>
      </div>

      <div className="border border-neutral-200 rounded-xl p-8 text-center">
        <h2 className="text-lg font-bold text-neutral-800 mb-2">Bunzo Technologies Limited</h2>
        <p className="text-sm text-neutral-600 mb-4">Registered company · Lusaka, Zambia</p>
        <div className="flex justify-center gap-8 text-sm">
          <Link href="/support" className="text-brand-green font-semibold hover:underline">Support</Link>
          <Link href="/privacy-policy" className="text-brand-green font-semibold hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-brand-green font-semibold hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>

    </div>
  );
}
