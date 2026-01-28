import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cartStore";
import { type ChangeEvent } from "react";

export default function ProductQuantityAction({
  productId,
}: {
  productId: string;
}) {
  // Get the array of products currently in the shopping cart from the Zustand store
  const cart = useCartStore((state) => state.cart);

  // Get the function to increase the quantity of a product in the cart
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  // Get the function to decrease the quantity of a product in the cart
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const setQuantity = useCartStore((state) => state.setQuantity);

  const cartItem = cart.find((item) => item.id === productId);

  if (!cartItem) return null;

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    // If empty or less than 1, set to 1
    const quantity = isNaN(value) || value < 1 ? 1 : value;

    setQuantity(productId, quantity);
  };

  return (
    <div className="inline-grid grid-cols-[30px_45px_30px] border border-input-border rounded-full h-9">
      <Button
        className="border-none"
        variant="transparent"
        size="auto"
        onClick={() => decreaseQuantity(productId)}
        disabled={cartItem.quantity < 2}
      >
        -
      </Button>

      <Field className="border-x border-input-border item-center justify-center">
        <Input
          type="number"
          min={1}
          autoComplete="off"
          id="input-product-quantity-value"
          value={cartItem.quantity}
          onChange={handleQuantityChange}
          className="h-auto border-none shadow-none p-0 text-center"
        />
      </Field>
      <Button
        className="border-none"
        variant="transparent"
        size="auto"
        onClick={() => increaseQuantity(productId)}
      >
        +
      </Button>
    </div>
  );
}
