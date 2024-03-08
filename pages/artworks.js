import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Artwork from "../components/Artwork";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Artworks() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  const images1 = [
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
      src: "/images/components/artworks/cats2.webp",
      alt: "Lovely Valentines pink and white cats",
      width: 150,
      height: 70,
      name: "Pink and white cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Pink and white cats on the black background with pink sparkles and pink hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats3.webp",
      alt: "Lovely Valentines pink and white cats",
      width: 150,
      height: 70,
      name: "Pink and white cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Pink and white cats on the black background with yellow and silver sparkles and pink hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats4.webp",
      alt: "Lovely Valentines pink and white cats",
      width: 150,
      height: 70,
      name: "Pink and purple cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Pink and purple cats on the black background with purple and pink sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats5.webp",
      alt: "Lovely Valentines white and purple cats",
      width: 150,
      height: 70,
      name: "White and purple cats in love",
      size: "round, diameter - 4 inch",
      description:
        "White and purple cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats6.webp",
      alt: "Lovely Valentines white and purple cats",
      width: 150,
      height: 70,
      name: "White and purple cats in love",
      size: "round, diameter - 4 inch",
      description:
        "White and purple cats on the black background with silver and green sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats7.webp",
      alt: "Lovely Valentines pink and purple cats",
      width: 150,
      height: 70,
      name: "Pink and purple cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Pink and purple cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const petr = [
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
    {
      src: "/images/components/artworks/petr2.webp",
      alt: "Petrykivka folk art. Blue and white flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Blue flowers",
      size: "round, diameter - 4 inch",
      description:
        "Blue and white flowers with the green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr8.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 150,
      height: 70,
      name: "Red rooster",
      size: "round, diameter - 4 inch",
      description:
        "Red rooster with red flowers and green leaves on the purple background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr3.webp",
      alt: "Petrykivka folk art. Red and white flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Red love",
      size: "round, diameter - 4 inch",
      description:
        "Red and white flowers with the green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr4.webp",
      alt: "Petrykivka folk art. Blue flower with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Blue",
      size: "round, diameter - 4 inch",
      description:
        "Blue flower with the green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr5.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 150,
      height: 70,
      name: "Red rooster",
      size: "rectangle, 4 inch",
      description:
        "Red rooster with red flowers and green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr6.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 150,
      height: 70,
      name: "Rooster",
      size: "round, diameter - 4 inch",
      description:
        "Red rooster with red flowers and green leaves on the black background. Petrykivka folk art. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const space = [
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
      src: "/images/components/artworks/space7.webp",
      alt: "Mountains on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "Night mountains",
      size: "round, diameter - 4 inch",
      description:
        "Night mountains on the purple-black space background. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space1.webp",
      alt: "Black tree on the black space background with purple and orange stars",
      width: 150,
      height: 70,
      name: "Purple night",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the black space background with purple and orange stars. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space2.webp",
      alt: "Black tree on the black space background with purple and orange stars",
      width: 150,
      height: 70,
      name: "Orange night",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the black space background with purple and orange stars. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space3.webp",
      alt: "Black tree on the black space background with purple nothern lights",
      width: 150,
      height: 70,
      name: "Purple Nothern lights",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black space background with purple nothern lights. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space4.webp",
      alt: "Black trees on the black space background with purple nothern lights",
      width: 150,
      height: 70,
      name: "Trees at night",
      size: "round, diameter - 4 inch",
      description:
        "Black trees on the orange-black space background with purple nothern lights. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space5.webp",
      alt: "Black tree on the black space background with purple nothern lights",
      width: 150,
      height: 70,
      name: "Night tree",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black space background with purple nothern lights. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const allImages = [...space, ...petr, ...images1];
  const [images, setImages] = useState(allImages);

  return (
    <>
      <Image
        src="/images/banner.png"
        alt="An orange abstract art work"
        width={2000}
        height={240}
        className="min-h-[150px]"
      />
      <div className="max-w-inner">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="flex w-full bg-lightGray justify-between">
            <div className="py-[10px] border-l-[2px] border-r-[2px] border-green bg-white">
              <h2 className="text-[22px] font-anek border-b-[4px] border-green pb-[10px] mt-[30px] pl-[3px]">
                <strong className="font-[600]">Filter</strong>
              </h2>
              <div className="flex flex-col">
                <a
                  onClick={() => {
                    setImages(allImages);
                  }}
                  href="#"
                  className="border-b-[2px] border-green p-[10px]"
                >
                  All artworks
                </a>

                <a
                  onClick={() => {
                    setImages(space);
                  }}
                  href="#"
                  className="border-b-[2px] border-green p-[10px]"
                >
                  <strong>Space</strong>, wooden, round
                </a>
                <a
                  onClick={() => {
                    setImages(petr);
                  }}
                  href="#"
                  className="border-b-[2px] border-green p-[10px]"
                >
                  <strong>Petrykivka folk art</strong>, wooden
                </a>
                <a
                  onClick={() => {
                    setImages(images1);
                  }}
                  href="#"
                  className="border-b-[2px] border-green p-[10px]"
                >
                  <strong>Cats</strong>, wooden, round
                </a>
                <a
                  onClick={() => {
                    setImages(images1);
                  }}
                  href="#"
                  className="p-[10px]"
                >
                  <strong>Canvases</strong>
                </a>
              </div>
            </div>

            <div className="flex my-[30px] w-[75%] pr-[20px] flex-wrap h-[600px] overflow-scroll">
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
      </div>
    </>
  );
}
