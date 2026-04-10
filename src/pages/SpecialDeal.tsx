import { motion } from "motion/react";
import { Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BilingualText from "@/components/BilingualText";

export default function SpecialDeal() {
  const deals = [
    {
      titleEn: "Lunch Special",
      titleKo: "런치스페셜",
      descriptionEn: "Pork soup (돼지국밥) — Mon–Sat — $9.99 (Soju: $9.99)",
      descriptionKo: "돼지국밥 — 월–토 — $9.99 (소주 $9.99)",
      tagEn: "Mon–Sat",
      tagKo: "월–토",
      icon: <Sparkles className="w-6 h-6 text-[#e11d48]" />
    },
    {
      titleEn: "Happy Hour Promotion",
      titleKo: "4월 스페셜",
      descriptionEn: "Mon–Sat 3pm–6pm — Gopchang / Daechang / Samgyeopsal / Pork rib — $14.99",
      descriptionKo: "월–토 3pm–6pm — 곱창 / 대창 / 삼겹살 / 돼지갈비 — $14.99",
      tagEn: "Mon–Sat • 3pm–6pm",
      tagKo: "월–토 • 3pm–6pm",
      icon: <Tag className="w-6 h-6 text-[#e11d48]" />
    },
    {
      titleEn: "Cowboy Combo",
      titleKo: "카우보이 콤보",
      descriptionEn: "Premium BBQ dining — Premium beef combo — $129.99",
      descriptionKo: "프리미엄 BBQ 다이닝 — 프리미엄 소고기 콤보 — $129.99",
      tagEn: "$129.99",
      icon: <Sparkles className="w-6 h-6 text-[#e11d48]" />
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-heading text-sm mb-4 block">
            Exclusive Offers <span className="text-black/60 font-semibold">· 특별 혜택</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            <span className="text-[#CFC6B4]">SPECIAL</span> <span className="text-primary">DEALS</span>
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Latest promotions and offers. <span className="text-black/60">최신 프로모션을 확인하세요.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/30 border border-white/5 rounded-3xl p-8 flex flex-col h-full hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#e11d48] mb-6 group-hover:scale-110 transition-transform">
                {deal.icon}
              </div>
              <div className="inline-flex flex-col px-3 py-1.5 rounded-full bg-black text-[#e11d48] text-[10px] font-bold uppercase tracking-widest mb-4 w-fit leading-none border border-black/80">
                <span>{deal.tagEn}</span>
                {deal.tagKo && (
                  <span className="mt-1 text-white/70 font-semibold normal-case tracking-normal">
                    {deal.tagKo}
                  </span>
                )}
              </div>
              <BilingualText
                className="mb-4"
                en={<h3 className="text-2xl text-black font-display font-bold leading-tight">{deal.titleEn}</h3>}
                ko={<div className="text-sm text-black/70 font-bold tracking-wide">{deal.titleKo}</div>}
                koClassName="mt-1"
              />
              <BilingualText
                className="mb-8 flex-1 leading-relaxed"
                en={<p className="text-black/70">{deal.descriptionEn}</p>}
                ko={<p className="text-black/60">{deal.descriptionKo}</p>}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
