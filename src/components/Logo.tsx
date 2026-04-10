import { cn } from "@/lib/utils";
import { withBaseUrl } from "@/lib/asset";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-10",
    md: "h-16 md:h-20",
    lg: "h-24 md:h-32"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizes[size])}>
        <img 
          src={withBaseUrl("/logo.png")}
          alt="Dalgopchang Logo" 
          className="h-full w-auto object-contain"
          onError={(e) => {
            // Fallback to text if image fails
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = `
              <div class="flex flex-col items-start leading-none">
                <span class="font-display font-black tracking-tighter text-cream text-3xl">달곱창</span>
                <span class="font-sans font-bold tracking-[0.2em] text-cream text-[10px] uppercase">DALGOPCHANG</span>
              </div>
            `;
          }}
        />
      </div>
    </div>
  );
}
