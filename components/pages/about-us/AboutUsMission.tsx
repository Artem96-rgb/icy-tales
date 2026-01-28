import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";

export default function AboutUsMission() {
  return (
    <section className="bg-secondary py-10 md:py-20 lg:py-39.5 relative overflow-hidden">
      <Container size="small" className="relative">
        <div className="lg:max-w-128">
          <TypographyH2 className="text-background mb-5.5 lg:mb-10.5">
            Our Mission is to Create Moments
          </TypographyH2>

          <TypographyP className="text-background leading-[1.6] mb-7.5 lg:mb-12">
            We strive to foster a welcoming and joyful environment where
            customers of all ages can gather, celebrate, and make lasting
            memories. Our commitment extends beyond serving great ice cream.
          </TypographyP>

          <Button asChild={true} className="px-9.75">
            <Link href={"/"}>
              <span>Read More</span>
              <ArrowRight size={16} strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </Container>
      <div className="absolute top-0 right-0 z-1 h-full max-lg:hidden max-w-120 xl:max-w-150 2xl:max-w-199">
        <Image
          src="/pages/about-us/about-us-mission.jpg"
          alt="Mission"
          width={1200}
          height={675}
          className="w-full h-full object-cover object-center rounded-l-full"
        />
        <span className="absolute w-full h-full bg-primary rounded-l-full -top-7.5 right-5 -z-1"></span>
      </div>
    </section>
  );
}
