import { useState, useEffect } from "react";
import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { GOOGLE_MAPS_PLACE_URL } from "@/lib/maps";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "Special Deal", id: "special-deal" },
  { label: "Blog", id: "blog" },
];

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex min-h-[var(--header-height)] items-center px-4 sm:px-6 py-4",
        "transition-[background-color,box-shadow] duration-300",
        isScrolled ? "bg-black/95 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.85)] backdrop-blur-sm" : "bg-black"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div
          className="group shrink-0 cursor-pointer"
          onClick={() => onPageChange("home")}
        >
          <Logo size="md" className="items-start" />
        </div>

        {/* Desktop Nav — pinned to the right */}
        <nav className="hidden md:flex md:flex-1 md:justify-end" aria-label="Primary">
          <ul className="m-0 flex items-center gap-12 p-0 list-none">
            {navItems.map((item) => (
              <li key={item.id} className="list-none">
                <button
                  onClick={() => onPageChange(item.id)}
                  className={cn(
                    "relative px-1 py-2 text-base font-semibold uppercase leading-none tracking-[0.2em] transition-colors lg:text-lg lg:tracking-[0.18em]",
                    "text-white hover:text-white active:text-[#e11d48]",
                    currentPage === item.id && "text-[#e11d48]"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-0.5 left-0 right-0 mx-auto h-0.5 w-full origin-center rounded-full transition-all duration-200",
                      currentPage === item.id ? "bg-[#e11d48] opacity-100" : "bg-[#e11d48]/0 opacity-0"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile: hamburger on the far right (not centered) */}
        <div className="flex shrink-0 md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="h-14 w-14 shrink-0 text-foreground [&_svg]:!size-10" aria-label="Open menu" />
              }
            >
              <Menu className="!h-10 !w-10" strokeWidth={2.5} aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border p-0">
              <div className="flex flex-col h-full p-8">
                <div className="mb-12">
                  <Logo size="md" className="items-start" />
                </div>
                <nav aria-label="Primary" className="flex flex-col gap-4">
                  <ul className="m-0 flex flex-col gap-4 p-0 list-none">
                    {navItems.map((item) => (
                      <li key={item.id} className="list-none">
                        <button
                          onClick={() => {
                            onPageChange(item.id);
                          }}
                          className={cn(
                            "text-xl font-display font-bold text-left transition-colors",
                            "text-white hover:text-white active:text-[#e11d48]",
                            currentPage === item.id && "text-[#e11d48]"
                          )}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <a
                    href="tel:+14699955552"
                    className="flex items-start gap-3 text-white hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold leading-snug">+1 469-995-5552</span>
                  </a>
                  <a
                    href={GOOGLE_MAPS_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm leading-relaxed">
                      1060 W Frankford Rd Ste 115, Carrollton, TX 75007
                    </span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
