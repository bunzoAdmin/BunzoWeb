import Link from 'next/link';
import { AppDownloadButtons } from '@/components/AppDownloadButtons';

export function Footer() {
  return (
    <footer className="bg-neutral-100 mt-16 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <div>
          <p className="font-semibold text-neutral-800">Bunzo Technologies Limited</p>
          <p className="text-xs mt-1">Lusaka, Zambia</p>
        </div>
        <nav className="flex flex-col items-center gap-4">
          <AppDownloadButtons variant="light" />
          <div className="flex items-center gap-5">
            <Link href="/support" className="hover:text-brand-green">Support</Link>
            <Link href="/privacy-policy" className="hover:text-brand-green">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-green">Terms</Link>
          </div>
        </nav>
        <div className="text-xs text-neutral-500 text-center md:text-right">
          <a href="mailto:support@bunzodelivery.com" className="hover:text-brand-green">
            support@bunzodelivery.com
          </a>
          <p className="mt-1">© 2026 Bunzo Technologies Limited</p>
        </div>
      </div>
    </footer>
  );
}
