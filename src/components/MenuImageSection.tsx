import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";
import { withBaseUrl } from "@/lib/asset";

export interface MenuImage {
  src: string;
  alt: string;
}

interface MenuImageSectionProps {
  title: string;
  images: MenuImage[];
}

export default function MenuImageSection({ title, images }: MenuImageSectionProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-white">
            {title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index}>
              <Dialog>
                <DialogTrigger
                  render={
                    <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted group border border-white/5 text-left"
                    type="button"
                  >
                  <img
                    src={withBaseUrl(image.src)}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="w-10 h-10 text-primary mb-4" />
                    <span className="text-white font-bold uppercase tracking-widest text-sm">
                      Enlarge Menu
                    </span>
                  </div>
                  </motion.button>
                  }
                />
                <DialogContent className="max-w-4xl bg-black/95 border-none p-0 overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center p-4">
                    <img
                      src={withBaseUrl(image.src)}
                      alt={image.alt}
                      decoding="async"
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
