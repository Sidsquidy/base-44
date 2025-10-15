import React from "react";
import { motion } from "framer-motion";
import { Leaf, Mountain, Camera, Music, Droplet, Scale } from "lucide-react";

const interests = [
  {
    icon: Scale,
    title: "Law",
    description: "Exploring legal systems and social justice"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and perspectives through the lens"
  },
  {
    icon: Mountain,
    title: "Adrenaline Sports",
    description: "Skiing and extreme sports enthusiast"
  },
  {
    icon: Leaf,
    title: "Vegan Cooking",
    description: "Creating plant-based culinary experiences"
  },
  {
    icon: Droplet,
    title: "Hydroponics",
    description: "Managing my own hydroponic garden system"
  },
  {
    icon: Music,
    title: "Music",
    description: "Exploring sounds and rhythms"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I'm a senior at Alliance Academy for Innovation, passionate about creating impact through 
              social entrepreneurship while pursuing my diverse interests in law, photography, extreme sports, 
              and sustainable living.
            </p>
            <p>
              Founder of <span className="text-white font-semibold">Project Vikas</span>, a nonprofit 
              dedicated to improving legal access in rural India. Beyond my work in social impact, I'm 
              an avid photographer capturing the world through unique perspectives, a skiing enthusiast 
              chasing adrenaline, and a vegan chef experimenting with plant-based cuisine.
            </p>
            <p>
              I also manage my own hydroponic garden, combining my interest in sustainability with 
              hands-on innovation. When I'm not working on projects or behind the camera, you'll find 
              me exploring music production or studying law and its role in creating equitable societies.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <interest.icon className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{interest.title}</h3>
                <p className="text-gray-400">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}