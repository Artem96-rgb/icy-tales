import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

const typographyH1Variants = cva("leading-none [&_span]:text-primary", {
  variants: {
    size: {
      default: "text-[80px]",
      xl: "text-4xl sm:text-5xl lg:text-7xl 2xl:text-112",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
export default function TypographyH1({
  size = "default",
  className,
  children,
}: React.ComponentProps<"h1"> & VariantProps<typeof typographyH1Variants>) {
  return (
    <h1 className={cn(typographyH1Variants({ size, className }))}>
      {children}
    </h1>
  );
}
