import Image from "next/image";
import Container from "@/components/Container";
import ProductItem from "@/components/products/ProductItem";
import SectionTop from "@/components/SectionTop";

export default function FavoritesProducts() {
  return (
    <section className="pt-35.5 pb-40.5 gradient-two min-h-244.5 relative z-1">
      <Container size="small">
        <SectionTop
          title={
            <>
              Our <span>Classic</span> Favorites
            </>
          }
          subtitle="Check out our top products that our customers love."
        />

        <ul className="grid grid-cols-4 gap-7.5">
          <li>
            <ProductItem />
          </li>
        </ul>
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
  );
}
