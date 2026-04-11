import { motion } from "motion/react";
import { Gift, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import BilingualText from "../components/BilingualText";

export default function GiftCard() {
  return (
    <main className="pt-[var(--header-height)] pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary-heading text-sm mb-4 block">
            Give the Gift of Flavor <span className="text-white font-semibold">· 기프트 카드</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            <span className="text-white">GIFT</span> <span className="text-primary">CARDS</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Share the authentic Dalgopchang experience with your friends and family. 
            Perfect for any occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[1.6/1] rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 flex flex-col justify-between shadow-2xl shadow-primary/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
              <div className="flex justify-between items-start">
                <Logo size="sm" className="items-start" />
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white mb-2 font-bold">Premium Dining Experience</p>
                <h3 className="text-3xl font-display font-bold">DIGITAL GIFT CARD</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold">How it works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Choose Amount</h4>
                  <p className="text-white">Select from our preset values or enter a custom amount.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Personalize</h4>
                  <p className="text-white">Add a custom message for your recipient.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Instant Delivery</h4>
                  <p className="text-white">The digital gift card is sent directly to their email.</p>
                </div>
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold group">
              <BilingualText
                en={<span>Purchase Now</span>}
                ko={<span className="text-[12px] font-semibold tracking-wide">지금 구매하기</span>}
                koTone="normal"
                className="leading-none"
                koClassName="mt-1"
              />
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
