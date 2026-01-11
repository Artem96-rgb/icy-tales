import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IContainerProps {
  children: ReactNode;
  size?: "small";
  className?: string;
}

export default function Container({
  children,
  size,
  className,
}: IContainerProps) {
  return (
    <div
      className={cn(
        "container",
        size === "small" ? "container-small" : "container-big",
        className,
      )}
    >
      {children}
    </div>
  );
}
