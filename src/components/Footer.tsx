import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo + highlights */}
          <div>
            <div 
              className="mb-6 cursor-pointer"
              onClick={() => onPageChange("home")}
            >
              <Logo size="md" className="items-start" />
            </div>

            <ul className="mt-6 space-y-3 text-white text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#e11d48]">✦</span>
                <span>Best Gopchang &amp; KBBQ place in DFW</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e11d48]">✦</span>
                <span>Best Quality Food</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e11d48]">✦</span>
                <span>Good Vibes</span>
              </li>
            </ul>
          </div>

          {/* Middle: Get in touch */}
          <div className="lg:pl-6">
            <h4 className="text-white font-display font-extrabold text-lg mb-6">Get In Touch</h4>

            <div className="space-y-4 text-white text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e11d48] mt-0.5 shrink-0" />
                <div className="leading-relaxed">
                  <div>1060 W Frankford Rd Ste 115, Carrollton, TX 75007, United States</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#e11d48] mt-0.5 shrink-0" />
                <a className="hover:text-white transition-colors" href="tel:+14699955552">
                  +1 469-995-5552
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#e11d48] mt-0.5 shrink-0" />
                <a className="hover:text-white transition-colors" href="mailto:order@dalgopchang.com">
                  order@dalgopchang.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Hours */}
          <div>
            <h4 className="text-white font-display font-extrabold text-lg mb-6">Business Hours</h4>
            <div className="text-white text-sm space-y-1">
              <div className="font-semibold text-white mb-3">Dalgopchang 달곱창</div>
              <div>Monday 11:30 am–11 pm</div>
              <div>Tuesday 11:30 am–11 pm</div>
              <div>Wednesday 11:30 am–11 pm</div>
              <div>Thursday 11:30 am–11 pm</div>
              <div>Friday 11:30 am–12 am</div>
              <div>Saturday 11:30 am–12 am</div>
              <div>Sunday 11:30 am–10 pm</div>
            </div>

            <div className="mt-8 text-white text-sm">
              <div className="text-white font-semibold mb-3">Happy Hours</div>
              <div>Monday - Friday: 2 pm – 5 pm</div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-3">
          <p className="text-white text-xs text-center">
            © {new Date().getFullYear()} Dalgopchang 달곱창. All Rights Reserved. | Design by{" "}
            <span className="text-[#e11d48] font-semibold">TexMax LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
