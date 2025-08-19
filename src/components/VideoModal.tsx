import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="relative w-[90vw] max-w-5xl h-[60vh] bg-black rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-md font-bold"
          >
            ✕
          </button>
          <video src={url} controls autoPlay className="w-full h-full object-contain" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
