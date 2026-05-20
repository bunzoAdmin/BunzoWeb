import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-yellow to-yellow-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 flex items-center justify-between gap-8 flex-wrap">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Groceries delivered in{' '}
            <span className="underline decoration-brand-green decoration-4">
              10 minutes
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-800">
            Fresh produce, daily essentials and household items — delivered to
            your doorstep across Lusaka, faster than ever.
          </p>
          <Link
            href="#categories"
            className="inline-block mt-6 bg-brand-dark text-white font-bold px-7 py-3.5 rounded-lg hover:bg-black"
          >
            Shop Now
          </Link>
        </div>
        <div className="text-9xl">🛵💨</div>
      </div>
    </section>
  );
}
