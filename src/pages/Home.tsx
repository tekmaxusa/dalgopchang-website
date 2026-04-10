import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import AboutSection from "@/components/AboutSection";
import LocationContact from "@/components/LocationContact";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BilingualText from "@/components/BilingualText";

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <main className="pt-0">
      <Hero 
        onViewMenu={() => onPageChange("menu")} 
        onFindLocation={() => {
          const element = document.getElementById('location-section');
          element?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />
      
      <ImageGallery />
      
      <AboutSection />

      <div id="location-section">
        <LocationContact />
      </div>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">
            <span className="text-[#CFC6B4]">READY TO TASTE THE</span> <br />
            <span className="text-gradient">AUTHENTIC SIZZLE?</span>
          </h2>
          <p className="text-black/70 font-semibold tracking-wide mb-6">
            진짜 한국 BBQ의 맛을 지금 경험해보세요.
          </p>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
            Join us for an unforgettable Korean BBQ experience. 
            Our tables are waiting for you.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl font-bold group"
            onClick={() => onPageChange("menu")}
          >
            <BilingualText
              en={<span>Explore Our Menu</span>}
              ko={<span className="text-[12px] font-semibold tracking-wide">메뉴 보러가기</span>}
              koTone="normal"
              className="leading-none"
              koClassName="mt-1"
            />
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  );
}
