import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IImage } from "@/types";

type LogoProps = {
  image: IImage;
  linkClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
};

export default function Logo({
  image,
  linkClassName,
  imageClassName,
  titleClassName,
}: LogoProps) {
  return (
    <Link href="/" className={cn("flex-y-center gap-2", linkClassName)}>
      <div className={cn("max-w-10.5", imageClassName)}>
        <Image
          src={image.url}
          alt={image.alt || "Logo"}
          width={image.width}
          height={image.height}
        />
      </div>

      <span
        className={cn(
          "font-berkshireSwash text-2xl lg:text-32 leading-11.5 text-primary [&_span]:text-secondary",
          titleClassName,
        )}
      >
        Icy
        <span>Tales</span>
      </span>
    </Link>
  );
}
