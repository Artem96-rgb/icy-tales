"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductFromCart } from "@/api/cart";
import { useLoaderStore } from "@/store/loaderStore";
import { useCartStore } from "@/store/cartStore";

interface CartDeleteProductProps {
  cartId: string;
  productId: string;
}

export default function CartDeleteProduct({
  cartId,
  productId,
}: CartDeleteProductProps) {
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (cartId: string) => deleteProductFromCart(cartId),

    onMutate: () => {
      showLoader();
    },

    onSettled: () => {
      hideLoader();
    },

    onSuccess: async () => {
      removeFromCart(productId);

      await queryClient.invalidateQueries({ queryKey: ["cart-products"] });
    },
  });

  const handleDeleteProduct = () => {
    mutation.mutate(cartId);
  };

  return (
    <Button
      className="border-chart-5/45 group hover:bg-chart-5/45"
      variant="transparent"
      size="icon-9.5"
      onClick={handleDeleteProduct}
    >
      <X className="text-chart-5 group-hover:text-white" />
    </Button>
  );
}
