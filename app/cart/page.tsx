import HeroSection from "@/components/pages/general/HeroSection";
// import Container from "@/components/Container";
// import CartTable from "@/components/pages/cart/CartTable";
// import CartSummary from "@/components/pages/cart/CartSummary";
import CartContent from "@/components/pages/cart/CartContent";

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

      <CartContent />
    </>
  );
}
