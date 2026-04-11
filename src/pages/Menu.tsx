import MenuImageSection from "@/components/MenuImageSection";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MENU_SECTIONS } from "@/data/menuImages";
import { MENU_ITEM_SECTIONS } from "@/data/menuItems";
import { ChefHat, CupSoda, Flame, Layers, Maximize2, Plus, UtensilsCrossed } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { withBaseUrl } from "@/lib/asset";

const categories = [{ id: "all", label: "All" }, ...MENU_SECTIONS.map((s) => ({ id: s.id, label: s.title }))];

function MenuDetailsList({
  items,
}: {
  items: { ko: string; en: string; description?: string; price?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6 md:p-8 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.95)] ring-1 ring-[#e11d48]/10">
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={`${item.ko}|${item.en}`} className="min-w-0">
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <div className="min-w-0">
                    <div className="text-white font-extrabold tracking-tight leading-tight">
                      {item.ko}
                    </div>
                    <div className="text-white text-sm font-semibold">
                      {item.en}
                    </div>
                  </div>

                  <div className="flex-1 border-b border-dotted border-white/20 translate-y-[-3px]" />

                  {item.price && (
                    <div className="shrink-0 rounded-full bg-[#e11d48] px-3 py-1 text-xs font-extrabold text-white tabular-nums">
                      {item.price}
                    </div>
                  )}
                </div>

                {item.description && item.description !== "N/A." && (
                  <p className="mt-2 text-sm text-white leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuImageGrid({
  images,
  aspectClassName = "aspect-[3/4]",
}: {
  images: { src: string; alt: string }[];
  aspectClassName?: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Dialog key={`${image.src}-${index}`}>
          <DialogTrigger
            render={
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className={cn(
                  "relative overflow-hidden rounded-xl bg-muted group cursor-pointer border border-white/10",
                  aspectClassName
                )}
              />
            }
          >
            <img
              src={withBaseUrl(image.src)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm">
                <Maximize2 className="w-4 h-4 text-[#e11d48]" />
                <span className="text-white font-bold uppercase tracking-widest text-xs">
                  Zoom
                </span>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent
            showCloseButton={true}
            overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
            className={cn(
              "!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50",
              "!translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !rounded-none",
              "bg-black/98 border-none !p-0 !ring-0",
              "flex items-center justify-center"
            )}
          >
            <div className="relative h-screen w-screen flex items-center justify-center p-0">
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
  );
}

function MenuItemCardGrid({
  items,
}: {
  items: {
    ko: string;
    en: string;
    description?: string;
    price?: string;
    imageSrc?: string;
  }[];
}) {
  const cardItems = items.filter((i) => i.imageSrc);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cardItems.map((item, idx) => (
        <Dialog key={`${item.ko}|${item.en}|${idx}`}>
          <DialogTrigger
            render={
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              />
            }
          >
            <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-[0_18px_55px_-35px_rgba(0,0,0,0.95)]">
              <div className="relative aspect-square">
                <img
                  src={item.imageSrc ? withBaseUrl(item.imageSrc) : undefined}
                  alt={`${item.ko} — ${item.en}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {item.price && (
                  <div className="absolute top-3 right-3 rounded-full bg-[#e11d48] px-3 py-1 text-xs font-extrabold text-white shadow-lg">
                    {item.price}
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-white font-extrabold tracking-tight leading-tight">
                    {item.ko}
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {item.en}
                  </div>
                </div>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent
            showCloseButton={true}
            overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
            className={cn(
              "!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50",
              "!translate-x-0 !translate-y-0 !w-screen !h-screen !max-w-none !rounded-none",
              "bg-black/98 border-none !p-0 !ring-0",
              "flex items-center justify-center"
            )}
          >
            <div className="relative h-screen w-screen flex items-center justify-center">
              <img
                src={item.imageSrc ? withBaseUrl(item.imageSrc) : undefined}
                alt={`${item.ko} — ${item.en}`}
                decoding="async"
                className="h-[100vh] w-[100vw] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

function getSectionIcon(sectionId: string) {
  switch (sectionId) {
    case "combo":
      return Layers;
    case "chef-special":
      return ChefHat;
    case "side-dish-to-add":
      return Plus;
    case "entree":
      return UtensilsCrossed;
    case "drink":
      return CupSoda;
    default:
      return Flame;
  }
}

function MenuSectionCombined({
  id,
  title,
  items,
  images,
}: {
  id: string;
  title: string;
  items: { ko: string; en: string; description?: string; price?: string; imageSrc?: string }[];
  images: { src: string; alt: string }[];
}) {
  const hasCardImages = items.some((i) => i.imageSrc);
  const Icon = getSectionIcon(id);
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 border border-white/10 shadow-[0_0_0_1px_rgba(225,29,72,0.10)_inset]">
            <Icon className="w-5 h-5 text-[#e11d48]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-[0.16em] text-white">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={cn(hasCardImages ? "lg:col-span-7" : "lg:col-span-5")}>
            {hasCardImages ? (
              <MenuItemCardGrid items={items} />
            ) : (
              <MenuImageGrid images={images} />
            )}
          </div>
          <div className={cn(hasCardImages ? "lg:col-span-5" : "lg:col-span-7")}>
            <MenuDetailsList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const itemsById = Object.fromEntries(MENU_ITEM_SECTIONS.map((s) => [s.id, s]));
  const imagesById = Object.fromEntries(MENU_SECTIONS.map((s) => [s.id, s]));

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-secondary-heading text-sm mb-4 block">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            <span className="text-white">THE</span> <span className="text-primary">MENU</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our curated selection of premium Korean Gopchang and BBQ. 
            Click on any image to enlarge.
          </p>
        </motion.div>

        {/* Category Sub-buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-6 py-2 font-bold uppercase tracking-widest text-xs transition-all duration-300",
                activeCategory === cat.id 
                  ? "bg-primary text-white scale-105 shadow-lg shadow-primary/20" 
                  : "border-white/10 hover:border-primary/50 text-muted-foreground hover:text-primary"
              )}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {MENU_SECTIONS.filter((s) => activeCategory === "all" || activeCategory === s.id).map((section) => {
          const itemSection = itemsById[section.id];
          const imageSection = imagesById[section.id];

          return (
            <MenuSectionCombined
              key={section.id}
              id={section.id}
              title={section.title}
              items={itemSection?.items ?? []}
              images={imageSection?.images ?? []}
            />
          );
        })}

        {/* Fallback: if any text section exists without images */}
        {MENU_ITEM_SECTIONS.filter(
          (s) => (activeCategory === "all" || activeCategory === s.id) && !imagesById[s.id]
        ).map((section) => (
          <section key={`text-only-${section.id}`} className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                {(() => {
                  const Icon = getSectionIcon(section.id);
                  return (
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 border border-white/10 shadow-[0_0_0_1px_rgba(225,29,72,0.10)_inset]">
                  <Icon className="w-5 h-5 text-[#e11d48]" />
                </span>
                  );
                })()}
                <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-[0.16em] text-white">
                  {section.title}
                </h2>
              </div>
              <MenuDetailsList items={section.items} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
