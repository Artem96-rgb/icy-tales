import Container from "@/components/Container";
import Image from "next/image";
import SectionTop from "@/components/SectionTop";

export default function HomeInstagram() {
  const images = [
    { id: "Instagram One", url: "/instagram/instagram-one.png" },
    { id: "Instagram Two", url: "/instagram/instagram-two.png" },
    { id: "Instagram Three", url: "/instagram/instagram-three.png" },
    { id: "Instagram Four", url: "/instagram/instagram-four.png" },
    { id: "Instagram Five", url: "/instagram/instagram-five.png" },
  ];

  return (
    <section className="pt-20 pb-32 lg:pt-35.5 lg:pb-48 gradient-two overflow-x-hidden">
      <Container className="relative z-1">
        <SectionTop
          title={
            <>
              Follow Us on <span>Instagram</span>
            </>
          }
          subtitle="Join our Instagram community for updates, special deals, and more!"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6.5">
          {images.map((image) => (
            <li key={image.id}>
              <Image src={image.url} width={263} height={326} alt="Instagram" />
            </li>
          ))}
        </ul>

        <div className="rounded-full aspect-square bg-primary absolute top-30.5 -left-8 -z-1 w-25 w-32.25 max-lg:hidden"></div>
        <div className="rounded-full aspect-square bg-secondary absolute -bottom-12 -right-7 -z-1 w-32.25 max-lg:hidden"></div>
      </Container>
    </section>
  );
}
