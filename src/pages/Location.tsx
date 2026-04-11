import LocationContact from "@/components/LocationContact";
import { motion } from "motion/react";
import BilingualText from "../components/BilingualText";

export default function Location() {
  return (
    <main className="pt-[var(--header-height)]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Visit Us <span className="text-white font-semibold">· 오시는 길</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            OUR <span className="text-gradient">LOCATION</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            <BilingualText
              en={
                <span>
                  We are located in Carrollton, TX. Stop by for an authentic Korean BBQ experience.
                </span>
              }
              ko={<span>텍사스 캐롤턴에 위치해 있습니다. 정통 한국 BBQ를 즐기러 오세요.</span>}
            />
          </p>
        </motion.div>
      </div>

      <LocationContact />
    </main>
  );
}
