import HomeHero from "@/components/pages/home/HomeHero";
import HomePromo from "@/components/pages/home/HomePromo";
import FavoritesProducts from "@/components/products/FavoritesProducts";
import HomeInstagram from "@/components/pages/home/HomeInstagram";
import HomeCategories from "@/components/pages/home/HomeCategories";
import SignUp from "@/components/pages/general/SignUp";
import Container from "@/components/Container";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import Image from "next/image";
import TypographyP from "@/components/typography/TypographyP";
import TypographyH2 from "@/components/typography/TypographyH2";

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

      {/* Block Favorites Products */}
      <section className="pt-35.5 pb-40.5 gradient-two min-h-244.5 relative z-1">
        <Container size="small">
          <SectionTopWrapper>
            <TypographyH2>
              Our <span>Classic</span> Favorites
            </TypographyH2>
            <TypographyP>
              Check out our top products that our customers love.
            </TypographyP>
          </SectionTopWrapper>

          <FavoritesProducts />
        </Container>
        <div className="absolute top-34 left-0 -z-1">
          <Image
            src="/favorites-products-bg-one.png"
            width={283}
            height={437}
            alt="Image"
          />
        </div>

        <div className="absolute bottom-22.5 right-0 -z-1">
          <Image
            src="/favorites-products-bg-two.png"
            width={212}
            height={500}
            alt="Image"
          />
        </div>
      </section>

      {/* Block Categories */}
      <section className="pt-20 pb-22 lg:pt-35.5 lg:pb-37.5">
        <Container>
          <SectionTopWrapper className="space-y-6">
            <TypographyH2>
              Explore Our <span>Categories</span>
            </TypographyH2>

            <TypographyP>
              Browse through our different categories to find your favorite ice
              cream treats.
            </TypographyP>
          </SectionTopWrapper>

          <HomeCategories />
        </Container>
      </section>

      {/* Block SignUp */}
      <SignUp />

      {/* Block Instagram */}
      <section className="pt-20 pb-32 lg:pt-35.5 lg:pb-48 gradient-two overflow-x-hidden">
        <Container className="relative z-1">
          <SectionTopWrapper className="space-y-7">
            <TypographyH2>
              Follow Us on <span>Instagram</span>
            </TypographyH2>

            <TypographyP>
              Join our Instagram community for updates, special deals, and more!
            </TypographyP>
          </SectionTopWrapper>

          <HomeInstagram />

          <div className="rounded-full aspect-square bg-primary absolute top-30.5 -left-8 -z-1 w-25 w-32.25 max-lg:hidden"></div>
          <div className="rounded-full aspect-square bg-secondary absolute -bottom-12 -right-7 -z-1 w-32.25 max-lg:hidden"></div>
        </Container>
      </section>
    </>
  );
}
