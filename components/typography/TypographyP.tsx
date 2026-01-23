import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const typographyPVariants = cva("text-ring leading-[1.3]", {
  variants: {
    size: {
      default: "text-base md:text-lg lg:text-xl",
      base: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function TypographyP({
  size = "default",
  className,
  children,
}: ComponentProps<"p"> & VariantProps<typeof typographyPVariants>) {
  return (
    <p className={cn(typographyPVariants({ size, className }))}>{children}</p>
  );
}
