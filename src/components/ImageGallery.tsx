import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-secondary-heading text-sm mb-2 block">
              Visual Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold">
              <span className="text-[#CFC6B4]">THE ART OF</span> <span className="text-gradient">GOPCHANG</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every dish is a masterpiece of tradition and flavor, prepared with the finest ingredients and a passion for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger
                render={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-white/10"
                  />
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4 text-[#e11d48]" />
                    <span className="text-white font-bold tracking-widest uppercase text-xs">
                      Zoom
                    </span>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent
                overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
                className="!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50 !translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !rounded-none bg-black/98 border-none !p-0 !ring-0 flex items-center justify-center"
              >
                <div className="relative h-screen w-screen flex items-center justify-center">
                  <img
                    src={image.src}
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
