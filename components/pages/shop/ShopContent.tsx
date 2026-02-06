"use client";

import { useLoaderStore } from "@/store/loaderStore";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useProductsFilters } from "@/hooks/useProductsFilters";
import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categories } from "@/data/categories";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductItem from "@/components/products/ProductItem";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TOTAL_PAGES = 2;

export default function ShopContent() {
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);

  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const {
    data: products,
    isLoading,
    error,
    isFetching,
    page,
    setPage,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  } = useProductsFilters(categoryFilter);

  const productsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isLoading || isFetching) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading, isFetching, showLoader, hideLoader]);

  if (error) return null;

  return (
    <div className="mb-12.5 md:mb-25 lg:mb-37.5">
      <Container>
        <div
          className="flex items-start justify-between gap-10 mb-10 lg:mb-15"
          ref={productsRef}
        >
          <div className="relative max-w-61.25 w-full">
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

        <div className="grid lg:grid-cols-[245px_1fr] items-start gap-10">
          <div>
            <div>
              <p className="text-22 font-berkshireSwash mb-5">Categories</p>

              <RadioGroup
                className="max-lg:flex max-lg:flex-wrap max-lg: gap-10"
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
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3.75 lg:gap-7.5">
              {products?.map((product) => (
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
    </div>
  );
}
