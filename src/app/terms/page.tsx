import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Bunzo Terms & Conditions — the rules that govern your use of the Bunzo delivery service.'
};

const EFFECTIVE_DATE = '1 May 2026';
const COMPANY = 'Bunzo Technologies Limited';
const EMAIL = 'support@bunzodelivery.com';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm text-neutral-500 mb-8">Effective date: {EFFECTIVE_DATE}</p>

      <p className="text-neutral-700 mb-8 leading-relaxed">
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Bunzo
        mobile application and website (together, the &ldquo;Service&rdquo;) operated by{' '}
        <strong>{COMPANY}</strong> (&ldquo;Bunzo&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;). By creating an account
        or placing an order you agree to be bound by these Terms.
      </p>

      <Section title="1. Eligibility">
        <p className="text-sm text-neutral-700">
          You must be at least 18 years old and capable of forming a binding contract under Zambian
          law to use the Service. By registering, you represent that you meet these requirements.
        </p>
      </Section>

      <Section title="2. Account Registration">
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>You must provide a valid Zambian phone number and a current delivery address.</li>
          <li>You are responsible for keeping your OTP and account credentials confidential.</li>
          <li>You must notify us immediately at <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a> if you suspect unauthorised access.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
        </ul>
      </Section>

      <Section title="3. Orders">
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>An order is confirmed when you receive an in-app or SMS confirmation with an order ID.</li>
          <li>Prices shown are in Zambian Kwacha (ZMW) and include applicable taxes.</li>
          <li>We reserve the right to cancel an order if an item becomes unavailable after confirmation; you will be fully refunded for any cancelled items.</li>
          <li>You may cancel an order within 2 minutes of placing it. Cancellation after that point may not be possible if picking has begun.</li>
          <li>Minimum order values and delivery fees (if any) are displayed at checkout before payment.</li>
        </ul>
      </Section>

      <Section title="4. Delivery">
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>We aim to deliver within 10 minutes. Estimated times are indicative and may vary due to traffic, weather, or demand.</li>
          <li>Delivery is currently available within designated zones in Lusaka. Coverage zones are shown in the app.</li>
          <li>You must be available to receive the order at the address provided. If no one is available, the rider may leave items in a safe location at your risk or return them to store.</li>
          <li>Risk in the goods passes to you upon delivery.</li>
        </ul>
      </Section>

      <Section title="5. Payments">
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>We accept Airtel Money, MTN Mobile Money (MoMo), and Cash on Delivery (COD).</li>
          <li>For mobile money payments, your network provider&apos;s standard transaction fees may apply.</li>
          <li>Payment is due at the time of ordering (pre-paid) or upon delivery for COD orders.</li>
          <li>We do not store mobile money PINs or sensitive financial credentials on our servers.</li>
        </ul>
      </Section>

      <Section title="6. Refunds & Returns">
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>If you receive a wrong, damaged or expired item, contact us within <strong>24 hours</strong> of delivery at <a href="mailto:support@bunzodelivery.com" className="text-brand-green underline">support@bunzodelivery.com</a> with your order ID and a photo.</li>
          <li>We will offer a replacement on the next available delivery or a full refund for the affected item(s).</li>
          <li>Refunds to Airtel Money or MTN MoMo are processed within <strong>3–5 business days</strong>. COD refunds are issued as credit to your Bunzo account or via bank transfer.</li>
          <li>Perishable items (fresh produce, dairy, meat) cannot be returned unless they are damaged or incorrect.</li>
          <li>We do not accept returns for change of mind on perishable goods.</li>
        </ul>
      </Section>

      <Section title="7. Prohibited Use">
        <p className="mb-3 text-sm text-neutral-700">You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>Use the Service for any unlawful purpose or in violation of Zambian law.</li>
          <li>Place fraudulent, false or abusive orders.</li>
          <li>Attempt to hack, scrape, reverse-engineer or interfere with the Service.</li>
          <li>Harass, threaten or abuse our delivery riders or staff.</li>
          <li>Resell items purchased through the Service commercially without our written consent.</li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        <p className="text-sm text-neutral-700">
          All content on the Service including the Bunzo name, logo, design, text and software is owned
          by or licensed to {COMPANY}. You may not copy, reproduce or distribute any content
          without our prior written permission.
        </p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p className="text-sm text-neutral-700 mb-3">
          To the maximum extent permitted by Zambian law, Bunzo shall not be liable for any indirect,
          incidental, special or consequential damages arising from your use of the Service.
        </p>
        <p className="text-sm text-neutral-700">
          Our total liability to you in respect of any claim arising from these Terms or the Service
          shall not exceed the value of the specific order giving rise to the claim.
        </p>
      </Section>

      <Section title="10. Disclaimers">
        <p className="text-sm text-neutral-700">
          The Service is provided &ldquo;as is&rdquo;. We do not warrant uninterrupted or error-free
          operation. Product images are representative; actual items may vary slightly in appearance.
          We make no warranty regarding third-party payment providers.
        </p>
      </Section>

      <Section title="11. Termination">
        <p className="text-sm text-neutral-700">
          We may suspend or terminate your account with immediate effect if you breach these Terms,
          engage in fraud, or if we are required to do so by law. You may close your account at any
          time by contacting <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a>.
        </p>
      </Section>

      <Section title="12. Governing Law & Disputes">
        <p className="text-sm text-neutral-700">
          These Terms are governed by the laws of the Republic of Zambia. Any dispute shall first be
          attempted to be resolved by contacting our support team. If unresolved, disputes shall be
          subject to the exclusive jurisdiction of the courts of Lusaka, Zambia.
        </p>
      </Section>

      <Section title="13. Changes to These Terms">
        <p className="text-sm text-neutral-700">
          We may update these Terms at any time. We will notify you of material changes via the app
          or email. Continued use of the Service after the effective date constitutes acceptance.
        </p>
      </Section>

      <Section title="14. Contact">
        <address className="not-italic text-sm text-neutral-700 leading-relaxed">
          <strong>{COMPANY}</strong><br />
          Lusaka, Zambia<br />
          Email: <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a><br />
          Support: <a href="mailto:support@bunzodelivery.com" className="text-brand-green underline">support@bunzodelivery.com</a>
        </address>
      </Section>

      <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
        See also:{' '}
        <Link href="/privacy-policy" className="text-brand-green underline">Privacy Policy</Link>
        {' · '}
        <Link href="/support" className="text-brand-green underline">Support</Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-neutral-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}
