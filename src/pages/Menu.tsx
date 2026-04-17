import { motion } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MENU_SECTIONS } from "@/data/menuImages";
import {
  MENU_ITEM_SECTIONS,
  type MenuItem,
  type MenuItemSection,
  displayMenuPrice,
  getEntreePriceCells,
  getMenuDescription,
} from "@/data/menuItems";
import { FileText } from "lucide-react";
import { withBaseUrl } from "@/lib/asset";
import DrinkMenuCompact from "@/components/DrinkMenuCompact";

const categories = [{ id: "all", label: "All" }, ...MENU_SECTIONS.map((s) => ({ id: s.id, label: s.title }))];

const ENTREE_PLACEHOLDER_IMAGE = "/photos/interior.png";

function MenuItemCards({ items, entree }: { items: MenuItem[]; entree?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, idx) => {
        const desc = getMenuDescription(item);
        const price = displayMenuPrice(item);
        const hasEntreeLunchDinner =
          !!entree && !!(item.priceLunch?.trim() && item.priceDinner?.trim());
        const cells = hasEntreeLunchDinner ? getEntreePriceCells(item) : null;
        const src = entree ? item.imageSrc ?? ENTREE_PLACEHOLDER_IMAGE : item.imageSrc!;

        return (
          <motion.div
            key={`${item.ko}|${item.en}|${idx}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            viewport={{ once: true }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/50 text-left shadow-[0_18px_55px_-35px_rgba(0,0,0,0.95)]"
          >
            <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-black/40 sm:h-[170px] md:h-[180px]">
              <img
                src={withBaseUrl(src)}
                alt={`${item.ko} — ${item.en}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
            </div>

            <div className="flex flex-1 flex-col gap-2 border-t border-white/10 p-4 sm:p-5">
              <div className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">{item.ko}</div>
              <div className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">{item.en}</div>
              {(item.descriptionKo || desc) && (
                <div className="space-y-1.5">
                  {item.descriptionKo && (
                    <p className="text-base leading-relaxed text-white sm:text-[17px]">{item.descriptionKo}</p>
                  )}
                  {desc && (
                    <p className="line-clamp-4 text-base leading-relaxed text-white/85 sm:text-[17px]">{desc}</p>
                  )}
                </div>
              )}
              {entree && cells ? (
                <div className="mt-auto grid grid-cols-2 gap-3 border-t border-white/10 pt-3 sm:pt-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm md:text-base">
                      Lunch
                    </div>
                    <div className="text-lg font-extrabold tabular-nums text-primary sm:text-xl">{cells.lunch}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm md:text-base">
                      Dinner
                    </div>
                    <div className="text-lg font-extrabold tabular-nums text-primary sm:text-xl">{cells.dinner}</div>
                  </div>
                </div>
              ) : (
                <div className="mt-auto pt-2 text-lg font-extrabold tabular-nums text-primary sm:text-xl">{price}</div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MenuSectionCards({ section }: { section: MenuItemSection }) {
  const isEntreeSection = section.id === "entree";
  const isDrinkSection = section.id === "drink";

  if (isDrinkSection) {
    return (
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 border-b border-white/10 pb-3 text-left text-2xl font-display font-extrabold uppercase tracking-[0.12em] text-white md:text-3xl">
            {section.title}
          </h2>
          <DrinkMenuCompact />
        </div>
      </section>
    );
  }

  const cardItems = isEntreeSection ? section.items : section.items.filter((i) => i.imageSrc);
  if (cardItems.length === 0) return null;

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 border-b border-white/10 pb-3 text-left text-2xl font-display font-extrabold uppercase tracking-[0.12em] text-white md:text-3xl">
          {section.title}
        </h2>
        {isEntreeSection && section.lunchMenuHoursEn1 && section.lunchMenuHoursEn2 && (
          <div className="mb-6 rounded-xl border border-primary/35 bg-primary/[0.08] px-4 py-3 text-sm leading-relaxed text-white/95 sm:text-base">
            <p className="font-bold uppercase tracking-wide text-primary">
              <span className="block sm:inline">{section.lunchMenuHoursEn1}</span>
              <span className="hidden sm:inline" aria-hidden>
                {" "}
                ·{" "}
              </span>
              <span className="mt-1 block sm:mt-0 sm:inline">{section.lunchMenuHoursEn2}</span>
            </p>
            {section.lunchMenuHoursKo1 && section.lunchMenuHoursKo2 && (
              <p className="mt-1.5 text-white/85">
                <span className="block sm:inline">{section.lunchMenuHoursKo1}</span>
                <span className="hidden sm:inline" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                <span className="mt-1 block sm:mt-0 sm:inline">{section.lunchMenuHoursKo2}</span>
              </p>
            )}
          </div>
        )}
        <MenuItemCards items={cardItems} entree={isEntreeSection} />
      </div>
    </section>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const menuItemsAnchorRef = useRef<HTMLDivElement>(null);
  const categoryScrollSkipRef = useRef(true);

  const itemsById = Object.fromEntries(MENU_ITEM_SECTIONS.map((s) => [s.id, s]));

  useEffect(() => {
    if (categoryScrollSkipRef.current) {
      categoryScrollSkipRef.current = false;
      return;
    }
    menuItemsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategory]);

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
            <a
              href={withBaseUrl("/DalgopchangMenu.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-white/20 bg-transparent px-6 py-5 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" aria-hidden />
                <span className="font-bold uppercase tracking-wider">View PDF menu</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          "sticky z-40 border-b border-white/10 bg-black/95 pt-2.5 pb-5 backdrop-blur-md sm:pt-3 sm:pb-6",
          "top-[var(--header-height)]",
          "shadow-[0_8px_32px_-10px_rgba(0,0,0,0.9)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-0 sm:px-6">
          <div
            className={cn(
              "flex flex-nowrap items-stretch justify-start gap-2 overflow-x-auto px-3 pb-0.5 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0",
              "scroll-pl-3 scroll-pr-3 [-webkit-overflow-scrolling:touch]",
              /* Hide horizontal scrollbar (no red track) while keeping swipe scroll */
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300",
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

      <div
        ref={menuItemsAnchorRef}
        className="mx-auto mt-10 max-w-7xl space-y-14 scroll-mt-[calc(var(--header-height)+5.5rem)] sm:space-y-16"
      >
        {MENU_SECTIONS.filter((s) => activeCategory === "all" || activeCategory === s.id).map((section) => {
          const itemSection = itemsById[section.id];
          if (!itemSection) return null;
          if (!itemSection.items?.length && section.id !== "drink") return null;
          return (
            <Fragment key={section.id}>
              <MenuSectionCards section={itemSection} />
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}
