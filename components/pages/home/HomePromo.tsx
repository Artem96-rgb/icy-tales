import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface IHomePromoProps {
  title: ReactNode;
  description: string;
  link: {
    href: string;
    title: string;
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  backgroundImage: string;
}

export default function HomePromo({
  title,
  description,
  image,
  link,
  backgroundImage,
}: IHomePromoProps) {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="flex-y-center max-lg:flex-col gap-10 lg:gap-21">
        <div className="relative z-1 max-w-155">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <div className="rounded-full absolute top-27.5 left-7.5 -z-1 w-102 h-102 lg:w-87.5 lg:h-87.5 xl:w-144.5 xl:h-144.5 bg-popover max-lg:hidden"></div>
        </div>

        <div className="lg:max-w-126.5">
          <h2 className="mb-8.5">{title}</h2>

          <div className="max-w-140">
            <p className="text-xl leading-[1.3] text-ring mb-8.5">
              {description}
            </p>
          </div>

          <Button asChild={true} className="px-3 md:px-9">
            <Link href={link.href}>
              <span>{link.title}</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
