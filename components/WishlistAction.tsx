"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import { Heart } from "lucide-react";
import { cn, showToast } from "@/lib/utils";
import { type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { IProductId } from "@/types";

interface IWishlistActionProps {
  productId: IProductId;
}

export default function WishlistAction({ productId }: IWishlistActionProps) {
  // Get the list of products currently added to the wishlist
  const wishlist = useWishlistStore((state) => state.wishlist);

  // Functions to add or remove a product from the wishlist list
  const addWishlistProduct = useWishlistStore(
    (state) => state.addWishlistProduct,
  );
  const removeWishlistProduct = useWishlistStore(
    (state) => state.removeWishlistProduct,
  );

  // Check if the current product is already in the wishlist list
  const isAdded = wishlist.includes(productId);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAdded) {
      removeWishlistProduct(productId);
      showToast("Product removed from wishlist");
    } else {
      addWishlistProduct(productId);
      showToast("Product added to wishlist");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon-10"
      className="absolute top-2.5 left-2.5 border-none z-10"
      onClick={handleClick}
      aria-label="Add Wishlist Product"
    >
      <Heart
        size="18"
        className={cn(isAdded && "fill-secondary stroke-secondary")}
      />
    </Button>
  );
}
