export async function updateCartQuantity(cartId: string, quantity: number) {
  const res = await fetch(`/api/cart/patch/${cartId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });

  if (!res.ok) throw new Error("Failed to update quantity");

  return res.json();
}

export async function deleteProductFromCart(cartId: string) {
  const res = await fetch(`/api/cart/delete/${cartId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Failed to update quantity");

  return res.json();
}
