import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MessageSquare, Code, Briefcase } from "lucide-react";

const skillCategories = [
  {
    icon: GraduationCap,
    title: "Academic Interests",
    skills: ["Corporate Law", "Constitutional Law", "AP Government", "AP Human Geography", "Financial Technology", "Policy Analysis"],
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Communication & Leadership",
    skills: ["Public Speaking", "Debate", "Research", "Team Leadership", "Event Organization", "Volunteer Coordination"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Code,
    title: "Technology & Tools",
    skills: ["Cloud Computing", "Obsidian", "GarageBand", "Productivity Tools", "Data Analysis", "Research Methods"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    skills: ["Campaign Strategy", "Legal Research", "Community Outreach", "Nonprofit Management", "Phone Banking", "Workshop Facilitation"],
    gradient: "from-indigo-500 to-purple-500"
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
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-10"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary approach combining legal knowledge, technology, and leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
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