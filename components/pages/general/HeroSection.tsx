import { cn } from "@/lib/utils";
import { Fragment } from "react";

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
  breadcrumbs: {
    id: string;
    title: string;
    link: string | null;
  }[];
  className?: string;
}

export default function HeroSection({
  title,
  className,
  breadcrumbs,
}: IHeroSectionProps) {
  console.log("HeroSection");
  return (
    <section
      className={cn(
        "py-10 md:py-20 lg:py-34.5 gradient mb-12.5 md:mb-25",
        className,
      )}
    >
      <TypographyH1 className="text-center mb-5">{title}</TypographyH1>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {breadcrumbs.map((breadcrumb) =>
            breadcrumb.link ? (
              <Fragment key={breadcrumb.id}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumb.link}>
                    {breadcrumb.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ) : (
              <BreadcrumbItem key={breadcrumb.id}>
                <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
              </BreadcrumbItem>
            ),
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
