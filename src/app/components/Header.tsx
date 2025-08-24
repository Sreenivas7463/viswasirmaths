"use client";

import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import OffCanvasMenu from "./OffCanvasMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-700 dark:text-gray-300">Sri Vishwa Academy</h1>

          {/* Mobile: Hamburger + Theme Switcher */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 p-1">
            <a href="#hero" onClick={handleClick} className="mt-1 text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Home</a>
            <a href="#about" onClick={handleClick} className="mt-1 text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">About</a>
            <a href="#features" onClick={handleClick} className="mt-1 text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Features</a>
            <ThemeSwitcher />
          </nav>
        </div>
      </header>

      {/* Off-canvas Menu (Mobile) */}
      <OffCanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onLinkClick={handleClick} />
    </>
  );
}