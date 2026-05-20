import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Bunzo</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link href="/about" className="hover:text-brand-green">About</Link></li>
            <li><Link href="/about#careers" className="hover:text-brand-green">Careers</Link></li>
            <li><Link href="/about#press" className="hover:text-brand-green">Press</Link></li>
            <li><Link href="/about#blog" className="hover:text-brand-green">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">For Customers</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><Link href="/orders" className="hover:text-brand-green">My Orders</Link></li>
            <li><Link href="/support" className="hover:text-brand-green">Help &amp; Support</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-green">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-green">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">For Partners</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>Become a Seller</li>
            <li>Deliver with Bunzo</li>
            <li>Franchise</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><a href="mailto:support@bunzo.zm" className="hover:text-brand-green">support@bunzo.zm</a></li>
            <li><a href="tel:+260977000000" className="hover:text-brand-green">+260 977 000 000</a></li>
            <li>Lusaka · Mon–Sun, 24/7</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 border-t border-neutral-200 py-5">
        © 2026 Bunzo Technologies Limited — All rights reserved.
        {' · '}
        <Link href="/privacy-policy" className="hover:text-neutral-700 underline">Privacy</Link>
        {' · '}
        <Link href="/terms" className="hover:text-neutral-700 underline">Terms</Link>
        {' · '}
        <Link href="/support" className="hover:text-neutral-700 underline">Support</Link>
      </div>
    </footer>
  );
}
