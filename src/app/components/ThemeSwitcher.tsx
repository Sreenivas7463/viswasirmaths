'use client';

import { useEffect, useState } from 'react';

import CustomThemeDropdown from './CustomThemeDropdown';

export default function ThemeSwitcher({ className = '' }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system' | undefined>(undefined);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }, []);

  useEffect(() => {
    if (theme === undefined) return; // Don't apply theme until it's determined

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (theme === undefined) {
    return <div className="h-9 w-9 rounded-full opacity-0"></div>; // Render transparent placeholder
  }

  return (
    <CustomThemeDropdown currentTheme={theme} setTheme={setTheme} />
  );
}
