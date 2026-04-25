import { TeamMember } from "@/types/page-types";
import Image from "next/image";

export const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group flex flex-col items-center">
    {/* Photo Frame */}
    <div className="relative mb-6">
      {/* Background decorative offset frame */}
      <div className="absolute -top-2 -left-2 w-full h-full border-2 border-hsd-accent -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

      {/* Main Image Container */}
      <div className="w-48 h-48 bg-black border-2 border-black overflow-hidden relative shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
        <Image
          src={member.image}
          alt={`${member.name} ${member.surname}`}
          fill
          className="object-contain p-4 transition-transform group-hover:scale-105"
        />
      </div>
    </div>

    {/* Text Details */}
    <div className="text-center space-y-1">
      <p className="text-[10px] font-pixel text-hsd-accent uppercase tracking-tighter">
        {member.rank}
      </p>
      <h3 className="font-pixel text-lg md:text-xl text-foreground">
        {member.name} {member.surname}
      </h3>
      <div className="h-0.5 w-8 bg-foreground/20 mx-auto my-2"></div>
      <p className="text-[10px] font-pixel text-foreground/50 uppercase">
        {member.department}
      </p>
    </div>
  </div>
);
