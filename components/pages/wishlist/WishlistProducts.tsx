"use client";

import Container from "@/components/Container";
import { useWishlistStore } from "@/store/wishlistStore";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";
import ProductItem from "@/components/products/ProductItem";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import { Spinner } from "@/components/ui/spinner";
import NoProductsMessage from "@/components/NoProductsMessage";

export default function WishlistProducts() {
  const wishlist = useWishlistStore((state) => state.wishlist);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart-products"],
    queryFn: () => getProducts(),
    enabled: wishlist.length > 0,
  });

  const wishlistProducts = products?.filter((product) =>
    wishlist.includes(product.id),
  );

  return (
    <section className="mb-12.5">
      <Container>
        {wishlistProducts && wishlistProducts.length > 0 && !error ? (
          <>
            <SectionTopWrapper>
              <TypographyH2>
                Your <span>wishlist</span>
              </TypographyH2>
              <TypographyP>
                Products you’ve saved to revisit or purchase later.
              </TypographyP>
            </SectionTopWrapper>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.75 md:gap-7.5">
              {wishlistProducts?.map((wishlistProduct) => (
                <li key={wishlistProduct.id}>
                  <ProductItem
                    id={wishlistProduct.id}
                    title={wishlistProduct.title}
                    shortDescription={wishlistProduct.shortDescription}
                    price={wishlistProduct.price}
                    image={wishlistProduct.image}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <NoProductsMessage
            title="Your wishlist is empty"
            description="Add products to your wishlist"
          />
        )}
      </Container>

      {isLoading && (
        <div className="loader-full-screen">
          <Spinner />
        </div>
      )}
    </section>
  );
}
