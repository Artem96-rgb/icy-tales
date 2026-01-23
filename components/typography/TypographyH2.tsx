import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function TypographyH2({
  className,
  children,
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-4xl lg:text-5xl xl:text-6xl leading-[1.07] font-berkshireSwash [&_span]:text-primary",
        className,
      )}
    >
      {children}
    </h2>
  );
}
