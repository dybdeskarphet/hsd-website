import sponsorsData from "@/data/sponsors.json";

export interface Sponsor {
  name: string;
  logo: string;
}

export async function getSponsors(): Promise<Sponsor[]> {
  return sponsorsData as Sponsor[];
}
