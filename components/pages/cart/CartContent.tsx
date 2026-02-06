"use client";

import Container from "@/components/Container";
import CartTable from "@/components/pages/cart/CartTable";
import CartSummary from "@/components/pages/cart/CartSummary";
import { useQuery } from "@tanstack/react-query";
import { IProductBase, IProductCart, IProductCartTwo } from "@/types";
import { getCartProducts, getProducts } from "@/api/products";
import { useEffect, useMemo } from "react";
import NoProductsMessage from "@/components/NoProductsMessage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLoaderStore } from "@/store/loaderStore";

export default function CartContent() {
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);

  const { data: cartProducts } = useQuery<IProductCart[]>({
    queryKey: ["cart-products"],
    queryFn: () => getCartProducts(),
  });

  const { data: allProducts, isLoading } = useQuery<IProductBase[]>({
    queryKey: ["all-products"],
    queryFn: () => getProducts(),
    enabled: cartProducts && cartProducts.length > 0,
  });

  const filteredProducts = useMemo(() => {
    if (!allProducts || !cartProducts) return [];

    return cartProducts
      .map((cartItem) => {
        const product = allProducts.find((p) => p.id === cartItem.id);
        if (!product) return null;

        return {
          ...product,
          quantity: cartItem.quantity,
          cartId: cartItem.cartId,
        };
      })
      .filter((item): item is IProductCartTwo => item !== null);
  }, [allProducts, cartProducts]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
  }, [filteredProducts]);

  useEffect(() => {
    if (isLoading) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading, showLoader, hideLoader]);

  return (
    <div className="mb-12.5 mb-25 lg:mb-37.5">
      <Container>
        {!filteredProducts ||
          (filteredProducts?.length > 0 && (
            <div className="space-y-9">
              <div className="flex max-lg:flex-col gap-x-10 gap-y-10 items-start justify-between">
                <CartTable products={filteredProducts} />

                <CartSummary totalPrice={totalPrice} />
              </div>

              <Button
                asChild
                className="gap-5 text-secondary"
                variant="link"
                size="auto"
              >
                <Link href={"/shop"}>
                  <ArrowLeft />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          ))}

        {!isLoading && filteredProducts.length === 0 && (
          <div className="justify-center">
            <NoProductsMessage
              title="Your cart is empty"
              description="Add products to your cart to proceed with checkout."
            />
          </div>
        )}
      </Container>
    </div>
  );
}
