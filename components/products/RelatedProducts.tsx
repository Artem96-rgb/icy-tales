"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getRelatedProducts } from "@/api/products";
import Container from "@/components/Container";
import { Spinner } from "@/components/ui/spinner";
import { IProductBase } from "@/types";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import ProductListSlider from "@/components/products/ProductListSlider";

interface RelatedProductsProps {
  currentProduct: IProductBase;
}

export default function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "related-current-products",
      currentProduct.category,
      currentProduct.id,
    ],
    queryFn: () => getRelatedProducts(currentProduct.category),
    enabled: !!currentProduct,
  });

  const filteredProducts = useMemo(
    () => products?.filter((product) => product.id !== currentProduct.id),
    [products, currentProduct.id],
  );

  if (isLoading) return <Spinner />;
  if (error || !filteredProducts) return null;

  return (
    <section className="mb-12.5 md:mb-25 lg:mb-38">
      <Container size="small">
        <SectionTopWrapper>
          <TypographyH2>
            Related <span>Products</span>
          </TypographyH2>
          <TypographyP>Choose from some of related products</TypographyP>
        </SectionTopWrapper>

        <ProductListSlider products={filteredProducts} />
      </Container>
    </section>
  );
}
