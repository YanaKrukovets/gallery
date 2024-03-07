import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBannerNew from "../components/HomeBannerNew";
import Artwork from "../components/Artwork";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Artworks() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;
  const images = [
    {
      src: "/images/components/artworks/cats1.webp",
      alt: "Lovely Valentines love purple and white cats",
      width: 150,
      height: 70,
      name: "Purple and white cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Purple and white cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish.",
    },
    {
      src: "/images/components/artworks/cats1.webp",
      alt: "Lovely Valentines love purple and white cats",
      width: 150,
      height: 70,
      name: "Purple and white cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Purple and white cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish.",
    },
  ];

  return (
    <>
      <Image
        src="/images/banner.png"
        alt="An orange abstract art work"
        width={2000}
        height={240}
        className="min-h-[150px]"
      />
      <div className="max-w-inner my-[50px]">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="flex flex-between justify-between">
            {images.map((image, index) => {
              return (
                <>
                  <Artwork image={image} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
