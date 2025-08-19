import type { MediaItem } from "../types";
import { motion } from "framer-motion";

export default function MovieCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="min-w-[168px] bg-gray-900 overflow-hidden shadow-soft cursor-pointer"
      onClick={onClick}
    >
      <img
        src={`/assets/${item.CoverImage}`}
        alt={item.Title}
        className="w-full h-9/10 object-cover"
      />
    </motion.div>
  );
}
