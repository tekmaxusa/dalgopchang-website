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
  koTone: _koTone = "muted",
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Comp = (as ?? "div") as React.ElementType;
  return (
    <Comp className={cn("min-w-0", className)}>
      <div className={cn("min-w-0", enClassName)}>{en}</div>
      <div className={cn("min-w-0 text-white", koClassName)}>
        {ko}
      </div>
    </Comp>
  );
}

