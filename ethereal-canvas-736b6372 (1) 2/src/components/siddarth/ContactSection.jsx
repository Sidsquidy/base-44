import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "siddarthsikakolli@gmail.com",
        subject: `Portfolio Contact from ${formData.name}`,
        body: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:siddarthsikakolli@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">siddarthsikakolli@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/siddarthskolli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Instagram</p>
                    <p className="text-gray-400 text-sm">@siddarthskolli</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/siddarth-sikakolli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-white/30"
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-14 rounded-xl focus:border-white/30"
              />

              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl resize-none focus:border-white/30"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-200 h-14 text-lg rounded-xl"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}