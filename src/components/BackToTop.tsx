import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      type="button"
      size="icon"
      variant="default"
      className="fixed bottom-6 right-4 z-40 h-11 w-11 rounded-full border border-white/25 bg-primary text-white shadow-[0_6px_20px_rgba(225,29,72,0.45),0_2px_8px_rgba(0,0,0,0.3)] hover:bg-primary/90 sm:bottom-8 sm:right-8"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp className="!h-5 !w-5" strokeWidth={2.25} aria-hidden />
    </Button>
  );
}
