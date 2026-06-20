import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/storeLinks';

type Variant = 'dark' | 'light';

const styles: Record<Variant, string> = {
  dark: 'border border-neutral-600 text-white text-xs px-4 py-2 rounded-lg hover:border-brand-yellow hover:text-brand-yellow transition-colors',
  light: 'border border-neutral-900 bg-neutral-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-black transition-colors'
};

export function AppDownloadButtons({
  variant = 'dark',
  className = ''
}: {
  variant?: Variant;
  className?: string;
}) {
  const buttonClass = styles[variant];

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          Google Play
        </a>
      </div>
    </div>
  );
}
