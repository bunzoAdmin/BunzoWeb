import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Account Deletion',
  description: 'How to delete your Bunzo account — in-app deletion steps and deletion by email request.'
};

const SUPPORT_EMAIL = 'support@bunzodelivery.com';
const COMPANY = 'Bunzo Limited';

export default function AccountDeletionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-extrabold mb-2">Delete Your Account</h1>
      <p className="text-neutral-700 mb-4 leading-relaxed">
        You can request deletion of your Bunzo account at any time. Choose either of the methods
        below.
      </p>
      <p className="text-sm text-neutral-800 font-medium bg-orange-50 border border-orange-100 rounded-md p-3 mb-8">
        You can only delete your account when you do not have any active orders.
      </p>

      <Section title="Method 1: In-App Deletion">
        <p className="text-sm text-neutral-700 mb-3">To delete your Bunzo account:</p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-neutral-700 mb-4">
          <li>Open the Bunzo app</li>
          <li>
            Go to <strong>Profile → Account &amp; Privacy → Delete Account</strong>
          </li>
          <li>Confirm deletion</li>
        </ol>
        <p className="text-sm text-neutral-700">
          Upon deletion, personal account data will be removed within 30 days. Order and
          transaction records may be retained where required by law.
        </p>
      </Section>

      <Section title="Method 2: Delete by Email">
        <p className="text-sm text-neutral-700 mb-3">
          You can also mail us to delete your account. Send an email with the subject line:
        </p>
        <p className="text-sm text-neutral-800 font-mono bg-neutral-100 rounded-md p-3 mb-3">
          Request for Account Deletion: &lt;Phone Number&gt;
        </p>
        <p className="text-sm text-neutral-700">
          Mail us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand-green underline">
            {SUPPORT_EMAIL}
          </a>
          . Please use the phone number linked to your Bunzo account so we can identify and process
          your request.
        </p>
      </Section>

      <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-400">
        <p className="italic mb-3">{COMPANY} | Lusaka, Zambia</p>
        See also:{' '}
        <Link href="/privacy-policy" className="text-brand-green underline">Privacy Notice</Link>
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
