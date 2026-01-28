import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface INoProductsMessageProps {
  title: string;
  description: string;
}

export default function NoProductsMessage({
  title,
  description,
}: INoProductsMessageProps) {
  return (
    <SectionTopWrapper className="lg:mb-0">
      <TypographyH2>{title}</TypographyH2>
      <TypographyP>{description}</TypographyP>
      <Button asChild className="px-6.5">
        <Link href="/shop">
          <span>Go to shop page</span>
          <ArrowRight />
        </Link>
      </Button>
    </SectionTopWrapper>
  );
}
