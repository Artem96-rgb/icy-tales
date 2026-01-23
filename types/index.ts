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
