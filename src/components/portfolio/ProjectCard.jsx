import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-400">
              {project.title[0]}
            </div>
          )}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" />
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-cyan-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors group/link"
            >
              View Project
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}