import React from "react";
import { Carousel } from "@/components/carousel";
import { getInstagramPostIds } from "@/services/instagram_service";

const InstagramCard = ({ postId }: { postId: string }) => (
  <div className="w-[260px] sm:w-[300px] md:w-[400px] group py-4">
    <div className="bg-[#2a2a2a] p-3 md:p-5 border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] transition-transform group-hover:-rotate-1 group-hover:-translate-y-1">
      {/* Post Embed Container */}
      <div className="overflow-hidden bg-black border-2 border-black aspect-[1/1.16] flex items-center justify-center">
        <iframe
          src={`https://www.instagram.com/p/${postId}/embed`}
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          allow="encrypted-media"
        ></iframe>
      </div>

      {/* Retro Footer */}
      <div className="mt-6 md:mt-8 flex justify-between items-center px-2">
        <div className="w-12 md:w-16 h-1 md:h-1.5 bg-black/40"></div>
        <div className="font-pixel text-[8px] md:text-[10px] text-white/20 tracking-tight">
          HSD_HITIT_CAM
        </div>
      </div>
    </div>
  </div>
);

export const InstagramSection = async () => {
  const postIds = await getInstagramPostIds();

  if (postIds.length === 0) return null;

  const postCards = postIds.map((id) => <InstagramCard key={id} postId={id} />);

  return <Carousel title="Instagram_Akisi" items={postCards} />;
};
