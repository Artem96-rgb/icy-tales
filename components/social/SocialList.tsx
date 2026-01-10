import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ISocialListProps {
  children: ReactNode;
  className?: string;
}

export default function SocialList({ children, className }: ISocialListProps) {
  return <ul className={cn("flex flex-wrap gap-4", className)}>{children}</ul>;
}
