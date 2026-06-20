import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Bunzo — Groceries delivered in 15 minutes in Lusaka',
    template: '%s | Bunzo'
  },
  description:
    'Bunzo delivers fresh groceries, daily essentials and household items to your doorstep across Lusaka in just 15 minutes. Pay with Airtel Money, MTN Mobile Money or Cash on Delivery.',
  keywords: [
    'Bunzo',
    'grocery delivery Zambia',
    'Lusaka grocery delivery',
    '15 minute delivery',
    'Airtel Money grocery',
    'MTN MoMo grocery',
    'online groceries Zambia'
  ],
  openGraph: {
    title: 'Bunzo — Groceries delivered in 15 minutes',
    description: 'Fresh groceries delivered across Lusaka in 15 minutes.',
    type: 'website',
    locale: 'en_ZM',
    siteName: 'Bunzo'
  },
  robots: { index: true, follow: true },
  other: {
    'facebook-domain-verification': '4rf9a1v5ka53629hax6ndb8xkiiuef'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
