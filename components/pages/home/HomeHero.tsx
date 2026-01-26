import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TypographyH1 from "@/components/typography/TypographyH1";

export default function HomeHero() {
  return (
    <div className="mb-2 pt-41.5 bg-[linear-gradient(90deg,#EFD7EF_8%,#F5F9FC_39%,#F8EAE1_66%,#EAF8F9_91%)] relative">
      <Container size="large" className="flex-y-center justify-between">
        <div className="lg:max-w-194">
          <div className="before:content-[''] before:h-0.75 before:w-8 md:before:w-16 before:bg-secondary before:block flex-y-center gap-4 mb-2.5">
            <p className="font-berkshireSwash text-2xl md:text-40 leading-none">
              Welcome to The
            </p>
          </div>

          <TypographyH1 className="mb-5">
            Discover <span>Sweet</span> Delights!
          </TypographyH1>

          <div className="max-w-140">
            <p className="text-lg md:text-22 mb-8.5">
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>
          </div>

          <Button
            asChild={true}
            className="px-3 md:px-9 gap-4.5"
            variant="secondary"
          >
            <Link href="/">
              <span>Browse Our Classic Flavors</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="relative z-1 lg:max-w-167.5 max-lg:hidden">
          <Image
            src="/home-hero-content.png"
            alt="Home Hero"
            width={669}
            height={783}
          />
          <div className="rounded-full absolute -top-10 -left-10 -z-1 w-102 h-102 xl:w-122 xl:h-122 2xl:w-182 2xl:h-182 bg-primary"></div>
        </div>
      </Container>
      <div className="">
        <Image src="/wave.png" width={1920} height={125} alt="Wave" />
      </div>
    </div>
  );
}
