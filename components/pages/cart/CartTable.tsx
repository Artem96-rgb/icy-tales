"use client";

import { IProductBase, IProductCart } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import ProductQuantityAction from "@/components/ProductQuantityAction";
import { useQuery } from "@tanstack/react-query";
import { getCartProducts, getProducts } from "@/api/products";
import { useMemo } from "react";
import { roundNumberToTwo } from "@/lib/utils";
import CartDeleteProduct from "@/components/pages/cart/CartDeleteProduct";

export default function CartTable() {
  const { data: cartProducts } = useQuery<IProductCart[]>({
    queryKey: ["cart-products"],
    queryFn: () => getCartProducts(),
  });

  const { data: allProducts } = useQuery<IProductBase[]>({
    queryKey: ["all-products"],
    queryFn: () => getProducts(),
    enabled: cartProducts && cartProducts.length > 0,
  });

  const filteredProducts = useMemo(() => {
    return cartProducts?.map((cartItem) => {
      const product = allProducts?.find((p) => p.id === cartItem.id);

      return {
        ...product,
        quantity: cartItem.quantity,
        cartId: cartItem.cartId,
      };
    });
  }, [allProducts, cartProducts]);

  if (!filteredProducts) return null;

  return (
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
        {filteredProducts?.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <div className="flex-y-center gap-4.5">
                  {product.image && (
                    <Link
                      href={`/shop/${product.id}`}
                      className="basis-23.25 shrink-0 aspect-square"
                    >
                      <Image
                        src={product.image}
                        width={93}
                        height={93}
                        alt={product.title ?? "Product image"}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </Link>
                  )}
                  <div>
                    <h3 className="text-base/none mb-4">
                      <Link
                        href={`/shop/${product.id}`}
                        className="hover:text-primary transition-all"
                      >
                        {product.title}
                      </Link>
                    </h3>
                    <div className="space-y-2">
                      <p className="text-xs/none">
                        Color: <span className="font-bold">White</span>
                      </p>
                      <p className="text-xs/none">
                        Size: <span className="font-bold">L</span>
                      </p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold text-primary">
                {product.price} $
              </TableCell>
              <TableCell>
                <ProductQuantityAction
                  cartId={product.cartId}
                  currentQuantity={product.quantity ?? 1}
                />
              </TableCell>
              <TableCell>
                {product.price && (
                  <span className="font-bold">
                    {roundNumberToTwo(product.price * product.quantity)} $
                  </span>
                )}
              </TableCell>

              <TableCell>
                {product.cartId && product.id && (
                  <CartDeleteProduct
                    cartId={product.cartId}
                    productId={product.id}
                  />
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
