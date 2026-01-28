import HeroSection from "@/components/pages/general/HeroSection";
import WishlistProducts from "@/components/pages/wishlist/WishlistProducts";

const breadcrumbs = [
  {
    id: "breadcrumb-wishlist",
    title: "Wishlist",
    link: null,
  },
];

export default function WishlistPage() {
  return (
    <>
      <HeroSection
        title="Wishlist"
        breadcrumbs={breadcrumbs}
        className="lg:mb-35.5"
      />

      <WishlistProducts />
    </>
  );
}
