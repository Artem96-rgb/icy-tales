import { IApiProductsGetAllParams, IProductBase, IProductCart } from "@/types";

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
  const {
    page,
    limit,
    search = "",
    sortBy,
    order,
    category,
    favorites,
    bestSellers,
  } = params;

  const queryParams = new URLSearchParams();

  queryParams.set("page", page.toString());
  queryParams.set("limit", limit.toString());

  if (search) queryParams.set("title", search);
  if (sortBy) queryParams.set("sortBy", sortBy);
  if (order) queryParams.set("order", order);
  if (category) queryParams.set("category", category);
  if (favorites) queryParams.set("favorites", String(favorites));
  if (bestSellers) queryParams.set("bestSellers", String(bestSellers));

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

export async function getCartProducts(): Promise<IProductCart[]> {
  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-cart`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }

  return res.json();
}

export async function addProductToCart(id: string): Promise<IProductBase> {
  const res = await fetch(
    `https://695d1f6a79f2f34749d70911.mockapi.io/icy-tales-cart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, quantity: 1 }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }

  return res.json();
}
