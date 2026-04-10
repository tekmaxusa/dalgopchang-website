import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  isShort?: boolean;
  onReadMore?: () => void;
}

export default function AboutSection({ isShort, onReadMore }: AboutSectionProps) {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-secondary-heading text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
              <span className="text-[#CFC6B4]">TRADITION MEETS</span> <br />
              <span className="text-primary">MODERN FLAVOR</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Dalgopchang (달곱창) was born from a simple desire: to bring the most authentic and premium Korean Gopchang experience to the table. Our name, "Dal" (Moon), represents the late-night gatherings and the warm glow of the grill that brings people together.
              </p>
              <p>
                We specialize in premium beef small intestines, large intestines, and heart, prepared using traditional Korean techniques that have been perfected over generations. Our secret lies in the meticulous cleaning process and our signature fruit-based marinade.
              </p>
              {!isShort && (
                <>
                  <p>
                    In Korean culture, Gopchang is more than just a meal; it's a social ritual. It's about the sound of the sizzle, the aroma of the grill, and the joy of sharing a drink with friends. At Dalgopchang, we've elevated this street-food classic into a premium dining experience.
                  </p>
                  <p>
                    Whether you're a lifelong fan of Korean BBQ or a curious newcomer, we invite you to join us for an evening of bold flavors and warm hospitality.
                  </p>
                </>
              )}
            </div>
            {isShort && (
              <Button 
                variant="link" 
                className="text-primary p-0 h-auto mt-8 text-lg font-bold group"
                onClick={onReadMore}
              >
                Read our full story
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/photos/about-our-story.png"
                alt="Dalgopchang dining room"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
