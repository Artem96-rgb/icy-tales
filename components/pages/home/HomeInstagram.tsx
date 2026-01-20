import Image from "next/image";

export default function HomeInstagram() {
  const images = [
    { id: "Instagram One", url: "/instagram/instagram-one.png" },
    { id: "Instagram Two", url: "/instagram/instagram-two.png" },
    { id: "Instagram Three", url: "/instagram/instagram-three.png" },
    { id: "Instagram Four", url: "/instagram/instagram-four.png" },
    { id: "Instagram Five", url: "/instagram/instagram-five.png" },
  ];

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6.5">
      {images.map((image) => (
        <li key={image.id}>
          <Image src={image.url} width={263} height={326} alt="Instagram" />
        </li>
      ))}
    </ul>
  );
}
