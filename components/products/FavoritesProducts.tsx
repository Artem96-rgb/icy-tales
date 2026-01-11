import Image from "next/image";
import Container from "@/components/Container";
import ProductItem from "@/components/products/ProductItem";

export default function FavoritesProducts() {
  return (
    <section className="pt-35.5 pb-40.5 gradient-two min-h-244.5 relative z-1">
      <Container size="small">
        <div className="mb-12.5">
          <h2 className="text-center">
            Our <span className="text-primary">Classic</span> Favorites
          </h2>

          <p className="text-xl leading-[1.3] text-ring text-center">
            Check out our top products that our customers love.
          </p>
        </div>

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
