import { motion } from "motion/react";
import { PRICES, SOJU_FLAVORS, SOJU_STANDARD, type DrinkRow } from "@/data/drinkMenu";

function Row({ row }: { row: DrinkRow }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <span className="text-sm font-semibold leading-snug text-white sm:text-[15px]">{row.ko}</span>
      <span className="text-[13px] leading-snug text-white/75 sm:text-right sm:text-sm">{row.en}</span>
    </div>
  );
}

export default function DrinkMenuCompact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/50 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)]"
    >
      {/* Soju */}
      <section className="border-b border-white/10 p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.15em] text-primary sm:text-2xl">Soju</h3>
            <p className="text-base font-semibold text-white/80">소주</p>
          </div>
          <span className="text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">{PRICES.soju}</span>
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/50 sm:text-sm">Standard</p>
        <div className="space-y-2.5 rounded-lg bg-black/30 px-3 py-3 sm:px-4">
          {SOJU_STANDARD.map((row) => (
            <div key={row.en}>
              <Row row={row} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">Flavored Soju</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/10 px-3 py-3 sm:px-4">
            <p className="min-w-0 flex-1 text-xs font-medium uppercase leading-relaxed tracking-wide text-white/95 sm:text-sm">
              {SOJU_FLAVORS}
            </p>
            <span className="shrink-0 text-xl font-extrabold tabular-nums text-primary sm:text-2xl">{PRICES.flavoredSoju}</span>
          </div>
        </div>
      </section>

      {/* Highball + Wine — side by side on md */}
      <div className="grid border-b border-white/10 md:grid-cols-2">
        <section className="border-b border-white/10 p-4 sm:p-5 md:border-b-0 md:border-r md:border-white/10">
          <div className="mb-2 flex items-end justify-between gap-2">
            <div>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.15em] text-primary sm:text-2xl">Highball</h3>
              <p className="text-base font-semibold text-white/80">하이볼</p>
            </div>
            <span className="text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">{PRICES.highball}</span>
          </div>
          <p className="text-base text-white/85">Peach, Grapefruit</p>
        </section>
        <section className="p-4 sm:p-5">
          <div className="mb-2 flex items-end justify-between gap-2">
            <div>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.15em] text-primary sm:text-2xl">Wine</h3>
              <p className="text-base font-semibold text-white/80">와인</p>
            </div>
            <span className="text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">{PRICES.wine}</span>
          </div>
          <ul className="space-y-1.5 text-base text-white/90">
            <li>
              <span className="font-semibold">막걸리</span> <span className="text-white/65">Makgeolli</span>
            </li>
            <li>
              <span className="font-semibold">복분자</span> <span className="text-white/65">Bokbunja</span>
            </li>
            <li>
              <span className="font-semibold">백세주</span> <span className="text-white/65">Baekseju</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Beer */}
      <section className="border-b border-white/10 p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.15em] text-primary sm:text-2xl">Beer</h3>
          <p className="text-base font-semibold text-white/80">맥주</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-3 sm:p-4">
            <div className="mb-2 inline-block rounded bg-primary px-2 py-0.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs">Domestic</span>
            </div>
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <span className="text-sm font-semibold uppercase tracking-wide text-white/90">Domestic</span>
              <span className="text-xl font-extrabold tabular-nums text-primary sm:text-2xl">{PRICES.beerDomestic}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/80">Coors Light, Shiner Bock, Miller Lite</p>
          </div>
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-3 sm:p-4">
            <div className="mb-2 inline-block rounded bg-primary px-2 py-0.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs">Imported</span>
            </div>
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <span className="text-sm font-semibold uppercase tracking-wide text-white/90">Imported</span>
              <span className="text-xl font-extrabold tabular-nums text-primary sm:text-2xl">{PRICES.beerImported}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Heineken, Asahi, Corona, Sapporo, Tsingtao, Kirin Ichiban
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-white/15 bg-black/40 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-base font-bold uppercase tracking-wide text-white">Terra</span>
              <span className="text-xl font-extrabold tabular-nums text-primary sm:text-2xl">{PRICES.beerTerra}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soda */}
      <section className="p-4 sm:p-5">
        <div className="mb-3 flex items-end justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-extrabold uppercase tracking-[0.15em] text-primary sm:text-2xl">Soda</h3>
            <p className="text-base font-semibold text-white/80">음료</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {[
            { label: "Soda", labelKo: "소다", price: PRICES.soda },
            { label: "Milkis", labelKo: "밀키스", price: PRICES.milkis },
            { label: "Hongcho", labelKo: "홍초", price: PRICES.hongcho },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5"
            >
              <span className="text-base font-semibold text-white">
                {item.label} <span className="text-white/55">· {item.labelKo}</span>
              </span>
              <span className="text-lg font-extrabold tabular-nums text-primary sm:text-xl">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
