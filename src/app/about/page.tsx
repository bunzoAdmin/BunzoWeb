import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bunzo',
  description:
    'Bunzo is Zambia\'s 10-minute grocery delivery service. Learn about our mission, story and how we deliver fresh groceries across Lusaka.'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">About Bunzo</h1>
      <p className="text-neutral-600 mb-10">
        Zambia&apos;s fastest grocery delivery service — fresh essentials at your doorstep in 10 minutes.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { e: '⚡', t: '10-Minute Delivery', d: 'A network of dark stores across Lusaka.' },
          { e: '🥬', t: 'Fresh & Quality', d: 'Sourced from trusted local vendors daily.' },
          { e: '💸', t: 'Mobile Money', d: 'Pay with Airtel Money, MTN MoMo or cash.' },
          { e: '📱', t: 'Simple Ordering', d: 'A clean, fast app and website.' }
        ].map((b) => (
          <div key={b.t} className="bg-neutral-50 rounded-xl p-5 text-center">
            <div className="text-4xl mb-2">{b.e}</div>
            <p className="font-semibold text-sm">{b.t}</p>
            <p className="text-xs text-neutral-500 mt-1">{b.d}</p>
          </div>
        ))}
      </div>

      <section id="story" className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Our Story</h2>
        <p className="text-neutral-700 leading-relaxed">
          Bunzo was founded in 2026 in Lusaka with a simple goal — make everyday shopping
          faster and more convenient for every Zambian household. From mealie meal to fresh
          tomatoes, washing powder to cold drinks, our mission is to put the corner shop
          inside everyone&apos;s pocket.
        </p>
      </section>

      <section id="mission" className="bg-brand-dark text-white p-8 rounded-xl mb-10">
        <h2 className="text-2xl font-bold text-brand-yellow mb-2">Our Mission</h2>
        <p>
          To bring essential goods to every doorstep across Zambia within 10 minutes — built on
          speed, freshness and trust.
        </p>
      </section>

      <section id="careers" className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Careers</h2>
        <p className="text-neutral-700">
          We are hiring across engineering, operations and delivery in Lusaka, Kitwe and Ndola.
          Reach out at <a className="text-brand-green font-semibold" href="mailto:careers@bunzo.zm">careers@bunzo.zm</a>.
        </p>
      </section>

      <section id="press" className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Press</h2>
        <p className="text-neutral-700">
          Media enquiries: <a className="text-brand-green font-semibold" href="mailto:press@bunzo.zm">press@bunzo.zm</a>
        </p>
      </section>
    </div>
  );
}
