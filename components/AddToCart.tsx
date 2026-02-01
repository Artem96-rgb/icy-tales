"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { showToast } from "@/lib/utils";
import { addProductToCart } from "@/api/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoaderStore } from "@/store/loaderStore";

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

  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (productId: string) => addProductToCart(productId),
    onMutate: () => {
      showLoader();
    },
    onSettled: () => {
      hideLoader();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart-products"] });
      showToast("Product added to cart");
    },
  });

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    mutation.mutate(productId);
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
