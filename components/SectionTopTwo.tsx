import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

function SectionTopWrapper({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("mb-7.5 lg:mb-12.5 text-center space-y-4.5", className)}>
      {children}
    </div>
  );
}

export { SectionTopWrapper };
