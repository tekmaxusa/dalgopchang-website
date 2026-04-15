import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { GOOGLE_MAPS_PLACE_URL } from "@/lib/maps";

interface FooterProps {
  onPageChange: (page: string) => void;
}

const highlights = [
  "Best Gopchang & KBBQ in DFW",
  "Quality ingredients, bold flavor",
  "Warm, modern dining room",
];

const sectionTitle =
  "mb-5 font-display text-2xl font-extrabold uppercase tracking-[0.12em] text-primary sm:text-3xl";

export default function Footer({ onPageChange }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#030303]">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-primary/45 to-transparent"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => onPageChange("home")}
              className="block text-left rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              <Logo size="lg" className="items-start mb-5" />
            </button>
            <p className="text-white/65 text-base leading-relaxed max-w-sm mb-6 sm:text-[17px]">
              Authentic Korean gopchang and BBQ in Carrollton — sizzle, tradition, and good vibes at
              every table.
            </p>
            <ul className="space-y-2.5 text-base text-white/85 mb-6 sm:text-[17px]">
              {highlights.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="text-primary shrink-0 mt-0.5">✦</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/p/Dalgopchang-100070045609590/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                aria-label="Dalgopchang on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.instagram.com/dalgopchang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                aria-label="Dalgopchang on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Contact + hours */}
          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-2 lg:gap-10">
            <div>
              <h4 className={sectionTitle}>Contact</h4>
              <div className="space-y-4 text-base text-white/85 sm:text-[17px]">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                  <address className="not-italic leading-relaxed">
                    <a
                      href={GOOGLE_MAPS_PLACE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      1060 W Frankford Rd Ste 115, Carrollton, TX 75007
                    </a>
                  </address>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                  <a className="font-semibold hover:text-white transition-colors" href="tel:+14699955552">
                    +1 469-995-5552
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                  <a
                    className="break-all hover:text-white transition-colors"
                    href="mailto:order@dalgopchang.com"
                  >
                    order@dalgopchang.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className={sectionTitle}>Hours</h4>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base text-white/90 sm:px-5 sm:py-5 sm:text-[17px]">
                <p className="font-semibold text-white mb-3 pb-3 border-b border-white/10">
                  Dalgopchang <span className="text-white/70">달곱창</span>
                </p>
                <ul className="space-y-2.5 text-white/75">
                  <li className="flex justify-between gap-3">
                    <span>Mon–Thu</span>
                    <span className="tabular-nums text-white/90 font-medium">11:30 am – 11 pm</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span>Fri–Sat</span>
                    <span className="tabular-nums text-white/90 font-medium">11:30 am – 12 am</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span>Sun</span>
                    <span className="tabular-nums text-white/90 font-medium">11:30 am – 10 pm</span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-primary/30">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary mb-1.5">
                    Happy hours
                  </p>
                  <p className="text-base font-medium text-white">Mon–Fri · 2 pm – 5 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-white/50 sm:text-base">
            © {year} Dalgopchang 달곱창. All rights reserved.
          </p>
          <p className="text-sm text-white/50 sm:text-base">
            Design by <span className="font-semibold text-primary/90">TexMax LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
