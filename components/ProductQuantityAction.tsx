import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { updateCartQuantity } from "@/api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoaderStore } from "@/store/loaderStore";

interface ProductQuantityActionProps {
  cartId: string;
  currentQuantity: number;
}

export default function ProductQuantityAction({
  cartId,
  currentQuantity,
}: ProductQuantityActionProps) {
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ cartId, quantity }: { cartId: string; quantity: number }) =>
      updateCartQuantity(cartId, quantity),

    onMutate: () => {
      showLoader();
    },
    onSettled: () => {
      hideLoader();
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart-products"] });
    },
  });

  const handleIncrease = () => {
    mutation.mutate({ cartId, quantity: currentQuantity + 1 });
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      mutation.mutate({ cartId, quantity: currentQuantity - 1 });
    }
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const quantity = isNaN(value) || value < 1 ? 1 : value;
    mutation.mutate({ cartId, quantity: quantity ?? 1 });
  };

  return (
    <div className="inline-grid grid-cols-[30px_45px_30px] border border-input-border rounded-full h-9">
      <Button
        className="border-none"
        variant="transparent"
        size="auto"
        onClick={handleDecrease}
        disabled={currentQuantity < 2}
      >
        -
      </Button>

      <Field className="border-x border-input-border item-center justify-center">
        <Input
          type="number"
          min={1}
          autoComplete="off"
          value={currentQuantity ?? 1}
          onChange={handleQuantityChange}
          className="h-auto border-none shadow-none p-0 text-center"
        />
      </Field>

      <Button
        className="border-none"
        variant="transparent"
        size="auto"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
}
