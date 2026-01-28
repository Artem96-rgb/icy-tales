"use client";

import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "@/api/products";
import { Spinner } from "@/components/ui/spinner";
import ProductListSlider from "@/components/products/ProductListSlider";
import Container from "@/components/Container";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import Image from "next/image";

export default function FavoritesProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

  return (
    <section className="pt-12.5 pb-17 md:pt-20 md:pb-24.5 lg:pt-35.5 lg:pb-40 gradient-two relative z-1">
      <Container>
        <SectionTopWrapper>
          <TypographyH2>
            Our <span>Classic</span> Favorites
          </TypographyH2>
          <TypographyP>
            Check out our top products that our customers love.
          </TypographyP>
        </SectionTopWrapper>

        <ProductListSlider products={data} />
      </Container>

      <div className="absolute top-34 left-0 -z-1 max-lg:hidden w-50 2xl:w-70.75">
        <Image
          src="/favorites-products-bg-one.png"
          width={283}
          height={437}
          alt="Image"
        />
      </div>

      <div className="absolute bottom-22.5 right-0 -z-1 max-lg:hidden w-45 2xl:w-53">
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
