import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";

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
      <Head>
        <title>
          Online Art Gallery by Yana Krukovets. About the artist Yana Krukovets
        </title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets. About the artist. Based in Ottawa, Canada"
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
              <p role="heading" aria-level="2">
                "Every child is an artist. The problem is how to remain an
                artist once we grow up."
              </p>
              <p className="mb-[15px]" role="heading" aria-level="2">
                – Pablo Picasso.
              </p>

              <p className="" role="heading" aria-level="2">
                Hello! My name is Yana and I am an artist. I am self-taught
                visual artist.
              </p>
              <p className="mb-[15px]">
                Raised in Ukraine and living in Ottawa, Ontario, Canada.
                Painting has been my passion since the very early age which I
                persuaded throughout my life even though I had a professional
                standing in Information technology. I work in mostly acrylics
                and watercolor. My paintings depict my interpretation of the
                nature and the world around me. I want to share all that I can
                of my inner thoughts through my art. As an artist, I have always
                been captivated by the allure of the world around, nature,
                fleeting moments and the play of light. I am creating things
                that I like in different styles.
              </p>
              <p className="mb-[15px]">
                Welcome to my Online Gallery! Nice to see you here. I hope you
                will find something what you like!
              </p>
              <p className="text-[20px]">
                All artworks you can find{" "}
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
                  role="button"
                  className="underline ml-[10px]"
                  href="mailto:krukovets.yana@gmail.com"
                >
                  <i className="text-green underline">
                    <strong>contact me</strong>
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
        </div>
      </div>
    </>
  );
}
