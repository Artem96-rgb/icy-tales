export interface IImage {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface IProductBase {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
}

export type IProductListItem = Omit<IProductBase, "category" | "description">;

export interface IApiProductsGetAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc" | "featured";
  category?: string;
}

export interface Icategory {
  id: string;
  label: string;
  url: string;
}
