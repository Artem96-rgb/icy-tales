import HomeHero from "@/components/pages/home/HomeHero";
import HomePromo from "@/components/pages/home/HomePromo";
import FavoritesProducts from "@/components/products/FavoritesProducts";

export default function Home() {
  return (
    <>
      <HomeHero
        image={{
          url: "/home-hero-content.png",
          alt: "Home Hero",
        }}
        subtitle="Welcome to The"
        title={
          <>
            Discover <span className="text-primary">Sweet</span> Delights!
          </>
        }
        description="Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients."
        link={{
          href: "/",
          title: "Browse Our Classic Flavors",
        }}
      />

      <HomePromo
        backgroundImage="/home-promo-bg.png"
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
    </>
  );
}
