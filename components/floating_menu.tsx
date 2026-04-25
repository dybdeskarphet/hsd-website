"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const FloatingMenu = (props: {}) => {
  /* Theme toggle logic */
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="absolute md:top-0 md:right-0 z-20 flex flex-col md:items-end gap-2">
      <button
        onClick={toggleTheme}
        className="p-2 bg-foreground text-background border-2 border-foreground shadow-[4px_4px_0_0_--color-hsd-accent] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center group"
        aria-label="Site temasını değiştir"
      >
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};
