import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bunzo — Grocery Delivery App | Bunzo Technologies Limited',
  description:
    'Bunzo is a 15-minute grocery delivery service in Zambia, operated by Bunzo Technologies Limited. Download the app to get fresh groceries delivered to your doorstep in Lusaka.'
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero: half yellow / half dark ── */}
      <section className="relative overflow-hidden min-h-[420px] flex">

        {/* Left — yellow gradient */}
        <div
          className="relative z-10 flex items-center w-full md:w-1/2 px-8 md:px-16 py-16"
          style={{
            background: 'linear-gradient(135deg, #F8CB46 0%, #f5b800 60%, #e8a800 100%)'
          }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-700 mb-3">
              Bunzo Technologies Limited · Lusaka, Zambia
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
              Groceries delivered<br />in{' '}
              <span className="relative inline-block">
                15 minutes
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-brand-dark rounded-full" />
              </span>
            </h1>
            <p className="text-neutral-800 text-base md:text-lg max-w-sm mb-8">
              Fresh produce, daily essentials and household items — delivered to your doorstep across Lusaka.
            </p>
            <a
              href="mailto:support@bunzodelivery.com"
              className="inline-block bg-neutral-900 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Diagonal divider — visible on md+ */}
        <div
          className="hidden md:block absolute top-0 bottom-0 z-20"
          style={{ left: 'calc(50% - 40px)', width: '80px' }}
        >
          <svg viewBox="0 0 80 420" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,0 80,0 80,420 40,420 0,420" fill="#1A1A1A" />
            <polygon points="0,0 40,0 80,420 0,420" fill="#F8CB46" />
          </svg>
        </div>

        {/* Right — dark panel */}
        <div className="hidden md:flex items-center justify-center w-1/2 bg-[#1A1A1A] px-8 py-16">
          <div className="text-center">
            <div className="text-8xl mb-6 select-none">🛵</div>
            <p className="text-brand-yellow font-bold text-xl mb-1">App Coming Soon</p>
            <p className="text-neutral-400 text-sm max-w-xs">
              Available on the App Store and Google Play.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <span className="border border-neutral-600 text-neutral-400 text-xs px-4 py-2 rounded-lg">
                App Store
              </span>
              <span className="border border-neutral-600 text-neutral-400 text-xs px-4 py-2 rounded-lg">
                Google Play
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* ── Rest of page ── */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '⚡', title: '15-Minute Delivery', body: 'Order from our nearest dark store and receive your groceries in minutes.' },
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
    </>
  );
}
