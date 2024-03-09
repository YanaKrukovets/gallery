import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import en from "../locales/en";
import fr from "../locales/fr";

export default function About() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <Image
        src="/images/banner.png"
        alt="An orange abstract art work"
        width={2000}
        height={240}
        className="min-h-[150px]"
      />
      <div className="bg-lightGray pb-[10px]">
        <div className="max-w-wrapper mx-auto px-5 py-[50px]">
          <h1 className="text-[24px] sm:text-[20px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
            About the artist
          </h1>
          <div className="flex mt-[40px]">
            <Image
              src="/images/components/about/author.webp"
              width={300}
              height={400}
              alt="Photo of the artist. Yana Krukovets"
            />
            <div className="text-[20px] leading-[22px] ml-[30px] flex flex-col justify-center">
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
