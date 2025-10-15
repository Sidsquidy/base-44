import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-amber-400 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
                JD
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
          >
            John Doe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-cyan-400 mb-4"
          >
            Creative Developer & Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Crafting beautiful digital experiences with clean code and innovative design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center mb-16"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-full"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hello@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-slate-500" />
      </motion.div>
    </section>
  );
}