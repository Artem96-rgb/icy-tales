import HeroSection from "@/components/pages/general/HeroSection";
import Container from "@/components/Container";
import CheckoutForm from "@/components/pages/checkout/CheckoutForm";

const breadcrumbs = [
  {
    id: "breadcrumb-cart",
    title: "Cart",
    link: "/cart",
  },
  {
    id: "breadcrumb-checkout",
    title: "Checkout",
    link: null,
  },
];

export default function CheckoutPage() {
  return (
    <div>
      <HeroSection
        title="Checkout"
        className="lg:mb-34"
        breadcrumbs={breadcrumbs}
      />

      <Container className="flex justify-between gap-5">
        <CheckoutForm />
      </Container>
    </div>
  );
}
