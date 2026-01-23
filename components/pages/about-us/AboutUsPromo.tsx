import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";

export default function AboutUsPromo() {
  return (
    <section className="py-10 md:py-20 lg:py-37">
      <Container className="flex-y-center max-lg:flex-col gap-10 lg:gap-25.5 relative">
        <div className="max-w-100 lg:max-w-147.5">
          <Image
            src="/pages/about-us/about-us-promo.jpg"
            width={590}
            height={590}
            alt="Image"
            className="rounded-full"
          />
        </div>

        <div className="lg:max-w-141.25">
          <TypographyH2 className="mb-5 lg:mb-10.5">
            Our <span>Journey</span> Began With a Simple Dream
          </TypographyH2>

          <div className="space-y-7 mb-7 lg:mb-11">
            <TypographyP className="leading-[1.6]">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous new
              creations, every flavor is meticulously crafted in-house to ensure
              the highest quality and freshness.
            </TypographyP>

            <TypographyP className="leading-[1.6]">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </TypographyP>
          </div>

          <Button asChild={true} className="px-5 lg:px-8.5 text-lg">
            <Link href="/">
              <span>Read More</span>
              <ArrowRight size={16} strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
