import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "motion/react";

export default function About() {
  return (
    <main className="pt-[var(--header-height)]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            ABOUT <span className="text-gradient">US</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A journey through flavor, tradition, and the moonlit nights of Seoul.
          </p>
        </motion.div>
      </div>

      <AboutSection />
      
      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-white/5" />
        </div>
      </div>

      <ImageGallery />
    </main>
  );
}
