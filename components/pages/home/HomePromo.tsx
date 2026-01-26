import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TwoCirclesLittle } from "@/icons/TwoCirclesLittle";
import { IImage } from "@/types";
import TypographyP from "@/components/typography/TypographyP";
import TypographyH2 from "@/components/typography/TypographyH2";

interface IHomePromoProps extends IImage {
  title: ReactNode;
  description: string;
  link: {
    href: string;
    title: string;
  };
}

export default function HomePromo({
  title,
  description,
  image,
  link,
}: IHomePromoProps) {
  return (
    <section>
      <Container
        size="large"
        className="flex-y-center max-lg:flex-col gap-10 lg:gap-21 relative"
      >
        <div className="relative z-1 max-w-155">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <div className="rounded-full aspect-square bg-popover absolute top-27.5 sm:left-7.5 -z-1 w-70 sm:w-144.5 lg:w-87.5 xl:w-144.5 max-sm:hidden"></div>
        </div>

        <div className="lg:max-w-126.5">
          <TypographyH2 className="mb-8.5">{title}</TypographyH2>

          <div className="max-w-140">
            <TypographyP className="mb-8.5">{description}</TypographyP>
          </div>

          <Button asChild={true} className="px-3 md:px-9">
            <Link href={link.href}>
              <span>{link.title}</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="absolute z-1 top-20 lg:bottom-51 left-1 lg:-left-4">
          <TwoCirclesLittle />
        </div>
      </Container>
    </section>
  );
}
