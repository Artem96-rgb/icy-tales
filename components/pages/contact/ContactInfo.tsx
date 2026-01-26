import TypographyP from "@/components/typography/TypographyP";
import { Globe, PhoneCall, MessageSquare } from "lucide-react";

export default function ContactInfo() {
  return (
    <ul className="grid items-start gap-7.5 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:max-w-87.5">
      <li className="flex-y-center gap-7.5 shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] rounded-2xl py-9.5 pl-8 pr-4">
        <div className="max-w-18.75 w-full aspect-square rounded-full bg-secondary md:flex-center max-md:hidden">
          <Globe size={35} className="text-background" />
        </div>
        <div>
          <h3 className="text-xl font-bold leading-[1.2] mb-2">Our Location</h3>
          <TypographyP size="base">
            121 King Street, Melbourne Victoria 3000 Australia
          </TypographyP>
        </div>
      </li>

      <li className="flex-y-center gap-7.5 shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] rounded-2xl py-9.5 pl-8 pr-4">
        <div className="max-w-18.75 w-full aspect-square rounded-full bg-secondary md:flex-center max-md:hidden">
          <PhoneCall size={35} className="text-background" />
        </div>
        <div>
          <h3 className="text-xl font-bold leading-[1.2] mb-2">Phone Number</h3>
          <a
            className="text-ring text-base"
            href="tel:+61383766284"
            aria-label="Call +61 3 8376 6284"
          >
            (+61 3 8376 6284)
          </a>
          <a
            className="text-ring text-base"
            href="tel:+80023456789"
            aria-label="Call +800 2345 6789"
          >
            (+800 2345 6789)
          </a>
        </div>
      </li>

      <li className="flex-y-center gap-7.5 shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] rounded-2xl py-9.5 pl-8 pr-4">
        <div className="max-w-18.75 w-full aspect-square rounded-full bg-secondary md:flex-center max-md:hidden">
          <MessageSquare size={35} className="text-background" />
        </div>
        <div>
          <h3 className="text-xl font-bold leading-[1.2] mb-2">Email us at</h3>
          <a
            className="text-ring text-base"
            href="mailto:info@icedelights.com"
            aria-label="Send message to info@icedelights.com"
          >
            info@icedelights.com
          </a>
          <a
            className="text-ring text-base"
            href="mailto:icedelights@gmail.com"
            aria-label="Send message to icedelights@gmail.com"
          >
            icedelights@gmail.com
          </a>
        </div>
      </li>
    </ul>
  );
}
