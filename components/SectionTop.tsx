import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ISectionTopProps {
  title: ReactNode;
  subtitle?: string;
  className?: string;
}
export default function SectionTop({
  title,
  subtitle,
  className,
}: ISectionTopProps) {
  return (
    <div className={cn("mb-12.5 text-center", className)}>
      <h2 className="[&_span]:text-primary">{title}</h2>
      {subtitle && (
        <p className="text-lg lg:text-xl leading-[1.3] text-ring">{subtitle}</p>
      )}
    </div>
  );
}
