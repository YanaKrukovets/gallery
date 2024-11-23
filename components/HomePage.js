import React from "react";
import Artwork from "../components/Artwork";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import HomeBannerNew from "./HomeBannerNew";

export default function HomePage() {
  const [isCurrentOpen, setIsCurrentOpen] = useState(true);
  const [isPastOpen, setIsPastOpen] = useState(false);

  const exhibitionsCurr = [
    {
      src: "/images/components/exhibitions/exhibitions7.webp",
      alt: "exhibition",
      width: 390,
      height: 150,
    },
    {
      src: "/images/components/exhibitions/exhibitions6.webp",
      alt: "exhibition",
      width: 200,
      height: 250,
    },
    {
      src: "/images/components/exhibitions/exhibitions5.webp",
      alt: "exhibition",
      width: 250,
      height: 250,
    },
  ];
  const exhibitionsPast = [
    {
      src: "/images/components/exhibitions/exhibitions4.webp",
      alt: "exhibition",
      width: 250,
      height: 250,
    },
    {
      src: "/images/components/exhibitions/exhibitions3.webp",
      alt: "exhibition Blackburn library",
      width: 450,
      height: 150,
    },
    {
      src: "/images/components/exhibitions/exhibitions2.webp",
      alt: "exhibition",
      width: 250,
      height: 250,
    },
    {
      src: "/images/components/exhibitions/exhibitions1.webp",
      alt: "exhibition",
      width: 250,
      height: 250,
    },
  ];
  const images = [
    {
      src: "/images/components/artworks/canvas24.webp",
      alt: "Hoverla. Mountain in Ukraine",
      width: 130,
      height: 50,
      name: "Hoverla",
      size: "12 inch X 16 inch",
      buy: "https://www.etsy.com/ca/listing/1766348300/hand-painted-acrylic-oil-picture-wall",
      description:
        "Original acrylic & oil painting. Beautiful colorful mountain Hoverla with flowers field. Cardboard. Acrylic hand-painting, framed. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas25.webp",
      alt: "Landscape",
      width: 130,
      height: 50,
      name: "Orange dreams",
      size: "12 inch X 16 inch",
      buy: "https://www.etsy.com/ca/listing/1766348300/hand-painted-acrylic-oil-picture-wall",
      description:
        "Original acrylic & oil painting. Beautiful colorful sunrise with flowers field. Cardboard. Acrylic hand-painting, framed. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/space12.webp",
      alt: "Black tree on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Night Tree",
      size: "5 inch X 5 inch",

      description:
        "Black tree on the orange-black space background. Original mini wall art. Acrylic hand-painting, wooden, epoxy resin coated. Framed in square wooden shadow box.",
    },
    {
      src: "/images/components/artworks/petr6.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 150,
      height: 70,
      name: "Rooster",
      size: "6 inch X 5 inch",
      b: "my-[15px]",
      description:
        "Beautiful Red rooster with red flowers and green leaves on the black background. Petrykivka folk art. Mini wall art. Acrylic hand-painting, wooden, epoxy resin coated. Framed in hexagon wooden shadow box.",
    },
    {
      src: "/images/components/artworks/canvas9.webp",
      alt: "Pink lily on the river",
      width: 140,
      height: 60,
      name: "Sound of Water",
      size: "12 inch X 16 inch",
      description:
        "Original acrylic painting. Bright big pink  water lily flowers and tree. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas8.webp",
      alt: "Red flowers on the green background",
      width: 140,
      height: 60,
      name: "Green Spring",
      size: "16 inch X 20 inch",
      description:
        "Original acrylic painting. Bright big red flowers, small white and yellow flowers on the green background. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },

    {
      src: "/images/components/artworks/space6.webp",
      alt: "Black tree on the black space background with orange lights",
      width: 150,
      height: 145,
      name: "Night view",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93691",
      description:
        "Original multicolored round acrylic painting on the wood. Black tree on the orange-black space background. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space13.webp",
      alt: "Gray Moon",
      width: 150,
      height: 70,
      name: "Moon",
      size: "hexagon, 6 X 5 inch",
      description:
        "Gray moon. Original acrylic mini art. Hand-painting, wooden, epoxy resin coated. Framed in the square wooden shadow box.",
    },
  ];

  const toggleCurrent = () => {
    setIsCurrentOpen(!isCurrentOpen);
  };

  const togglePast = () => {
    setIsPastOpen(!isPastOpen);
  };

  return (
    <div className="bg-lightGray pb-[40px]">
      <HomeBannerNew />
      <div className="max-w-wrapper mx-auto px-5">
        <div>
          <button
            className="text-[24px] sm:text-[20px] mb-[20px] pr-[15px] border-b-[3px] border-green uppercase w-[350px] md:w-full font-inka flex justify-between"
            onClick={toggleCurrent}
          >
            Current Exhibitions
            {!isCurrentOpen ? (
              <FontAwesomeIcon
                className="w-4 inline mt-[7px]"
                icon={faAngleDown}
                color="#2A5A51"
              />
            ) : (
              <FontAwesomeIcon
                className="w-4 inline mt-[7px]"
                icon={faAngleUp}
                color="#2A5A51"
              />
            )}
          </button>

          {isCurrentOpen && (
            <div className="flex my-[30px] w-full pr-[20px] md:pr-0 flex-wrap gap-[20px] justify-center">
              {exhibitionsCurr.map((image, index) => {
                return (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    key={index}
                    priority={true}
                    className={`mx-auto object-cover`}
                  />
                );
              })}
            </div>
          )}
        </div>
        <button
          className="text-[24px] sm:text-[20px] mb-[20px] pr-[15px] border-b-[3px] border-green uppercase w-[350px]  md:w-full font-inka flex justify-between"
          onClick={togglePast}
        >
          Past Exhibitions
          {!isPastOpen ? (
            <FontAwesomeIcon
              className="w-4 inline mt-[7px]"
              icon={faAngleDown}
              color="#2A5A51"
            />
          ) : (
            <FontAwesomeIcon
              className="w-4 inline mt-[7px]"
              icon={faAngleUp}
              color="#2A5A51"
            />
          )}
        </button>
        {isPastOpen && (
          <div className="flex my-[30px] w-full pr-[20px] md:pr-0 flex-wrap gap-[20px] justify-center">
            {exhibitionsPast.map((image, index) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  key={index}
                  priority={true}
                  className={`mx-auto object-cover`}
                />
              );
            })}
          </div>
        )}
        <h1 className="text-[24px] sm:text-[20px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
          Most recent artworks
        </h1>
        <div className="flex my-[30px] w-full pr-[20px] md:pr-0 flex-wrap gap-[20px] justify-center">
          {images.map((image, index) => {
            return <Artwork image={image} key={index} />;
          })}
        </div>
        <p className="text-[20px]">
          Welcome to <i>Online Art Gallery</i> by Yana Krukovets, Ottawa artist.
          Nice to see you here. I hope you will find something what you like!
        </p>
        <p className="text-[20px]">
          More artworks you can find{" "}
          <a
            role="link"
            className="border-b-[2px] border-green max-w-[350px] font-inka text-green"
            href="/artworks"
            aria-label="here"
          >
            <i>here</i>
          </a>
        </p>
        <p className="mt-[20px] text-[24px] text-green pt-[15px] border-t-[2px] border-green font-inka">
          <strong>Where to buy my works?</strong>
        </p>
        <p className="text-[20px] mt-[15px] font-inka">
          Buy original artworks{" "}
          <a
            href="https://www.gallea.ca/en/artists/yana-krukovets"
            target="_blank"
          >
            <i className="text-green underline">
              <strong>here</strong>
            </i>
          </a>{" "}
          or{" "}
          <a
            href="https://www.etsy.com/ca/listing/1766348300/hand-painted-acrylic-oil-picture-wall"
            target="_blank"
          >
            <i className="text-green underline">
              <strong>here</strong>
            </i>
          </a>
        </p>
        <p className="text-[20px] mt-[15px] font-inka">
          Buy prints{" "}
          <a
            href="https://www.redbubble.com/people/sunnykaramelart/shop"
            target="_blank"
          >
            <i className="text-green underline">
              <strong>here</strong>
            </i>
          </a>
        </p>
      </div>
    </div>
  );
}
