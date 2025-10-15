import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categoryColors = {
  social_impact: "from-teal-500 to-cyan-500",
  debate_leadership: "from-blue-500 to-indigo-500",
  technology: "from-cyan-500 to-blue-500",
  agriculture: "from-green-500 to-emerald-500"
};

export default function ProjectCard({ project, index }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${categoryColors[project.category]} opacity-20`} />
            )}
            
            {project.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                Featured
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-slate-200 text-sm drop-shadow">{project.subtitle}</p>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary" className="bg-slate-100 text-slate-500">
                    +{project.tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                Learn More →
              </span>
              {project.link && (
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-500 transition-colors" />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detailed View Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-slate-900 mb-2">
              {project.title}
            </DialogTitle>
            {project.subtitle && (
              <p className="text-lg text-teal-600">{project.subtitle}</p>
            )}
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {project.image_url && (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            )}

            <div>
              <h4 className="text-xl font-semibold mb-3 text-slate-900">About This Project</h4>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {project.achievements && project.achievements.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold mb-3 text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold mb-3 text-slate-900">Skills & Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <Button
                asChild
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Visit Project
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}