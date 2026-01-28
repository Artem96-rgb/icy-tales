"use client";

import HeroSection from "@/components/pages/general/HeroSection";
import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import NoProductsMessage from "@/components/NoProductsMessage";
import Link from "next/link";
import ProductQuantityAction from "@/components/ProductQuantityAction";

const breadcrumbs = [
  {
    id: "breadcrumb-cart",
    title: "Cart",
    link: null,
  },
];

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);

  // Get the function to decrease the quantity of a product in the cart
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart-products"],
    queryFn: () => getProducts(),
    enabled: cart.length > 0,
  });

  const cartProducts =
    products
      ?.filter((product) => cart.some((item) => item.id === product.id))
      .map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return {
          ...product,
          quantity: cartItem?.quantity,
        };
      }) ?? [];

  return (
    <>
      <HeroSection
        title="Cart"
        breadcrumbs={breadcrumbs}
        className="lg:mb-33.75"
      />

      <Container>
        {cartProducts && cartProducts.length > 0 && !error ? (
          <div className="flex">
            <div className="w-full max-w-182.5">
              <p className="font-bold mb-8">Shopping Cart (04items)</p>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product Details</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartProducts?.map((cartProduct) => {
                    const totalPrice = (
                      (cartProduct.quantity ?? 1) * cartProduct.price
                    ).toFixed(2);

                    return (
                      <TableRow key={cartProduct.id}>
                        <TableCell className="font-medium">
                          <div className="flex-y-center gap-4.5">
                            <Link
                              href={`/shop/${cartProduct.id}`}
                              className="basis-23.25 shrink-0 aspect-square"
                            >
                              <Image
                                src={cartProduct.image}
                                width={93}
                                height={93}
                                alt={cartProduct.title}
                                className="rounded-lg object-cover w-full h-full"
                              />
                            </Link>
                            <div>
                              <h3 className="text-base/none mb-4">
                                <Link
                                  href={`/shop/${cartProduct.id}`}
                                  className="hover:text-primary transition-all"
                                >
                                  {cartProduct.title}
                                </Link>
                              </h3>
                              <div className="space-y-2">
                                <p className="text-xs/none">
                                  Color:{" "}
                                  <span className="font-bold">White</span>
                                </p>
                                <p className="text-xs/none">
                                  Size: <span className="font-bold">L</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-primary">
                          {cartProduct.price} $
                        </TableCell>
                        <TableCell>
                          <ProductQuantityAction productId={cartProduct.id} />
                        </TableCell>
                        <TableCell>
                          <span className="font-bold">{totalPrice} $</span>
                        </TableCell>

                        <TableCell>
                          <Button
                            className="border-chart-5/45 group hover:bg-chart-5/45"
                            variant="transparent"
                            size="icon-9.5"
                            onClick={() => removeFromCart(cartProduct.id)}
                          >
                            <X className="text-chart-5 group-hover:text-white" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="justify-center">
            <NoProductsMessage
              title="Your cart is empty"
              description="Add products to your cart to proceed with checkout."
            />
          </div>
        )}
      </Container>

      {isLoading && (
        <div className="loader-full-screen">
          <Spinner />
        </div>
      )}
    </>
  );
}
