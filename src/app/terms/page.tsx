import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Bunzo Terms & Conditions — the rules that govern your use of the Bunzo delivery service.'
};

const EFFECTIVE_DATE = '21 May 2025';
const COMPANY = 'Bunzo Limited';
const SUPPORT_EMAIL = 'support@bunzodelivery.com';
const LEGAL_EMAIL = 'privacy@bunzodelivery.com';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm text-neutral-500 mb-8">Effective date: {EFFECTIVE_DATE} | Zambia</p>

      <p className="text-neutral-700 mb-8 leading-relaxed">
        Please read these Terms and Conditions carefully before using the Bunzo application or website.
        By creating an account or placing an order, you agree to be bound by these Terms. If you do not
        agree, please do not use our services.
      </p>

      <Section title="1. About Bunzo">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo is a quick commerce platform operated by {COMPANY}, a company registered in Zambia
          (Company Registration No: [PACRA Number], Registered Address: [Address], Lusaka, Zambia).
          Through our app and website, we sell and deliver groceries, household goods, electronics,
          personal care products, and other items directly to customers across Zambia.
        </p>
        <p className="text-sm text-neutral-700">
          Bunzo sources, stocks, and fulfils all orders in-house. When you place an order on our
          platform, you are purchasing goods directly from {COMPANY}. Our delivery riders are engaged
          by Bunzo to carry out deliveries on our behalf.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p className="text-sm text-neutral-700 mb-3">To use Bunzo you must:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li>Be at least 18 years of age</li>
          <li>Be capable of entering into a legally binding contract under Zambian law</li>
          <li>Provide accurate and complete registration information</li>
          <li>Have a valid phone number and, where required, a valid payment method</li>
        </ul>
        <p className="text-sm text-neutral-700">
          By using the app you represent and warrant that you meet all of the above conditions. Bunzo
          reserves the right to refuse service, close accounts, or cancel orders at its discretion.
        </p>
      </Section>

      <Section title="3. Account registration">
        <p className="text-sm text-neutral-700 mb-3">
          You must register an account to place orders. You are responsible for maintaining the
          confidentiality of your login credentials and for all activity that occurs under your
          account. You must notify us immediately at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>{' '}
          if you suspect any unauthorised use of your account.
        </p>
        <p className="text-sm text-neutral-700">
          You may not create more than one account, transfer your account to another person, or use
          another person&apos;s account without their permission. Bunzo reserves the right to suspend
          or terminate accounts that violate these Terms.
        </p>
      </Section>

      <Section title="4. Placing orders">
        <p className="text-sm text-neutral-700 mb-3">
          When you place an order through Bunzo, you are making an offer to purchase goods directly
          from {COMPANY} at the price stated at checkout. Your order is confirmed once you receive
          an in-app or SMS confirmation from us. A binding contract of sale is formed at the point
          of confirmation.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          We reserve the right to cancel or decline any order, for example if an item is out of
          stock, your delivery address is outside our service area, or we suspect fraud. Where we
          cancel your order, you will receive a full refund.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          You are responsible for providing an accurate delivery address. Bunzo is not liable for
          failed or delayed deliveries caused by incorrect address information provided by you.
        </p>
        <p className="text-sm text-neutral-700">
          Estimated delivery times are indicative only and may vary depending on distance, traffic,
          weather, and order preparation time. We do not guarantee delivery within any specific
          timeframe.
        </p>
      </Section>

      <Section title="5. Pricing and payments">
        <p className="text-sm text-neutral-700 mb-3">
          All prices displayed on the Bunzo platform are in Zambian Kwacha (ZMW) and are inclusive
          of applicable taxes unless otherwise stated. Prices are set by Bunzo and may be updated
          without prior notice.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          A delivery fee and, where applicable, a service fee will be displayed at checkout before
          you confirm your order. These fees are non-refundable except where required by law or
          where Bunzo cancels the order.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          We accept payment via mobile money (Airtel Money, MTN Mobile Money, Zamtel Kwacha), debit
          and credit cards, and e-wallets. Payment is charged at the time of order confirmation. All
          payment processing is handled by licensed third-party payment providers.
        </p>
        <p className="text-sm text-neutral-700">
          Bunzo does not store your full card or mobile money credentials. By providing payment
          details you authorise us to charge the applicable amount for your order.
        </p>
      </Section>

      <Section title="6. Product information">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo is responsible for the accuracy of all product descriptions, images, weights, and
          pricing displayed on our platform. We make every effort to ensure this information is
          correct and up to date. However, minor variations in product appearance or packaging may
          occur.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          For food and consumable products, relevant information such as ingredients, allergens, and
          expiry dates will be displayed where available. If you have specific dietary requirements
          or allergen concerns, please contact us before placing your order. Bunzo is not liable for
          adverse reactions arising from failure to check this information.
        </p>
        <p className="text-sm text-neutral-700">
          All products sold through Bunzo comply with applicable Zambian consumer protection and
          product safety laws. If you believe a product is unsafe or mislabelled, please contact us
          immediately at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>.
        </p>
      </Section>

      <Section title="7. Delivery">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo carries out all deliveries using our own delivery operations. Delivery is available
          only within designated service areas, which may change from time to time. Your delivery
          address must fall within the active service area at the time of ordering.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          Once your order is dispatched, you will receive a real-time tracking link or in-app
          update. Please ensure someone is available to receive the delivery at the address
          provided. If a delivery attempt is unsuccessful due to your unavailability, a redelivery
          fee may apply or the order may be cancelled without a refund.
        </p>
        <p className="text-sm text-neutral-700">
          Risk of loss or damage to goods passes to you upon successful delivery. If your order is
          marked as delivered but you did not receive it, contact us within 2 hours at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>{' '}
          and we will investigate promptly.
        </p>
      </Section>

      <Section title="8. Cancellations and refunds">
        <p className="text-sm text-neutral-700 mb-3">
          <strong>Cancellation by you.</strong> You may cancel an order without charge before we
          begin picking and packing it. Once order preparation has commenced, cancellation may not
          be possible. To request a cancellation, contact us immediately through the app or at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          <strong>Cancellation by Bunzo.</strong> We may cancel your order if items are unavailable,
          the delivery address is outside our service area, or due to circumstances beyond our
          control. In such cases you will receive a full refund with no deductions.
        </p>
        <p className="text-sm text-neutral-700 mb-3">
          <strong>Refunds for incorrect or damaged orders.</strong> If you receive an incorrect,
          incomplete, or damaged order, report the issue through the Bunzo app or by email within
          24 hours of delivery. We will review your claim and, where valid, issue a full or partial
          refund or a credit to your account. Refunds are processed within 5–7 business days to
          your original payment method.
        </p>
        <p className="text-sm text-neutral-700">
          <strong>Change of mind.</strong> We do not offer refunds for change of mind after an order
          has been confirmed and preparation has begun, except for perishable or consumable goods
          that are defective or not as described.
        </p>
      </Section>

      <Section title="9. Substitutions">
        <p className="text-sm text-neutral-700">
          In the event that a specific item you ordered is out of stock, Bunzo may substitute it
          with a comparable product of equal or greater value at no additional charge. You will be
          notified of any substitution before or at the time of delivery. If you do not wish to
          accept the substituted item, you may return it to the rider at the point of delivery for
          a full refund of that item.
        </p>
      </Section>

      <Section title="10. Prohibited use">
        <p className="text-sm text-neutral-700 mb-3">You may not use the Bunzo platform to:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li>Place fraudulent, fake, or abusive orders</li>
          <li>Impersonate another person or provide false information</li>
          <li>Abuse promotions, referral codes, or discounts in a manner not intended by Bunzo</li>
          <li>Harass, threaten, or abuse Bunzo staff or delivery personnel</li>
          <li>Attempt to reverse-engineer, scrape, or interfere with the platform</li>
          <li>Use the platform for any unlawful purpose under Zambian law</li>
        </ul>
        <p className="text-sm text-neutral-700">
          Violation of these prohibitions may result in immediate account suspension, cancellation
          of pending orders, and, where appropriate, referral to law enforcement.
        </p>
      </Section>

      <Section title="11. Promotions, vouchers, and referrals">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo may offer promotional discounts, voucher codes, and referral rewards from time to
          time. These are subject to their own specific terms, including expiry dates, minimum
          order values, and single-use restrictions. Promotions cannot be combined unless
          explicitly stated.
        </p>
        <p className="text-sm text-neutral-700">
          Bunzo reserves the right to withdraw, modify, or expire any promotion at any time.
          Vouchers have no cash value and are non-transferable. Any suspected abuse of promotional
          offers will result in the forfeiture of the benefit and may lead to account suspension.
        </p>
      </Section>

      <Section title="12. Intellectual property">
        <p className="text-sm text-neutral-700 mb-3">
          All content on the Bunzo platform — including the app design, logo, text, images, and
          software — is owned by or licensed to {COMPANY} and is protected under Zambian
          intellectual property law. You may not copy, reproduce, modify, or distribute any part of
          our platform without our prior written consent.
        </p>
        <p className="text-sm text-neutral-700">
          By submitting reviews, feedback, or other content through the platform, you grant Bunzo a
          non-exclusive, royalty-free licence to use, display, and reproduce that content in
          connection with our services.
        </p>
      </Section>

      <Section title="13. Limitation of liability">
        <p className="text-sm text-neutral-700 mb-3">
          To the maximum extent permitted by Zambian law, Bunzo&apos;s total liability to you for
          any claim arising out of or relating to these Terms or our services shall not exceed the
          value of the order giving rise to the claim.
        </p>
        <p className="text-sm text-neutral-700 mb-3">Bunzo is not liable for:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 mb-3">
          <li>Loss of profits, revenue, or indirect or consequential damages</li>
          <li>Delays caused by circumstances beyond our reasonable control, including power outages, network failures, road closures, or acts of nature</li>
          <li>Goods that do not meet your expectations where they match the product description provided</li>
          <li>Damage arising from your failure to store or handle delivered goods appropriately after delivery</li>
        </ul>
        <p className="text-sm text-neutral-700">
          Nothing in these Terms limits our liability for death or personal injury caused by our
          negligence, or for fraud or fraudulent misrepresentation, or for any liability that
          cannot be excluded under Zambian consumer protection law.
        </p>
      </Section>

      <Section title="14. Indemnity">
        <p className="text-sm text-neutral-700">
          You agree to indemnify and hold harmless {COMPANY}, its directors, employees, and agents
          from and against any claims, damages, losses, or expenses (including legal fees) arising
          from your use of the platform, your violation of these Terms, or your infringement of any
          third-party rights.
        </p>
      </Section>

      <Section title="15. Suspension and termination">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo may suspend or terminate your account at any time, with or without notice, if we
          believe you have violated these Terms, engaged in fraudulent activity, or if it is
          otherwise necessary to protect our operations or other users.
        </p>
        <p className="text-sm text-neutral-700">
          You may close your account at any time by contacting us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a>.
          Closure of your account does not affect any outstanding orders or payment obligations.
        </p>
      </Section>

      <Section title="16. Changes to these Terms">
        <p className="text-sm text-neutral-700 mb-3">
          Bunzo reserves the right to update or modify these Terms at any time. We will notify you
          of material changes via push notification, SMS, or email at least 14 days before they
          take effect. Your continued use of the platform after changes take effect constitutes
          your acceptance of the updated Terms.
        </p>
        <p className="text-sm text-neutral-700">
          The current version of these Terms will always be available in the app and on our website.
        </p>
      </Section>

      <Section title="17. Governing law and disputes">
        <p className="text-sm text-neutral-700">
          These Terms are governed by and construed in accordance with the laws of the Republic of
          Zambia, including the Consumer Protection Act and any other applicable legislation. Any
          dispute arising out of or in connection with these Terms shall first be referred to our
          customer support team for resolution. If unresolved within 30 days, disputes shall be
          subject to the exclusive jurisdiction of the competent courts of Lusaka, Zambia.
        </p>
      </Section>

      <Section title="18. Contact us">
        <address className="not-italic text-sm text-neutral-700 leading-relaxed">
          Customer support: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">{SUPPORT_EMAIL}</a><br />
          Legal enquiries: <a href={`mailto:${LEGAL_EMAIL}`} className="text-brand-green underline">{LEGAL_EMAIL}</a><br />
          Address: {COMPANY}, [Registered Address], Lusaka, Zambia
        </address>
      </Section>

      <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
        <p className="italic mb-3">{COMPANY} | Lusaka, Zambia | {EFFECTIVE_DATE}</p>
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
