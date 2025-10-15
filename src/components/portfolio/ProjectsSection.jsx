import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Skeleton } from "@/components/ui/skeleton";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
    initialData: [],
  });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and passion for creating 
            exceptional digital experiences
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}

            {otherProjects.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}

            {projects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-xl">No projects yet. Check back soon!</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}