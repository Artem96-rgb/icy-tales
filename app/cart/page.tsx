import HeroSection from "@/components/pages/general/HeroSection";
import Container from "@/components/Container";
import CartTable from "@/components/pages/cart/CartTable";
import CartSummary from "@/components/pages/cart/CartSummary";

const breadcrumbs = [
  {
    id: "breadcrumb-cart",
    title: "Cart",
    link: null,
  },
];

export default function CartPage() {
  return (
    <>
      <HeroSection
        title="Cart"
        breadcrumbs={breadcrumbs}
        className="lg:mb-33.75"
      />

      <div className="mb-12.5 mb-25 lg:mb-37.5">
        <Container>
          <div className="flex items-start justify-between">
            <div className="w-full max-w-182.5">
              <p className="text-lg font-bold leading-none mb-8">
                {/*Shopping Cart ({cartProducts.length} items)*/}
                Shopping Cart items
              </p>

              <CartTable />
            </div>

            <CartSummary />
          </div>
          {/*) : (*/}
          {/*  <div className="justify-center">*/}
          {/*    <NoProductsMessage*/}
          {/*      title="Your cart is empty"*/}
          {/*      description="Add products to your cart to proceed with checkout."*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*)}*/}
        </Container>
      </div>
    </>
  );
}
