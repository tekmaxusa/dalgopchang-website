import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { withBaseUrl } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "/photos/kbbq-6.png",
    alt: "Korean BBQ — Prime rib-eye",
  },
  {
    src: "/photos/chef-4.png",
    alt: "Chef Special — Small intestine stew",
  },
  {
    src: "/photos/entree-bulgogi.png",
    alt: "Entree — Bulgogi",
  },
  {
    src: "/photos/entree-soy-crab.png",
    alt: "Chef Special — Soy sauce marinated raw crab",
  },
];

export default function ImageGallery() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-3 md:mb-8 md:flex-row md:items-end">
          <div>
            <span className="text-secondary-heading mb-2 block text-sm">Visual Experience</span>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-white">The art of</span> <span className="text-primary">Gopchang</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white sm:text-base">
            Every dish is a masterpiece of tradition and flavor, prepared with the finest ingredients and a passion for
            excellence.
          </p>
        </div>

        {/* Single-row horizontal carousel: less vertical scroll; swipe on touch */}
        <div
          className={cn(
            "-mx-1 flex gap-3 overflow-x-auto px-1 pb-2",
            "scroll-pl-3 scroll-pr-3 snap-x snap-mandatory",
            "[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "sm:gap-4 md:scroll-pl-4 md:scroll-pr-4"
          )}
          role="region"
          aria-label="Photo gallery, swipe horizontally"
        >
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger
                render={
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "group relative aspect-[4/3] w-[min(82vw,18.5rem)] shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border border-white/10 sm:w-64 md:w-72"
                    )}
                  >
                    <img
                      src={withBaseUrl(image.src)}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 backdrop-blur-sm">
                        <Maximize2 className="h-4 w-4 text-[#e11d48]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Zoom</span>
                      </div>
                    </div>
                  </motion.div>
                }
              />

              <DialogContent
                overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
                className="!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50 !h-screen !w-screen !max-w-none !translate-x-0 !translate-y-0 !rounded-none !border-none !p-0 !ring-0 flex items-center justify-center bg-black/98"
              >
                <div className="relative flex h-screen w-screen items-center justify-center">
                  <img
                    src={withBaseUrl(image.src)}
                    alt={image.alt}
                    decoding="async"
                    className="h-[100vh] w-[100vw] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
