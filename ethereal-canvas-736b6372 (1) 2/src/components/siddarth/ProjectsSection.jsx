import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "social_impact", label: "Social Impact" },
  { value: "debate_leadership", label: "Leadership" },
  { value: "technology", label: "Technology" },
  { value: "agriculture", label: "Agriculture" }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
    initialData: [],
  });

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-[#0a2540] via-slate-900 to-[#0a2540]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Projects & Initiatives
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-10"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            From nonprofit work to debate leadership, exploring how law, technology, 
            and social impact intersect to create meaningful change.
          </p>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-3xl mx-auto">
            <TabsList className="bg-slate-800/50 backdrop-blur border border-slate-700 p-1">
              {categories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white text-slate-400"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
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
              <div className="grid md:grid-cols-2 gap-8 mb-12">
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-xl">No projects in this category yet.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}