'use client';
import ThemeSwitcher from './theme-switcher';
export default function Header() {
  return (
    <header className="sticky flex justify-between p-4 text-xl shadow dark:bg-slate-800">
      <h1>Rest countries api</h1>
      <ThemeSwitcher />
    </header>
  );
}
