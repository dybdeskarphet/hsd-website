"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "@/components/carousel";
import { type MediumPost } from "@/services/medium_service";
import { MediumCard } from "./MediumCard";

export const MediumSection = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/medium");
        const data = await response.json();
        setPosts(data.posts);
      } catch (e) {
        console.error("Failed to fetch medium posts:", e);
      }
    };
    loadPosts();
  }, []);

  if (posts.length === 0) return null;

  return (
    <div className="mt-10">
      <Carousel
        title="Medium_Yazilari"
        items={posts.map((p) => (
          <MediumCard
            key={p.id}
            post={p}
          />
        ))}
      />
    </div>
  );
};
