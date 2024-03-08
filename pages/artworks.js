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
      src: "/images/components/artworks/space10.webp",
      alt: "Blue Neptune",
      width: 150,
      height: 70,
      name: "Neptune",
      size: "round, diameter - 4 inch",
      description:
        "Blue Neptune. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space11.webp",
      alt: "Red Mars",
      width: 150,
      height: 70,
      name: "Mars",
      size: "round, diameter - 4 inch",
      description:
        "Red Mars. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
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
    {
      src: "/images/components/artworks/space9.webp",
      alt: "Black tree on the black space background with purple nothern lights",
      width: 150,
      height: 70,
      name: "Milky Way",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black space background with purple nothern lights. Acrilic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const canvas = [
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
      src: "/images/components/artworks/canvas5.webp",
      alt: "An orange abstract",
      width: 150,
      height: 70,
      name: "An orange day",
      size: "16 inch X 20 inch",
      b: "my-[15px]",
      description:
        "An orange abstract. Abstract acrilic hand-painting. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/canvas4.webp",
      alt: "Night sky, black with white stars",
      width: 150,
      height: 70,
      name: "Night sky",
      size: "10 inch X 10 inch",
      b: "my-[5px]",
      description:
        "Night sky, black with the white stars. Acrilic hand-painting. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/canvas3.webp",
      alt: "Colorful butterfly on the white background",
      width: 150,
      height: 70,
      name: "Butterfly",
      size: "10 inch X 10 inch",
      b: "my-[5px]",
      description:
        "Colorful butterfly on the white background. Acrilic hand-painting. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/canvas6.webp",
      alt: "Colorful flowers",
      width: 150,
      height: 70,
      name: "Spring",
      size: "8 inch X 10 inch",
      description:
        "Colorful flowers. Acrilic hand-painting. Canvas papper. 100% bleached cotton.",
    },
    {
      src: "/images/components/artworks/canvas7.webp",
      alt: "Gold Eiffel Tower with the night background",
      width: 150,
      height: 70,
      name: "Paris",
      size: "8 inch X 10 inch",
      description:
        "Gold Eiffel Tower with the night background. Canvas papper. 100% bleached cotton.",
    },
  ];

  const allImages = [...space, ...canvas, ...petr, ...images1];
  const [images, setImages] = useState(allImages);

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

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
              <h2 className="text-[22px] font-anek border-b-[4px] border-green pb-[10px] mt-[30px] pl-[15px]">
                <strong className="font-[600]">Filter</strong>
              </h2>
              <div className="flex flex-col">
                <a
                  onClick={() => {
                    setImages(allImages);
                    setActive1(true);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                  }}
                  href="#"
                  className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                    active1 ? "bg-lightGray" : ""
                  }`}
                >
                  All artworks
                </a>

                <a
                  onClick={() => {
                    setImages(space);

                    setActive1(false);
                    setActive2(true);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                  }}
                  href="#"
                  className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                    active2 ? "bg-lightGray" : ""
                  }`}
                >
                  <strong>Space</strong>, wooden, round
                </a>
                <a
                  onClick={() => {
                    setImages(petr);
                    setActive1(false);
                    setActive2(false);
                    setActive3(true);
                    setActive4(false);
                    setActive5(false);
                  }}
                  href="#"
                  className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                    active3 ? "bg-lightGray" : ""
                  }`}
                >
                  <strong>Petrykivka folk art</strong>, wooden
                </a>
                <a
                  onClick={() => {
                    setImages(images1);
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    setActive4(true);
                    setActive5(false);
                  }}
                  href="#"
                  className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                    active4 ? "bg-lightGray" : ""
                  }`}
                >
                  <strong>Cats</strong>, wooden, round
                </a>
                <a
                  onClick={() => {
                    setImages(canvas);
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    setActive5(true);
                  }}
                  href="#"
                  className={`p-[10px] hover:bg-lightGray active:bg-lightGray ${
                    active5 ? "bg-lightGray" : ""
                  }`}
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
