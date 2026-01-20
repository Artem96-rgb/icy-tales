"use client";

import HeroSection from "@/components/pages/general/HeroSection";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteById } from "@/api/products";
import { use } from "react";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";
import { ArrowRight, Star, Heart, Scale } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorite", slug],
    queryFn: () => getFavoriteById(slug),
  });

  if (isLoading) return <Spinner />;
  if (error || !product) return <p>Something went wrong</p>;

  return (
    <div>
      <HeroSection title="Single Product" className="mb-20 lg:mb-35.5" />
      <div>
        <Container
          size="small"
          className="flex justify-between gap-8 lg:gap-16 mb-17.5 max-lg:flex-col"
        >
          <div className="flex gap-7.5">
            <div className="space-y-7.5 max-w-22.5 max-lg:hidden">
              <div className="w-22.5 h-22.5 bg-popover rounded-xl"></div>
              <div className="w-22.5 h-22.5 bg-popover rounded-xl"></div>
              <div className="w-22.5 h-22.5 bg-popover rounded-xl"></div>
              <div className="w-22.5 h-22.5 bg-popover rounded-xl"></div>
            </div>
            <div className="max-w-120">
              <Image
                src={product.image}
                width={699}
                height={732}
                alt={product.title}
              />
            </div>
          </div>

          <div className="grow-1">
            <div className="flex-y-center gap-0.5 mb-5">
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <span className="text-sm font-semibold">4.9/5</span>
            </div>

            <p className="text-3xl/none font-bold mb-7">{product.title}</p>

            <p className="text-3xl/none text-secondary font-bold mb-6">
              ${product.price}
            </p>

            <p className="text-base mb-7">{product.shortDescription}</p>

            <div className="mb-7.5">
              <p className="text-lg/none font-bold mb-4">Color:</p>

              <div className="flex flex-wrap gap-2.5">
                <div className="flex-center w-8 h-8 border border-input-border rounded-full">
                  <div className="w-4.5 h-4.5 bg-secondary rounded-full"></div>
                </div>
                <div className="flex-center w-8 h-8 border border-input-border rounded-full">
                  <div className="w-4.5 h-4.5 bg-secondary rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mb-7.5">
              <p className="text-lg/none font-bold mb-4">Size:</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex-center w-11 h-11 border border-input-border rounded-full">
                  <div className="text-lg/none">L</div>
                </div>
                <div className="flex-center w-11 h-11 border border-input-border rounded-full">
                  <div className="text-lg/none">M</div>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="flex flex-wrap gap-3.5 mb-9.5">
              <div className="inline-grid grid-cols-[50px_60px_50px] border border-input-border rounded-full h-13">
                <Button className="" variant="transparent" size="auto">
                  -
                </Button>
                <div className="text-center border-x border-input-border flex-center">
                  1
                </div>
                <Button className="" variant="transparent" size="auto">
                  +
                </Button>
              </div>

              <Button className="px-3 md:px-7" size="lg">
                <span>Add to Cart</span>
                <ArrowRight size={16} strokeWidth={3} />
              </Button>
            </div>

            <div className="flex gap-14.5">
              <div className="flex-y-center gap-2.5 text-ring-100">
                <Heart size={16} />
                <p className="leading-none">Add to wishlist</p>
              </div>

              <div className="flex-y-center gap-2.5 text-ring-100">
                <Scale size={16} />
                <p className="leading-none">Compare</p>
              </div>
            </div>
          </div>
        </Container>

        <Container size="small" className="mb-25">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional-information">
                Additional Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="additional-information">
              <p>password conte</p>
            </TabsContent>
          </Tabs>

          <Separator className="mb-8" />
        </Container>
      </div>
    </div>
  );
}
