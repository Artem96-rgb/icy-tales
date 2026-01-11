import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductItem() {
  return (
    <div className="p-2.75 bg-white rounded-3xl space-y-5">
      {/* Image Section */}
      <div className="relative">
        <button className="absolute top-2.5 left-2.5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>

        <Image
          src="/products/chocolate-sundae.jpg"
          width={699}
          height={732}
          alt="Image"
        />
      </div>

      {/* Content Section */}
      <div className="pl-3 pr-2">
        <div className="flex items-start justify-between mb-3.5">
          <p className="h5">Chocolate Brownie Sundae</p>
          <div className="flex-y-center gap-0.5">
            <Star className="fill-yellow-400 text-yellow-400" size={14} />
            <span className="text-sm font-semibold">4.9/5</span>
          </div>
        </div>

        <p className="text-ring text-base mb-3">
          Rich chocolate ice cream with chunks of brownie.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-22 font-bold text-primary">$5.49</span>
          <Button className=" py-0" variant="secondary" size="icon-lg">
            <ShoppingCart className="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
