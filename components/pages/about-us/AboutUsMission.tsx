import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IImage } from "@/types";
// import { TwoCirclesLittle } from "@/icons/TwoCirclesLittle";

interface IAboutUsMissionProps extends IImage {
  title: string;
  description: string;
  link: {
    href: string;
    title: string;
  };
}

export default function AboutUsMission({
  title,
  description,
  image,
  link,
}: IAboutUsMissionProps) {
  return (
    <section className="bg-secondary py-10 md:py-20 lg:py-39.5 relative overflow-hidden">
      <Container size="small" className="relative">
        <div className="lg:max-w-128">
          <h2 className="mb-10.5 text-background">{title}</h2>

          <div className="mb-12">
            <p className="text-xl leading-[1.6] text-background">
              {description}
            </p>
          </div>

          <Button asChild={true} className="px-9.75">
            <Link href={link.href}>
              <span>{link.title}</span>
              <ArrowRight size={16} strokeWidth={3} />
            </Link>
          </Button>
        </div>

        {/*<div className="absolute z-1 top-20 lg:bottom-51 left-1 lg:-left-4">*/}
        {/*  <TwoCirclesLittle />*/}
        {/*</div>*/}
      </Container>
      <div className="absolute top-0 right-0 z-1 h-full max-lg:hidden max-w-120 xl:max-w-150 2xl:max-w-199">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover object-center rounded-l-full"
        />
        <span className="absolute w-full h-full bg-primary rounded-l-full -top-7.5 right-5 -z-1"></span>
      </div>
    </section>
  );
}
