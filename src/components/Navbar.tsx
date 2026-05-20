import Link from 'next/link';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600">
          <Link href="/support" className="hover:text-brand-green">Support</Link>
          <Link href="/privacy-policy" className="hover:text-brand-green">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-green">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
