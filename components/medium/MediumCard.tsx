import Image from "next/image";
import { type MediumPost } from "@/services/medium_service";

interface MediumCardProps {
  post: MediumPost;
}

export const MediumCard = ({ post }: MediumCardProps) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-[260px] sm:w-[280px] md:w-80 group cursor-pointer pt-4"
  >
    <div className="relative">
      {/* Folder Tab Accessory */}
      <div className="absolute -top-4 left-0 w-16 md:w-20 h-4 bg-[#3a3a3a] border-t-2 border-l-2 border-r-2 border-black z-0"></div>

      <div className="bg-[#2a2a2a] border-2 border-black p-3 md:p-4 relative z-10 shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] transition-all group-hover:bg-[#333]">
        {/* Cover Image */}
        <div className="aspect-video relative overflow-hidden mb-4 bg-black border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Content Info */}
        <div className="space-y-2">
          <p className="text-[8px] font-pixel text-hsd-accent/80 uppercase">
            FILE_{post.id}.LOG
          </p>
          <h3 className="font-pixel text-sm text-white line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <div className="h-0.5 w-full bg-black/40 my-2"></div>
          <p className="text-xs text-white/40 line-clamp-2 font-sans italic">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>
  </a>
);
