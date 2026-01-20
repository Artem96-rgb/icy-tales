import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

function SectionTopWrapper({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("mb-12.5 text-center space-y-4.5", className)}>
      {children}
    </div>
  );
}

function SectionTopTitle({ className, children }: ComponentProps<"h2">) {
  return <h2 className={cn(className)}>{children}</h2>;
}

function SectionTopSubTitle({ className, children }: ComponentProps<"p">) {
  return (
    <p className={cn("text-lg lg:text-xl leading-[1.3] text-ring", className)}>
      {children}
    </p>
  );
}

function SectionTopHighlightedText({
  className,
  children,
}: ComponentProps<"span">) {
  return <span className={cn("text-primary", className)}>{children}</span>;
}

export {
  SectionTopWrapper,
  SectionTopTitle,
  SectionTopSubTitle,
  SectionTopHighlightedText,
};
