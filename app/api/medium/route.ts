import { NextResponse } from "next/server";
import { getMediumPosts } from "@/services/medium_service";

export async function GET() {
  const posts = await getMediumPosts();
  return NextResponse.json({ posts });
}
