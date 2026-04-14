import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MENU_SECTIONS } from "@/data/menuImages";
import {
  MENU_ITEM_SECTIONS,
  type MenuItem,
  displayMenuPrice,
  getMenuDescription,
} from "@/data/menuItems";
import { FileText, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { withBaseUrl } from "@/lib/asset";

const categories = [{ id: "all", label: "All" }, ...MENU_SECTIONS.map((s) => ({ id: s.id, label: s.title }))];

function MenuItemCards({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, idx) => {
        const desc = getMenuDescription(item);
        const price = displayMenuPrice(item);
        const src = item.imageSrc!;

        return (
          <Dialog key={`${item.ko}|${item.en}|${idx}`}>
            <DialogTrigger
              render={
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/50 text-left shadow-[0_18px_55px_-35px_rgba(0,0,0,0.95)]"
                >
                  <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-black/40 sm:h-[170px] md:h-[180px]">
                    <img
                      src={withBaseUrl(src)}
                      alt={`${item.ko} — ${item.en}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-white/20 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        Tap to enlarge
                      </span>
                      <Maximize2 className="h-4 w-4 shrink-0 text-white/90" aria-hidden />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 border-t border-white/10 p-4 sm:p-5">
                    <div className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">{item.ko}</div>
                    <div className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">{item.en}</div>
                    {desc && (
                      <p className="line-clamp-3 text-base leading-relaxed text-white/90 sm:text-[17px]">{desc}</p>
                    )}
                    <div className="mt-auto pt-2 text-lg font-extrabold tabular-nums text-primary sm:text-xl">{price}</div>
                  </div>
                </motion.div>
              }
            />

            <DialogContent
              showCloseButton={true}
              overlayClassName="bg-black/85 supports-backdrop-filter:backdrop-blur-md"
              className={cn(
                "!fixed !inset-0 !top-0 !left-0 !right-0 !bottom-0 !z-50",
                "!translate-x-0 !translate-y-0 !h-screen !w-screen !max-w-none !rounded-none !p-0 !ring-0",
                "border-none bg-black/98",
                "flex items-center justify-center"
              )}
            >
              <div className="relative flex h-screen w-screen items-center justify-center">
                <img
                  src={withBaseUrl(src)}
                  alt={`${item.ko} — ${item.en}`}
                  decoding="async"
                  className="max-h-screen max-w-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

function MenuSectionCards({ title, items }: { title: string; items: MenuItem[] }) {
  const cardItems = items.filter((i) => i.imageSrc);
  if (cardItems.length === 0) return null;

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 border-b border-white/10 pb-3 text-left text-2xl font-display font-extrabold uppercase tracking-[0.12em] text-white md:text-3xl">
          {title}
        </h2>
        <MenuItemCards items={cardItems} />
      </div>
    </section>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const itemsById = Object.fromEntries(MENU_ITEM_SECTIONS.map((s) => [s.id, s]));

  return (
    <main className="relative pb-24 pt-[var(--header-height)]">
      <div className="mx-auto mb-6 max-w-7xl px-4 sm:mb-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-secondary-heading mb-4 block text-sm">Our Offerings</span>
          <h1 className="mb-4 px-1 font-display text-4xl font-extrabold tracking-tighter sm:mb-6 sm:text-5xl md:text-7xl">
            <span className="text-white">THE</span> <span className="text-primary">MENU</span>
          </h1>
          <p className="mx-auto max-w-2xl px-1 text-base text-white sm:text-lg md:text-xl">
            Explore our curated selection of premium Korean Gopchang and BBQ.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 bg-transparent px-6 py-5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={withBaseUrl("/DalgopchangMenu.pdf")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" aria-hidden />
                <span className="font-bold uppercase tracking-wider">View PDF menu</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          "sticky z-40 border-b border-white/10 bg-black/95 py-2.5 backdrop-blur-md sm:py-3",
          "top-[var(--header-height)]",
          "shadow-[0_8px_32px_-10px_rgba(0,0,0,0.9)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-2 gap-y-2.5 sm:gap-3",
              "pb-0.5"
            )}
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300",
                  "sm:px-6 sm:py-2.5 sm:text-sm sm:tracking-widest",
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20 sm:scale-105"
                    : "border-white/15 text-white hover:border-primary/50 hover:text-primary"
                )}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl space-y-14 sm:space-y-16">
        {MENU_SECTIONS.filter((s) => activeCategory === "all" || activeCategory === s.id).map((section) => {
          const itemSection = itemsById[section.id];
          if (!itemSection?.items?.length) return null;
          return (
            <MenuSectionCards key={section.id} title={section.title} items={itemSection.items} />
          );
        })}
      </div>
    </main>
  );
}
