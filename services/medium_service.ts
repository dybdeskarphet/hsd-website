import mediumData from "@/data/medium.json";

export interface MediumPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  link: string;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  return (mediumData as { posts: MediumPost[] }).posts || [];
}
