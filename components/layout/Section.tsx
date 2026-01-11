import type { ReactNode } from "react";
import Container from "@/components/Container";

interface ISectionProps {
  children: ReactNode;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  className,
}: ISectionProps) {
  return (
    <section className={className}>
      <Container className="space-y-12.5 text-center">
        <div>
          <h2>{title}</h2>
          {subtitle && (
            <p className="text-xl leading-[1.3] text-ring">{subtitle}</p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
