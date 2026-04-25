"use client";

import { SocialButton } from "@/components/buttons";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaMoon,
  FaSun,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const Header = () => {
  /* Theme toggle logic */
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      // Default or explicitly dark
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 relative">
      {/* Theme toggle button */}
      <div className="fixed bottom-6 right-6 md:absolute md:top-0 md:right-0 z-50 flex flex-col items-end gap-2">
        <button
          onClick={toggleTheme}
          className="p-3 md:p-2 bg-foreground text-background border-2 border-foreground shadow-[4px_4px_0_0_#cf1a30] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center group cursor-pointer"
          aria-label="Site temasını değiştir"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Left side of the header (header, socials) */}
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <div className="flex flex-col">
          <Image
            src={theme === "dark" ? "/hsd-logo.png" : "/hsd-logo-black.png"}
            alt="HSD Visual"
            width={500}
            height={500}
            className="object-contain mb-5 md:mr-10 md:mb-0 w-full max-w-[260px] sm:max-w-md"
          />
        </div>

        <div className="flex flex-col justify-end mb-8">
          <div className="flex flex-row items-center gap-4">
            <SocialButton
              Icon={FaInstagram}
              href="https://www.instagram.com/hsdhitit/"
              ariaLabel="Instagram butonu"
            />
            <SocialButton
              Icon={FaLinkedin}
              href="https://www.linkedin.com/company/hsd-hitit-university/"
              ariaLabel="LinkedIn butonu"
            />
            <SocialButton
              Icon={FaWhatsapp}
              href=""
              ariaLabel="WhatsApp butonu"
            />
            <SocialButton
              Icon={FaTiktok}
              href="https://www.tiktok.com/@hsdhitit"
              ariaLabel="TikTok butonu"
            />
            <SocialButton Icon={FaMedium} href="#" ariaLabel="Medium button" />
          </div>
        </div>
      </div>
    </div>
  );
};
