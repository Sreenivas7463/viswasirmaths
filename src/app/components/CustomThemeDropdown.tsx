import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

interface CustomThemeDropdownProps {
  currentTheme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export default function CustomThemeDropdown({
  currentTheme,
  setTheme,
}: CustomThemeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getIconForCurrentTheme = () => {
    let nextTheme: "light" | "dark" | "system";
    if (currentTheme === "light") {
      nextTheme = "light";
    } else if (currentTheme === "dark") {
      nextTheme = "system";
    } else {
      nextTheme = "dark";
    }

    if (nextTheme === "dark") {
      return <FaMoon className="h-5 w-5 text-gray-900 dark:text-gray-100" />;
    } else if (nextTheme === "light") {
      return <FaSun className="h-5 w-5 text-black dark:text-gray-100" />;
    } else {
      return <FaDesktop className="h-5 w-5 text-gray-100" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme dropdown"
      >
        {getIconForCurrentTheme()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <button
            onClick={() => handleThemeChange("light")}
            className="flex items-center w-full px-4 py-2 text-sm text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaSun className="h-5 w-5 mr-2" />
            Light
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="flex items-center w-full px-4 py-2 text-sm text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaMoon className="h-5 w-5 mr-2" />
            Dark
          </button>
          <button
            onClick={() => handleThemeChange("system")}
            className="flex items-center w-full px-4 py-2 text-sm text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FaDesktop className="h-5 w-5 mr-2" />
            System
          </button>
        </div>
      )}
    </div>
  );
}
