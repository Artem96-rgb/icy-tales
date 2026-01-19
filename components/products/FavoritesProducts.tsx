"use client";

import Image from "next/image";
import Container from "@/components/Container";
import ProductItem from "@/components/products/ProductItem";
import SectionTop from "@/components/SectionTop";

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
    <section className="pt-35.5 pb-40.5 gradient-two min-h-244.5 relative z-1">
      <Container size="small">
        <SectionTop
          title={
            <>
              Our <span>Classic</span> Favorites
            </>
          }
          subtitle="Check out our top products that our customers love."
        />

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
      </Container>
      <div className="absolute top-34 left-0 -z-1">
        <Image
          src="/favorites-products-bg-one.png"
          width={283}
          height={437}
          alt="Image"
        />
      </div>

      <div className="absolute bottom-22.5 right-0 -z-1">
        <Image
          src="/favorites-products-bg-two.png"
          width={212}
          height={500}
          alt="Image"
        />
      </div>
    </section>
  );
}
