import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 pt-5 pb-4 border-t-2 border-foreground/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
        <div className="flex flex-col gap-2">
          <p className="font-pixel text-[10px]">
            HSD_HITIT_UNIVERSITY // {currentYear}
          </p>
          <p className="text-[10px] font-sans italic">
            Connecting students with technology.
          </p>
        </div>

        <p className="font-pixel text-[8px]">
          <a href="https://github.com/dybdeskarphet">BUILT_BY_DYBDESKARPHET</a>
        </p>
      </div>
    </footer>
  );
};
