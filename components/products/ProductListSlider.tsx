"use client";

import ProductItem from "@/components/products/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IProductListItem } from "@/types";

interface IProductListSliderProps {
  products: IProductListItem[];
}

export default function ProductListSlider({
  products,
}: IProductListSliderProps) {
  return (
    <Swiper
      modules={[Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
      className="custom-swiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem
            id={product.id}
            title={product.title}
            shortDescription={product.shortDescription}
            price={product.price}
            image={product.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
