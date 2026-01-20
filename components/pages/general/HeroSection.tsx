import { cn } from "@/lib/utils";

import TypographyH1 from "@/components/typography/TypographyH1";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IHeroSectionProps {
  title: string;
  className?: string;
}

export default function HeroSection({ title, className }: IHeroSectionProps) {
  return (
    <div className={cn("py-10 md:py-20 lg:py-34.5 gradient", className)}>
      <TypographyH1 className="text-center mb-5">{title}</TypographyH1>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Product Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
