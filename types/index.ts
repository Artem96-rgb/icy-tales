export interface IImage {
  url: string;
  alt?: string;
  width: number;
  height: number;
}

export interface IProductBase {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  images: string[];
}

export type IProductListItem = Omit<
  IProductBase,
  "category" | "description" | "images"
>;

export type IProductId = string;
export interface IApiProductsGetAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc" | "featured";
  category?: string;
}

export interface ICategory {
  id: string;
  label: string;
  url: string;
}
