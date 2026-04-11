import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BilingualText from "./BilingualText";
import { withBaseUrl } from "@/lib/asset";

interface HeroProps {
  onViewMenu: () => void;
  onFindLocation: () => void;
}

export default function Hero({ onViewMenu, onFindLocation }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={withBaseUrl("/hero.png")}
          alt="Dalgopchang storefront"
          className="w-full h-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold mb-4 sm:mb-6 tracking-tighter leading-none">
            <span className="text-white">DALGOPCHANG</span>{" "}
            <span className="text-primary block md:inline">달곱창</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto font-bold tracking-tight px-1">
            Best Korean Gopchang Restaurant. <br />
            Experience the sizzle and soul of authentic Korean BBQ.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold group"
              onClick={onViewMenu}
            >
              <BilingualText
                en={<span>View Menu</span>}
                ko={<span className="text-[12px] font-semibold tracking-wide">메뉴 보기</span>}
                koTone="normal"
                className="leading-none"
                koClassName="mt-1"
              />
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto rounded-full px-10 py-7 text-lg font-bold border-2 !border-primary bg-transparent text-white shadow-[0_0_24px_-4px_rgba(225,29,72,0.45)] hover:bg-primary/15 hover:!border-primary hover:text-white"
              onClick={onFindLocation}
            >
              <BilingualText
                en={<span className="text-white">Find Location</span>}
                ko={<span className="text-[12px] font-semibold tracking-wide text-white">위치 찾기</span>}
                koTone="normal"
                className="leading-none text-white"
                koClassName="mt-1"
              />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-secondary-heading text-[10px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
