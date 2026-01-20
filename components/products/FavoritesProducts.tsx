"use client";

import ProductItem from "@/components/products/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "@/api/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Spinner } from "@/components/ui/spinner";

export default function FavoritesProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="-ml-7.5">
        {data?.map((product) => (
          <CarouselItem key={product.id} className="basis-1/4 pl-7.5">
            <ProductItem
              id={product.id}
              title={product.title}
              shortDescription={product.shortDescription}
              price={product.price}
              image={product.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
