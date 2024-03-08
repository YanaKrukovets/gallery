import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import Artwork from "../components/Artwork";

import HomeBannerNew from "./HomeBannerNew";
import fr from "../locales/fr";

export default function HomePage() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  const images = [
    {
      src: "/images/components/artworks/cats1.webp",
      alt: "Lovely Valentines purple and white cats",
      width: 150,
      height: 70,
      name: "Purple and white cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Purple and white cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space6.webp",
      alt: "Black tree on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "Night view",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black space background. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space8.webp",
      alt: "Gray moon",
      width: 150,
      height: 70,
      name: "Gray moon",
      size: "round, diameter - 4 inch",
      description:
        "Gray moon. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/canvas1.webp",
      alt: "Three deers on the snow. Night view with big moon",
      width: 150,
      height: 70,
      name: "Three deers",
      size: "16 inch X 12 inch",
      b: "my-[15px]",
      description:
        "Three deers on the snow. Night view with big moon. Acrilic hand-painting. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/canvas2.webp",
      alt: "Purple dots and purple rectangles on the green-yellow background",
      width: 150,
      height: 70,
      name: "Purple road",
      size: "16 inch X 12 inch",
      b: "my-[15px]",
      description:
        "Purple dots and purple rectangles on the green-yellow background. Abstract acrilic hand-painting. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/petr7.webp",
      alt: "Petrykivka folk art. Red flower with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Red flower",
      size: "round, diameter - 4 inch",
      description:
        "Red flower with the green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr1.webp",
      alt: "Petrykivka folk art. Red flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Red flowers",
      size: "round, diameter - 4 inch",
      description:
        "Red flowers with the green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  return (
    <div className="bg-lightGray pb-[10px]">
      <HomeBannerNew />
      <div className="max-w-wrapper mx-auto px-5">
        <h1 className="text-[24px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
          Most recent
        </h1>
        <div className="flex my-[30px] w-full pr-[20px] flex-wrap gap-[20px] justify-center">
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
  );
}
