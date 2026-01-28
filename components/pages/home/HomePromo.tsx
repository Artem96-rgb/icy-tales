import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TwoCirclesLittle } from "@/icons/TwoCirclesLittle";
import TypographyP from "@/components/typography/TypographyP";
import TypographyH2 from "@/components/typography/TypographyH2";

export default function HomePromo() {
  return (
    <section className="max-lg:mb-12.5">
      <Container
        size="large"
        className="flex-y-center max-lg:flex-col gap-10 lg:gap-21 relative"
      >
        <div className="relative z-1 max-w-155 max-lg:hidden">
          <Image
            src="/home-promo.png"
            alt="Home Promo"
            width={619}
            height={724}
          />
          <div className="rounded-full aspect-square bg-popover absolute top-27.5 sm:left-7.5 -z-1 w-70 sm:w-144.5 lg:w-87.5 xl:w-144.5"></div>
        </div>

        <div className="lg:max-w-126.5">
          <TypographyH2 className="mb-5 lg:mb-8.5">
            Relive the Sweet Memories of Classic <span>Ice Creams</span>
          </TypographyH2>

          <div className="max-w-140">
            <TypographyP className="mb-5 lg:mb-8.5">
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </TypographyP>
          </div>

          <Button asChild={true} className="px-3 md:px-9">
            <Link href={"/shop"}>
              <span>Explore Our Menu</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
