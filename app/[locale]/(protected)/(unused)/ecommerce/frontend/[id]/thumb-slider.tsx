"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { product } from "../data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

const ThumbSliderCom = ({ product }: { product: product }) => {

  const images = [
    "/images/e-commerce/product-card/classical-black-tshirt.png",
    "/images/e-commerce/product-card/black-t-shirt.png",
    "/images/e-commerce/product-card/check-shirt.png",
    "/images/e-commerce/product-card/gray-jumper.png",
    "/images/e-commerce/product-card/gray-t-shirt.png",
    "/images/e-commerce/product-card/pink-blazer.png",
    "/images/e-commerce/product-card/red-t-shirt.png",
    "/images/e-commerce/product-card/yellow-frok.png",
    "/images/e-commerce/product-card/yellow-jumper.png",
  ]

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);


  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide
              key={i}
              className="w-full bg-default-200 dark:bg-default-900 rounded-md p-12"
            >
              <Image
                width={500}
                height={400}
                className="h-[350px] w-full  object-contain  transition-all duration-300 group-hover:scale-105"
                src={image}
                alt="."
              />

            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex mt-6 gap-3 ">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((image, j) => {
            return (
              <SwiperSlide
                key={`second_slider_${j}`}
                className="h-[90px] w-[90px] py-3.5 px-[17px] bg-default-200 dark:bg-default-900 rounded cursor-pointer"
              >
                <Image
                  width={100}
                  height={150}
                  className="h-20 w-full  object-contain"
                  src={image}
                  alt="."
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ThumbSliderCom;
