import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Bunzo Privacy Notice — how we collect, use and protect your personal data, in accordance with the Data Protection Act No. 3 of 2021 of Zambia.'
};

const PUBLICATION_DATE = '21 May 2025';
const COMPANY = 'Bunzo Limited';
const SUPPORT_EMAIL = 'support@bunzodelivery.com';
const PRIVACY_EMAIL = 'privacy@bunzodelivery.com';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Privacy Notice</h1>
      <p className="text-sm text-neutral-500 mb-8">Date of publication: {PUBLICATION_DATE} | Zambia</p>

      <p className="text-neutral-700 mb-8 leading-relaxed">
        Bunzo provides a mobile and web-based quick commerce application offering delivery of
        groceries, household goods, electronics, personal care products, and other items across
        Zambia.
      </p>

      <Section title="1. What is this privacy notice for?">
        <p className="text-sm text-neutral-700 mb-3">
          You entrust us with your personal data, and we take this responsibility seriously. We are
          committed to protecting your privacy and being transparent about how we handle your
          information.
        </p>
        <p className="text-sm text-neutral-700">
          This Privacy Notice explains what personal data we collect, how and why we use and share
          it, and the rights you have as a data subject. It is prepared in accordance with the{' '}
          <strong>Data Protection Act No. 3 of 2021</strong> of Zambia.
        </p>
      </Section>

      <Section title="2. Who processes your personal data?">
        <p className="text-sm text-neutral-700 mb-3">
          Your personal data is processed by <strong>{COMPANY}</strong>, the company that provides
          the Bunzo service in Zambia. {COMPANY} acts as the data controller and determines the
          purposes and means of processing your personal data.
        </p>
        <address className="not-italic text-sm text-neutral-700 leading-relaxed">
          <strong>{COMPANY}</strong><br />
          [Registered Address], Lusaka, Zambia<br />
          Company Registration No: [PACRA Number]<br />
          Email:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>
          {' | '}
          <a href={`mailto:${PRIVACY_EMAIL}`} className="text-brand-green underline">{PRIVACY_EMAIL}</a>
        </address>
      </Section>

      <Section title="3. What personal data is processed, how, and why?">
        <p className="text-sm text-neutral-700 mb-3">
          The table below sets out every category of personal data we collect, the specific data
          points within each category, the purposes for which we use it, and the legal basis under
          the Data Protection Act No. 3 of 2021.
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          Providing your name, phone number, and delivery address is mandatory to use Bunzo. All
          other data marked as consent-based is optional and will not affect your ability to use
          the app if you decline. You may withdraw consent at any time via the app settings or by
          contacting us.
        </p>

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full text-xs md:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-brand-green text-white">
                <th className="text-left font-semibold p-3 border border-neutral-300">Category</th>
                <th className="text-left font-semibold p-3 border border-neutral-300">Personal data collected</th>
                <th className="text-left font-semibold p-3 border border-neutral-300">Purpose</th>
                <th className="text-left font-semibold p-3 border border-neutral-300">Legal basis</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 align-top">
              <DataRow
                category="Account & identity"
                data={['Full name', 'Phone number', 'Email address', 'Profile picture (optional)']}
                purpose={['Register your account', 'Identify and authorise you as a user', 'Communicate with you about orders']}
                basis={['Contract', 'Consent (profile picture)']}
              />
              <DataRow
                category="Delivery information"
                data={['Delivery address', 'Building / apartment details', 'Saved addresses']}
                purpose={['Show available products and merchants in your area', 'Place, process, and fulfil your orders', 'Help you quickly re-select past addresses']}
                basis={['Contract']}
              />
              <DataRow
                category="Payment data"
                data={['Mobile money details (Airtel Money, MTN Mobile Money, Zamtel Kwacha)', 'Debit / credit card details', 'E-wallet details', 'Selected payment method']}
                purpose={['Process payments and issue refunds']}
                basis={['Contract']}
              />
              <DataRow
                category="Location data"
                data={['Real-time GPS (foreground)', 'Background location (with explicit permission)']}
                purpose={['Check availability of nearby merchants', 'Assign a delivery rider to your order', 'Track deliveries in real time', 'Show hyperlocal promotions and offers']}
                basis={['Contract', 'Consent (background location & third-party location sharing)']}
              />
              <DataRow
                category="Device & technical data"
                data={['IP address', 'Device ID', 'Device type and model', 'Mobile operating system', 'Browser / app version', 'Advertising identifier']}
                purpose={['Secure your account and our systems', 'Prevent fraud and unauthorised access', 'Customise targeted advertising']}
                basis={['Legitimate interest (security & fraud prevention)', 'Consent (advertising identifier)']}
              />
              <DataRow
                category="Usage & behavioural data"
                data={['Order frequency', 'Most ordered items and categories', 'Screens viewed in the app', 'Average order value', 'Search history', 'App session data']}
                purpose={['Improve the app and user experience', 'Provide relevant product recommendations', 'Conduct marketing research and analytics']}
                basis={['Legitimate interest (service improvement)', 'Consent (marketing & personalisation)']}
              />
              <DataRow
                category="Order & transaction history"
                data={['Date and time of order', 'Merchant and items ordered', 'Price and payment details', 'Delivery address used', 'Contact details per order']}
                purpose={['Provide your order history', 'Enable one-tap repeat ordering', 'Process payments', 'Detect and prevent fraud']}
                basis={['Contract', 'Legitimate interest (fraud prevention)']}
              />
              <DataRow
                category="Customer support data"
                data={['Messages and chat logs', 'Feedback and ratings', 'Review content', 'Attachments and uploaded files', 'Other info provided to support team']}
                purpose={['Provide customer support', 'Resolve disputes and claims', 'Protect our legal rights', 'Monitor and improve service quality']}
                basis={['Contract', 'Legitimate interest (quality control & rights protection)']}
              />
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="4. How is your personal data protected?">
        <p className="text-sm text-neutral-700 mb-3">
          We have implemented appropriate technical and organisational measures to protect your
          personal data against unauthorised, accidental, or unlawful destruction, loss,
          modification, misuse, disclosure, or access. These include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li>Access controls limiting data to employees who need it to carry out their duties</li>
          <li>Multi-factor authentication options for user accounts</li>
          <li>Regular security assessments and penetration testing</li>
          <li>Incident response procedures compliant with Zambian data breach notification requirements</li>
        </ul>
        <p className="text-sm text-neutral-700">
          Personal data is processed automatically without access by our staff in most cases. Where
          staff access is necessary, employees are bound by internal data handling rules and
          confidentiality obligations.
        </p>
      </Section>

      <Section title="5. Who do we share your personal data with?">
        <p className="text-sm text-neutral-700 mb-3">
          We do not sell your personal data. We share it only with parties necessary for the
          provision of our services:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
          <li><strong>Merchants &amp; delivery riders</strong> — Your name, phone, delivery address, and order details are shared to fulfil and deliver your order. Riders see your location during active delivery only.</li>
          <li><strong>Payment processors</strong> — Mobile money operators and card payment providers receive only the minimum data needed to authorise transactions.</li>
          <li><strong>Cloud &amp; infrastructure providers</strong> — Hosting, push notifications, mapping, and related technical services, bound by data processing agreements.</li>
          <li><strong>Customer support partners</strong> — Third-party support tools used to handle your queries, under strict confidentiality obligations.</li>
          <li><strong>Analytics &amp; advertising partners</strong> — Aggregated or pseudonymised data only. We do not share identifiable data for third-party marketing.</li>
          <li><strong>Law enforcement &amp; regulators</strong> — Where required by Zambian law, court order, or to protect the safety of users or the public.</li>
          <li><strong>Business successors</strong> — In a merger, acquisition, or asset sale. You will be notified before any such transfer.</li>
        </ul>
      </Section>

      <Section title="6. Where is your personal data transferred to?">
        <p className="text-sm text-neutral-700">
          Some of the parties we work with may be located outside Zambia. Where personal data is
          transferred internationally, we take the necessary steps to ensure your data remains
          protected, including through contractual safeguards and assessment of the laws of the
          destination country. You may contact us to request information about the countries to
          which your data may be transferred and the safeguards in place.
        </p>
      </Section>

      <Section title="7. How long will your personal data be retained?">
        <p className="text-sm text-neutral-700 mb-3">
          We retain your personal data only for as long as necessary for the purposes described in
          this notice, or as required by Zambian law:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li><strong>Account data</strong> — Duration of account + 3 years after closure</li>
          <li><strong>Order and transaction records</strong> — 7 years (tax and regulatory compliance)</li>
          <li><strong>Location history</strong> — 12 months from each completed delivery</li>
          <li><strong>Customer support records</strong> — 3 years from last interaction</li>
          <li><strong>Fraud and security logs</strong> — Up to 5 years</li>
        </ul>
        <p className="text-sm text-neutral-700">
          After retention periods expire, data is securely deleted or anonymised. We may retain
          data beyond these periods where required by law or to protect our rights in legal
          proceedings.
        </p>
      </Section>

      <Section title="8. What are your rights?">
        <p className="text-sm text-neutral-700 mb-4">
          Under the Data Protection Act No. 3 of 2021, you have the following rights:
        </p>

        <SubSection title="8.1 Right of access">
          You have the right to request a copy of the personal data we hold about you.
        </SubSection>

        <SubSection title="8.2 Right to rectification">
          You have the right to ask us to correct information that is inaccurate, outdated, or
          incomplete.
        </SubSection>

        <SubSection title="8.3 Right to withdraw consent">
          Where processing is based on your consent, you may withdraw it at any time without
          affecting the lawfulness of prior processing.
        </SubSection>

        <SubSection title="8.4 Right to erasure">
          You have the right to ask us to delete your personal data where it is no longer needed,
          consent is withdrawn, or processing is unlawful.
        </SubSection>

        <SubSection title="8.5 Right to restriction of processing">
          You have the right to ask us to restrict processing in certain circumstances, for
          example while a rectification request is being resolved.
        </SubSection>

        <SubSection title="8.6 Right to data portability">
          Where processing is based on consent or contract and carried out by automated means, you
          have the right to receive your data in a structured, machine-readable format.
        </SubSection>

        <SubSection title="8.7 Right to object">
          You have the right to object to processing based on legitimate interests, and the right
          not to be subject to decisions made solely by automated processing, including profiling.
        </SubSection>

        <SubSection title="8.8 Right to lodge a complaint">
          <p className="text-sm text-neutral-700 mb-3">
            If you believe your rights have been violated, you may lodge a complaint with the{' '}
            <strong>Zambia Information and Communications Technology Authority (ZICTA)</strong>:
          </p>
          <p className="text-sm text-neutral-700">
            ZICTA —{' '}
            <a href="https://www.zicta.zm" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">
              www.zicta.zm
            </a>
            <br />
            Stand No. 2986, Corner Addis Ababa / Great East Road, Lusaka, Zambia
          </p>
        </SubSection>
      </Section>

      <Section title="9. How to contact us">
        <p className="text-sm text-neutral-700 mb-3">
          If you need assistance, you can contact our support team through the Bunzo app after
          logging in, or by email:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li><strong>Customer support:</strong>{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>
          </li>
          <li><strong>Data Protection Officer:</strong>{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-brand-green underline">{PRIVACY_EMAIL}</a>
          </li>
        </ul>
        <p className="text-sm text-neutral-700">
          Please include the phone number linked to your Bunzo account so we can identify and
          assist you efficiently.
        </p>
      </Section>

      <Section title="10. How is this document modified?">
        <p className="text-sm text-neutral-700">
          In the event of material changes to this Privacy Notice, we will notify you through any
          available means — push notification, SMS, or email — at least 14 days before changes
          take effect. The updated notice will always carry the publication date at the top of
          this document.
        </p>
      </Section>

      <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
        <p className="italic mb-3">{COMPANY} | Lusaka, Zambia | {PUBLICATION_DATE}</p>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-neutral-900 mb-1">{title}</h3>
      {typeof children === 'string' ? (
        <p className="text-sm text-neutral-700">{children}</p>
      ) : (
        children
      )}
    </div>
  );
}

function DataRow({
  category,
  data,
  purpose,
  basis,
}: {
  category: string;
  data: string[];
  purpose: string[];
  basis: string[];
}) {
  return (
    <tr className="even:bg-neutral-50">
      <td className="p-3 border border-neutral-300 font-semibold bg-orange-50 whitespace-nowrap">
        {category}
      </td>
      <td className="p-3 border border-neutral-300">
        <ul className="list-disc pl-4 space-y-1">
          {data.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </td>
      <td className="p-3 border border-neutral-300">
        <ul className="list-disc pl-4 space-y-1">
          {purpose.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </td>
      <td className="p-3 border border-neutral-300">
        <ul className="list-disc pl-4 space-y-1">
          {basis.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </td>
    </tr>
  );
}
