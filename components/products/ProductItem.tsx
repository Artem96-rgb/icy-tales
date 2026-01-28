import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { IProductListItem } from "@/types";
import Link from "next/link";
import TypographyP from "@/components/typography/TypographyP";
import { cn } from "@/lib/utils";
import AddToCart from "@/components/AddToCart";
import WishlistAction from "@/components/WishlistAction";
import { Button } from "@/components/ui/button";

interface IProductItemProps extends IProductListItem {
  listClassname?: string;
}

export default function ProductItem({
  id,
  title,
  shortDescription,
  price,
  image,
  listClassname,
}: IProductItemProps) {
  return (
    <div
      className={cn(
        "p-2.75 bg-background rounded-3xl space-y-5 shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)]",
        listClassname,
      )}
    >
      {/* Image Section */}
      <div className="relative">
        <WishlistAction productId={id} />

        <Link href={`/shop/${id}`}>
          <Image
            src={image}
            width={699}
            height={732}
            alt="Image"
            className="rounded-xl"
          />
        </Link>
      </div>

      {/* Content Section */}
      <div className="sm:pl-3 sm:pr-2">
        <div className="flex items-start justify-between mb-3.5 max-sm:flex-col max-sm:gap-2">
          <h3 className="line-clamp-2">
            <Link
              href={`/shop/${id}`}
              className="hover:text-primary transition-all text-lg lg:text-xl leading-[1.2]"
            >
              {title}
            </Link>
          </h3>
          <div className="flex-y-center gap-0.5">
            <Star className="fill-yellow-400 text-yellow-400" size={14} />
            <span className="text-sm font-semibold">4.9/5</span>
          </div>
        </div>

        <TypographyP className="mb-3 line-clamp-2" size="base">
          {shortDescription}
        </TypographyP>

        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl lg:text-22 font-bold text-primary">
            ${price}
          </span>

          <AddToCart productId={id} onlyIcon />
        </div>
      </div>
    </div>
  );
}
