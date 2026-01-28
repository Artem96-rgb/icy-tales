"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { showToast } from "@/lib/utils";

interface IAddToCartProps {
  productId: string;
  onlyIcon?: boolean;
}

export default function AddToCart({
  productId,
  onlyIcon = false,
}: IAddToCartProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const inCart = useCartStore((state) => state.isInCart(productId));

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    showToast("Product added to cart");
  };

  if (inCart) {
    return onlyIcon ? (
      <Button
        asChild
        className="py-0 [&_svg]:size-2 lg:[&_svg]:size-6 [&_svg]:stroke-2"
        variant="secondary"
        size="icon-lg"
      >
        <Link href="/cart">
          <ShoppingCart className="fill-background" />
        </Link>
      </Button>
    ) : (
      <Button asChild size="lg" className="px-3 md:px-7 mb-9.5">
        <Link href="/cart">
          <span>In cart</span>
          <ShoppingBag />
        </Link>
      </Button>
    );
  }

  return onlyIcon ? (
    <Button
      onClick={() => handleAddToCart(productId)}
      className="py-0 [&_svg]:size-4 lg:[&_svg]:size-6 [&_svg]:stroke-2"
      variant="secondary"
      size="icon-lg"
    >
      <ShoppingCart />
    </Button>
  ) : (
    <Button
      onClick={() => handleAddToCart(productId)}
      className="px-3 md:px-7 mb-9.5"
      size="lg"
    >
      <span>Add to Cart</span>
      <ArrowRight />
    </Button>
  );
}
