import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import en from "../locales/en";
import fr from "../locales/fr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeBannerNew() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <section className="py-12 md:pt-12 md:pb-10 xsm:pb-5">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation, EffectFade, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            className="h-96 w-full md:max-h-[210px] xsm:max-h-[160px]"
          >
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/images/slider/slide1.webp"
                  alt="Big moon on the night sky. Three deers on the white snow"
                  width={2000}
                  height={550}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/images/slider/slide2.webp"
                  alt="Orange modern abstract artwork"
                  width={2000}
                  height={550}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/images/slider/slide3.webp"
                  alt="Green modern abstract art work with the purple rectangles"
                  width={2000}
                  height={550}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
