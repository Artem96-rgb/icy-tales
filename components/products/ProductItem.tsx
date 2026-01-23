import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IProductListItem } from "@/types";
import Link from "next/link";
import TypographyP from "@/components/typography/TypographyP";
import { cn } from "@/lib/utils";

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
    <Link
      href={`/shop/${id}`}
      // className="p-2.75 bg-white rounded-3xl space-y-5"
      className={cn("p-2.75 bg-[#fafafa] rounded-3xl space-y-5", listClassname)}
    >
      {/* Image Section */}
      <div className="relative">
        <button className="absolute top-2.5 left-2.5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>

        <Image
          src={image}
          width={699}
          height={732}
          alt="Image"
          className="rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="sm:pl-3 sm:pr-2">
        <div className="flex items-start justify-between mb-3.5 max-sm:flex-col max-sm:gap-2">
          <p className="h5 line-clamp-2">{title}</p>
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
          <Button className="py-0" variant="secondary" size="icon-lg">
            <ShoppingCart className="max-lg:size-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
