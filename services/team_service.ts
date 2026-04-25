import teamData from "@/data/team.json";
import { TeamMember } from "@/types/page-types";

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamData as TeamMember[];
}
