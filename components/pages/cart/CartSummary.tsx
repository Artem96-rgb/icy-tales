import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconShield } from "@/icons/IconShield";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { roundNumberToTwo } from "@/lib/utils";
import { priceCurrency } from "@/data/currency";

export default function CartSummary({ totalPrice }: { totalPrice: number }) {
  const shippingCost = 20.0;

  return (
    <Card className="lg:max-w-79.5 w-full">
      <CardHeader>
        <CardTitle className="text-lg text-center leading-none">
          Order Summary
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent>
        <div className="flex-y-center justify-between py-3.75 gap-2">
          <p className="text-sm font-bold leading-none">Apply Coupons</p>

          <Button variant="secondary" size="h-30" className="text-sm px-3.5">
            Apply
          </Button>
        </div>
      </CardContent>

      <Separator />

      <CardContent>
        <div className="py-6.5">
          <p className="text-sm font-bold leading-none mb-5">
            Product Details:
          </p>

          <div className="flex justify-between gap-2 mb-4">
            <p className="text-sm font-medium leading-none text-ring-100">
              Sub Total
            </p>
            <span className="text-sm font-semibold leading-none">
              {priceCurrency}
              {roundNumberToTwo(totalPrice)}
            </span>
          </div>

          <div className="flex justify-between gap-2">
            <p className="text-sm font-medium leading-none text-ring-100">
              Shipping
            </p>
            <span className="text-sm font-semibold leading-none">
              {priceCurrency}
              {shippingCost.toFixed(2)}
            </span>
          </div>
        </div>

        <Separator />

        <div className="py-7.5">
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-5">
            <p className="text-sm font-bold leading-none">Grand Total</p>
            <span className="text-sm font-semibold leading-none text-primary">
              {priceCurrency}
              {roundNumberToTwo(totalPrice + shippingCost)}
            </span>
            <Button asChild className="basis-full" size="h-50">
              <Link href="/" className="gap-5">
                Proceed to checkout
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <Separator />
      </CardContent>

      <CardFooter className="pt-5 pb-8">
        <IconShield />

        <p className="text-xs font-medium text-ring-100">
          Safe and Secure Payments, Easy Returns. 100% Authentic Products
        </p>
      </CardFooter>
    </Card>
  );
}
