import { motion } from "motion/react";
import { Tag } from "lucide-react";
import BilingualText from "../components/BilingualText";

export default function SpecialDeal() {
  const deals = [
    {
      titleEn: "Happy Hour",
      titleKo: "해피 아워",
      descriptionEn: "Small intestines — $14.99\nLarge intestines — $14.99",
      descriptionKo: "소곱창 — $14.99\n소대창 — $14.99",
      tagEn: "Mon–Fri • 2pm–5pm",
      tagKo: "월–금 • 2pm–5pm",
      icon: <Tag className="h-7 w-7 text-primary sm:h-8 sm:w-8" strokeWidth={1.75} />,
    },
  ];

  return (
    <main className="relative overflow-hidden pb-24 pt-[var(--header-height)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(55vh,520px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.577_0.215_17.385/0.22),transparent_65%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 pt-10 text-center sm:mb-20 sm:pt-14 md:pt-16"
        >
          <span className="text-secondary-heading mb-4 block text-sm sm:text-base">
            Exclusive Offers
          </span>
          <h1 className="mb-6 font-display text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">SPECIAL</span> <span className="text-primary">DEALS</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Latest promotions and offers.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8">
          {deals.map((deal, index) => (
            <motion.article
              key={deal.titleEn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/55 p-8 shadow-[0_28px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-all duration-300 hover:border-primary/35 hover:shadow-[0_32px_80px_-36px_rgba(225,29,72,0.18)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80 transition-opacity group-hover:opacity-100"
                aria-hidden
              />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-primary shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/25">
                {deal.icon}
              </div>

              <div className="mb-5 inline-flex w-fit max-w-full flex-col rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-left leading-tight">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
                  {deal.tagEn}
                </span>
                {deal.tagKo && (
                  <span className="mt-1 text-xs font-semibold tracking-normal text-white/95 sm:text-sm">
                    {deal.tagKo}
                  </span>
                )}
              </div>

              <BilingualText
                className="mb-6"
                en={
                  <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
                    {deal.titleEn}
                  </h2>
                }
                ko={
                  <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
                    {deal.titleKo}
                  </h2>
                }
                koClassName="mt-2"
              />

              <BilingualText
                className="mt-auto flex-1 leading-relaxed"
                en={
                  <p className="whitespace-pre-line text-base text-white/95 sm:text-lg md:text-[1.125rem]">
                    {deal.descriptionEn}
                  </p>
                }
                ko={
                  <p className="whitespace-pre-line text-base text-white/95 sm:text-lg md:text-[1.125rem]">
                    {deal.descriptionKo}
                  </p>
                }
                koClassName="mt-3"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
