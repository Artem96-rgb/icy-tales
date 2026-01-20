import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeCategories() {
  const categories = [
    {
      id: "category-sundaes",
      label: "Sundaes",
      url: "/categories/category-one.jpg",
    },
    {
      id: "category-ice-cream-cones",
      label: "Ice Cream Cones",
      url: "/categories/category-two.jpg",
    },
    {
      id: "category-milkshakes",
      label: "Milkshakes",
      url: "/categories/category-three.jpg",
    },
    {
      id: "category-seasonal-flavors",
      label: "Seasonal Flavors",
      url: "/categories/category-four.jpg",
    },
  ];

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7.5">
      {categories.map((category) => (
        <li key={category.id} className="text-center">
          <Link
            href={`/categories/${category.id}`}
            className="relative text-center"
          >
            <Image
              src={category.url}
              width={350}
              height={458}
              alt="Instagram"
              className="rounded-2xl"
            />
            <div className="absolute bottom-3.5 left-2.5 right-2.5 bg-white py-2.5 px-2 sm:pl-5.5 sm:pr-3 flex-center sm:flex-y-center gap-2 sm:justify-between rounded-2xl">
              <p className="h5">{category.label}</p>
              <Button className="py-0 max-sm:hidden" size="icon-lg">
                <ArrowRight size={16} />
              </Button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
