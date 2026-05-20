import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span className="text-3xl font-extrabold text-brand-yellow">bunzo</span>
      <span className="text-[10px] font-semibold text-neutral-500 tracking-wide">
        in minutes
      </span>
    </Link>
  );
}
