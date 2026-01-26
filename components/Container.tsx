import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IContainerProps {
  children: ReactNode;
  size?: "small" | "large";
  className?: string;
}

export default function Container({
  children,
  size = "small",
  className,
}: IContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-3.75",
        size === "small" ? "xl:max-w-285" : "2xl:max-w-370",
        className,
      )}
    >
      {children}
    </div>
  );
}
