import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const socialItemVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-white/10",
        secondary: "bg-secondary",
      },
      size: {
        default: "w-11.5 h-11.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function SocialItem({
  children,
  className,
  variant = "default",
  size = "default",
}: ComponentProps<"li"> & VariantProps<typeof socialItemVariants>) {
  return (
    <li className={cn(socialItemVariants({ variant, size, className }))}>
      {children}
    </li>
  );
}
