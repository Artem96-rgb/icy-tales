"use client";

import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "@/api/products";
import { Spinner } from "@/components/ui/spinner";
import ProductListSlider from "@/components/products/ProductListSlider";

export default function FavoritesProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  if (isLoading) return <Spinner />;
  if (error || !data) return null;

  return <ProductListSlider products={data} />;
}
