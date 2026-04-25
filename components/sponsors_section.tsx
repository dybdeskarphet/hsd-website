import Image from "next/image";
import { SectionHeader } from "./section_header";
import { PxlKitIcon } from "@pxlkit/core";
import { Heart } from "@pxlkit/gamification";
import { getSponsors } from "@/services/sponsors_service";

export const SponsorsSection = async () => {
  const sponsors = await getSponsors();

  return (
    <div className="mt-20 mb-20">
      <SectionHeader 
        title="Sponsorlarımız" 
        Icon={(props) => <PxlKitIcon icon={Heart} size={32} colorful {...props} />} 
      />

      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 max-w-5xl mx-auto px-4">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="group relative">
            <div className="md:grayscale md:hover:grayscale-0 transition-all duration-300">
              <div className="bg-foreground/20 border-2 border-foreground/10 p-8 hover:border-hsd-accent transition-colors flex items-center justify-center min-w-[200px] min-h-[120px]">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={180}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Pixel Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white font-pixel text-[10px] px-2 py-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-hsd-accent">
              {sponsor.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
