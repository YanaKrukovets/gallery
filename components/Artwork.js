import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import Image from "next/image";
import { useState, useEffect } from "react";

import fr from "../locales/fr";

export default function Artwork({ image }) {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // disable scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      function handleClick(event) {}
      window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
        document.body.style.position = "relative";
      };
    }
    return () => (document.body.style.position = "relative");
  }, [isOpen]);

  return (
    <>
      <div className="py-[10px] px-[25px] bg-white shadow-lg ml-[30px] md:mx-auto mb-[20px] transition-transform duration-300 transform hover:scale-110 max-h-[325px] max-w-[220px]">
        <a href="#" onClick={openModal} role="button">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={true}
            className={`mx-auto object-cover ${image.b ? image.b : ""}`}
          />

          <h2 className="text-[22px] font-anek font-[600] max-w-[190px] text-center leading-[24px] mt-[5px]">
            {image.name}
          </h2>
          {image.price && (
            <p className="text-center text-green text-[0.9rem]">
              <b>{image.price}</b>
            </p>
          )}
          <p className="border-green border-b-[1px] border-t-[1px] py-[3px] my-[10px] text-center">
            {image.size}
          </p>

          <p className="text-gray text-[14px] text-ellipsis whitespace-nowrap w-[170px] overflow-hidden">
            {image.description}
          </p>
        </a>
      </div>

      {isOpen && (
        <div className="modal-overlay">
          <div
            className="modal sm:max-w-[90vw]"
            aria-modal={true}
            role="dialog"
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content">
              {" "}
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={550}
                priority={true}
                className="mx-auto max-w-[400px] sm:max-w-[68vw] object-cover"
              />
              <h2 className="text-[22px] font-anek font-[600] text-center leading-[24px] mt-[5px]">
                {image.name}
              </h2>
              {image.price && (
                <p className="text-center text-green text-[0.9rem]">
                  <b>{image.price}</b>
                </p>
              )}
              {image.message && (
                <p className="text-center">
                  <b>{image.message}</b>
                  {image.link && (
                    <a className="underline" target="_blank" href={image.link}>
                      <b>
                        <i>{image.linkName}</i>
                      </b>
                    </a>
                  )}
                </p>
              )}
              <div
                className={`border-green border-b-[2px] border-t-[2px] py-[5px] my-[10px] ${
                  image.buy
                    ? "flex justify-around sm:flex-wrap py-[7px]"
                    : "mx-auto text-center"
                }`}
              >
                <p className="text-center flex items-center justify-center">
                  {image.size}
                </p>
                {image.buy && (
                  <div
                    className={`w-[200px] bg-[#2A5A51] hover:cursor-pointer hover:bg-[#2F655B] py-[7px] text-center ${
                      image.buy ? "sm:mt-[5px]" : ""
                    }`}
                  >
                    <a
                      className="uppercase text-center text-white text-[16px] sm:text-[14px]"
                      href="mailto:krukovets.yana@gmail.com"
                    >
                      <strong>Contact me to Buy</strong>
                    </a>
                  </div>
                )}
              </div>
              <p className="text-gray text-[16px]">{image.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
