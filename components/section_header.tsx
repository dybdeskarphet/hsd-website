import React from "react";

interface SectionHeaderProps {
  title: string;
  Icon: React.ElementType;
}

export const SectionHeader = ({ title, Icon }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-12 md:mb-16">
      <div className="flex items-center gap-4 px-2">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-hsd-accent shrink-0" />
        <h2 className="font-pixel md:text-4xl sm:text-2xl text-lg text-center leading-tight">
          {title}
        </h2>
      </div>
      <div className="h-1.5 w-32 bg-hsd-accent mt-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)]"></div>
    </div>
  );
};
