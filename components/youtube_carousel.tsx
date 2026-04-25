import { YouTubeEmbed } from "@next/third-parties/google";
import { Carousel } from "@/components/carousel";
import { getLatestVideos } from "@/services/youtube_service";

export const VideoSection = async () => {
  const videos = await getLatestVideos();
  if (videos.length === 0) return <div>No videos found.</div>;

  const videoCards = videos.map((video) => {
    const videoId = video.snippet.resourceId.videoId;

    return (
      <div key={videoId} className="w-[260px] sm:w-[300px] md:w-[400px] group">
        <div className="relative p-1.5 md:p-2 bg-[#2a2a2a] border-2 border-black shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
          <div className="overflow-hidden bg-black aspect-video border-2 border-black relative">
            <YouTubeEmbed
              videoid={videoId}
              params="rel=0"
              width={400}
              height={225}
            />
          </div>
          {/* Monitor Details */}
          <div className="flex justify-between items-center px-1 mt-1.5 md:mt-2">
            <div className="flex gap-1 md:gap-1.5">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-black/40"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-black/40"></div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[6px] md:text-[8px] font-pixel text-white/20 uppercase tracking-widest">
                CRT-HITIT-99
              </span>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-hsd-accent animate-pulse shadow-[0_0_5px_#cf1a30]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Carousel title="Son_Videolar" items={videoCards} />;
};
