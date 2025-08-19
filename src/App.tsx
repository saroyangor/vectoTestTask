import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import FeaturedHero from "./components/FeaturedHero";
import Carousel from "./components/Carousel";
import VideoModal from "./components/VideoModal";
import raw from "./data.json";
import type { DataShape, MediaItem } from "./types";

const data = raw as unknown as DataShape;

export default function App() {
  const [featured, setFeatured] = useState<MediaItem>(data.Featured);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const trending = useMemo(() => {
    return [...data.TendingNow].sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
    );
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 overflow-x-hidden ml-24">
          <FeaturedHero movie={featured} onPlay={(url) => setVideoUrl(url)} />

          <Carousel movies={trending} setFeatured={setFeatured} />
        </main>
      </div>

      {videoUrl && <VideoModal url={videoUrl} onClose={() => setVideoUrl(null)} />}
    </div>
  );
}
