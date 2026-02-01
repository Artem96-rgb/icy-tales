"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsOptions } from "@/api/products";
import { Spinner } from "@/components/ui/spinner";
import ProductListSlider from "@/components/products/ProductListSlider";
import Container from "@/components/Container";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import { IProductListItem } from "@/types";

export default function BestSellersProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<IProductListItem[]>({
    queryKey: ["best-sellers-products"],
    queryFn: () =>
      getProductsOptions({
        page: 1,
        limit: 8,
        bestSellers: true,
      }),
  });

  if (isLoading) return <Spinner />;
  if (error || !products) return null;

  return (
    <section className="pt-12.5 pb-17 md:pt-20 md:pb-24.5 lg:pt-35.5 lg:pb-40">
      <Container>
        <SectionTopWrapper>
          <TypographyH2>
            Our <span>Best</span> Sellers
          </TypographyH2>
          <TypographyP>
            Discover the favorites that keep our customers coming back for more.
          </TypographyP>
        </SectionTopWrapper>

        <ProductListSlider products={products} />
      </Container>
    </section>
  );
}
