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
      <section className="py-12">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation, EffectFade, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            className="h-96 w-full rounded-lg"
          >
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                Slide1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                Slide2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                Slide3
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
