export interface IImage {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

export type IProductId = string;

export interface IProductBase {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  favorites: boolean;
  bestSellers: boolean;
  image: string;
  images: string[];
}

export type IProductListItem = Omit<
  IProductBase,
  "category" | "description" | "images" | "favorites" | "bestSellers"
>;

export interface IProductCart {
  cartId: string;
  id: string;
  quantity: number;
}

export interface IApiProductsGetAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc" | "featured";
  category?: string;
  favorites?: boolean;
  bestSellers?: boolean;
}

export interface ICategory {
  id: string;
  label: string;
  url: string;
}
