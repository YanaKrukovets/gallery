import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <>
      <div className="py-[10px] px-[25px] bg-white shadow-lg ml-[30px] mb-[20px] transition-transform duration-300 transform hover:scale-110 max-h-[300px]">
        <a href="#" onClick={openModal}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="mx-auto"
          />

          <h2 className="text-[22px] font-anek font-[600] max-w-[170px] text-center leading-[24px] mt-[5px]">
            {image.name}
          </h2>
          <h3 className="border-green border-b-[1px] border-t-[1px] py-[3px] my-[10px]">
            {image.size}
          </h3>

          <p className="text-gray text-[14px] text-ellipsis whitespace-nowrap w-[170px] overflow-hidden">
            {image.description}
          </p>
        </a>
      </div>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
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
                className="mx-auto max-w-[400px]"
              />
              <h2 className="text-[22px] font-anek font-[600] text-center leading-[24px] mt-[5px]">
                {image.name}
              </h2>
              <h3 className="border-green border-b-[2px] border-t-[2px] py-[5px] my-[10px] text-center">
                {image.size}
              </h3>
              <p className="text-gray text-[16px]">{image.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}