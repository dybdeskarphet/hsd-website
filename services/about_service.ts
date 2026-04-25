import aboutData from "@/data/about_us.json";

export interface AboutData {
  title: string;
  description: string;
}

export async function getAboutData(): Promise<AboutData> {
  return aboutData;
}
