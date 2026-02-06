import HeroSection from "@/components/pages/general/HeroSection";
import ShopContent from "@/components/pages/shop/ShopContent";

const breadcrumbs = [
  {
    id: "breadcrumb-shop",
    title: "Shop",
    link: null,
  },
];

export default function ShopPage() {
  return (
    <>
      <HeroSection title="Shop" breadcrumbs={breadcrumbs} className="mb-20" />

      <ShopContent />
    </>
  );
}
