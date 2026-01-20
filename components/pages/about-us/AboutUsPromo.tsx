import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
          <h2 className="mb-5 lg:mb-10.5">
            Our <span className="text-primary">Journey</span> Began With a
            Simple Dream
          </h2>

          <div className="space-y-7 mb-7 lg:mb-11 text-base lg:text-xl/8 text-ring">
            <p>
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous new
              creations, every flavor is meticulously crafted in-house to ensure
              the highest quality and freshness.
            </p>
            <p>
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
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
