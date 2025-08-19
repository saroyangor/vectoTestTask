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
      className="h-screen bg-black text-white flex flex-col justify-between py-6"
      initial={{ width: 80 }}
      animate={{ width: expanded ? 240 : 80 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="flex flex-col gap-6 mt-10">
        {navItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 px-4 cursor-pointer hover:text-red-500"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            {expanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium whitespace-nowrap"
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
          <button className="hover:text-white uppercase font-bold self-start">Language</button>
          <button className="hover:text-white uppercase font-bold self-start">Get Help</button>
          <button className="hover:text-white uppercase font-bold self-start">Exit</button>
        </motion.div>
      )}
    </motion.aside>
  );
}