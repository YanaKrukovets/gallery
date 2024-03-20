import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
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
          height={150}
          priority={true}
          className="min-h-[80px] object-cover"
        />
      )}
      <div className="bg-lightGray pb-[10px]">
        <div className="max-w-wrapper mx-auto px-5 py-[50px] sm:py-[40px]">
          <h1 className="text-[24px] sm:text-[20px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
            About the artist
          </h1>
          <div className="flex mt-[40px] flex-wrap sm:mt-[30px]">
            <Image
              src="/images/components/about/author.webp"
              width={300}
              height={400}
              priority={true}
              alt="Photo of the artist. Yana Krukovets"
              className="md:mx-auto md:max-w-[250px] sm:max-w-[200px] object-cover"
            />
            <div className="text-[20px] leading-[22px] ml-[30px] flex flex-col justify-center w-[65%] xmd:w-[55%] md:ml-0 md:w-[100%] md:mt-[30px]">
              <p className="mb-[15px]">
                Hello! My name is Yana and I am an artist.
              </p>
              <p className="mb-[15px]">
                I want to share all that I can of my inner thoughts. I am a
                mixed artist working in mostly acrylics and watercolor. Raised
                in Ukraine and living in Canada, Ontario. As an artist, I have
                always been captivated by the allure of the world around,
                nature, fleeting moments and the play of light. I am creating
                the things that I like in my own style.
              </p>
              <p className="mb-[15px]">
                Welcome to my Online Gallery! I hope you will find something
                what you like!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
