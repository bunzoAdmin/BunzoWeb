import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-3">🤷</div>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-neutral-500 mt-2 mb-5">
        The page you&apos;re looking for doesn&apos;t exist on Bunzo.
      </p>
      <Link href="/" className="bg-brand-green text-white px-5 py-3 rounded-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
