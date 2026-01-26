"use client";

import HeroSection from "@/components/pages/general/HeroSection";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProductsOptions } from "@/api/products";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";
import ProductItem from "@/components/products/ProductItem";
import { useState, useRef, type ChangeEvent } from "react";
import { IProductListItem } from "@/types";
import { useDebounce } from "@/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";

const breadcrumbs = [
  {
    id: "breadcrumb-shop",
    title: "Shop",
    link: null,
  },
];

const TOTAL_PAGES = 2;
const limit = 6;

export default function ShopPage() {
  const productsRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "featured">(
    "featured",
  );

  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm);
  const debouncedSortOrder = useDebounce(sortOrder);

  const {
    data: products,
    isLoading,
    isFetching,
    error,
  } = useQuery<IProductListItem[]>({
    queryKey: [
      "all-products",
      page,
      debouncedSearchTerm,
      debouncedSortOrder,
      categoryFilter,
    ],
    queryFn: () =>
      getProductsOptions({
        page,
        limit: limit,
        search: debouncedSearchTerm,
        sortBy: sortOrder !== "featured" ? "price" : undefined,
        order: sortOrder !== "featured" ? debouncedSortOrder : undefined,
        category: categoryFilter || undefined,
      }),
    placeholderData: keepPreviousData,
  });

  // if (isLoading) return <Spinner />;
  if (error || !products) return null;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleSortOrderChange = (value: "asc" | "desc" | "featured") => {
    setSortOrder(value);
    setPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    setPage(1);
  };

  return (
    <>
      <HeroSection title="Shop" breadcrumbs={breadcrumbs} className="mb-20" />

      <Container className="mb-37.5">
        {isLoading && <Spinner />}

        <div ref={productsRef} className="grid grid-cols-[245px_1fr] gap-10">
          <div>
            <div className="relative mb-15">
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchTermChange}
                className="h-11 pl-3"
              />
              <Search
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>

            <div>
              <p className="text-22 font-berkshireSwash mb-5">Categories</p>

              <RadioGroup
                className="w-fit"
                value={categoryFilter}
                onValueChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <div className="flex items-center gap-3" key={category.id}>
                    <RadioGroupItem
                      value={category.id}
                      id={`r-${category.id}`}
                    />
                    <Label
                      htmlFor={`r-${category.id}`}
                      className="text-ring-100"
                    >
                      {category.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {categoryFilter && (
                <Button
                  size="sm"
                  className="mt-4"
                  onClick={() => setCategoryFilter("")}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          <div>
            <div className="mb-15 flex justify-end">
              <Select value={sortOrder} onValueChange={handleSortOrderChange}>
                <SelectTrigger className="min-w-45.5">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent position="popper" className="min-w-45.5">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="asc">Price: Low to High</SelectItem>
                  <SelectItem value="desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ul className="grid grid-cols-3 gap-7.5">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductItem
                    id={product.id}
                    title={product.title}
                    shortDescription={product.shortDescription}
                    price={product.price}
                    image={product.image}
                  />
                </li>
              ))}
            </ul>

            {!searchTerm && !categoryFilter && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(page - 1, 1))}
                    />
                  </PaginationItem>

                  {/* Page numbers */}
                  {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
                    (p) => (
                      <PaginationItem key={p}>
                        <PaginationLink
                          isActive={p === page}
                          onClick={() => handlePageChange(p)}
                          size="size-46"
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  {/* Next */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(page + 1, TOTAL_PAGES))
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </Container>
      {isFetching && (
        <div className="fixed inset-0 bg-background/90 flex-center">
          <Spinner />
        </div>
      )}
    </>
  );
}
