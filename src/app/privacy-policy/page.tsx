import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Bunzo Privacy Policy — how we collect, use and protect your personal data.'
};

const EFFECTIVE_DATE = '1 May 2026';
const COMPANY = 'Bunzo Technologies Limited';
const EMAIL = 'support@bunzodelivery.com';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-sm text-neutral-500 mb-8">Effective date: {EFFECTIVE_DATE}</p>

      <p className="text-neutral-700 mb-8 leading-relaxed">
        This Privacy Policy explains how <strong>{COMPANY}</strong> (&ldquo;Bunzo&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;
        or &ldquo;us&rdquo;) collects, uses, shares and protects personal information when you use the
        Bunzo mobile application and website (together, the &ldquo;Service&rdquo;). By using the Service
        you agree to the practices described below.
      </p>

      <Section title="1. Information We Collect">
        <p className="mb-3">We collect the following categories of personal data:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li><strong>Identity &amp; Contact:</strong> Name, phone number, and email address provided during registration.</li>
          <li><strong>Location:</strong> Delivery address and, if permission is granted, real-time GPS location to show nearby stores and enable accurate delivery.</li>
          <li><strong>Order Data:</strong> Items purchased, order history, delivery instructions, and payment method type (we do not store full mobile money PINs or card numbers).</li>
          <li><strong>Device &amp; Usage:</strong> Device type, operating system, app version, IP address, browser type, pages viewed and actions taken within the app to improve performance and detect fraud.</li>
          <li><strong>Communications:</strong> Messages, complaints or feedback you send to our support team.</li>
        </ul>
      </Section>

      <Section title="2. Why We Collect Your Data">
        <p className="mb-3">We use your personal data to:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li>Create and manage your account and authenticate your identity.</li>
          <li>Process, fulfil and deliver your orders.</li>
          <li>Process payments via Airtel Money and MTN Mobile Money.</li>
          <li>Send order confirmations, delivery updates and support responses via SMS, email or push notification.</li>
          <li>Improve and personalise the Service (for example, showing categories relevant to your location).</li>
          <li>Detect, investigate and prevent fraud, abuse or illegal activity.</li>
          <li>Comply with legal obligations under Zambian law.</li>
        </ul>
      </Section>

      <Section title="3. Legal Basis for Processing">
        <p className="text-sm text-neutral-700">
          We process your data on the basis of: (a) contractual necessity — to provide the Service you
          requested; (b) your consent, where we ask for it (e.g. location permissions); (c) legitimate
          interests — fraud prevention, app improvement; and (d) legal obligation.
        </p>
      </Section>

      <Section title="4. How We Share Your Data">
        <p className="mb-3 text-sm text-neutral-700">
          We do <strong>not</strong> sell your personal data. We may share it only with:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li><strong>Delivery partners</strong> — your name, phone and delivery address are shared with the rider assigned to your order.</li>
          <li><strong>Payment processors</strong> — Airtel Money and MTN Mobile Money receive only the information needed to process the transaction.</li>
          <li><strong>Cloud infrastructure providers</strong> — servers that host the Service, bound by data processing agreements.</li>
          <li><strong>Analytics providers</strong> — aggregated and anonymised usage data to improve the app.</li>
          <li><strong>Law enforcement or regulators</strong> — when required by Zambian law or a valid court order.</li>
        </ul>
      </Section>

      <Section title="5. Data Retention">
        <p className="text-sm text-neutral-700">
          We retain personal data for as long as your account is active and for up to 5 years thereafter
          to comply with tax and legal requirements. Order records may be kept for 7 years as required by
          Zambian financial regulations. You may request deletion at any time (see Section 7).
        </p>
      </Section>

      <Section title="6. Data Security">
        <p className="text-sm text-neutral-700">
          We use industry-standard measures including TLS encryption in transit, access controls, and
          regular security reviews. No system is completely secure; if you believe your account has been
          compromised please contact us immediately at{' '}
          <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a>.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p className="mb-3 text-sm text-neutral-700">You have the right to:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li><strong>Access</strong> a copy of the personal data we hold about you.</li>
          <li><strong>Correct</strong> inaccurate or incomplete data.</li>
          <li><strong>Delete</strong> your account and personal data (&ldquo;right to be forgotten&rdquo;).</li>
          <li><strong>Withdraw consent</strong> for location tracking or marketing communications at any time.</li>
          <li><strong>Object</strong> to processing based on legitimate interests.</li>
          <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
        </ul>
        <p className="mt-3 text-sm text-neutral-700">
          To exercise any of these rights, email{' '}
          <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a>. We will respond
          within 30 days.
        </p>
      </Section>

      <Section title="8. Children's Privacy">
        <p className="text-sm text-neutral-700">
          The Service is not directed at children under 13. We do not knowingly collect personal data
          from anyone under 13. If you believe a child has provided us personal data, contact us
          and we will delete it promptly.
        </p>
      </Section>

      <Section title="9. Third-Party Links">
        <p className="text-sm text-neutral-700">
          The app or website may link to third-party sites. We are not responsible for their privacy
          practices and encourage you to read their policies separately.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p className="text-sm text-neutral-700">
          We may update this Privacy Policy from time to time. When we do, we will update the effective
          date above and notify users via the app or email for material changes. Continued use of the
          Service after changes are posted constitutes your acceptance of the updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p className="text-sm text-neutral-700">
          For privacy questions or requests, contact our Data Protection team:
        </p>
        <address className="not-italic mt-3 text-sm text-neutral-700 leading-relaxed">
          <strong>{COMPANY}</strong><br />
          Lusaka, Zambia<br />
          Email: <a href={`mailto:${EMAIL}`} className="text-brand-green underline">{EMAIL}</a>
        </address>
      </Section>

      <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
        See also:{' '}
        <Link href="/terms" className="text-brand-green underline">Terms &amp; Conditions</Link>
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
