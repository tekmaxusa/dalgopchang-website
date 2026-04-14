import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { withBaseUrl } from "@/lib/asset";

interface AboutSectionProps {
  isShort?: boolean;
  onReadMore?: () => void;
}

export default function AboutSection({ isShort, onReadMore }: AboutSectionProps) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[min(88vh,880px)]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 px-6 pt-20 pb-14 lg:py-16 lg:pr-14 flex flex-col justify-center relative"
        >
          <span className="text-secondary-heading text-sm mb-4 block">OUR STORY</span>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-display font-extrabold mb-8 leading-[1.05] tracking-tight uppercase">
            <span className="text-white block">TRADITION MEETS</span>
            <span className="text-primary block">MODERN FLAVOR</span>
          </h2>
          <div className="space-y-6 text-base md:text-lg text-white leading-relaxed max-w-xl">
            <p>
              Dalgopchang (달곱창) brings the authentic taste of Korean street food culture to a premium dining
              setting. Specializing in Gopchang (grilled small intestines), we pride ourselves on our meticulous
              preparation and traditional secret marinades.
            </p>
            <p>
              In Korea, Gopchang is more than just food; it&apos;s a social ritual. The sizzle of the grill, the
              aroma of charcoal, and the shared experience of cooking together create memories that last.
            </p>
            {!isShort && (
              <p>
                Our mission is to preserve these traditions while elevating the experience with the finest ingredients
                and a modern, welcoming atmosphere.
              </p>
            )}
            {isShort && (
              <Button
                variant="link"
                className="text-primary p-0 h-auto mt-4 text-lg font-bold group justify-start"
                onClick={onReadMore}
              >
                Read our full story
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            )}
          </div>
          <div
            className="pointer-events-none hidden lg:block absolute bottom-10 right-10 w-px h-20 bg-primary"
            aria-hidden
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative min-h-[min(52vh,520px)] lg:min-h-0"
        >
          <img
            src={withBaseUrl("/photos/about-our-story.png")}
            alt="Dalgopchang dining room"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
