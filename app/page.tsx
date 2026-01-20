import HomeHero from "@/components/pages/home/HomeHero";
import HomePromo from "@/components/pages/home/HomePromo";
import FavoritesProducts from "@/components/products/FavoritesProducts";
import HomeInstagram from "@/components/pages/home/HomeInstagram";
import HomeCategories from "@/components/pages/home/HomeCategories";
import SignUp from "@/components/pages/general/SignUp";
import Container from "@/components/Container";
import {
  SectionTopHighlightedText,
  SectionTopSubTitle,
  SectionTopTitle,
  SectionTopWrapper,
} from "@/components/SectionTopTwo";
import Image from "next/image";
import { DoubleTriangleIcon } from "@/icons/DoubleTriangle";
import { TwoCirclesLittle } from "@/icons/TwoCirclesLittle";

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
            <SectionTopTitle>
              Our <SectionTopHighlightedText>Classic</SectionTopHighlightedText>{" "}
              Favorites
            </SectionTopTitle>
            <SectionTopSubTitle>
              Browse through our different categories to find your favorite ice
              cream treats.
            </SectionTopSubTitle>
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
            <SectionTopTitle>
              Explore Our{" "}
              <SectionTopHighlightedText>
                Categories
              </SectionTopHighlightedText>{" "}
            </SectionTopTitle>

            <SectionTopSubTitle>
              Browse through our different categories to find your favorite ice
              cream treats.
            </SectionTopSubTitle>
          </SectionTopWrapper>

          <HomeCategories />
        </Container>
      </section>

      {/* Block SignUp */}
      <section className="py-20 lg:py-37">
        <Container size="small" className="relative z-1">
          <SectionTopWrapper className="space-y-6.5 mb-14.5">
            <SectionTopTitle className="max-w-182.5 mx-auto">
              Sign up For{" "}
              <SectionTopHighlightedText>
                Exclusive Deals
              </SectionTopHighlightedText>{" "}
              and Updates
            </SectionTopTitle>

            <SectionTopSubTitle>
              Get 10% off your next order and stay updated with our latest
              offers.
            </SectionTopSubTitle>
          </SectionTopWrapper>

          <SignUp />

          <div className="absolute right-0 top-12 -z-1 max-sm:hidden">
            <DoubleTriangleIcon />
          </div>

          <div className="absolute left-0 bottom-8 -z-1 max-sm:hidden">
            <TwoCirclesLittle />
          </div>
        </Container>
      </section>

      {/* Block Instagram */}
      <section className="pt-20 pb-32 lg:pt-35.5 lg:pb-48 gradient-two overflow-x-hidden">
        <Container className="relative z-1">
          <SectionTopWrapper className="space-y-7">
            <SectionTopTitle className="max-w-182.5 mx-auto">
              Follow Us on{" "}
              <SectionTopHighlightedText>Instagram</SectionTopHighlightedText>
            </SectionTopTitle>

            <SectionTopSubTitle>
              Join our Instagram community for updates, special deals, and more!
            </SectionTopSubTitle>
          </SectionTopWrapper>

          <HomeInstagram />

          <div className="rounded-full aspect-square bg-primary absolute top-30.5 -left-8 -z-1 w-25 w-32.25 max-lg:hidden"></div>
          <div className="rounded-full aspect-square bg-secondary absolute -bottom-12 -right-7 -z-1 w-32.25 max-lg:hidden"></div>
        </Container>
      </section>
    </>
  );
}
