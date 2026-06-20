import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with your Bunzo orders, account, payments and deliveries. Contact our support team 24/7.'
};

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Support</h1>
      <p className="text-neutral-600 mb-10">
        We&apos;re here to help — 24 hours a day, 7 days a week.
      </p>

      <section className="bg-brand-green-light border border-brand-green rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Contact Us</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-brand-green font-bold w-20 shrink-0">Email</span>
            <a href="mailto:support@bunzodelivery.com" className="text-brand-green font-semibold underline">
              support@bunzodelivery.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green font-bold w-20 shrink-0">Hours</span>
            <span className="text-neutral-700">Monday – Sunday, 24/7</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green font-bold w-20 shrink-0">Address</span>
            <span className="text-neutral-700">
              Bunzo Technologies Limited<br />
              Lusaka, Zambia
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-neutral-200 rounded-xl p-5">
              <h3 className="font-semibold text-neutral-900 mb-1">{faq.q}</h3>
              <p className="text-sm text-neutral-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Order Issues</h2>
        <p className="text-sm text-neutral-700 mb-3">
          If you have a problem with a specific order, please email us at{' '}
          <a href="mailto:support@bunzodelivery.com" className="text-brand-green font-semibold">
            support@bunzodelivery.com
          </a>{' '}
          with your order number and a brief description. We aim to respond within 2 hours.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Payment Support</h2>
        <p className="text-sm text-neutral-700">
          For issues with Airtel Money or MTN Mobile Money payments, please include your mobile
          number and the transaction reference when contacting us. For cash on delivery disputes,
          include your order ID and the delivery date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Refunds & Returns</h2>
        <p className="text-sm text-neutral-700 mb-3">
          Refunds are processed within 3–5 business days to your original payment method.
          If you received a wrong or damaged item, contact us within 24 hours of delivery and
          we will arrange a replacement or full refund.
        </p>
        <p className="text-sm text-neutral-500">
          See our{' '}
          <Link href="/terms" className="text-brand-green font-semibold underline">
            Terms &amp; Conditions
          </Link>{' '}
          for the full refund policy.
        </p>
      </section>
    </div>
  );
}

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'We target 15-minute delivery across Lusaka from our nearest dark store. Actual times may vary based on distance and demand.'
  },
  {
    q: 'Which areas do you deliver to?',
    a: 'We currently deliver across Lusaka including Kabulonga, Rhodespark, Woodlands, Chelston, Northmead and surrounding areas. Coverage is expanding regularly.'
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept Airtel Money, MTN Mobile Money (MoMo), and Cash on Delivery (COD).'
  },
  {
    q: 'Can I cancel or modify my order?',
    a: 'Orders can be cancelled within 2 minutes of placing them. After that, the order may already be in picking. Contact support immediately if you need to make changes.'
  },
  {
    q: 'How do I track my order?',
    a: "Live tracking is available in the app and website under 'My Orders' once your order has been dispatched."
  },
  {
    q: 'What if an item is out of stock?',
    a: 'If an item is unavailable after you place the order, we will notify you and refund the item automatically. You will not be charged for missing items.'
  },
  {
    q: 'How do I delete my account?',
    a: 'To request account deletion and erasure of your personal data, email us at support@bunzodelivery.com with the subject "Account Deletion Request". We will process it within 7 business days.'
  }
];
