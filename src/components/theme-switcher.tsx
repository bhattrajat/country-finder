import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-8 w-24 dark:bg-slate-600" />;
  }

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-sm"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      suppressHydrationWarning
    >
      {resolvedTheme === 'dark' && (
        <>
          <MoonIcon className="h-5" />
          <span>Dark Mode</span>
        </>
      )}
      {resolvedTheme === 'light' && (
        <>
          <SunIcon className="h-5 w-5" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
}
