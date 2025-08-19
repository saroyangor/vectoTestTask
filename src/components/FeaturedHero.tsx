import { useState } from "react";
import type { MediaItem } from "../types";
import { motion } from "framer-motion";

export default function FeaturedHero({
  movie,
  onPlay,
}: {
  movie: MediaItem;
  onPlay: (url: string) => void;
}) {
  const [showDescription, setShowDescription] = useState(false);
  const minutes = Math.floor(Number(movie.Duration) / 60);

  return (
    <motion.section
      key={movie.Id}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-soft"
    >
      <img
        src={`/assets/${movie.CoverImage}`}
        alt={movie.Title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

      <div className="relative z-10 p-8 md:p-12 max-w-2xl">
        <p className="uppercase text-lg text-gray-500 font-bold tracking-[0.25em]">{movie.Category}</p>
        <img
          src={`/assets/${movie.TitleImage}`}
          alt={movie.Title}
          className="h-16 md:h-20 mb-4 drop-shadow"
        />

        <p className="text-lg text-gray-200">
          {movie.ReleaseYear} {movie.MpaRating} {minutes} min
        </p>

        <p className="text-gray-200 text-2xl max-w-xl mt-4">
          {showDescription
            ? movie.Description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => movie.VideoUrl && onPlay(movie.VideoUrl)}
            className="flex items-center gap-2 bg-white text-black px-12 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg text-2xl"
          >
            <span className="text-lg">▶</span>
            Play
          </button>

          <button
            onClick={() => setShowDescription(!showDescription)}
            className="px-12 py-2 rounded-full font-semibold text-white transition bg-gradient-to-r from-[#0F4CFF] to-[#001133] hover:opacity-90 text-2xl"
          >
            More Info
          </button>
        </div>

      </div>
    </motion.section>
  );
}
