import { useState } from "react";
import type { MediaItem } from "../types";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

export default function TrendingCarousel({
  movies,
  onSelect,
}: {
  movies: MediaItem[];
  onSelect: (m: MediaItem) => void;
}) {
  const [index, setIndex] = useState(0);
  const cardWidth = 184;
  const visible = 7;

  const maxIndex = Math.max(0, movies.length - visible);
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="relative">
      <h2 className="text-3xl text-white mb-4">Trending Now</h2>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4"
          animate={{ x: -index * cardWidth }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {movies.map((m) => (
            <MovieCard key={m.Id} item={m} onClick={() => onSelect(m)} />
          ))}
        </motion.div>
      </div>

      {index > 0 && (
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-2 rounded-full"
          aria-label="Previous"
        >
          ‹
        </button>
      )}
      {index < maxIndex && (
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-2 rounded-full"
          aria-label="Next"
        >
          ›
        </button>
      )}
    </section>
  );
}
