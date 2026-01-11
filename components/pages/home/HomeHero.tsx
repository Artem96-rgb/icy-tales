import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface IHomeHeroProps {
  subtitle: string;
  title: ReactNode;
  description: string;
  link: {
    href: string;
    title: string;
  };
  image: {
    url: string;
    alt: string;
  };
}

export default function HomeHero({
  subtitle,
  title,
  description,
  image,
  link,
}: IHomeHeroProps) {
  return (
    <div className="mb-2 pt-41.5 bg-[linear-gradient(90deg,#EFD7EF_8%,#F5F9FC_39%,#F8EAE1_66%,#EAF8F9_91%)] relative">
      <Container className="flex items-center">
        <div className="lg:max-w-194">
          <div className="before:content-[''] before:h-0.75 before:w-8 md:before:w-16 before:bg-secondary before:block flex-y-center gap-4 mb-2.5">
            <p className="font-berkshireSwash text-2xl md:text-40 leading-none">
              {subtitle}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl 2xl:text-112 leading-none text-secondary-foreground mb-5">
            {title}
          </h1>

          <div className="max-w-140">
            <p className="text-lg md:text-22 mb-8.5">{description}</p>
          </div>

          <Button
            asChild={true}
            className="px-3 md:px-9 gap-4.5"
            variant="secondary"
          >
            <Link href={link.href}>
              <span>{link.title}</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="relative z-1 lg:max-w-167.5 max-lg:hidden">
          <Image src={image.url} alt={image.alt} width={669} height={783} />
          <div className="rounded-full  absolute -top-10 -left-10 -z-1 w-102 h-102 xl:w-122 xl:h-122 2xl:w-182 2xl:h-182 bg-primary"></div>
        </div>
      </Container>
      <div className="">
        <Image src="/wave.png" width={1920} height={125} alt="Wave" />
      </div>
    </div>
  );
}

// bg-[linear-gradient(90deg,rgba(255,255,255,1)_10%,rgba(0,0,0,0)_100%)]
