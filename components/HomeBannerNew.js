import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeBannerNew() {
  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [setWidth]);

    return width > size;
  };

  const isMobile = useWindowWide(760);

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
              <div className="flex h-full w-full items-start justify-center">
                {isMobile && (
                  <Image
                    src="/images/slider/slide1.webp"
                    alt="Mini round artworks. Space"
                    width={2000}
                    height={550}
                    priority={true}
                    className="object-cover"
                  />
                )}
                {!isMobile && (
                  <Image
                    src="/images/slider/slide1-mbl.webp"
                    alt="Mini round artworks. Space"
                    width={750}
                    height={350}
                    priority={true}
                    className="object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-start justify-center">
                {isMobile && (
                  <Image
                    src="/images/slider/slide2.webp"
                    alt="Mini round artworks. Ukraininan folk art"
                    width={2000}
                    height={550}
                    priority={true}
                    className="object-cover"
                  />
                )}
                {!isMobile && (
                  <Image
                    src="/images/slider/slide2-mbl.webp"
                    alt="Mini round artworks. Ukraininan folk art"
                    width={750}
                    height={350}
                    priority={true}
                    className="object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-start justify-center">
                {isMobile && (
                  <Image
                    src="/images/slider/slide3.webp"
                    alt="Canvas art works"
                    width={2000}
                    height={550}
                    priority={true}
                    className="object-cover"
                  />
                )}
                {!isMobile && (
                  <Image
                    src="/images/slider/slide3-mbl.webp"
                    alt="Canvas art works"
                    width={750}
                    height={350}
                    priority={true}
                    className="object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
