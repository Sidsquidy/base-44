import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectSection() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list(),
    initialData: [],
  });

  const project = projects[0];

  if (isLoading || !project) return null;

  return (
    <section id="project" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            My Work
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden">
            <div className="h-96 overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68eef602f941d6a9736b6372/0ea2b9d0b_Facetune_26-04-2025-13-10-55.jpg"
                alt="Project Vikas"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-4xl font-bold text-white mb-6">Project Vikas</h3>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-xl">
                Initiated a movement that went viral for creating opportunities to legal aid organizations in India.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Legal Access
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Social Justice
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Nonprofit Leadership
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Community Development
                </span>
                <span className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                  Youth Empowerment
                </span>
              </div>

              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg rounded-xl"
              >
                <a href="https://projectvikas.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Visit Project Vikas
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}