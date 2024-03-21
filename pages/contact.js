import React from "react";

import Image from "next/image";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

export default function Contact() {
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
        <title>Online Art Gallery by Yana Krukovets. Contact information</title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets. Contact information, email, Instagram page"
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
          <h1 className="text-[24px] sm:text-[20px] mb-[20px] border-b-[3px] border-green uppercase max-w-[550px] font-inka">
            <span className="md:hidden">Yana Krukovets.</span> Contact
            information
          </h1>
          <div className="mt-[40px] sm:mt-[30px] max-w-[700px] mx-auto">
            <div className="flex justify-between">
              <div className="my-auto">
                <div className="mb-[20px] flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="max-w-[20px] w-[20px]"
                  />
                  <a
                    role="button"
                    className="underline ml-[10px]"
                    href="mailto:krukovets.yana@gmail.com"
                  >
                    krukovets.yana@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <a
                    role="button"
                    className=""
                    href="https://www.instagram.com/sunny_art87/"
                    target="_blank"
                    aria-label="link"
                  >
                    <Image
                      src="/images/icons/square-instagram.svg"
                      alt="instagram icon"
                      width={20}
                      height={40}
                      priority={true}
                      className="object-cover"
                    />
                  </a>
                  <a
                    role="link"
                    className="underline ml-[10px]"
                    href="https://www.instagram.com/sunny_art87/"
                    target="_blank"
                    aria-label="sunny_art87"
                  >
                    sunny_art87
                  </a>
                </div>
              </div>
              {isMobile && (
                <Image
                  src="/images/components/contact/art.webp"
                  alt="round art"
                  width={400}
                  height={450}
                  className="md:hidden object-cover"
                  priority={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
