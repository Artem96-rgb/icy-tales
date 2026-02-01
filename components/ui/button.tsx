import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-4.5 whitespace-nowrap rounded-full text-base/4 font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer border [&_svg]:size-3.5 [&_svg]:stroke-3 [&_svg]:transition-all px-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-secondary border-primary hover:border-secondary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "bg-background hover:bg-primary hover:text-background",
        secondary:
          "bg-secondary text-white hover:bg-primary border-secondary hover:border-primary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "hover:text-primary border-none",
        transparent: "bg-transparent",
      },
      size: {
        default: "h-13 lg:h-15.5",
        sm: "h-8",
        lg: "h-13",
        xl: "w-16 h-16",
        "h-30": "h-7.5",
        "h-50": "h-12.5",
        "size-46": "w-11.5 h-11.5",
        auto: "h-auto",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-8 lg:size-11.5 [&_svg]:size-4",
        "icon-9.5": "size-9.5 ",
        "icon-10": "size-9.5 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
