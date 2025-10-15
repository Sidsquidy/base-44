import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

const pressFeatures = [
  {
    title: "How These Forsyth High Schoolers Are Helping People in India Get Legal Help",
    url: "https://www.forsythnews.com/life/faith-charity/how-these-forsyth-high-schoolers-are-helping-people-in-india-get-legal-help",
    outlet: "Forsyth County News",
    description: "Local coverage of Project Vikas's mission to provide legal aid in rural India"
  },
  {
    title: "Project Vikas Launches to Provide Legal Help in Rural India and Inspire Youth Leadership",
    url: "https://nripulse.com/project-vikas-launches-to-provide-legal-help-in-rural-india-and-inspire-youth-leadership",
    outlet: "NRI Pulse",
    description: "National feature on the launch and impact of Project Vikas"
  },
  {
    title: "Student Initiative: Making Legal Aid Accessible",
    url: "https://www.youtube.com/watch?v=VLyYRdeotDA",
    outlet: "Video Feature",
    description: "Documentary coverage of our work bridging the justice gap"
  }
];

export default function FeaturedSection() {
  return (
    <section id="featured" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Featured In
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Media coverage of Project Vikas and our impact
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-6">
          {pressFeatures.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                        {feature.outlet}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-white flex-shrink-0 transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}