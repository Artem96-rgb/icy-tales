import HomeHero from "@/components/pages/home/HomeHero";
import HomePromo from "@/components/pages/home/HomePromo";
import FavoritesProducts from "@/components/products/FavoritesProducts";
import HomeInstagram from "@/components/pages/home/HomeInstagram";
import HomeCategories from "@/components/pages/home/HomeCategories";

export default function Home() {
  return (
    <>
      <HomeHero />

      <HomePromo
        image={{
          url: "/home-promo.png",
          alt: "Home Promo",
          width: 619,
          height: 724,
        }}
        title={
          <>
            Relive the Sweet Memories of Classic{" "}
            <span className="text-primary">Ice Creams</span>
          </>
        }
        description="From rich chocolate fudge to creamy vanilla sundaes,
            discover our menu of classic ice cream creations."
        link={{
          href: "/shop",
          title: "Explore Our Menu",
        }}
      />

      <FavoritesProducts />

      <HomeCategories />

      <HomeInstagram />
    </>
  );
}
