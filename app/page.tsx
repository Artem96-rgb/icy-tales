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
import { categories } from "@/data/categories";
import BestSellersProducts from "@/components/products/BestSellersProducts";

export default function Home() {
  return (
    <>
      <HomeHero />

      <HomePromo />

      <FavoritesProducts />

      <HomeCategories categories={categories} />

      <BestSellersProducts />

      {/* Block SignUp */}
      <SignUp />

      {/* Block Instagram */}
      <section className="pt-20 pb-32 lg:pt-35.5 lg:pb-48 gradient-two overflow-x-hidden">
        <Container size="large" className="relative z-1">
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
