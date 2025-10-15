import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EntranceScreen({ onEnter }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center cursor-pointer"
      onClick={onEnter}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight">
            SS
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-gray-400 mb-4"
            >
              Click anywhere to enter
            </motion.div>
            <motion.div
              animate={{
                width: isHovered ? "100%" : "0%",
              }}
              className="h-0.5 bg-white mx-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-gray-600 text-sm mt-8"
        >
          Siddarth Sikakolli
        </motion.div>
      </div>
    </motion.div>
  );
}