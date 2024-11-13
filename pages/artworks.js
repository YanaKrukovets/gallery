import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Artwork from "../components/Artwork";
import Head from "next/head";

export default function Artworks() {
  const sunflowers = [
    {
      src: "/images/components/artworks/sunflower1.webp",
      alt: "sunflowers",
      width: 150,
      height: 150,
      name: "Sunflower field",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely yellow sunflower field. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/sunflower2.webp",
      alt: "sunflowers",
      width: 150,
      height: 150,
      name: "Sunflowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely yellow sunflower field. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/sunflowers3.webp",
      alt: "sunflowers",
      width: 150,
      height: 150,
      name: "Beautiful Sunflowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Beautiful yellow sunflower field. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/sunflower4.webp",
      alt: "sunflowers",
      width: 150,
      height: 150,
      name: "Sunflowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Beautiful yellow sunflower field. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/sunflower5.webp",
      alt: "sunflowers",
      width: 150,
      height: 150,
      name: "Sunflowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely yellow sunflower field. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/flowers2.webp",
      alt: "red spring flowers",
      width: 150,
      height: 150,
      name: "Spring flowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely red spring flowers. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/flowers3.webp",
      alt: "red spring flowers",
      width: 150,
      height: 150,
      name: "Flowers field",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Beautiful field with red spring flowers. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/flowers1.webp",
      alt: "white spring flowers",
      width: 150,
      height: 150,
      name: "White flowers",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely white spring flowers. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
    {
      src: "/images/components/artworks/sakura.webp",
      alt: "sakura blossom",
      width: 150,
      height: 150,
      name: "Sakura blossom",
      size: "hexagon, 6 inch X 6 inch",
      description:
        "Lovely pink sakura blossom. Hand-painted, wooden, coated with epoxy resin in the wooden hexagon shadow box.",
    },
  ];
  const images1 = [
    {
      src: "/images/components/artworks/cats1.webp",
      alt: "Lovely Valentines purple and white cats",
      width: 150,
      height: 150,
      name: "Purple and white cats in love",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93723",
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
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93738",
      description:
        "Pink and white cats on the black background with pink sparkles and pink hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats3.webp",
      alt: "Lovely Valentines pink and white cats",
      width: 150,
      height: 70,
      name: "Lovely pink and white cats",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93748",
      description:
        "Original acrylic painting. Pink and white cats on the black background with yellow and silver sparkles and pink hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats4.webp",
      alt: "Pink and purple cats in love",
      width: 150,
      height: 70,
      name: "Pink and purple cats in love",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/94037",
      description:
        "Pink and purple cats on the black background with purple and pink sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/cats5.webp",
      alt: "Lovely Valentines white and purple cats",
      width: 150,
      height: 70,
      name: "Cats in love",
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
      name: "Valentines cats in love",
      size: "round, diameter - 4 inch",
      description:
        "Pink and purple cats on the black background with silver sparkles and purple hearts. Hand-painted, wooden, coated with water-based finish. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const petr = [
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
      src: "/images/components/artworks/petr7.webp",
      alt: "Petrykivka folk art. Red flower with the green leaves on the black background",
      width: 150,
      height: 150,
      name: "Red flower",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93693",
      description:
        "Red flower with the green leaves on the black background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr1.webp",
      alt: "Petrykivka folk art. Red flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Bright Red Flowers",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93739",
      description:
        "Red flowers with the green leaves on the black background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr2.webp",
      alt: "Petrykivka folk art. Blue and white flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Blue Flowers",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93749",
      description:
        "Blue and white flowers with the green leaves on the black background. Petrykivka folk art, Ukrainian folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr8.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 150,
      height: 70,
      name: "Red Rooster",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/94041",
      description:
        "Red rooster with red flowers and green leaves on the purple background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr3.webp",
      alt: "Petrykivka folk art. Red and white flowers with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Red love",
      size: "round, diameter - 4 inch",
      description:
        "Red and white flowers with the green leaves on the black background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr4.webp",
      alt: "Petrykivka folk art. Blue flower with the green leaves on the black background",
      width: 150,
      height: 70,
      name: "Blue",
      size: "round, diameter - 4 inch",
      description:
        "Blue flower with the green leaves on the black background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/petr9.webp",
      alt: "Petrykivka folk art. Red rooster with red flowers",
      width: 130,
      height: 50,
      name: "Petrykivka Rooster",
      size: "rectangle, 5 X 5 inch",
      description:
        "Red rooster with bright red flowers and green leaves on the black background. Petrykivka folk art. Acrylic hand-painting, wooden, epoxy resin coated.  Framed in the square wooden shadow box.",
    },
  ];

  const space = [
    {
      src: "/images/components/artworks/space15.webp",
      alt: "Tree and North lights on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "North Night",
      size: "hexagon, 6 X 5 inch",
      description:
        "Tree and North lights. Acrylic hand-painting, wooden, epoxy resin coated. Framed in the square wooden shadow box.",
    },
    {
      src: "/images/components/artworks/space14.webp",
      alt: "Mountains on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "North Mountains",
      size: "hexagon, 6 X 5 inch",
      description:
        "Night North mountains on the purple-black space background. Acrylic hand-painting, wooden, epoxy resin coated. Framed in the square wooden shadow box.",
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
    {
      src: "/images/components/artworks/space12.webp",
      alt: "Black tree on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Night Tree",
      size: "5 inch X 5 inch",

      description:
        "Black tree on the orange-black space background. Original mini wall art. Acrylic hand-painting, wooden, epoxy resin coated. Framed in the square wooden shadow box.",
    },
    {
      src: "/images/components/artworks/space6.webp",
      alt: "Black tree on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "Night view",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93691",
      description:
        "Original multicolored round acrylic painting on the wood. Black tree on the orange-black space background. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space8.webp",
      alt: "Gray Moon",
      width: 150,
      height: 70,
      name: "Gray Moon",
      size: "round, diameter - 4 inch",
      description:
        "Gray moon. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space10.webp",
      alt: "Blue Neptune",
      width: 150,
      height: 70,
      name: "Neptune",
      size: "round, diameter - 4 inch",
      description:
        "Blue Neptune. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space11.webp",
      alt: "Red Mars",
      width: 150,
      height: 70,
      name: "Mars",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93693",
      description:
        "Original acrylic painting. Red Mars. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space7.webp",
      alt: "Mountains on the black space background with orange lights",
      width: 150,
      height: 70,
      name: "Night Mountains",
      size: "round, diameter - 4 inch",
      description:
        "Night mountains on the purple-black space background. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space1.webp",
      alt: "Black tree on the space background with the bright purple and orange stars",
      width: 150,
      height: 70,
      name: "Purple Night",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the black space background with the bright purple and orange stars. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space2.webp",
      alt: "Black tree on the black space background with purple and orange stars",
      width: 150,
      height: 70,
      name: "Orange night",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the magic space background with purple and orange stars. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space3.webp",
      alt: "Black tree on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Purple Northern lights",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black space background with the beautiful purple northern lights. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space4.webp",
      alt: "Black trees on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Trees at Night",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93751",
      description:
        "Black trees on the orange-black space background with purple northern lights. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space5.webp",
      alt: "Black tree on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Night North Tree",
      size: "round, diameter - 4 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93750",
      description:
        "Black tree on the orange-black space background with purple northern lights. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
    {
      src: "/images/components/artworks/space9.webp",
      alt: "Black tree on the black space background with purple northern lights",
      width: 150,
      height: 70,
      name: "Milky Way",
      size: "round, diameter - 4 inch",
      description:
        "Black tree on the orange-black Milky Way space background with the bright purple northern lights. Acrylic hand-painting, wooden, epoxy resin coated. It can be used like a hot stand for cups or like a mini wall art",
    },
  ];

  const canvas = [
    {
      src: "/images/components/artworks/canvas27.webp",
      alt: "Snow. Van Gogh style",
      width: 130,
      height: 130,
      b: "my-[10px]",
      name: "Snow day",
      size: "8 inch X 8 inch",

      description:
        "Original acrylic & oil painting. Beautiful colorful Nothern Lights and snowy mountain Hoverla. Wood panel. Acrylic & oil hand-painting. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas26.webp",
      alt: "Road to home. Nothern lights",
      width: 110,
      height: 80,
      name: "Road to home",
      size: "8 inch X 10 inch",

      description:
        "Original acrylic & oil painting. Beautiful colorful Nothern Lights and snowy mountain Hoverla. Wood panel. Acrylic & oil hand-painting. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
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
      src: "/images/components/artworks/canvas23.webp",
      alt: "ship with orange sunset",
      width: 130,
      height: 50,
      name: "Sea",
      size: "will be updated",

      description:
        "Original acrylic painting. Beautiful colorful sunset on the sea with ship. Paper. Acrylic hand-painting, framed. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas22.webp",
      alt: "green field with houses",
      width: 150,
      height: 60,
      name: "Village",
      size: "will be updated",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Village in the green field. Paper. Acrylic hand-painting, framed under glass.",
    },
    {
      src: "/images/components/artworks/canvas21.webp",
      alt: "colorful flowers under the mountains",
      width: 150,
      height: 60,
      name: "Flowers field",
      size: "will be updated",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Beautiful colorful flowers field. Paper. Acrylic hand-painting, framed. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas20.webp",
      alt: "colorful sunrise on the lake",
      width: 170,
      height: 80,
      name: "Magic sunrise",
      size: "will be updated",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Beautiful colorful sunrise on the lake. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },

    {
      src: "/images/components/artworks/canvas19.webp",
      alt: "Sunflowers",
      width: 130,
      height: 50,
      name: "Sunflower field",
      size: "16inch X 20inch",
      b: "my-[5px]",
      description:
        "Original acrylic painting. Beautiful yellow sunflower field. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas18.webp",
      alt: "Fall in the forest",
      width: 130,
      height: 50,
      name: "On the river",
      size: "will be updated",
      b: "my-[20px]",
      description:
        "Original acrylic painting. On the river, fall in the forest. Paper. Acrylic hand-painting, framed, under glass",
    },
    {
      src: "/images/components/artworks/canvas17.webp",
      alt: "Pink tulips and white flowers",
      width: 130,
      height: 50,
      name: "Spring flowers",
      size: "will be updated",

      description:
        "Original acrylic painting. Spring flowers, pink tulips and white flowers. Paper. Acrylic hand-painting, framed, under glass",
    },
    {
      src: "/images/components/artworks/canvas16.webp",
      alt: "Magic light in the mountains",
      width: 130,
      height: 50,
      name: "Space light",
      size: "will be updated",

      description:
        "Original acrylic painting. Magic light in the mountains city. Paper. Acrylic hand-painting, framed, under glass",
    },
    {
      src: "/images/components/artworks/canvas15.webp",
      alt: "Yellow sunflower field",
      width: 110,
      height: 30,
      name: "Sunflowers",
      size: "5inch X 7inch",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Yellow sunflower field. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas14.webp",
      alt: "Pink tulips field",
      width: 110,
      height: 30,
      name: "Tulips field",
      size: "5inch X 7inch",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Pink tulips field. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas13.webp",
      alt: "Pink sakura blossom",
      width: 140,
      height: 60,
      name: "Sakura",
      size: "12 inch X 16 inch",
      description:
        "Original acrylic painting. Pink sakura blossom. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas12.webp",
      alt: "Orange sunset at the field",
      width: 150,
      height: 70,
      name: "Summer Sunset",
      size: "11 inch X 9 inch",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Orange sunset at the field. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas10.webp",
      alt: "Magic blue Sky, yellow field and mountains",
      width: 150,
      height: 70,
      name: "Magic Sky",
      size: "12 inch X 9 inch",
      b: "my-[20px]",
      description:
        "Original acrylic painting. Magic blue sky, bright yellow field and mountains. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
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
      width: 150,
      height: 70,
      name: "Green Spring",
      size: "16 inch X 20 inch",
      description:
        "Bright big red flowers, small white and yellow flowers on the green background. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective satin varnish are applied to protect the painting from UV rays and dust.",
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
        "Three deers on the snow. Night view with big moon. Acrylic hand-painting. 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas11.webp",
      alt: "Sunrise near the see",
      width: 150,
      height: 70,
      name: "Sunrise",
      size: "16 inch X 12 inch",
      b: "my-[10px]",
      description:
        "Original acrylic painting. Bright sunrise on the sea. Canvas. Acrylic hand-painting 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas2.webp",
      alt: "Purple dots and purple rectangles on the green-yellow background",
      width: 150,
      height: 70,
      name: "Purple Road",
      size: "16 inch X 12 inch",
      b: "my-[15px]",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93737",
      description:
        "Purple dots and purple rectangles on the green-yellow background. Abstract acrylic hand-painting. 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas5.webp",
      alt: "An orange abstract",
      width: 150,
      height: 70,
      name: "An Orange Day",
      size: "20 inch X 16 inch",
      b: "my-[15px]",
      description:
        "An orange abstract. Abstract acrylic hand-painting. 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },
    {
      src: "/images/components/artworks/canvas4.webp",
      alt: "Night sky, black with white stars",
      width: 150,
      height: 70,
      name: "Night sky",
      size: "10 inch X 10 inch",
      b: "my-[5px]",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/94038",
      description:
        "Night sky, black with the white stars. Acrylic hand-painting. 100% bleached cotton. One coat of protective gloss varnish are applied to protect the painting from UV rays and dust.",
    },

    {
      src: "/images/components/artworks/canvas7.webp",
      alt: "Gold Eiffel Tower with the night background",
      width: 150,
      height: 70,
      name: "Paris",
      size: "8 inch X 10 inch",
      buy: "https://www.gallea.ca/en/artists/yana-krukovets/artwork/93724",
      description:
        "Original acrylic painting. Gold Eiffel Tower with the night background. Canvas paper. 100% bleached cotton.",
    },
  ];

  const allImages = [...sunflowers, ...space, ...canvas, ...petr, ...images1];
  const [images, setImages] = useState(allImages);

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  const [mobileExpanded, setMobileExpanded] = useState(false);

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

  const isMobile = useWindowWide(768);

  return (
    <>
      <Head>
        <title>
          Online Art Gallery by Yana Krukovets. Original hand painted Artworks.
          Ottawa, Ontario
        </title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets, Ottawa artist. Original Acrylic, watercolor hand painted artworks. Abstract space nature wall art, mini art, folk art, Petrykivka folk art"
        />
      </Head>
      {isMobile && (
        <Image
          src="/images/banner.webp"
          alt="An orange abstract art work"
          width={2000}
          height={240}
          priority={true}
          className="min-h-[150px] object-cover"
        />
      )}
      {!isMobile && (
        <Image
          src="/images/banner-mbl.webp"
          alt="An orange abstract art work"
          width={800}
          height={85}
          priority={true}
          className="min-h-[80px] object-cover"
        />
      )}
      <div className="max-w-inner">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="bg-lightGray pt-[30px]">
            <h1 className="ml-[30px] text-[24px] sm:text-[20px] mb-[20px] uppercase max-w-[350px] font-inka">
              Online Art Gallery
            </h1>
            <div className="flex w-full justify-between md:flex-col">
              <div className="py-[10px] border-l-[2px] border-green bg-white md:relative md:border-0">
                <h2 className="text-[22px] font-anek border-b-[4px] border-green pb-[10px] mt-[30px] pl-[15px] md:hidden">
                  <strong className="font-[600]">Filter</strong>
                </h2>
                <a
                  role="button"
                  onClick={() => setMobileExpanded(!mobileExpanded)}
                  href="#"
                  className="text-[22px] font-anek border-green py-[10px] mt-[20px] pl-[15px] md:block md:border-[4px] hidden"
                >
                  <strong className="font-[600]">Filter</strong>
                </a>

                <div
                  className={`flex flex-col md:z-[10] md:bg-white md:w-full md:border-l-[2px] md:border-r-[2px] md:border-green md:h-[95vh] ${
                    mobileExpanded ? "md:absolute" : "md:hidden"
                  }`}
                >
                  <a
                    role="button"
                    onClick={() => {
                      setImages(allImages);
                      setActive1(true);
                      setActive2(false);
                      setActive3(false);
                      setActive4(false);
                      setActive5(false);
                      setActive6(false);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#all"
                    className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                      active1 ? "bg-lightGray" : ""
                    }`}
                  >
                    All artworks
                  </a>

                  <a
                    role="button"
                    onClick={() => {
                      setImages(space);

                      setActive1(false);
                      setActive2(true);
                      setActive3(false);
                      setActive4(false);
                      setActive5(false);
                      setActive6(false);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#space"
                    className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                      active2 ? "bg-lightGray" : ""
                    }`}
                  >
                    <strong>Mini artwork</strong> Space
                  </a>
                  <a
                    role="button"
                    onClick={() => {
                      setImages(petr);
                      setActive1(false);
                      setActive2(false);
                      setActive3(true);
                      setActive4(false);
                      setActive5(false);
                      setActive6(false);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#petrykivka"
                    className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                      active3 ? "bg-lightGray" : ""
                    }`}
                  >
                    <strong>Mini artwork</strong> Petrykivka folk art
                  </a>
                  <a
                    role="button"
                    onClick={() => {
                      setImages(sunflowers);
                      setActive1(false);
                      setActive2(false);
                      setActive3(false);
                      setActive4(false);
                      setActive5(false);
                      setActive6(true);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#sunflowers"
                    className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                      active6 ? "bg-lightGray" : ""
                    }`}
                  >
                    <strong>Mini artwork</strong> Flowers
                  </a>
                  <a
                    role="button"
                    onClick={() => {
                      setImages(images1);
                      setActive1(false);
                      setActive2(false);
                      setActive3(false);
                      setActive4(true);
                      setActive5(false);
                      setActive6(false);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#cats"
                    className={`border-b-[2px] border-green p-[15px] hover:bg-lightGray active:bg-lightGray ${
                      active4 ? "bg-lightGray" : ""
                    }`}
                  >
                    <strong>Mini artwork</strong> Cats
                  </a>

                  <a
                    role="button"
                    onClick={() => {
                      setImages(canvas);
                      setActive1(false);
                      setActive2(false);
                      setActive3(false);
                      setActive4(false);
                      setActive5(true);
                      setMobileExpanded(!mobileExpanded);
                    }}
                    href="#canvas"
                    className={`p-[10px] hover:bg-lightGray active:bg-lightGray ${
                      active5 ? "bg-lightGray" : ""
                    }`}
                  >
                    <strong>Canvases, big wall art</strong>
                  </a>
                </div>
              </div>

              <div className="flex mb-[30px] pt-[10px] w-[75%] pr-[20px] md:pr-0 md:w-full flex-wrap h-[600px] overflow-scroll md:mx-auto">
                {images.map((image, index) => {
                  return <Artwork image={image} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
