import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { icon: "/assets/icons/ICON - Search.png", label: "Search" },
  { icon: "/assets/icons/Group 46.png", label: "Home" },
  { icon: "/assets/icons/Group 47.png", label: "TV Shows" },
  { icon: "/assets/icons/Group 53.png", label: "Movies" },
  { icon: "/assets/icons/Group 54.png", label: "Genres" },
  { icon: "/assets/icons/Group 56.png", label: "Watch Later" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.aside
      className="relative h-screen bg-black text-white flex flex-col justify-between py-6"
      initial={{ width: 80 }}
      animate={{ width: expanded ? 240 : 80 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {expanded && (
        <motion.div
          className="absolute top-6 left-1/4 -translate-x-1/2 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/assets/avatar.webp"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-600"
          />
          <p className="text-xl font-bold">Daniel</p>
        </motion.div>
      )}

      <nav className="flex flex-col gap-6 mt-20">
        {navItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 px-4 cursor-pointer hover:text-red-500 h-10"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            {expanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </nav>

      {expanded && (
        <motion.div
          className="flex flex-col gap-4 px-4 text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="hover:text-white uppercase font-bold text-left">
            Language
          </button>
          <button className="hover:text-white uppercase font-bold text-left">
            Get Help
          </button>
          <button className="hover:text-white uppercase font-bold text-left">
            Exit
          </button>
        </motion.div>
      )}
    </motion.aside>
  );
}
