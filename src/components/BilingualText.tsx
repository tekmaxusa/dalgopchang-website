import * as React from "react";
import { cn } from "@/lib/utils";

type Props<T extends React.ElementType> = {
  as?: T;
  en: React.ReactNode;
  ko: React.ReactNode;
  className?: string;
  enClassName?: string;
  koClassName?: string;
  koTone?: "muted" | "normal";
};

export default function BilingualText<T extends React.ElementType = "div">({
  as,
  en,
  ko,
  className,
  enClassName,
  koClassName,
  koTone = "muted",
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Comp = (as ?? "div") as React.ElementType;
  return (
    <Comp className={cn("min-w-0", className)}>
      <div className={cn("min-w-0", enClassName)}>{en}</div>
      <div
        className={cn(
          "min-w-0",
          koTone === "muted" ? "text-white/65" : "text-white/85",
          koClassName
        )}
      >
        {ko}
      </div>
    </Comp>
  );
}

