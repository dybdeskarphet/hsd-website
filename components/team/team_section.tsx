import { SectionHeader } from "@/components/section_header";
import { MemberCard } from "@/components/team/member_card";
import { getTeamMembers } from "@/services/team_service";
import { PxlKitIcon } from "@pxlkit/core";
import { Trophy } from "@pxlkit/gamification";

export const TeamSection = async () => {
  const teamMembers = await getTeamMembers();

  return (
    <section className="mt-20">
      <SectionHeader 
        title="Ekibimiz" 
        Icon={(props) => <PxlKitIcon icon={Trophy} size={32} colorful {...props} />} 
      />

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};
