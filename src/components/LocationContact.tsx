import { motion } from "motion/react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_PLACE_URL } from "@/lib/maps";

export default function LocationContact() {
  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary-heading text-sm mb-3 block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-7">
              <span className="text-white">FIND YOUR</span>{" "}
              <span className="text-primary">TABLE</span>
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Address</h3>
                  <p className="text-white text-lg leading-snug">
                    1060 W Frankford Rd Ste 115, Carrollton, TX 75007, United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-white text-lg">+1 469-995-5552</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="!h-auto bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-3.5 text-base font-bold"
              >
                <a href="tel:+14699955552">Call for Reservation</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group !h-auto border-white/10 hover:bg-white/5 rounded-full px-7 py-3.5 text-base font-bold"
              >
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap sm:w-auto"
                >
                  <span>Get Directions</span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mx-0 lg:justify-self-end shrink-0"
          >
            <div className="h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
              <div className="w-full h-full bg-black relative">
                <iframe
                  title="Dalgopchang Map"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={GOOGLE_MAPS_EMBED_URL}
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10" />
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass absolute left-3 bottom-3 right-3 sm:left-4 sm:bottom-4 rounded-xl border border-white/10 px-3 py-2 text-left transition-colors hover:border-primary/40 hover:bg-white/5 sm:px-4 sm:py-2.5"
                >
                  <p className="font-bold text-white text-sm">Dalgopchang 달곱창</p>
                  <p className="text-[11px] sm:text-xs text-white/90 leading-snug">
                    1060 W Frankford Rd Ste 115, Carrollton, TX 75007
                  </p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Open in Google Maps
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
