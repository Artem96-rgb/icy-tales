import { Loader2Icon } from "lucide-react";
import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-6 animate-spin mx-auto text-primary", className)}
      {...props}
    />
  );
}

export { Spinner };
