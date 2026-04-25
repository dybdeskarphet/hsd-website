"use client";

import React, { useRef } from "react";

interface CarouselProps {
  title: string;
  items: React.ReactNode[];
}

export const Carousel = ({ title, items }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollAmount =
        direction === "left" ? -(containerWidth * 0.8) : containerWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-10 relative">
      <div className="flex items-end justify-between pr-4 mb-3 md:mb-5">
        <div className="relative">
          <div className="bg-hsd-accent text-white font-pixel md:text-xl text-[10px] px-3 md:px-4 py-1.5 md:py-2 border-t-2 border-l-2 border-r-2 border-black relative z-10">
            {title}
          </div>
          <div className="absolute top-1 left-1 w-full h-full bg-black -z-0"></div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white font-pixel border-2 border-black hover:bg-hsd-accent transition-colors cursor-pointer"
            aria-label="Sola kaydır"
          >
            {"<"}
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black text-white font-pixel border-2 border-black hover:bg-hsd-accent transition-colors cursor-pointer"
            aria-label="Sağa kaydır"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="border-2 border-black bg-black/10 dark:bg-black/20 p-4 md:p-6 relative">
        {/* Decorative Corners */}
        <div className="absolute -top-1 -left-1 w-3 md:w-4 h-3 md:h-4 border-t-4 border-l-4 border-hsd-accent"></div>
        <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 border-t-4 border-r-4 border-hsd-accent"></div>
        <div className="absolute -bottom-1 -left-1 w-3 md:w-4 h-3 md:h-4 border-b-4 border-l-4 border-hsd-accent"></div>
        <div className="absolute -bottom-1 -right-1 w-3 md:w-4 h-3 md:h-4 border-b-4 border-r-4 border-hsd-accent"></div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide"
        >
          {items.map((item, index) => (
            <div key={index} className="shrink-0 snap-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
