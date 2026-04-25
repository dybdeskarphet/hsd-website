export type VideoItem = {
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
    resourceId: {
      videoId: string;
    };
  };
};

export async function getLatestVideos(): Promise<VideoItem[]> {
  const YOUTUBE_PLAYLIST_ID = "UUoNPnz0C7LUt4Klng8fvDGA";
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const MAX_RESULTS = 10;

  if (!API_KEY) {
    console.error("Missing YouTube API Key! :O");
    return [];
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${API_KEY}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      console.error(`Failed to fetch videos :(: Status ${res.status}`);
      return [];
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
