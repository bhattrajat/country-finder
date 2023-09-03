import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

function getTheme() {
  const userPreference =
    typeof window !== undefined
      ? window?.localStorage.getItem('theme') === 'dark' ||
        (!('theme' in window?.localStorage) &&
          window?.matchMedia('(prefers-color-scheme: dark)').matches)
      : false;
  return userPreference;
}
export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(() => getTheme());

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
  );
}
