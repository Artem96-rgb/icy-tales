import { IApiProductsGetAllParams, IProductBase } from "@/types";

export async function getFavorites(): Promise<IProductBase[]> {
  const res = await fetch(
    "https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products-favorites",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProducts(): Promise<IProductBase[]> {
  const res = await fetch(
    "https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductsOptions(
  params: IApiProductsGetAllParams,
): Promise<IProductBase[]> {
  const { page, limit, search = "", sortBy, order, category } = params;

  const queryParams = new URLSearchParams();

  queryParams.set("page", page.toString());
  queryParams.set("limit", limit.toString());

  if (search) queryParams.set("title", search);
  if (sortBy) queryParams.set("sortBy", sortBy);
  if (order) queryParams.set("order", order);
  if (category) queryParams.set("category", category);

  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products?${queryParams.toString()}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductById(id: string): Promise<IProductBase> {
  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products/${id}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function getRelatedProducts(
  category: string,
): Promise<IProductBase[]> {
  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-products?category=${category}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }

  return res.json();
}
