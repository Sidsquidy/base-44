import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building robust web applications with modern technologies",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, intuitive user interfaces",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and seamless experiences",
    color: "from-amber-500 to-orange-500"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and designer with a love for creating digital experiences 
            that are not only functional but also beautiful and memorable. With years of experience 
            in the industry, I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}