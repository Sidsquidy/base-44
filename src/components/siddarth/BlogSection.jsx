import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const categoryColors = {
  law: "bg-teal-100 text-teal-800 border-teal-200",
  social_impact: "bg-blue-100 text-blue-800 border-blue-200",
  debate: "bg-indigo-100 text-indigo-800 border-indigo-200",
  technology: "bg-cyan-100 text-cyan-800 border-cyan-200",
  personal_growth: "bg-purple-100 text-purple-800 border-purple-200"
};

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-created_date', 3),
    initialData: [],
  });

  return (
    <section id="blog" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Insights & Reflections
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-10"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Thoughts on law, social impact, personal growth, and the journey of continuous learning
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden p-8">
                <Skeleton className="h-6 w-24 mb-4" />
                <Skeleton className="h-8 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`${createPageUrl("BlogPost")}?id=${post.id}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100 cursor-pointer group">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${categoryColors[post.category]} border`}>
                        {post.category?.replace(/_/g, ' ')}
                      </Badge>
                      {post.read_time && (
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{post.read_time} min read</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        {format(new Date(post.created_date), "MMM d, yyyy")}
                      </span>
                      <span className="text-teal-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xl">Blog posts coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}