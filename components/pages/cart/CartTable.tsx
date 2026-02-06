"use client";

import { IProductCartTwo } from "@/types";
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
import { roundNumberToTwo } from "@/lib/utils";
import CartDeleteProduct from "@/components/pages/cart/CartDeleteProduct";
import { priceCurrency } from "@/data/currency";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ICartTableProps {
  products: IProductCartTwo[];
}
export default function CartTable({ products }: ICartTableProps) {
  return (
    <div className="w-full max-w-182.5">
      <p className="text-lg font-bold leading-none mb-8">
        Shopping Cart ({products.length} items)
      </p>
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
          {products?.map((product) => {
            return (
              <TableRow key={product.cartId}>
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
                      <h3 className="mb-4">
                        <Button
                          asChild
                          variant="link"
                          size="auto"
                          className="font-bold"
                        >
                          <Link href={`/shop/${product.id}`}>
                            {product.title}
                          </Link>
                        </Button>
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
                  {product.price} {priceCurrency}
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
                      {roundNumberToTwo(product.price * product.quantity)}{" "}
                      {priceCurrency}
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
    </div>
  );
}
