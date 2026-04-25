import instagramData from "@/data/instagram.json";

export async function getInstagramPostIds(): Promise<string[]> {
  return instagramData.posts || [];
}
