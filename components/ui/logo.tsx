import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Logo({ variant = "primary", className }: LogoProps) {
  const isPrimary = variant === "primary";

  return (
    <Link href="/" className="flex-y-center gap-2">
      <div className="max-w-10.5">
        <Image
          src={isPrimary ? "/header-logo.png" : "/footer-logo.png"}
          alt="Logo"
          width={42}
          height={70}
        />
      </div>

      <span className="font-berkshireSwash text-32 leading-11.5 text-primary">
        Icy
        <span className={cn("text-secondary", className)}>Tales</span>
      </span>
    </Link>
  );
}
