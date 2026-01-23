import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TypographyP from "@/components/typography/TypographyP";
import { IconFacebook } from "@/icons/IconFacebook";
import { IconInstagram } from "@/icons/IconInstagram";
import { IconYoutubeOne } from "@/icons/IconYoutubeOne";

interface IOurTeam {
  avatar: string;
  title: string;
  subtitle: string;
  facebookLink: string;
  instagramLink: string;
  youtubeLink: string;
}

export default function OurTeamItem({
  avatar,
  title,
  subtitle,
  facebookLink,
  instagramLink,
  youtubeLink,
}: IOurTeam) {
  return (
    <div className="px-4.5">
      <div className="max-w-78.5 aspect-square mb-8 mx-auto">
        <Image
          src={avatar}
          width={314}
          height={314}
          alt="Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="mb-5 text-center">
        <p className="text-22 leading-none font-bold mb-2">{title}</p>
        <TypographyP size="base" className="leading-[1.25]">
          {subtitle}
        </TypographyP>
      </div>

      <ul className="flex-x-center gap-2.5">
        <li>
          <Button asChild={true} size="size-46">
            <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild={true} size="size-46">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram />
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild={true} size="size-46">
            <Link href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <IconYoutubeOne />
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
