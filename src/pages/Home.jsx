import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EntranceScreen from "../components/siddarth/EntranceScreen";
import HeroSection from "../components/siddarth/HeroSection";
import AboutSection from "../components/siddarth/AboutSection";
import ProjectSection from "../components/siddarth/ProjectSection";
import FeaturedSection from "../components/siddarth/FeaturedSection";
import PhotographySection from "../components/siddarth/PhotographySection";
import ContactSection from "../components/siddarth/ContactSection";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {!hasEntered && (
          <EntranceScreen onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <div className="min-h-screen bg-black">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ProjectSection />
          <FeaturedSection />
          <PhotographySection />
          <ContactSection />
          
          <footer className="bg-black border-t border-white/10 py-8 text-center text-gray-600">
            <p>© 2024 Siddarth Sikakolli</p>
          </footer>
        </div>
      )}
    </>
  );
}