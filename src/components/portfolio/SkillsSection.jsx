import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Design",
    skills: ["Figma", "Git", "Docker", "AWS", "Adobe Creative Suite"],
    color: "from-amber-500 to-orange-500"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-6`}>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-base py-2 px-4 bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}