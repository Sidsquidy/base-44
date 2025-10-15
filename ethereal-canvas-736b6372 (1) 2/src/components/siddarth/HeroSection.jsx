
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="mb-12"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68eef602f941d6a9736b6372/e5d64f5a2_F369B238-113D-4321-B86A-66FBA20A4919.png"
              alt="Siddarth Sikakolli"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight"
          >
            Siddarth Sikakolli
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="space-y-2 mb-8"
          >
            <p className="text-2xl md:text-3xl text-gray-400">
              Student • Social Entrepreneur • Changemaker
            </p>
            <p className="text-lg text-gray-500">
              Alliance Academy for Innovation '26
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 mb-12"
          >
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">⚖️ Law</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">📸 Photography</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">🎿 Skiing</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">🍳 Vegan Cooking</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">🎵 Music</span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">🌱 Hydroponics</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-10 h-10 text-gray-600" />
      </motion.div>
    </section>
  );
}
