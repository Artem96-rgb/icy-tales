export interface IImage {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface IProduct {
  id: string;
  title: string;
  description?: string;
  shortDescription: string;
  price: number;
  image: string;
}
