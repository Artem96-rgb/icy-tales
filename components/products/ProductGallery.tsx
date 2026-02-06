"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WishlistAction from "@/components/WishlistAction";

interface IProductGalleryProps {
  images: string[];
  className?: string;
  productId: string;
}

export default function ProductGallery({
  images,
  className,
  productId,
}: IProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={cn("space-y-5", className)}>
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        id="product-gallery-slider"
        className="rounded-lg custom-swiper relative"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              alt="thumb"
              width="699"
              height="732"
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}

        <WishlistAction productId={productId} />
      </Swiper>

      {/* Thumbnails Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        id="product-gallery-slider-thumbs"
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="group">
            <Button
              variant="transparent"
              className="rounded-lg border-transparent group-[.swiper-slide-thumb-active]:border-primary px-0"
              size="auto"
            >
              <Image
                src={img}
                alt="thumb"
                width="105"
                height="110"
                className="rounded-lg"
              />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
