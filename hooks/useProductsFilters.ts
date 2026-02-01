"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "@/hooks";
import { getProductsOptions } from "@/api/products";
import { IProductListItem } from "@/types";

const limit = 6;

export function useProductsFilters(category?: string) {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "featured">(
    "featured",
  );

  const debouncedSearchTerm = useDebounce(searchTerm);
  const debouncedSortOrder = useDebounce(sortOrder);

  const query = useQuery<IProductListItem[]>({
    queryKey: [
      "products",
      page,
      debouncedSearchTerm,
      debouncedSortOrder,
      category,
    ],
    queryFn: () =>
      getProductsOptions({
        page,
        limit,
        search: debouncedSearchTerm,
        sortBy: sortOrder !== "featured" ? "price" : undefined,
        order: sortOrder !== "featured" ? debouncedSortOrder : undefined,
        category,
      }),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    page,
    setPage,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  };
}
