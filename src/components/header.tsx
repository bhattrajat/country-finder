'use client';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
export default function Header() {
  const userPreference =
    typeof window !== undefined &&
    (window.localStorage.getItem('theme') === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches));
  const [isDarkMode, setIsDarkMode] = useState(userPreference);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <header className="sticky flex justify-between p-4 text-xl shadow dark:bg-slate-800">
      <h1>Rest countries api</h1>
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm"
        onClick={toggleTheme}
      >
        {isDarkMode && (
          <>
            <MoonIcon className="h-5" />
            <span>Dark Mode</span>
          </>
        )}
        {!isDarkMode && (
          <>
            <SunIcon className="h-5 w-5" />
            <span>Light Mode</span>
          </>
        )}
      </button>
    </header>
  );
}
