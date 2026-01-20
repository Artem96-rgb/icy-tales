import { IProduct } from "@/types";

export async function getFavorites(): Promise<IProduct[]> {
  const res = await fetch(
    "https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products-favorites",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getFavoriteById(id: string): Promise<IProduct> {
  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products-favorites/${id}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
