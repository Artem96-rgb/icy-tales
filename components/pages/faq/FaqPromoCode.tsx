import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FaqPromoCode() {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center pt-12.5 pb-16.5 md:pt-20 md:pb-24 lg:pt-31 lg:pb-35"
      style={{ backgroundImage: "url(/faq/faq-promo-bg.jpg)" }}
    >
      <div className="flex-y-center px-3.75 gap-2">
        <div className="max-w-137 max-lg:hidden">
          <Image
            src="/faq/faq-promo-image-one.png"
            width={548}
            height={477}
            alt="Image"
          />
        </div>

        <div className="max-w-158.75 text-center">
          <TypographyH2 className="lg:text-6xl xl:text-8xl 2xl:text-[112px] text-background mb-5 lg:mb-10 leading-none">
            Limited Time Offer!
          </TypographyH2>

          <p className="text-xl md:text-2xl lg:text-3xl text-background leading-[1.05] mb-5 lg:mb-9">
            Get <span className="text-chart-4">20% Off</span> All Vegan Ice
            Creams!
          </p>

          <Button asChild className="px-6.5 mb-6" variant="secondary">
            <Link href="/" className="px-10.5">
              <span>Get This Deal</span>
              <ArrowRight size={12} strokeWidth={3} />
            </Link>
          </Button>

          <TypographyP size="base" className="text-background leading-none">
            Use code: VEGAN20 at checkout.
          </TypographyP>
        </div>

        <div className="max-w-123  max-lg:hidden">
          <Image
            src="/faq/faq-promo-image-two.png"
            width={492}
            height={531}
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
}
